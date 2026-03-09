"use client";

import Grid, {
  UncontrolledPaginationModel,
} from "@absreim/react-bootstrap-data-grid";
import { FC } from "react";
import { cols, rows } from "@/assets/pagination/paginatedGridData";

const UncontrolledPaginatedGrid: FC = () => {
  const paginationState: UncontrolledPaginationModel = {
    type: "uncontrolled",
    pageSizeOptions: [5, 10, 15],
  };

  return <Grid rows={rows} cols={cols} pagination={paginationState} />;
};

export default UncontrolledPaginatedGrid;
