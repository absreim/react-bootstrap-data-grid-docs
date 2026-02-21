import { FC } from "react"
import { TocItem } from "rehype-mdx-toc";
import getSecondThirdHeadingLinks from "@/app/docs/[slug]/getSecondThirdHeadingLinks";
import NestedNavLinkList from "@/app/docs/[slug]/NestedNavLinkList";

interface TocProps {
  tocItems: TocItem[]
}

const Toc: FC<TocProps> = ({ tocItems }) => {
  const nodes = getSecondThirdHeadingLinks(tocItems);

  return (
    <>
      <header className="fs-5 ps-2">
        On this page
      </header>
      <hr />
      <NestedNavLinkList nodes={nodes} />
    </>
  );
}

export default Toc;
