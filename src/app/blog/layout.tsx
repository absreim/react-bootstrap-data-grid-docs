import { FC, ReactNode } from "react";
import MainLayout from "@/shared/MainLayout";
import { getBlogLinkDefs } from "@/lib/getLinkDefs";

const Layout: FC<{ children: ReactNode}> = ({ children }) => {
  const linkDefs = getBlogLinkDefs();

  return (
    <MainLayout linkMenuContents={{ sectionTitle: "Blog Articles", linkDefs }}>
      {children}
    </MainLayout>
  )
}

export default Layout;