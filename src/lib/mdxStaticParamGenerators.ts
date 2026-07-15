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

// TODO: finish writing the below function and update page component

export const getSectionedMdxStaticParamsFn: (
  contentDir: string,
) => () => Promise<Array<{ section: string, article: string }>> =
  (contentDir: string) => async () => {
    const entries = await fs.readdir(contentDir, {
      withFileTypes: true,
      recursive: true,
    });

    return entries
      .filter((e) => e.isFile() && e.name === "article.mdx")
      .map((e) => ({ article: e.parentPath.replace(contentDir + "/", "") }));
  };
