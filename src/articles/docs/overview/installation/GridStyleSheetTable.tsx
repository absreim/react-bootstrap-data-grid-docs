import { FC } from "react";

const GridStyleSheetTable: FC = () => (
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
        <td>{"@absreim/react-bootstrap-data-grid/grid.scss"}</td>
        <td>{"@absreim/react-bootstrap-data-grid-pro/grid.scss"}</td>
      </tr>
      <tr>
        <th>CSS</th>
        <td>{"@absreim/react-bootstrap-data-grid/grid.css"}</td>
        <td>{"@absreim/react-bootstrap-data-grid-pro/grid.css"}</td>
      </tr>
    </tbody>
  </table>
);

export default GridStyleSheetTable;
