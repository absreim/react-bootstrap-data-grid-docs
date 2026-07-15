import fs from "node:fs/promises";
import path from "path";
import {
  LinkDef,
  LinkSection,
  SectionedArticleInfo,
  SectionMetadata,
  UnsectionedArticleInfo,
} from "@/components/types";

// Much of the frontmatter parsing code is derived from the Next.js Portfolio
// Blog Starter example:
// https://github.com/vercel/examples/blob/main/solutions/blog/app/blog/utils.ts

const DOCS_DIR = path.join("articles", "docs");
const DOCS_URL_BASE = "/docs";
const BLOG_DIR = path.join("articles", "blog");
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

async function readMDXFile(filePath: string) {
  const rawContent = await fs.readFile(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

const getSectionedArticles: (
  relativeRootDir: string,
  urlBasePath: string,
) => Promise<LinkSection[]> = async (relativeRootDir, urlBasePath) => {
  const absoluteRootDir = path.join(process.cwd(), "src", relativeRootDir);
  const entries = await fs.readdir(absoluteRootDir, {
    withFileTypes: true,
    recursive: true,
  });
  const articleFiles = entries.filter(
    (e) => e.isFile() && e.name === "article.mdx",
  );
  const sections: Map<string, LinkSection> = new Map();
  for (const file of articleFiles) {
    const pathSegments = file.parentPath.split("/");
    const articleDirName = pathSegments[pathSegments.length - 1];
    const sectionName = pathSegments[pathSegments.length - 2];

    if (!sections.has(sectionName)) {
      const metadata: SectionMetadata = await import(
        path.join("@", relativeRootDir, sectionName, "metadata.tsx"),
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
      pro: dict.pro === "true",
    });
  }

  const linkSections = Array.from(sections.values()).sort(
    (a, b) => a.order - b.order,
  );
  linkSections.forEach(({ links }) => links.sort((a, b) => a.order - b.order));
  return linkSections;
};

async function getUnsectionedArticles(
  relativeRootDir: string,
  urlBasePath: string,
): Promise<LinkDef[]> {
  const absoluteRootDir = path.join(process.cwd(), "src", relativeRootDir);
  const entries = await fs.readdir(absoluteRootDir, {
    withFileTypes: true,
    recursive: true,
  });
  const articleFiles = entries.filter(
    (e) => e.isFile() && e.name === "article.mdx",
  );

  const linkDefs: LinkDef[] = [];
  for (const file of articleFiles) {
    const pathSegments = file.parentPath.split("/");
    const articleDirName = pathSegments[pathSegments.length - 1];

    const dict = await readMDXFile(path.join(file.parentPath, file.name));
    linkDefs.push({
      order: Number(dict.order),
      name: dict.navLabel || articleDirName,
      path: `${urlBasePath}/${articleDirName}`,
      title: dict.indexTitle,
      pro: dict.pro === "true",
    });
  }

  return linkDefs.sort((a, b) => a.order - b.order);
}

export const docsArticleInfo: SectionedArticleInfo = {
  type: "sectioned",
  sections: await getSectionedArticles(DOCS_DIR, DOCS_URL_BASE),
};
export const blogArticleInfo: UnsectionedArticleInfo = {
  type: "unsectioned",
  links: await getUnsectionedArticles(BLOG_DIR, BLOG_URL_BASE),
};
