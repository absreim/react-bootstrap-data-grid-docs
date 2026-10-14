const getIndexTsx: (sampleFolderName: string) => string = (
  sampleFolderName,
) => `
import * as ReactDOM from "react-dom/client";
import React from "react";
import ${sampleFolderName} from "./${sampleFolderName}";

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <${sampleFolderName} />
  </React.StrictMode>,
);
`;

export default getIndexTsx;
