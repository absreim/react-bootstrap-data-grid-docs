import { FC, ReactNode } from "react";
import MainLayout from "@/components/MainLayout";
import { blogArticleInfo } from "@/lib/getLinkDefs";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayout
      linkMenuContents={{
        sectionTitle: "Blog Articles",
        articleInfo: blogArticleInfo,
      }}
    >
      {children}
    </MainLayout>
  );
};

export default Layout;
