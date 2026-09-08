import internalModel from "./output-model/model.json";
import { SectionedArticleParams } from "@/static/types";
import { Item } from "@/static/api/types";
import { kebabCase } from "change-case";

const staticParams: SectionedArticleParams[] = (internalModel as Item[]).map(
  (item) => ({
    section: "ref",
    article: kebabCase(item.name),
  }),
);

export default staticParams;
