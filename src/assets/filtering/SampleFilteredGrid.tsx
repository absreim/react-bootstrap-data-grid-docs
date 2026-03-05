"use client";

import Grid, {
  ColDef,
  EditableTableFilterState,
  FilterModel,
  RowDef,
} from "@absreim/react-bootstrap-data-grid";
import { FC, useState } from "react";

const cols: ColDef[] = [
  {
    type: "number",
    name: "number",
    label: "Number",
  },
  {
    type: "string",
    name: "version",
    label: "Version",
  },
  {
    type: "date",
    name: "date",
    label: "Date",
  },
];

interface Data {
  number: number;
  version: string;
  date: Date;
}

const rows: RowDef<Data>[] = [
  {
    id: 0,
    data: {
      number: 7,
      version: "4.1.1.5849914",
      date: new Date("2024-09-05"),
    },
  },
  {
    id: 1,
    data: {
      number: 6,
      version: "4.1.1.4763283",
      date: new Date("2024-02-16"),
    },
  },
  {
    id: 2,
    data: {
      number: 5,
      version: "4.1.1.4061076",
      date: new Date("2023-11-30"),
    },
  },
  {
    id: 3,
    data: {
      number: 4,
      version: "4.1.1.3882084",
      date: new Date("2023-11-02"),
    },
  },
  {
    id: 4,
    data: {
      number: 3,
      version: "4.1.1.3732833",
      date: new Date("2023-09-22"),
    },
  },
  {
    id: 5,
    data: {
      number: 2,
      version: "4.1.1.3686210",
      date: new Date("2023-08-31"),
    },
  },
  {
    id: 6,
    data: {
      number: 1,
      version: "4.1.1.3669438",
      date: new Date("2023-08-25"),
    },
  },
  {
    id: 7,
    data: {
      number: 0,
      version: "4.1.1.3622274",
      date: new Date("2023-08-03"),
    },
  },
];

const SampleFilteredGrid: FC = () => {
  const [tableFilterState, setTableFilterState] =
    useState<EditableTableFilterState>({
      number: {
        type: "number",
        scheme: "lessOrEqual",
        numValue: 4,
        enabled: true,
      },
      version: {
        type: "string",
        scheme: "startsWith",
        searchString: "4.1.1.3",
        enabled: true,
      },
      date: {
        type: "date",
        scheme: "startFrom",
        startDate: new Date("2023-08-15"),
        enabled: true,
      },
    });

  const filterModel: FilterModel = { tableFilterState, setTableFilterState };

  return <Grid rows={rows} cols={cols} filterModel={filterModel} />;
};

export default SampleFilteredGrid;
