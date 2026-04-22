import { FC, ReactNode } from "react";
import ContentsNavbar from "./ContentsNavbar";
import { LinkDefinition } from "src/shared/types";

interface DocContentsLayoutProps {
  children: ReactNode;
  linkDefs: LinkDefinition[];
  prependNavContent?: ReactNode;
}

const DocContentsLayout: FC<DocContentsLayoutProps> = ({
  children,
  linkDefs,
  prependNavContent,
}) => {
  return (
    <div className="d-flex flex-row gap-2 h-100">
      <div className="d-none d-lg-block overflow-y-auto pe-3 rbdg-contents-navbar">
        {prependNavContent}
        <ContentsNavbar linkDefs={linkDefs} />
      </div>
      <main className="h-100 w-100 rbdg-docs-main-layout">{children}</main>
    </div>
  );
};

export default DocContentsLayout;
