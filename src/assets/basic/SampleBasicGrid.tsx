"use client";

import Grid, { ColDef, RowDef } from "@absreim/react-bootstrap-data-grid";
import { FC } from "react";

const cols: ColDef[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
  },
  {
    type: "number",
    name: "frequency",
    label: "Frequency (GHz)",
  },
  {
    type: "date",
    name: "releaseDate",
    label: "Release Date",
    formatter: (date: Date) => date.toDateString(),
  },
];

interface CpuInfo {
  name: string;
  frequency: number;
  releaseDate: Date;
}

const rows: RowDef<CpuInfo>[] = [
  {
    id: "m4",
    data: {
      name: "M4",
      frequency: 4.4,
      releaseDate: new Date(2024, 4, 15),
    },
  },
  {
    id: "m4-pro",
    data: {
      name: "M4 Pro",
      frequency: 4.51,
      releaseDate: new Date(2024, 10, 8),
    },
  },
  {
    id: "m4-max",
    data: {
      name: "M4 Max",
      frequency: 4.51,
      releaseDate: new Date(2024, 10, 8),
    },
  },
  {
    id: "m5",
    data: {
      name: "M5",
      frequency: 4.61,
      releaseDate: new Date(2025, 9, 15),
    },
  },
];

const SampleBasicGrid: FC = () => <Grid rows={rows} cols={cols} />;

export default SampleBasicGrid;
