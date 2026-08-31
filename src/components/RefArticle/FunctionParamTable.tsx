import { FC } from "react";
import { FunctionParam } from "@/static/api/types";
import Table from "react-bootstrap/Table";
import TokenBlock from "@/components/RefArticle/TokenBlock";

export interface FunctionParamTableProps {
  functionParams: FunctionParam[];
}

const FunctionParamTable: FC<FunctionParamTableProps> = ({
  functionParams,
}) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Definition</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {functionParams.map(({ name, comment, definition }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>
              <code>
                <TokenBlock tokens={definition} />
              </code>
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

export default FunctionParamTable;
