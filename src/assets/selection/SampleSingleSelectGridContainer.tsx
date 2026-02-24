"use client";

import { FC, useState } from "react";
import { SelectMode } from "@absreim/react-bootstrap-data-grid";
import SelectModeSelector from "@/assets/selection/SelectModeSelector";
import SampleSingleSelectGrid from "@/assets/selection/SampleSingleSelectGrid";

const SampleSingleSelectGridContainer: FC = () => {
  const [mode, setMode] = useState<SelectMode>("both");

  return (
    <div>
      <SelectModeSelector
        mode={mode}
        setMode={setMode}
        radioGroupName={"sample-single-select-grid"}
      />
      <SampleSingleSelectGrid mode={mode} />
    </div>
  );
};

export default SampleSingleSelectGridContainer;
