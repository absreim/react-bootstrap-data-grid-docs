"use client";

import Grid, { TableSortModel } from "@absreim/react-bootstrap-data-grid";
import { rows, cols } from "./sampleSortedGridData";
import { FC } from "react";

const SampleUncontrolledSortedGrid: FC = () => {
  const tableSortModel: TableSortModel = {
    type: "uncontrolled",
    initialSortColDef: {
      name: "name",
      order: "asc",
    },
  };

  return <Grid rows={rows} cols={cols} sortModel={tableSortModel} />;
};

export default SampleUncontrolledSortedGrid;
