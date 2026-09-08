import { Member } from "@/static/api/types";
import { FC } from "react";
import Table from "react-bootstrap/Table";
import TokenBlock from "@/components/RefArticle/TokenBlock";

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
              <TokenBlock tokens={definition}></TokenBlock>
            </td>
            <td>
              {comment.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MemberTable;
