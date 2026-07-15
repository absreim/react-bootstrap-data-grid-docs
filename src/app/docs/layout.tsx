import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import DocContentsLayout from "@/components/DocContentsLayout";
import { docsArticleInfo } from "@/lib/getLinkDefs";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Documentation",
  description:
    "Technical documentation for the react-bootstrap-data-grid project",
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayout
      linkMenuContents={{
        sectionTitle: "Doc Articles",
        articleInfo: docsArticleInfo,
      }}
    >
      <DocContentsLayout articleInfo={docsArticleInfo}>
        {children}
      </DocContentsLayout>
    </MainLayout>
  );
};

export default Layout;
