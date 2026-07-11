import fs from "node:fs/promises";

export const getUnsectionedMdxStaticParamsFn: (
  contentDir: string,
) => () => Promise<Array<{ article: string }>> =
  (contentDir: string) => async () => {
    const entries = await fs.readdir(contentDir, {
      withFileTypes: true,
      recursive: true,
    });

    return entries
      .filter((e) => e.isFile() && e.name === "article.mdx")
      .map((e) => ({ article: e.parentPath.replace(contentDir + "/", "") }));
  };

export const getSectionedMdxStaticParamsFn: (
  contentDir: string,
) => () => Promise<Array<{ section: string, article: string }>> =
  (contentDir: string) => async () => {
    const entries = (await fs
      .readdir(contentDir, {
        withFileTypes: true,
        recursive: true,
      }))
      .filter((e) => e.isFile() && e.name === "article.mdx");
    const params: { section: string; article: string }[] = [];
    for (const entry of entries) {
      const pathSegments = entry.parentPath.split("/");
      const articleDirName = pathSegments[pathSegments.length - 1];
      const sectionName = pathSegments[pathSegments.length - 2];

      params.push({ section: sectionName, article: articleDirName });
    }

    return params;
  };
