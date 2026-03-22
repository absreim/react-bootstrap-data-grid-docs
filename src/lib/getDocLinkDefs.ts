import fs from "fs";
import path from "path";
import { cache } from "react";
import { LinkDefinition } from "@/app/types";

const CONTENT_PATH = path.join(process.cwd(), "src", "mdx");
const BASE_PATH = "/docs";

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

function getMDXData(dir: string): AugmentedLinkDefinition[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const dict = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      order: Number(dict.order),
      name: dict.navLabel || slug,
      path: `${BASE_PATH}/${slug}`,
    };
  });
}

const getDocLinkDefs = cache((): LinkDefinition[] =>
  getMDXData(CONTENT_PATH).sort((a, b) => a.order - b.order),
);

export default getDocLinkDefs;
