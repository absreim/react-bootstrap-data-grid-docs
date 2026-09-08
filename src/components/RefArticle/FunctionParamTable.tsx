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
              <TokenBlock tokens={definition} />
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

export default FunctionParamTable;
