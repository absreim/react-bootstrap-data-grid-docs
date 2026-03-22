import { FC } from "react";
import Nav from "react-bootstrap/esm/Nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiteSectionsNavProps {
  navClasses?: string;
  variant?: string;
  onClick?: () => void;
}

const SiteSectionsNav: FC<SiteSectionsNavProps> = ({ navClasses, variant, onClick }) => {
  const pathname = usePathname();
  const activeKey = pathname.startsWith("/docs") ? "docs" : "home";

  return (
    <Nav activeKey={activeKey} className={navClasses} variant={variant}>
      <Nav.Item>
        <Nav.Link as={Link} href="/" eventKey="home" onClick={onClick}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/docs/introduction"
          eventKey="docs"
          onClick={onClick}
        >
          Docs
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SiteSectionsNav;
