import { Member } from "@/static/api/types";
import { FC } from "react";
import Table from "react-bootstrap/Table";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import CommentSection from "@/components/RefArticle/CommentSection";

export interface MemberTableProps {
  members: Member[];
}

const MemberTable: FC<MemberTableProps> = ({ members }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Optional</th>
          <th>Definition</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {members.map(({ name, isOptional, definition, comment }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{isOptional ? "true" : "false"}</td>
            <td>
              <code>
                <TokenBlock tokens={definition}></TokenBlock>
              </code>
            </td>
            <td>
              <CommentSection commentBlocks={comment} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MemberTable;
