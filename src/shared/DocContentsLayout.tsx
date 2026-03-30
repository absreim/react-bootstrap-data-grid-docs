import { FC, ReactNode } from "react";
import ContentsNavbar from "@/app/ContentsNavbar";
import { LinkDefinition } from "@/app/types";

interface DocContentsLayoutProps {
  children: ReactNode;
  linkDefs: LinkDefinition[]
}

const DocContentsLayout: FC<DocContentsLayoutProps> = ({ children, linkDefs }) => {
  return (
    <div className="d-flex flex-row gap-2 h-100">
      <div className="d-none d-lg-block overflow-y-auto pe-3">
        <ContentsNavbar linkDefs={linkDefs} />
      </div>
      <main className="h-100 w-100">{children}</main>
    </div>
  );
}

export default DocContentsLayout;
