"use client";

import { FC, useState } from "react";
import { SelectMode } from "@absreim/react-bootstrap-data-grid/table";
import SelectModeSelector from "./SelectModeSelector";
import SampleSingleSelectTable from "./SampleSingleSelectTable";

const SampleSingleSelectTableContainer: FC = () => {
  const [mode, setMode] = useState<SelectMode>("both");

  return (
    <div>
      <SelectModeSelector
        mode={mode}
        setMode={setMode}
        radioGroupName={"sample-single-select-grid"}
      />
      <SampleSingleSelectTable mode={mode} />
    </div>
  );
};

export default SampleSingleSelectTableContainer;
