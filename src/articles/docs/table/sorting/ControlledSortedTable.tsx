"use client";

import Table, {
  SortColDef,
  TableSortModel,
} from "@absreim/react-bootstrap-data-grid/table";
import { rows, cols } from "./tableData";
import { FC, useState } from "react";

const ControlledSortedTable: FC = () => {
  const [sortColDef, setSortColDef] = useState<SortColDef | null>({
    name: "name",
    order: "asc",
  });

  const tableSortModel: TableSortModel = {
    sortColDef,
    setSortColDef,
  };

  return <Table rows={rows} cols={cols} sortModel={tableSortModel} />;
};

export default ControlledSortedTable;
