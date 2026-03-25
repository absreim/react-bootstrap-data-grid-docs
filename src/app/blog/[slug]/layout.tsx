import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import DocContentsLayout from "@/shared/DocContentsLayout";
import { getBlogLinkDefs } from "@/lib/getLinkDefs";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Blog",
  description:
    "Blog for the react-bootstrap-data-grid project",
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const linkDefs = getBlogLinkDefs();

  return <DocContentsLayout linkDefs={linkDefs}>{children}</DocContentsLayout>;
};

export default Layout;
