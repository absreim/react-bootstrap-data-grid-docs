"use client";

import Table, { SortModel } from "@absreim/react-bootstrap-data-grid/table";
import { rows, cols } from "./tableData";
import { FC } from "react";

const UncontrolledSortedTable: FC = () => {
  const tableSortModel: SortModel = {
    type: "uncontrolled",
    initialSortColDef: {
      name: "name",
      order: "asc",
    },
  };

  return <Table rows={rows} cols={cols} sortModel={tableSortModel} />;
};

export default UncontrolledSortedTable;
