import { FC } from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiteSectionsNavProps {
  navClasses?: string;
  variant?: string;
  onClick?: () => void;
}

const getActiveKey: (pathname: string) => string = (pathname) => {
  if (pathname.startsWith("/docs")) {
    return "docs";
  }

  if (pathname.startsWith("/blog")) {
    return "blog";
  }

  return "home";
}

const SiteSectionsNav: FC<SiteSectionsNavProps> = ({ navClasses, variant, onClick }) => {
  const pathname = usePathname();
  const activeKey = getActiveKey(pathname);

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
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/blog"
          eventKey="blog"
          onClick={onClick}
        >
          Blog
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SiteSectionsNav;
