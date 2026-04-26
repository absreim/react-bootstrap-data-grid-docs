import { FC, ReactNode } from "react";
import { TocItem } from "rehype-mdx-toc";
import Stack from "react-bootstrap/Stack";
import Toc from "@/shared/Toc";

interface DocContentsProps {
  main: ReactNode;
  tocItems: TocItem[];
}

const DocContents: FC<DocContentsProps> = ({ main, tocItems }) => {
  return (
    <Stack className="align-items-start h-100" direction="horizontal" gap={2}>
      <div
        className="overflow-lg-y-auto h-100 w-100 px-2 rbdg-mdx-body"
        id="docContentsMain"
      >
        {main}
      </div>
      <nav className="d-none d-xl-block rbdg-docs-toc overflow-y-auto rbdg-docs-toc-container">
        <Toc tocItems={tocItems} />
      </nav>
    </Stack>
  );
};

export default DocContents;
