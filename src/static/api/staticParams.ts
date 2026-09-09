import internalModel from "./output-model/model.json";
import { SectionedArticleParams } from "@/static/types";
import { Item } from "@/static/api/types";
import { kebabCase } from "change-case";
import { REF_URL_SEGMENT } from "@/static/constants";

const staticParams: SectionedArticleParams[] = (internalModel as Item[]).map(
  (item) => ({
    section: REF_URL_SEGMENT,
    article: kebabCase(item.name),
  }),
);

export default staticParams;
