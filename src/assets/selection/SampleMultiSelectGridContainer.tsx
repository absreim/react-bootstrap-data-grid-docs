"use client";

import { FC, useState } from "react";
import { SelectMode } from "@absreim/react-bootstrap-data-grid";
import SelectModeSelector from "@/assets/selection/SelectModeSelector";
import SampleMultiSelectGrid from "@/assets/selection/SampleMultiSelectGrid";

const SampleMultiSelectGridContainer: FC = () => {
  const [mode, setMode] = useState<SelectMode>("both");

  return (
    <div>
      <SelectModeSelector
        mode={mode}
        setMode={setMode}
        radioGroupName={"sample-multiselect-grid"}
      />
      <SampleMultiSelectGrid mode={mode} />
    </div>
  );
};

export default SampleMultiSelectGridContainer;
