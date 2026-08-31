import { Interface } from "@/static/api/types";
import { FC } from "react";
import TypeParamTable from "@/components/RefArticle/TypeParamTable";
import MemberTable from "@/components/RefArticle/MemberTable";
import Badge from "react-bootstrap/Badge";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import CommentSection from "@/components/RefArticle/CommentSection";
import ProBadge from "@/assets/ProBadge";

export interface InterfaceProps {
  interfaceItem: Interface;
}

const InterfaceArticle: FC<InterfaceProps> = ({ interfaceItem }) => {
  return (
    <>
      <h1>
        <Badge>Interface</Badge> {interfaceItem.name}
        {interfaceItem.proOnly && (
          <>
            {" "}
            <ProBadge />
          </>
        )}
      </h1>
      <h2>Definition</h2>
      <code>
        <TokenBlock tokens={interfaceItem.definition} />
      </code>
      <h2>Comments</h2>
      <CommentSection commentBlocks={interfaceItem.comment} />
      {interfaceItem.typeParams.length > 0 && (
        <>
          <h2>Type Parameters</h2>
          <TypeParamTable typeParams={interfaceItem.typeParams} />
        </>
      )}
      <h2>Properties</h2>
      <MemberTable members={interfaceItem.members} />
    </>
  );
};

export default InterfaceArticle;
