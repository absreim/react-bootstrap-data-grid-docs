import Link from "next/link";
import { FC } from "react";

const filteringIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
  </svg>
);

const exportIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
  </svg>
);

const ToolbarIconsTable: FC = () => (
  <table className="table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Icon</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Filtering</td>
        <td>{filteringIcon}</td>
        <td>
          <p>
            Opens the <Link href="/docs/filtering">row filtering</Link>{" "}
            interface.
          </p>
          <p>
            If the toolbar is not enabled for a grid but filtering is enabled,
            the interface is still accessible via a separate button labelled
            <i>Filter Options Table</i>. See the{" "}
            <Link href="/docs/filtering">filtering</Link> documentation for live
            examples of this button.
          </p>
          <p>
            If the toolbar is enabled for a grid but filtering is disabled, this
            button will not be displayed on the toolbar.
          </p>
        </td>
      </tr>
      <tr>
        <td>Export</td>
        <td>{exportIcon}</td>
        <td>
          <p>
            Opens the <Link href="/docs/export">export</Link> interface.
          </p>
          <p>
            There is currently no way to access this interface other than
            through the toolbar.
          </p>
          <p>
            There is currently no way to remove access to this interface other
            than by disabling the toolbar.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default ToolbarIconsTable;
