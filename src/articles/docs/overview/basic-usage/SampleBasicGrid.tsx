"use client";

import Grid from "@absreim/react-bootstrap-data-grid/grid";
import { FC } from "react";
import { rows, cols } from "./sampleData";

const SampleBasicGrid: FC = () => <Grid rows={rows} cols={cols} />;

export default SampleBasicGrid;
