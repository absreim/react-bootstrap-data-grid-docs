import { FC, ReactNode } from "react";
import { ArticleInfo } from "@/components/types";
import useArticleNavbar from "@/components/useArticleNavbar";

interface DocContentsLayoutProps {
  children: ReactNode;
  articleInfo: ArticleInfo;
  prependNavContent?: ReactNode;
}

const DocContentsLayout: FC<DocContentsLayoutProps> = ({
  children,
  articleInfo,
  prependNavContent,
}) => {
  const articleNav = useArticleNavbar(articleInfo);

  return (
    <div className="d-flex flex-row gap-2 h-100">
      <div className="d-none d-lg-block overflow-y-auto pe-3 rbdg-contents-navbar">
        {prependNavContent}
        {articleNav}
      </div>
      <main className="h-100 w-100 rbdg-docs-main-layout">{children}</main>
    </div>
  );
};

export default DocContentsLayout;
