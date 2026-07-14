"use client";

import Table, {
  UncontrolledFilterModel,
} from "@absreim/react-bootstrap-data-grid/table";
import { FC } from "react";
import { cols, rows } from "@/assets/filtering/tableData";

const UncontrolledFilteredTable: FC = () => {
  const filterModel: UncontrolledFilterModel = {
    type: "uncontrolled",
    filterTableCaption: "Uncontrolled filter mode example",
  };

  return <Table rows={rows} cols={cols} filterModel={filterModel} />;
};

export default UncontrolledFilteredTable;
