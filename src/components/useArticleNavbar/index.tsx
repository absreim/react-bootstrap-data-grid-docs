import { ArticleInfo } from "@/components/types";
import { ReactNode, useMemo } from "react";
import ContentsNavbar from "@/components/useArticleNavbar/ContentsNavbar";
import SectionedNavbar from "@/components/useArticleNavbar/SectionedNavbar";

const UseArticleNavbar: (articleInfo: ArticleInfo | undefined) => ReactNode = (articleInfo) => useMemo(() => {
  if (articleInfo === undefined) {
    return null;
  }

  if (articleInfo.type === "unsectioned") {
    return <ContentsNavbar linkDefs={articleInfo.links} />;
  }

  return <SectionedNavbar linkSections={articleInfo.sections} />
}, [articleInfo]);

export default UseArticleNavbar;
