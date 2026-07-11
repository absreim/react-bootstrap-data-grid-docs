"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { LinkDef } from "@/components/types";
import ProBadge from "@/assets/ProBadge";

interface ContentsNavbarProps {
  linkDefs: LinkDef[];
  onClick?: () => void;
}

const ContentsNavbar: FC<ContentsNavbarProps> = ({ linkDefs, onClick }) => {
  const pathname = usePathname();

  return (
    <Nav
      variant="pills"
      activeKey={pathname}
      className="flex-column rbdg-unsectioned-navbar-list"
    >
      {linkDefs.map(({ name, path, pro }, index) => (
        <Nav.Item key={index}>
          <Nav.Link as={Link} href={path} onClick={onClick}>
            {name}
            {pro && (
              <>
                {" "}
                <ProBadge />
              </>
            )}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default ContentsNavbar;
