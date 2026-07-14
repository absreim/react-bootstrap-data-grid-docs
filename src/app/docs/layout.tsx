import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import DocContentsLayout from "../../shared/DocContentsLayout";
import { docLinkDefs } from "@/lib/getLinkDefs";
import MainLayout from "@/shared/MainLayout";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Documentation",
  description:
    "Technical documentation for the react-bootstrap-data-grid project",
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayout
      linkMenuContents={{ sectionTitle: "Doc Articles", linkDefs: docLinkDefs }}
    >
      <DocContentsLayout linkDefs={docLinkDefs}>{children}</DocContentsLayout>
    </MainLayout>
  );
};

export default Layout;
