"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

interface LinkDefinition {
  name: string;
  path: string;
}

interface ContentsNavbarProps {
  base: string;
}

const ContentsNavbar: FC<ContentsNavbarProps> = ({base}) => {
  const pathname = usePathname();
  const linkDefs: LinkDefinition[] = [
    {
      name: "Introduction",
      path: `${base}/`,
    },
    {
      name: "Basic Usage",
      path: `${base}/basic-usage`,
    },
    {
      name: "Pagination",
      path: `${base}/pagination`,
    },
    {
      name: "Sorting",
      path: `${base}/sorting`,
    },
    {
      name: "Filtering",
      path: `${base}/filtering`,
    },
    {
      name: "Selection",
      path: `${base}/selection`,
    },
    {
      name: "Editing",
      path: `${base}/editing`,
    },
    {
      name: "Styling",
      path: `${base}/styling`,
    },
    {
      name: "Export",
      path: `${base}/export`,
    },
    {
      name: "Versions",
      path: `${base}/versions`,
    },
    {
      name: "Migrate",
      path: `${base}/migrate`,
    },
  ];

  return (
    <Nav variant="underline" activeKey={pathname} className="flex-column">
      {linkDefs.map(({ name, path }, index) => (
        <Nav.Item key={index}>
          <Nav.Link as={Link} href={path}>
            {name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default ContentsNavbar;
