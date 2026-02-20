import { FC } from "react";
import { NestedNavLinkNode } from "@/app/docs/[slug]/types";

export interface NestedNavLinkListProps {
  nodes: NestedNavLinkNode[];
}

const NestedNavLinkList: FC<NestedNavLinkListProps> = ({ nodes }) => {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.value}>
          <a href={node.href} aria-hidden={true}>
            {node.value}
          </a>
          {node.children.length > 0 && (
            <NestedNavLinkList nodes={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedNavLinkList;
