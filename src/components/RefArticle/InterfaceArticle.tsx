import { Interface } from "@/static/api/types";
import { FC } from "react";
import TypeParamTable from "@/components/RefArticle/TypeParamTable";
import MemberTable from "@/components/RefArticle/MemberTable";
import Badge from "react-bootstrap/Badge";

export interface InterfaceProps {
  interfaceItem: Interface;
}

const InterfaceArticle: FC<InterfaceProps> = ({ interfaceItem }) => {
  return (
    <>
      <h1>{interfaceItem.name} <Badge>Interface</Badge></h1>
      <section>
        {interfaceItem.comment.map((commentParagraph, index) => (
          <p key={index}>{commentParagraph}</p>
        ))}
      </section>
      <h2>Type Parameters</h2>
      <TypeParamTable typeParams={interfaceItem.typeParams} />
      <h2>Properties</h2>
      <MemberTable members={interfaceItem.members} />
    </>
  );
};

export default InterfaceArticle;
