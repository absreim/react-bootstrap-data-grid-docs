"use client";

import Grid, { GridPaginationState } from "@absreim/react-bootstrap-data-grid";
import { FC, useState } from "react";
import { cols, rows } from "@/assets/pagination/paginatedGridData";

const ControlledPaginatedGrid: FC = () => {
  const [pageSizeIndex, setPageSizeIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const paginationState: GridPaginationState = {
    pageSizeOptions: [5, 10, 15],
    pageSizeIndex: pageSizeIndex,
    setPageSizeIndex: (pageSizeIndex) => setPageSizeIndex(pageSizeIndex),
    currentPage: pageNum,
    setCurrentPage: (pageNum) => setPageNum(pageNum),
    maxPageButtons: 5,
    componentSize: "large",
  };

  return <Grid rows={rows} cols={cols} pagination={paginationState} />;
};

export default ControlledPaginatedGrid;
