import fs from "fs";
import path from "path";
import { cache } from "react";
import { LinkDefinition } from "@/shared/types";

// Much of the frontmatter parsing code is derived from the Next.js Portfolio
// Blog Starter example:
// https://github.com/vercel/examples/blob/main/solutions/blog/app/blog/utils.ts

const DOCS_DIR = path.join(process.cwd(), "src", "mdx", "docs");
const DOCS_URL_BASE = "/docs";
const BLOG_DIR = path.join(process.cwd(), "src", "mdx", "blog");
const BLOG_URL_BASE = "/blog";

type AugmentedLinkDefinition = LinkDefinition & { order: number };

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const frontMatterDict: Record<string, string> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    frontMatterDict[key.trim()] = value;
  });

  return frontMatterDict;
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(
  contentDir: string,
  urlBasePath: string,
): AugmentedLinkDefinition[] {
  const mdxFiles = getMDXFiles(contentDir);
  return mdxFiles.map((file) => {
    const dict = readMDXFile(path.join(contentDir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      order: Number(dict.order),
      name: dict.navLabel || slug,
      path: `${urlBasePath}/${slug}`,
      title: dict.indexTitle,
      pro: dict.pro === "true"
    };
  });
}

export const getDocLinkDefs = cache((): LinkDefinition[] =>
  getMDXData(DOCS_DIR, DOCS_URL_BASE).sort((a, b) => a.order - b.order),
);

export const getBlogLinkDefs = cache((): LinkDefinition[] =>
  getMDXData(BLOG_DIR, BLOG_URL_BASE).sort((a, b) => a.order - b.order),
);
