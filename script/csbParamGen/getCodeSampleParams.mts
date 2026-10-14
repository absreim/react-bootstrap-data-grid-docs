import path from "path";
import fs from "node:fs/promises";
import type { FileParamSet } from "./types";
import encodeParams from "./encodeParams.mts";
import getDefaultParams from "./getDefaultParams.mts";

const getCodeSampleParams: (
  codeSampleDir: string,
  isPro: boolean,
) => Promise<string> = async (codeSampleDir, isPro) => {
  const filenames = await fs.readdir(codeSampleDir);
  const fileContentPromises = filenames.map(async (filename) => {
    const filePath = path.join(codeSampleDir, filename);
    return fs.readFile(filePath, "utf-8");
  });
  const fileContents = await Promise.all(fileContentPromises);
  const subdirName = path.parse(codeSampleDir).name;
  const fileParams: FileParamSet = fileContents.reduce(
    (prev, contents, index) => {
      const filename = filenames[index];
      const filenameWithSubdir = path.join("src", subdirName, filename);
      prev[filenameWithSubdir] = {
        content: contents,
      };
      return prev;
    },
    {} as FileParamSet,
  );
  const defaultParams = getDefaultParams(subdirName, isPro);
  Object.assign(fileParams, defaultParams);
  return encodeParams({ files: fileParams });
};

export default getCodeSampleParams;
