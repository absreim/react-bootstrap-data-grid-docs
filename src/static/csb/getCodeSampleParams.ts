import path from "path";
import fs from "node:fs/promises";
import { FileParamSet } from "@/static/csb/types";
import encodeParams from "@/static/csb/encodeParams";

const getCodeSampleParams: (codeSampleDir: string) => Promise<string> = async (
  codeSampleDir,
) => {
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
  // TODO: assign default files
  return encodeParams(fileParams);
};

export default getCodeSampleParams;
