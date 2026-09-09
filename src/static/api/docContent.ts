import internalModel from "./output-model/model.json";
import { Item } from "@/static/api/types";
import { kebabCase } from "change-case";

const docContent: Record<string, Item> = (internalModel as Item[]).reduce(
  (prev, current) => {
    prev[kebabCase(current.name)] = current;
    return prev;
  },
  {} as Record<string, Item>,
);

export default docContent;
