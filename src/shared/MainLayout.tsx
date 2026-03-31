import { FC, ReactNode } from "react";
import { LinkMenuContents } from "@/shared/types";
import AppBar from "@/shared/AppBar/AppBar";

export interface MainLayoutProps {
  linkMenuContents?: LinkMenuContents
  children?: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ linkMenuContents, children  }) => {
  return (
    <main className="d-flex flex-column h-100">
      <AppBar linkMenuContents={linkMenuContents} />
      <div className="container pt-2 flex-grow-1 rbdg-docs-main">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;