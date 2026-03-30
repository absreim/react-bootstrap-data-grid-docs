import { FC } from "react";
import { NestedNavLinkNode } from "@/shared/types";

export interface NestedNavLinkListProps {
  nodes: NestedNavLinkNode[];
}

const NestedNavLinkList: FC<NestedNavLinkListProps> = ({ nodes }) => {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.value} className="rbdg-docs-toc-li">
          <a href={node.href}>{node.value}</a>
          {node.children.length > 0 && (
            <NestedNavLinkList nodes={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedNavLinkList;
