import { FC, ReactNode } from "react";
import getDocLinkDefs from "@/lib/getDocLinkDefs";
import ContentsNavbar from "@/app/ContentsNavbar";

const DocContentsLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const linkDefs = getDocLinkDefs();

  return (
    <>
      <div className="d-none d-lg-block overflow-y-auto pe-3">
        <ContentsNavbar linkDefs={linkDefs} />
      </div>
      <main className="h-100 w-100">{children}</main>
    </>
  );
}

export default DocContentsLayout;
