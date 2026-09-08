import { FC } from 'react'
import { TypeParam } from "@/static/api/types";
import Table from "react-bootstrap/Table";
import { renderToken } from "@/components/RefArticle/renderToken";

export interface TypeParamTableProps {
  typeParams: TypeParam[];
}

const TypeParamTable: FC<TypeParamTableProps> = ({ typeParams }) => {
  return <Table responsive>
    <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Extends
      </th>
      <th>
        Default Value
      </th>
    </tr>
    </thead>
    <tbody>
    {
      typeParams.map(({ name, constraint, defaultValue }) => <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          {constraint ? renderToken(constraint) : "(None)"}
        </td>
        <td>
          {defaultValue ? renderToken(defaultValue) : "(None)"}
        </td>
      </tr>)
    }
    </tbody>
  </Table>
}

export default TypeParamTable;
