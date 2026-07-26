"use client";

import { MechabellumUnit, UnitRow } from "./types";
import unitData from "./unit-data.json";
import Grid, {
  RowDef,
  ColDef,
  GridProps,
} from "@absreim/react-bootstrap-data-grid/grid";
import { FC } from "react";

const rows: RowDef<UnitRow>[] = (unitData as MechabellumUnit[]).map((unit) => ({
  id: unit.id,
  data: {
    ...unit,
  },
}));

const cols: ColDef[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
  },
  {
    type: "string",
    name: "subtitle",
    label: "Subtitle",
    width: 200,
  },
  {
    type: "string",
    name: "description",
    label: "Description",
    width: 300,
  },
  {
    type: "string",
    name: "category",
    label: "Category",
  },
  {
    type: "string",
    name: "cost",
    label: "Cost",
  },
  {
    type: "string",
    name: "hp",
    label: "HP",
  },
  {
    type: "number",
    name: "speedMps",
    label: "Speed (m/s)",
  },
  {
    type: "string",
    name: "atk",
    label: "Attack",
  },
  {
    type: "number",
    name: "splashRangeM",
    label: "Splash Range (m)",
    width: 150,
  },
  {
    type: "number",
    name: "attackIntervalS",
    label: "Attack Interval (s)",
    width: 150,
  },
  {
    type: "number",
    name: "rangeM",
    label: "Range (m)",
  },
  {
    type: "string",
    name: "target",
    label: "Targeting",
  },
  {
    type: "number",
    name: "unlockCost",
    label: "Unlock Cost",
  },
  {
    type: "number",
    name: "upgradeExp",
    label: "Upgrade Exp",
  },
  {
    type: "number",
    name: "rotationSpeedDegPerS",
    label: "Rotation Speed (degrees/s)",
    width: 150,
  },
];

const getBodyRowVariant: GridProps["bodyRowVariant"] = (row) => {
  const categoryCell = row.contents.find(({ fieldName }) => fieldName === "category")!;
  if (categoryCell.value === "ground") {
    return "success";
  }

  return "info";
}

const IntroDemoGrid: FC = () => (
  <Grid
    rows={rows}
    cols={cols}
    width="parent"
    bodyRowVariant={getBodyRowVariant}
    borders="full"
  />
);

export default IntroDemoGrid;
