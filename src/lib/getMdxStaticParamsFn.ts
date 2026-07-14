import fs from "node:fs/promises";

const getMdxStaticParamsFn: (
  contentDir: string,
) => () => Promise<Array<string>> = (contentDir: string) => async () => {
  const entries = await fs.readdir(contentDir, {
    withFileTypes: true,
    recursive: true,
  });

  return entries
    .filter((e) => e.isFile() && e.name === "article.mdx")
    .map((e) => e.parentPath.replace(contentDir + "/", ""));
};

export default getMdxStaticParamsFn;
