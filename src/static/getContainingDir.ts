import { fileURLToPath } from "node:url";
import path from "path";

const getContainingDir: (importMetaUrl: string) => string = (importMetaUrl) => {
  const pathStr = fileURLToPath(importMetaUrl);
  const pathObj = path.parse(pathStr);
  return pathObj.dir;
}

export default getContainingDir;
