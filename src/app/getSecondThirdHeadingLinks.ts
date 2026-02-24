import { TocItem } from "rehype-mdx-toc";
import { NestedNavLinkNode } from "@/app/[slug]/types";

const getSecondThirdHeadingLinks: (
  tocItems: TocItem[],
) => NestedNavLinkNode[] = (tocItems) => {
  const nodes: NestedNavLinkNode[] = [];

  for (const item of tocItems) {
    if (item.depth === 2) {
      const index = item.numbering[1] - 1;
      if (nodes[index]) {
        nodes[index].href = item.href;
        nodes[index].value = item.value;
      } else {
        nodes[index] = {
          href: item.href,
          value: item.value,
          children: [],
        };
      }

      continue;
    }

    if (item.depth === 3) {
      const twoIndex = item.numbering[1] - 1;
      const threeIndex = item.numbering[2] - 1;
      if (!nodes[twoIndex]) {
        nodes[twoIndex] = {
          href: "",
          value: "",
          children: [],
        }
      }

      nodes[twoIndex].children[threeIndex] = {
        href: item.href,
        value: item.value,
        children: [],
      };
    }
  }

  return nodes;
};

export default getSecondThirdHeadingLinks;
