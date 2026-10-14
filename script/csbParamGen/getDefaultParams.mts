import type { FileParamSet } from "./types";
import packageJsonBaseline from "./baseline/baseline-package.json" with { type: "json" };
import getIndexTsx from "./baseline/getIndexTsx.mts";
import indexHtml from "./baseline/indexHtml.mts";

const CSB_RBDG_VERSION = "^4.3.0";

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
