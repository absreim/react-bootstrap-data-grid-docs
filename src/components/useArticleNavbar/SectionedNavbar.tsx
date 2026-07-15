import { FC } from 'react';
import { LinkSection } from "@/components/types";
import ContentsNavbar from "@/components/useArticleNavbar/ContentsNavbar";

export interface SectionedNavbarProps {
  linkSections: LinkSection[];
}

const SectionedNavbar: FC<SectionedNavbarProps> = ({ linkSections }) => {
  return (
    <ul className="rbdg-sectioned-navbar-list">
      {linkSections.map(({ name, icon, path, links }) => (
        <li key={path}>
          <div>
            {icon} {name}
          </div>
          <ContentsNavbar linkDefs={links} />
        </li>
      ))}
    </ul>
  );
}

export default SectionedNavbar;
