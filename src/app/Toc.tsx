import { FC } from "react"
import { TocItem } from "rehype-mdx-toc";
import getSecondThirdHeadingLinks from "@/app/getSecondThirdHeadingLinks";
import NestedNavLinkList from "@/app/NestedNavLinkList";

interface TocProps {
  tocItems: TocItem[]
}

const Toc: FC<TocProps> = ({ tocItems }) => {
  const nodes = getSecondThirdHeadingLinks(tocItems);

  return (
    <>
      <header className="fs-6 ps-3">
        On this page
      </header>
      <hr className="my-2" />
      <NestedNavLinkList nodes={nodes} />
    </>
  );
}

export default Toc;
