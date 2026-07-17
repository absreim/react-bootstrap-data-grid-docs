import { FC } from "react";

const TableStyleSheetTable: FC = () => (
  <table className="table">
    <caption>
      Style sheet file names for the table component by file type and edition
    </caption>
    <thead>
      <tr>
        <th></th>
        <th>Community</th>
        <th>Pro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Sass</th>
        <td>{"@absreim/react-bootstrap-data-grid/table.scss"}</td>
        <td>{"@absreim/react-bootstrap-data-grid-pro/table-pro.scss"}</td>
      </tr>
      <tr>
        <th>CSS</th>
        <td>{"@absreim/react-bootstrap-data-grid/table.css"}</td>
        <td>{"@absreim/react-bootstrap-data-grid-pro/table-pro.css"}</td>
      </tr>
    </tbody>
  </table>
);

export default TableStyleSheetTable;
