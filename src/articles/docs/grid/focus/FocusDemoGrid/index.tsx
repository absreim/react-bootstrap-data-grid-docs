"use client";

import { UnitStats } from "./types";
import unitData from "./sc1_unit_stats.json";
import Grid, {
  RowDef,
  ColDef,
  BodyCellVariantFn,
  HeaderCellVariantFn,
} from "@absreim/react-bootstrap-data-grid/grid";
import { FC } from "react";

// Data source: Liquipedia

const rows: RowDef<UnitStats>[] = (unitData as UnitStats[]).map(
  (unit, index) => ({
    id: index,
    data: {
      ...unit,
    },
  }),
);

const cols: ColDef[] = [
  {
    type: "string",
    name: "unit",
    label: "Unit",
    width: 150,
  },
  {
    type: "string",
    name: "race",
    label: "Race",
  },
  {
    type: "number",
    name: "pop",
    label: "Pop",
  },
  {
    type: "string",
    name: "size",
    label: "Size",
  },
  {
    type: "string",
    name: "minerals",
    label: "Minerals",
  },
  {
    type: "string",
    name: "gas",
    label: "Gas",
  },
  {
    type: "string",
    name: "armor",
    label: "Armor",
  },
  {
    type: "number",
    name: "hp",
    label: "HP",
  },
  {
    type: "number",
    name: "shield",
    label: "Shield",
  },
  {
    type: "string",
    name: "groundAttack",
    label: "Ground Attack",
    width: 150,
  },
  {
    type: "string",
    name: "airAttack",
    label: "Air Attack",
  },
  {
    type: "string",
    name: "cooldown",
    label: "Cooldown",
  },
  {
    type: "string",
    name: "range",
    label: "Range",
  },
  {
    type: "string",
    name: "attackMod",
    label: "Attack Mod",
    width: 150,
  },
  {
    type: "string",
    name: "sight",
    label: "Sight",
  },
  {
    type: "string",
    name: "notes",
    label: "Notes",
  },
  {
    type: "string",
    name: "buildTime",
    label: "Build Time",
  },
];

const getHeaderCellVariant: HeaderCellVariantFn = () => "primary";

const getBodyCellVariant: BodyCellVariantFn = (_, row) => {
  switch (row.contents[1].value) {
    case "Protoss": {
      return "info";
    }
    case "Zerg": {
      return "warning";
    }
    default: {
      return "success";
    }
  }
};

const FocusDemoGrid: FC = () => (
  <Grid
    rows={rows}
    cols={cols}
    width="parent"
    headerCellVariant={getHeaderCellVariant}
    headerCellFocusVariant={getHeaderCellVariant}
    bodyCellVariant={getBodyCellVariant}
    bodyCellFocusVariant={getBodyCellVariant}
  />
);

export default FocusDemoGrid;
