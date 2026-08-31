import { FC } from "react";
import { TypeParam } from "@/static/api/types";
import Table from "react-bootstrap/Table";
import { renderToken } from "@/components/RefArticle/renderToken";
import TokenBlock from "@/components/RefArticle/TokenBlock";

export interface TypeParamTableProps {
  typeParams: TypeParam[];
}

const TypeParamTable: FC<TypeParamTableProps> = ({ typeParams }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Extends</th>
          <th>Default Value</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {typeParams.map(({ name, constraint, defaultValue, comment }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>
              {constraint ? <code>{renderToken(constraint)}</code> : "(None)"}
            </td>
            <td>
              {defaultValue ? (
                <code>{renderToken(defaultValue)}</code>
              ) : (
                "(None)"
              )}
            </td>
            <td>
              {comment.map((paragraphTokens, index) => (
                <p key={index}>
                  <TokenBlock tokens={paragraphTokens} />
                </p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TypeParamTable;
