import fs from "node:fs/promises";
import path from "path";
import {
  LinkSection,
  OrderedLinkDef,
  OrderedLinkSection,
  SectionedArticleInfo,
  SectionMetadata,
  UnsectionedArticleInfo,
} from "@/components/types";
import {
  BLOG_DIR,
  BLOG_URL_BASE,
  DOCS_DIR,
  DOCS_URL_BASE,
  REF_URL_SEGMENT,
} from "@/static/constants";
import { apiLinkDefs } from "@/static/api/apiRefLinkDefs";
import JournalCode from "@/assets/icons/JournalCode";

// Much of the frontmatter parsing code is derived from the Next.js Portfolio
// Blog Starter example:
// https://github.com/vercel/examples/blob/main/solutions/blog/app/blog/utils.ts

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
  const sections: Map<string, OrderedLinkSection> = new Map();
  for (const file of articleFiles) {
    const pathSegments = file.parentPath.split("/");
    const articleDirName = pathSegments[pathSegments.length - 1];
    const sectionName = pathSegments[pathSegments.length - 2];

    if (!sections.has(sectionName)) {
      // Note: testing has shown that this way of dynamically importing files
      // may not work when using Next.js with webpack (rather than Turbopack).
      const metadata: SectionMetadata = (await import(
        path.join("@", relativeRootDir, sectionName, "metadata.tsx"),
      )).default;
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

  const unorderedSections = linkSections as LinkSection[];
  unorderedSections.push({
    name: "Reference",
    path: REF_URL_SEGMENT,
    icon: <JournalCode />,
    links: apiLinkDefs,
  });

  return unorderedSections;
};

async function getUnsectionedArticles(
  relativeRootDir: string,
  urlBasePath: string,
): Promise<OrderedLinkDef[]> {
  const absoluteRootDir = path.join(process.cwd(), "src", relativeRootDir);
  const entries = await fs.readdir(absoluteRootDir, {
    withFileTypes: true,
    recursive: true,
  });
  const articleFiles = entries.filter(
    (e) => e.isFile() && e.name === "article.mdx",
  );

  const linkDefs: OrderedLinkDef[] = [];
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
