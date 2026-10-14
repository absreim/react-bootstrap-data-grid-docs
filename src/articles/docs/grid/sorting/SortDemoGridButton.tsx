import { FC } from "react";
import CsbOpenButton from "@/components/CsbOpenButton";
import params from "@/static/csb/SortDemoGrid.json";

const SortDemoGridButton: FC = () => <CsbOpenButton params={params} />

export default SortDemoGridButton;
