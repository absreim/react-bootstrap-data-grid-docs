"use client";

import Table from "@absreim/react-bootstrap-data-grid/table";
import { FC } from "react";
import { rows, cols } from "./sampleData";

const SampleBasicTable: FC = () => <Table rows={rows} cols={cols} />;

export default SampleBasicTable;
