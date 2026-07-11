"use client";

import Table, {
  SortColDef,
  SortModel,
} from "@absreim/react-bootstrap-data-grid/table";
import { rows, cols } from "./tableData";
import { FC, useState } from "react";

const ControlledSortedTable: FC = () => {
  const [sortColDef, setSortColDef] = useState<SortColDef | null>({
    name: "name",
    order: "asc",
  });

  const tableSortModel: SortModel = {
    sortColDef,
    setSortColDef,
  };

  return <Table rows={rows} cols={cols} sortModel={tableSortModel} />;
};

export default ControlledSortedTable;
