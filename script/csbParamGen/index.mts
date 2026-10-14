import genTargets from "./genTargets.json" with { type: "json" };
import path from "path";
import { writeFile } from "node:fs/promises";
import getCodeSampleParams from "./getCodeSampleParams.mts";

const CONTENT_ROOT = path.resolve(import.meta.dirname, "..", "..");
const OUTPUT_DIR = path.resolve(CONTENT_ROOT, "src", "static", "csb");

genTargets.forEach(async target => {
  const targetPath = path.resolve(CONTENT_ROOT, target);
  // TODO: differentiate between pro vs community
  const paramStr = await getCodeSampleParams(targetPath, false);

  const subdirName = path.parse(targetPath).name;
  const outputPath = path.resolve(OUTPUT_DIR, `${subdirName}.json`);
  await writeFile(outputPath, JSON.stringify(paramStr));
});