import { FC } from "react";

const CommonStyleSheetTable: FC = () => (
  <table className="table">
    <caption>
      Style sheet file names for the grid component by file type and edition
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
        <td>{"@absreim/react-bootstrap-data-grid/common.scss"}</td>
        <td>{"@absreim/react-bootstrap-data-grid-pro/common.scss"}</td>
      </tr>
      <tr>
        <th>CSS</th>
        <td>{"@absreim/react-bootstrap-data-grid/common.css"}</td>
        <td>{"@absreim/react-bootstrap-data-grid-pro/common.css"}</td>
      </tr>
    </tbody>
  </table>
);

export default CommonStyleSheetTable;
