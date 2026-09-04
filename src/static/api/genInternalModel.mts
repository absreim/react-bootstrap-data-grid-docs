import {
  ApiEntryPoint,
  ApiModel,
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
  })
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
