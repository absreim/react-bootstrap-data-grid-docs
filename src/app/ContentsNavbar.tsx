"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

interface LinkDefinition {
  name: string;
  path: string;
}

const linkDefs: LinkDefinition[] = [
  {
    name: "Introduction",
    path: "/",
  },
  {
    name: "Basic Usage",
    path: "/basic-usage",
  },
  {
    name: "Pagination",
    path: "/pagination",
  },
  {
    name: "Sorting",
    path: "/sorting",
  },
  {
    name: "Filtering",
    path: "/filtering",
  },
  {
    name: "Selection",
    path: "/selection",
  },
  {
    name: "Editing",
    path: "/editing",
  },
  {
    name: "Styling",
    path: "/styling",
  },
  {
    name: "Export",
    path: "/export",
  },
  {
    name: "Versions",
    path: "/versions",
  },
  {
    name: "Migrate",
    path: "/migrate",
  },
];

const ContentsNavbar: FC = () => {
  const pathname = usePathname();

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
