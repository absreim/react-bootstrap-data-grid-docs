import { LinkDef } from "@/components/types";
import { kebabCase } from "change-case";
import { REF_URL_BASE } from "@/static/constants";
import internalModel from "./output-model/model.json";
import { Item } from "@/static/api/types";

const getApiRefLinkDefs: (
  internalApiItems: Item[],
  urlBasePath: string,
) => LinkDef[] = (apiItems, urlBasePath) =>
  apiItems.map((item) => ({
    name: item.name,
    path: `${urlBasePath}/${kebabCase(item.name)}`,
  })).sort((a, b) => a.name.localeCompare(b.name));

const apiLinkDefs = getApiRefLinkDefs(internalModel as Item[], REF_URL_BASE);

export default apiLinkDefs;
