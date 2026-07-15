import fs from "node:fs/promises";
import path from "path";
import { LinkDef, LinkSection, SectionMetadata } from "@/shared/types";

// Much of the frontmatter parsing code is derived from the Next.js Portfolio
// Blog Starter example:
// https://github.com/vercel/examples/blob/main/solutions/blog/app/blog/utils.ts

const DOCS_DIR = path.join(process.cwd(), "src", "articles", "docs");
const DOCS_URL_BASE = "/docs";
const BLOG_DIR = path.join(process.cwd(), "src", "articles", "blog");
const BLOG_URL_BASE = "/blog";

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

async function getMDXFiles(dir: string) {
  return (await fs.readdir(dir)).filter((file) => path.extname(file) === ".mdx");
}

async function readMDXFile(filePath: string) {
  const rawContent = await fs.readFile(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

const getSectionedArticles: (
  rootDir: string,
  urlBasePath: string,
) => Promise<LinkSection[]> = async (rootDir, urlBasePath) => {
  const entries = await fs.readdir(rootDir, {
    withFileTypes: true,
    recursive: true,
  });
  const articleFiles = entries.filter((e) => e.isFile() && e.name === "article.mdx");
  const sections: Map<string, LinkSection> = new Map();
  for (const file of articleFiles) {
    const pathSegments = file.parentPath.split("/");
    const articleDirName = pathSegments[pathSegments.length - 1];
    const sectionName = pathSegments[pathSegments.length - 2];

    if (!sections.has(sectionName)) {
      const sectionPath = pathSegments
        .slice(0, pathSegments.length - 1)
        .join("/");
      const metadata: SectionMetadata = await import(
        sectionPath + "/metadata.tsx"
      );
      sections.set(sectionName, {
        ...metadata,
        path: sectionName,
        links: [],
      });
    }

    const dict = await readMDXFile(path.join(file.parentPath, file.name));
    sections.get(sectionName)!.links.push({
      order: Number(dict.order),
      name: dict.navLabel || articleDirName,
      path: `${urlBasePath}/${sectionName}/${articleDirName}`,
      title: dict.indexTitle,
    });
  }

  return Array.from(sections.values()).sort((a, b) => a.order - b.order);
};

async function getUnsectionedArticles(
  contentDir: string,
  urlBasePath: string,
): Promise<LinkDef[]> {
  const mdxFiles = await getMDXFiles(contentDir);
  const mdxData: LinkDef[] = [];
  for (const file of mdxFiles) {
    const dict = await readMDXFile(path.join(contentDir, file));
    const slug = path.basename(file, path.extname(file));
    mdxData.push({
      order: Number(dict.order),
      name: dict.navLabel || slug,
      path: `${urlBasePath}/${slug}`,
      title: dict.indexTitle,
      pro: dict.pro === "true",
    });
  }

  return mdxData;
}

export const docLinkDefs = (await getSectionedArticles(DOCS_DIR, DOCS_URL_BASE)).sort(
  (a, b) => a.order - b.order,
);
export const blogLinkDefs = (await getUnsectionedArticles(BLOG_DIR, BLOG_URL_BASE)).sort(
  (a, b) => a.order - b.order,
);
