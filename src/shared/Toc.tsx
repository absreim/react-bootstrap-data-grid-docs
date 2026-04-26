"use client";

import { FC, useEffect, useState } from "react";
import { TocItem } from "rehype-mdx-toc";
import getSecondThirdHeadingLinks from "@/shared/getSecondThirdHeadingLinks";
import NestedNavLinkList from "@/shared/NestedNavLinkList";

interface TocProps {
  tocItems: TocItem[];
}

const Toc: FC<TocProps> = ({ tocItems }) => {
  const nodes = getSecondThirdHeadingLinks(tocItems);
  const [visible, setVisible] = useState<string[]>([]);
  useEffect(() => {
    const mainContentDiv = document.getElementById("docContentsMain");
    if (!mainContentDiv) {
      return;
    }

    const options: IntersectionObserverInit = {
      root: mainContentDiv,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      setVisible((existingSections) => {
        const toRemove = new Set(
          entries
            .filter(({ isIntersecting }) => !isIntersecting)
            .map(({ target }) => target.getAttribute("aria-labelledby")!),
        );
        const toAdd = entries
          .filter(({ isIntersecting }) => isIntersecting)
          .map(({ target }) => target.getAttribute("aria-labelledby")!);
        return existingSections
          .filter((section) => !toRemove.has(section))
          .concat(toAdd);
      });
    };
    const observer = new IntersectionObserver(callback, options);
    const level2Sections = mainContentDiv.querySelectorAll(
      ':scope section[data-heading-rank="2"]',
    );
    const level3Sections = mainContentDiv.querySelectorAll(
      ':scope section[data-heading-rank="3"]',
    );
    const toObserve = Array.from(level2Sections).concat(
      Array.from(level3Sections),
    );
    toObserve.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fs-6 ps-3">On this page</header>
      <hr className="my-2" />
      <NestedNavLinkList nodes={nodes} visible={visible} />
    </>
  );
};

export default Toc;
