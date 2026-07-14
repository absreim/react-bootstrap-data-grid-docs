import { TocItem } from "rehype-mdx-toc";
import { ReactNode } from "react";

export type NestedNavLinkNode = Pick<TocItem, "value" | "href" | "id"> & {
  children: NestedNavLinkNode[];
};

export interface LinkDefinition {
  name: string;
  path: string;
  title?: string;
  pro?: boolean;
}

export interface LinkMenuContents {
  sectionTitle: string;
  linkDefs: LinkDefinition[];
}

export interface SectionInfo {
  title: string;
  icon: ReactNode;
}
