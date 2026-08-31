import path from "path";

export const DOCS_DIR = path.join("articles", "docs");
export const DOCS_URL_BASE = "/docs";
export const BLOG_DIR = path.join("articles", "blog");
export const BLOG_URL_BASE = "/blog";
export const REF_URL_SEGMENT = "ref";
export const REF_URL_BASE = DOCS_URL_BASE + `/${REF_URL_SEGMENT}`;
