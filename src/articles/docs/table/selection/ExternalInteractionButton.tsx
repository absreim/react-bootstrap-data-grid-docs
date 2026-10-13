import getCodeSampleParams from "@/static/csb/getCodeSampleParams";
import path from "path";
import { FC } from "react";
import CsbOpenButton from "@/components/CsbOpenButton";
import getContainingDir from "@/static/getContainingDir";

const params = await getCodeSampleParams(
  path.resolve(
    getContainingDir(import.meta.url),
    "ExternalInteractionExample.tsx",
  ),
  false,
  true,
);

const ExternalInteractionButton: FC = () => <CsbOpenButton params={params} />;

export default ExternalInteractionButton;
