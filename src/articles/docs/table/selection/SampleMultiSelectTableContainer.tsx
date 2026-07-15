"use client";

import { FC, useState } from "react";
import { SelectMode } from "@absreim/react-bootstrap-data-grid/table";
import SelectModeSelector from "./SelectModeSelector";
import SampleMultiSelectTable from "./SampleMultiSelectTable";

const SampleMultiSelectTableContainer: FC = () => {
  const [mode, setMode] = useState<SelectMode>("both");

  return (
    <div>
      <SelectModeSelector
        mode={mode}
        setMode={setMode}
        radioGroupName={"sample-multiselect-grid"}
      />
      <SampleMultiSelectTable mode={mode} />
    </div>
  );
};

export default SampleMultiSelectTableContainer;
