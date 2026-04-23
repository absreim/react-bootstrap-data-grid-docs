import { TocItem } from "rehype-mdx-toc";

export type NestedNavLinkNode = Pick<TocItem, "value" | "href"> & {
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
