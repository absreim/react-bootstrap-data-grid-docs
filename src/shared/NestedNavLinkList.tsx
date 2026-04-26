import { FC } from "react";
import { NestedNavLinkNode } from "@/shared/types";
import classNames from "classnames";

export interface NestedNavLinkListProps {
  nodes: NestedNavLinkNode[];
  visible: string[];
}

const NestedNavLinkList: FC<NestedNavLinkListProps> = ({ nodes, visible }) => {
  return (
    <ul>
      {nodes.map((node) => {
        const curNodeVisible = visible.includes(node.id || "");
        return <li
          key={node.value}
          className={classNames("rbdg-docs-toc-li", "ps-2", {
            "border-start": curNodeVisible,
            "border-2": curNodeVisible,
          })}
        >
          <a href={node.href}>{node.value}</a>
          {node.children.length > 0 && (
            <NestedNavLinkList nodes={node.children} visible={visible} />
          )}
        </li>;
      })}
    </ul>
  );
};

export default NestedNavLinkList;
