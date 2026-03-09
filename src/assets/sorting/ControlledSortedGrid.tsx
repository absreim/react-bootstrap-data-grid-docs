"use client";

import Grid, {
  SortColDef,
  TableSortModel,
} from "@absreim/react-bootstrap-data-grid";
import { rows, cols } from "./sortedGridData";
import { FC, useState } from "react";

const ControlledSortedGrid: FC = () => {
  const [sortColDef, setSortColDef] = useState<SortColDef | null>({
    name: "name",
    order: "asc",
  });

  const tableSortModel: TableSortModel = {
    sortColDef,
    setSortColDef,
  };

  return <Grid rows={rows} cols={cols} sortModel={tableSortModel} />;
};

export default ControlledSortedGrid;
