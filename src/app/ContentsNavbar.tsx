"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { LinkDefinition } from "@/app/types";

interface ContentsNavbarProps {
  linkDefs: LinkDefinition[];
}

const ContentsNavbar: FC<ContentsNavbarProps> = ({ linkDefs }) => {
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
