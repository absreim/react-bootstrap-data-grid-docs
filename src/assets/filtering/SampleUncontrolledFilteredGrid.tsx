"use client";

import Grid, {
  UncontrolledFilterModel,
} from "@absreim/react-bootstrap-data-grid";
import { FC } from "react";
import { cols, rows } from "@/assets/filtering/sampleFilteredGridData";

const SampleUncontrolledFilteredGrid: FC = () => {
  const filterModel: UncontrolledFilterModel = {
    type: "uncontrolled",
    filterTableCaption: "Uncontrolled filter mode example",
  };

  return <Grid rows={rows} cols={cols} filterModel={filterModel} />;
};

export default SampleUncontrolledFilteredGrid;
