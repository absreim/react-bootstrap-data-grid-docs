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
  ApiItem,
} from "@microsoft/api-extractor-model";
import {
  DocComment,
  DocParagraph,
  DocPlainText,
  DocSection,
  DocBlock,
  DocLinkTag,
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
  CommentBlock,
} from "@/static/api/types";
import { kebabCase } from "change-case";
import path from "path";
import fs from "node:fs";

// Trying to import this value from a .ts file results in a warning due to
// module vs CommonJS mismatch, so I duplicated this value here.
const COMMENT_SUMMARY_SECTION_NAME = "Summary";

const apiPathSegments = ["..", "src", "static", "api"]

const inputFilePath = path.join(
  import.meta.dirname,
  ...apiPathSegments,
  "input-model",
  "doc-model.api.json",
);

const proInputFilePath = path.join(
  import.meta.dirname,
  ...apiPathSegments,
  "input-model-pro",
  "doc-model.api.json",
);

const outputFilePath = path.join(
  import.meta.dirname,
  ...apiPathSegments,
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

const proModel = new ApiModel();
const proPackage = proModel.loadPackage(proInputFilePath);
const proEntryPoint = proPackage.members[0];

const proOnlyRefs: Set<string> = new Set();
proEntryPoint.members.forEach(({ displayName }) => {
  if (!references.has(displayName)) {
    const kebabName = kebabCase(displayName);

    references.set(displayName, {
      text: displayName,
      href: kebabName,
    });
    proOnlyRefs.add(displayName);
  }
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
      defaultValue: defaultType,
      comment: typeParam.tsdocTypeParamBlock
        ? convertDocSection(typeParam.tsdocTypeParamBlock.content)
        : [],
    };
  });
}

function convertExtendsTypes(extendsTypes: readonly HeritageType[]): Token[] {
  return extendsTypes.map(({ excerpt: { text } }) => resolveReference(text));
}

/*
  Not dealing with interfaces with nested members because none currently exist.
  Omit the first token of the excerpt array to get the definition of a property.
  The first token contains the property name and colon.

  It makes sense to check for interfaces with nested properties and throw an
  error if one is detected to avoid confusing behavior in the future.
*/
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

function convertDocSection(section: DocSection): Token[][] {
  return section.nodes
    .filter((node) => node instanceof DocParagraph)
    .map((paragraph) => {
      const trimmedParagraphNodes = paragraph.nodes.filter(
        (node) => node instanceof DocPlainText || node instanceof DocLinkTag,
      );
      return trimmedParagraphNodes.map((node) => {
        if (node instanceof DocPlainText) {
          return node.text;
        }

        if (node.linkText && node.urlDestination) {
          return {
            text: node.linkText,
            href: node.urlDestination,
          };
        }

        return resolveReference(
          node.codeDestination!.memberReferences[0].memberIdentifier!
            .identifier,
        );
      });
    });
}

function convertDocBlock(block: DocBlock): CommentBlock {
  return {
    title: block.blockTag.tagName,
    content: convertDocSection(block.content),
  };
}

function convertComment(comment: DocComment | undefined): CommentBlock[] {
  if (comment === undefined) {
    return [];
  }

  const summaryBlock: CommentBlock = {
    title: COMMENT_SUMMARY_SECTION_NAME,
    content: convertDocSection(comment.summarySection),
  };

  const blocks = [summaryBlock];
  if (comment.remarksBlock) {
    const remarksBlock = convertDocBlock(comment.remarksBlock);
    blocks.push(remarksBlock);
  }

  if (comment.returnsBlock) {
    const returnsBlock = convertDocBlock(comment.returnsBlock);
    blocks.push(returnsBlock);
  }

  return blocks;
}

function convertMember(member: ApiPropertySignature): Member {
  return {
    name: member.name,
    isOptional: member.isOptional,
    definition: convertExcerptTokens(member.excerptTokens).slice(1),
    comment: convertComment(member.tsdocComment),
  };
}

function convertInterface(apiInterface: ApiInterface): Interface {
  return {
    type: "interface",
    name: apiInterface.name,
    definition: convertRangedExcerpt(apiInterface.excerpt),
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
    type: "functionParam",
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
    definition: convertRangedExcerpt(fn.excerpt),
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
    definition: convertExcerptTokens(variable.excerptTokens),
  };
}

function convertTypeAlias(apiTypeAlias: ApiTypeAlias): TypeAlias {
  return {
    type: "typeAlias",
    name: apiTypeAlias.name,
    comment: convertComment(apiTypeAlias.tsdocComment),
    typeParams: convertTypeParams(apiTypeAlias.typeParameters),
    definition: convertExcerptTokens(apiTypeAlias.excerptTokens),
  };
}

function convertEntryPoint(entryPoint: ApiItem, inclusionSet?: Set<string>) {
  const filteredMembers = entryPoint.members.filter(
    (apiItem) => !inclusionSet || inclusionSet.has(apiItem.displayName),
  );

  return filteredMembers.map((apiItem) => {
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
}

// -- End of utility functions for item conversions --

const items: Item[] = convertEntryPoint(entryPoint);
const proItems: Item[] = convertEntryPoint(proEntryPoint, proOnlyRefs);
proItems.forEach((proItem) => (proItem.proOnly = true));
const combinedItems = items.concat(proItems);

const jsonStr = JSON.stringify(combinedItems, null, 2);
fs.writeFileSync(outputFilePath, jsonStr);
