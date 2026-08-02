import { FC } from 'react';
import { LinkSection } from "@/components/types";
import ContentsNavbar from "@/components/useArticleNavbar/ContentsNavbar";

export interface SectionedNavbarProps {
  linkSections: LinkSection[];
  onClick?: () => void;
}

const SectionedNavbar: FC<SectionedNavbarProps> = ({ linkSections, onClick }) => {
  return (
    <ul className="rbdg-sectioned-navbar-list">
      {linkSections.map(({ name, icon, path, links }) => (
        <li key={path} className="d-flex flex-column gap-1">
          <div className="d-flex align-items-center gap-1">
            {icon}
            <div>{name}</div>
          </div>
          <ContentsNavbar linkDefs={links} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default SectionedNavbar;
