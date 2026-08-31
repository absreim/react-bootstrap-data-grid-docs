import { TocItem } from "rehype-mdx-toc";
import { ReactNode } from "react";

export type NestedNavLinkNode = Pick<TocItem, "value" | "href" | "id"> & {
  children: NestedNavLinkNode[];
};

export type OrderedLinkDef = LinkDef & {
  order: number;
}

export interface LinkDef {
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

export type OrderedLinkSection = SectionMetadata & {
  path: string;
  links: OrderedLinkDef[];
}

export type LinkSection = Omit<OrderedLinkSection, "links" | "order"> & {
  links: LinkDef[]
}

export interface SectionedArticleInfo {
  type: "sectioned";
  sections: LinkSection[];
}

export interface UnsectionedArticleInfo {
  type: "unsectioned";
  links: LinkDef[];
}

export type ArticleInfo = UnsectionedArticleInfo | SectionedArticleInfo;

export interface LinkMenuContents {
  sectionTitle: string;
  articleInfo: ArticleInfo;
}
