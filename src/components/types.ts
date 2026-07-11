import { TocItem } from "rehype-mdx-toc";
import { ReactNode } from "react";

export type NestedNavLinkNode = Pick<TocItem, "value" | "href" | "id"> & {
  children: NestedNavLinkNode[];
};

export interface LinkDef {
  order: number;
  name: string;
  path: string;
  title?: string;
  pro?: boolean;
}

export interface SectionMetadata {
  name: string;
  order: number;
  icon: ReactNode;
}

export type LinkSection = SectionMetadata & {
  path: string;
  links: LinkDef[];
}

export interface SectionedArticleInfo {
  type: "sectioned"
  sections: LinkSection[];
}

export interface UnsectionedArticleInfo {
  type: "unsectioned",
  links: LinkDef[];
}

export type ArticleInfo = UnsectionedArticleInfo | SectionedArticleInfo;

export interface LinkMenuContents {
  sectionTitle: string;
  articleInfo: ArticleInfo;
}
