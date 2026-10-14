const getIndexTsx: (sampleFolderName: string) => string = (
  sampleFolderName,
) => `
import * as ReactDOM from "react-dom/client";
import React from "react";
import ${sampleFolderName} from "./${sampleFolderName}";
import "bootstrap/dist/css/bootstrap.min.css";
import "@absreim/react-bootstrap-data-grid/grid.css";

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <${sampleFolderName} />
  </React.StrictMode>,
);
`;

export default getIndexTsx;
