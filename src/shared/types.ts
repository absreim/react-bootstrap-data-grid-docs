import { TocItem } from "rehype-mdx-toc";

export type NestedNavLinkNode = Pick<TocItem, "value" | "href"> & {
  children: NestedNavLinkNode[];
};

export interface LinkDefinition {
  name: string;
  path: string;
}

export interface LinkMenuContents {
  sectionTitle: string;
  linkDefs: LinkDefinition[];
}
