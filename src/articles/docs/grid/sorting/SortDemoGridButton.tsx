import getCodeSampleParams from "@/static/csb/getCodeSampleParams";
import path from "path";
import { FC } from "react";
import CsbOpenButton from "@/components/CsbOpenButton";

const params = await getCodeSampleParams(
  path.resolve(process.cwd(), "src", "articles", "docs", "grid", "sorting", "SortDemoGrid"),
  false,
);

const SortDemoGridButton: FC = () => <CsbOpenButton params={params} />

export default SortDemoGridButton;
