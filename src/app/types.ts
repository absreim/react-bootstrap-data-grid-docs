import { TocItem } from "rehype-mdx-toc";

export type NestedNavLinkNode = Pick<TocItem, "value" | "href"> & {
  children: NestedNavLinkNode[];
}
