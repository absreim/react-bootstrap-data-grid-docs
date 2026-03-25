import fs from "node:fs/promises";

const getMdxStaticParamsFn: (
  contentDir: string,
) => () => Promise<Array<{ contentDir: string, slug: string }>> =
  (contentDir: string) => async () => {
    const entries = await fs.readdir(contentDir, { withFileTypes: true });

    return entries
      .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
      .map((e) => ({
        contentDir: contentDir,
        slug: e.name.replace(/\.mdx$/, ""),
      }));
  };

export default getMdxStaticParamsFn;
