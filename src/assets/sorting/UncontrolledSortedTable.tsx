"use client";

import Table, { TableSortModel } from "@absreim/react-bootstrap-data-grid/table";
import { rows, cols } from "./tableData";
import { FC } from "react";

const UncontrolledSortedTable: FC = () => {
  const tableSortModel: TableSortModel = {
    type: "uncontrolled",
    initialSortColDef: {
      name: "name",
      order: "asc",
    },
  };

  return <Table rows={rows} cols={cols} sortModel={tableSortModel} />;
};

export default UncontrolledSortedTable;
