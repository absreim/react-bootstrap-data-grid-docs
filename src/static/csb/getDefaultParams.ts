import { FileParamSet } from "@/static/csb/types";
import packageJsonBaseline from "./baseline/baseline-package.json";
import { CSB_RBDG_VERSION } from "@/static/constants";
import getIndexTsx from "@/static/csb/baseline/getIndexTsx";
import indexHtml from "@/static/csb/baseline/indexHtml";

const getDefaultParams: (
  subdirName: string,
  isPro: boolean,
) => FileParamSet = (subdirName, isPro) => {
  const dependencies = Object.assign({}, packageJsonBaseline.dependencies, {
    [`@absreim/react-bootstrap-data-grid${isPro ? "-pro" : ""}`]:
      CSB_RBDG_VERSION,
  });
  const packageJson = Object.assign({}, packageJsonBaseline, { dependencies });
  const indexTsx = getIndexTsx(subdirName);

  return {
    "package.json": {
      content: packageJson,
    },
    "src/index.tsx": {
      content: indexTsx,
    },
    "public/index.html": {
      content: indexHtml,
    },
  };
};

export default getDefaultParams;
