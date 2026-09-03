import {
  ApiEntryPoint,
  ApiModel,
  ApiPropertySignature,
  ExcerptToken,
  HeritageType,
  TypeParameter,
} from "@microsoft/api-extractor-model";
import { Item, Reference, TypeParam, Token } from "@/static/api/types";
import { kebabCase } from "change-case";

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage("./input-model/doc-model.api.json");

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
      constraint,
      default: defaultType,
    };
  });
}

function convertExtendsTypes(extendsTypes: readonly HeritageType[]): Token[] {
  return extendsTypes.map(({ excerpt: { text } }) => resolveReference(text));
}

function convertExcerptTokens(excerptTokens: readonly ExcerptToken[]): Token[] {
  return excerptTokens.map((token) => {
    if (token.kind === "Reference") {
      return resolveReference(token.text);
    }

    return token.text;
  })
}

// TODO: deal interfaces with nested members, possibly by flattening the nested
// members in a string
function convertFlatProperties(apiPropertySignatures: readonly ApiPropertySignature[]): Token[] {

}

const item: Item[] = entryPoint.members.map((apiItem) => {
  switch (apiItem.constructor.name) {
    case "ApiInterface": {
    }
    default: {
      throw new Error(
        `Unexpected ApiItem class encountered: "${apiItem.constructor.name}"`,
      );
    }
  }
});
