"use client";

import Grid, {
  EditableTableFilterState,
  FilterModel,
} from "@absreim/react-bootstrap-data-grid";
import { FC, useState } from "react";
import { cols, rows } from "@/assets/filtering/sampleFilteredGridData";

const SampleControlledFilteredGrid: FC = () => {
  const [tableFilterState, setTableFilterState] =
    useState<EditableTableFilterState>({
      number: {
        type: "number",
        scheme: "lessOrEqual",
        numValue: 4,
        enabled: true,
      },
      version: {
        type: "string",
        scheme: "startsWith",
        searchString: "4.1.1.3",
        enabled: true,
      },
      date: {
        type: "date",
        scheme: "startFrom",
        startDate: new Date("2023-08-15"),
        enabled: true,
      },
    });

  const filterModel: FilterModel = { tableFilterState, setTableFilterState };

  return <Grid rows={rows} cols={cols} filterModel={filterModel} />;
};

export default SampleControlledFilteredGrid;
