import { ApiItem, ApiModel } from "@microsoft/api-extractor-model";
import { LinkDef } from "@/components/types";
import { kebabCase } from "change-case";
import { REF_URL_BASE } from "@/static/constants";
import path from "path";

const getApiItems: () => readonly ApiItem[] = () => {
  const apiModel = new ApiModel();
  const jsonPath = path.join(
    process.cwd(),
    "src",
    "static",
    "api",
    "doc-model.api.json",
  );
  const apiPackage = apiModel.loadPackage(jsonPath);

  if (apiPackage.members.length !== 1) {
    throw new Error(
      `Expected exactly one top level TSDoc API package, but found ${apiPackage.members.length}.`,
    );
  }

  return apiPackage.members[0].members;
};

const getApiRefLinkDefs: (
  apiItems: readonly ApiItem[],
  urlBasePath: string,
) => LinkDef[] = (apiItems, urlBasePath) =>
  apiItems.map((item) => ({
    name: item.displayName,
    path: `${urlBasePath}/${kebabCase(item.displayName)}`,
  })).sort((a, b) => a.name.localeCompare(b.name));

const apiItems = getApiItems();

export const apiLinkDefs = getApiRefLinkDefs(apiItems, REF_URL_BASE);
