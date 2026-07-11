"use client";

import Table, {
  UncontrolledPaginationModel,
} from "@absreim/react-bootstrap-data-grid/table";
import { FC } from "react";
import { cols, rows } from "@/assets/pagination/tableData";

const UncontrolledPaginatedTable: FC = () => {
  const paginationState: UncontrolledPaginationModel = {
    type: "uncontrolled",
    pageSizeOptions: [5, 10, 15],
  };

  return <Table rows={rows} cols={cols} pagination={paginationState} />;
};

export default UncontrolledPaginatedTable;
