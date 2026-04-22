import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import DocContentsLayout from "../../../shared/DocContentsLayout/DocContentsLayout";
import { getBlogLinkDefs } from "@/lib/getLinkDefs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Blog",
  description:
    "Blog for the react-bootstrap-data-grid project",
};

const indexLink: ReactNode = (
  <>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link href="/blog" className="nav-link px-0">
          <svg
            className="me-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
            />
          </svg>
          Back to Index
        </Link>
      </li>
    </ul>
    <hr />
  </>
);

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const linkDefs = getBlogLinkDefs();

  return <DocContentsLayout linkDefs={linkDefs} prependNavContent={indexLink}>{children}</DocContentsLayout>;
};

export default Layout;
