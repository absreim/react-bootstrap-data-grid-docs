import {
  ApiEntryPoint,
  ApiInterface,
  ApiModel,
  ApiPropertySignature,
  Excerpt,
  ExcerptToken,
  HeritageType,
  TypeParameter,
  Parameter,
  ApiFunction,
  ApiVariable,
  ApiTypeAlias,
} from "@microsoft/api-extractor-model";
import {
  DocComment,
  DocParagraph,
  DocPlainText,
  DocSection,
} from "@microsoft/tsdoc";
import type {
  Item,
  Reference,
  TypeParam,
  Token,
  Member,
  Interface,
  FunctionParam,
  FunctionItem,
  Variable,
  TypeAlias,
} from "./types";
import { kebabCase } from "change-case";
import path from "path";
import fs from "node:fs";

const inputFilePath = path.join(
  import.meta.dirname,
  "input-model",
  "doc-model.api.json",
);

const outputFilePath = path.join(
  import.meta.dirname,
  "output-model",
  "model.json",
);

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage(inputFilePath);

const entryPoint = apiPackage.members[0];
if (!(entryPoint instanceof ApiEntryPoint)) {
  console.error(
    `Expected an "ApiEntryPoint" instance, but instead found "${entryPoint.constructor.name}".`,
  );
}

const references: Map<string, Reference> = new Map();
entryPoint.members.forEach(({ displayName }) => {
  const kebabName = kebabCase(displayName);
  if (references.has(kebabName) || references.has(displayName)) {
    throw new Error(
      `Saw the following kebab-case normalized item name more than once: "${kebabName}"`,
    );
  }

  references.set(displayName, {
    text: displayName,
    href: kebabName,
  });
});

// -- Start of utility functions for item conversions --

function resolveReference(name: string): Token {
  if (references.has(name)) {
    return references.get(name)!;
  }

  return name;
}

function convertTypeParams(typeParams: readonly TypeParameter[]): TypeParam[] {
  return typeParams.map((typeParam) => {
    const { constraintExcerpt, defaultTypeExcerpt } = typeParam;
    const constraint = constraintExcerpt.isEmpty
      ? null
      : resolveReference(constraintExcerpt.text);
    const defaultType = defaultTypeExcerpt.isEmpty
      ? null
      : resolveReference(defaultTypeExcerpt.text);

    return {
      name: typeParam.name,
      constraint,
      default: defaultType,
    };
  });
}

function convertExtendsTypes(extendsTypes: readonly HeritageType[]): Token[] {
  return extendsTypes.map(({ excerpt: { text } }) => resolveReference(text));
}

// Not dealing with interfaces with nested members because none currently exist.
// Omit the first token of the excerpt array to get the definition of a property.
// The first token contains the property name and colon.
//
// It makes sense to check for interfaces with nested properties and throw an
// error if one is detected to avoid confusing behavior in the future.
function convertExcerptTokens(excerptTokens: readonly ExcerptToken[]): Token[] {
  return excerptTokens.map((token) => {
    if (token.kind === "Reference") {
      return resolveReference(token.text);
    }

    return token.text;
  });
}

function convertRangedExcerpt(excerpt: Excerpt): Token[] {
  const { startIndex, endIndex } = excerpt.tokenRange;
  return convertExcerptTokens(excerpt.tokens.slice(startIndex, endIndex));
}

function convertDocSection(section: DocSection): string[] {
  return section.nodes
    .filter((node) => node instanceof DocParagraph)
    .flatMap((paragraph) =>
      paragraph.nodes.filter(
        (paragraphNode) => paragraphNode instanceof DocPlainText,
      ),
    )
    .map((paragraphNode) => paragraphNode.text);
}

function convertComment(comment: DocComment | undefined): string[] {
  if (comment === undefined) {
    return [];
  }

  return convertDocSection(comment.summarySection);
}

function convertMember(member: ApiPropertySignature): Member {
  return {
    name: member.name,
    isOptional: member.isOptional,
    definition: convertExcerptTokens(member.excerptTokens.slice(1)),
    comment: convertComment(member.tsdocComment),
  };
}

function convertInterface(apiInterface: ApiInterface): Interface {
  return {
    type: "interface",
    name: apiInterface.name,
    comment: convertComment(apiInterface.tsdocComment),
    extends: convertExtendsTypes(apiInterface.extendsTypes),
    typeParams: convertTypeParams(apiInterface.typeParameters),
    members: apiInterface.members
      .filter((member) => member instanceof ApiPropertySignature)
      .map((member) => convertMember(member)),
  };
}

function convertFunctionParam(param: Parameter): FunctionParam {
  return {
    name: param.name,
    definition: convertRangedExcerpt(param.parameterTypeExcerpt),
    comment: param.tsdocParamBlock
      ? convertDocSection(param.tsdocParamBlock.content)
      : [],
  };
}

function convertFunction(fn: ApiFunction): FunctionItem {
  return {
    type: "function",
    name: fn.name,
    comment: convertComment(fn.tsdocComment),
    typeParams: convertTypeParams(fn.typeParameters),
    returnType: convertRangedExcerpt(fn.returnTypeExcerpt),
    functionParams: fn.parameters.map((param) => convertFunctionParam(param)),
  };
}

function convertVariable(variable: ApiVariable): Variable {
  return {
    type: "variable",
    name: variable.name,
    comment: convertComment(variable.tsdocComment),
    definition: convertExcerptTokens(variable.excerptTokens.slice(1)),
  };
}

function convertTypeAlias(apiTypeAlias: ApiTypeAlias): TypeAlias {
  return {
    type: "typeAlias",
    name: apiTypeAlias.name,
    comment: convertComment(apiTypeAlias.tsdocComment),
    typeParams: convertTypeParams(apiTypeAlias.typeParameters),
    definition: convertExcerptTokens(apiTypeAlias.excerptTokens.slice(1)),
  };
}

// -- End of utility functions for item conversions --

const item: Item[] = entryPoint.members.map((apiItem) => {
  switch (apiItem.constructor.name) {
    case "ApiInterface": {
      return convertInterface(apiItem as ApiInterface);
    }
    case "ApiVariable": {
      return convertVariable(apiItem as ApiVariable);
    }
    case "ApiFunction": {
      return convertFunction(apiItem as ApiFunction);
    }
    case "ApiTypeAlias": {
      return convertTypeAlias(apiItem as ApiTypeAlias);
    }
    default: {
      throw new Error(
        `Unexpected ApiItem class encountered: "${apiItem.constructor.name}"`,
      );
    }
  }
});

const jsonStr = JSON.stringify(item, null, 2);
fs.writeFileSync(outputFilePath, jsonStr);
