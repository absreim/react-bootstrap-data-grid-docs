import { ArticleInfo } from "@/components/types";
import { ReactNode, useMemo } from "react";
import ContentsNavbar from "@/components/useArticleNavbar/ContentsNavbar";
import SectionedNavbar from "@/components/useArticleNavbar/SectionedNavbar";

const UseArticleNavbar: (
  articleInfo: ArticleInfo | undefined,
  onClick?: () => void,
) => ReactNode = (articleInfo, onClick) =>
  useMemo(() => {
    if (articleInfo === undefined) {
      return null;
    }

    if (articleInfo.type === "unsectioned") {
      return <ContentsNavbar linkDefs={articleInfo.links} onClick={onClick} />;
    }

    return <SectionedNavbar linkSections={articleInfo.sections} onClick={onClick} />;
  }, [articleInfo, onClick]);

export default UseArticleNavbar;
