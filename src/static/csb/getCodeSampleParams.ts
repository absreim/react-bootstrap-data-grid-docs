import path from "path";
import fs from "node:fs/promises";
import { FileParamSet } from "@/static/csb/types";
import encodeParams from "@/static/csb/encodeParams";
import getDefaultParams from "@/static/csb/getDefaultParams";

const generateVarParamSet: (filenames: string[], subPath: string, subdirName?: string) => Promise<FileParamSet> = async (filenames, subPath, subdirName = "") => {
  const fileContentPromises = filenames.map(async (filename) => {
    const filePath = path.join(subPath, filename);
    return fs.readFile(filePath, "utf-8");
  });
  const fileContents = await Promise.all(fileContentPromises);
  return fileContents.reduce(
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
}

const getCodeSampleParams: (subPath: string, isPro: boolean, usesReactBootstrap?: boolean) => Promise<string> = async (
  subPath,
  isPro,
  usesReactBootstrap = false,
) => {
  const parsedPath = path.parse(subPath);
  const subdirName = parsedPath.name;
  const defaultParams = getDefaultParams(subdirName, isPro, usesReactBootstrap);
  if (parsedPath.ext === ".tsx") {
    const fileParams = await generateVarParamSet([parsedPath.base], parsedPath.dir);
    Object.assign(fileParams, defaultParams);
    return encodeParams({ files: fileParams });
  }

  // Assume path is to a directory containing an index.tsx file
  const filenames = await fs.readdir(subPath);
  const fileParams = await generateVarParamSet(filenames, subPath, subdirName);
  Object.assign(fileParams, defaultParams);
  return encodeParams({ files: fileParams });
};

export default getCodeSampleParams;
