"use client";

import Grid, { ColDef, RowDef } from "@absreim/react-bootstrap-data-grid/grid";
import { Trinket } from "@/articles/docs/grid/pagination/PaginationDemoGrid/types";
import trinketData from "./trinkets.json";
import { FC, useState } from "react";

const trinketColumns: ColDef[] = [
  { type: "string", name: "trinket", label: "Trinket", width: 200 },
  { type: "string", name: "rarity", label: "Rarity", width: 130 },
  { type: "string", name: "dlc", label: "DLC", width: 170 },
  { type: "string", name: "area", label: "Area / Cost", width: 160 },
  { type: "number", name: "effectCount", label: "Effect Count", width: 130 },
  { type: "string", name: "effects", label: "Effects", width: 480 },
  { type: "number", name: "maxHpPct", label: "Max HP %", width: 110 },
  { type: "number", name: "dodge", label: "Dodge", width: 90 },
  { type: "number", name: "protPct", label: "Prot %", width: 90 },
  { type: "number", name: "speed", label: "Speed", width: 90 },
  { type: "number", name: "accuracy", label: "Accuracy", width: 110 },
  { type: "number", name: "critPct", label: "Crit %", width: 90 },
  { type: "number", name: "damagePct", label: "Damage %", width: 110 },
  {
    type: "number",
    name: "stressTakenPct",
    label: "Stress Taken %",
    width: 140,
  },
  { type: "number", name: "stunRes", label: "Stun Res %", width: 120 },
  { type: "number", name: "blightRes", label: "Blight Res %", width: 130 },
  { type: "number", name: "bleedRes", label: "Bleed Res %", width: 130 },
  { type: "number", name: "diseaseRes", label: "Disease Res %", width: 140 },
  { type: "number", name: "moveRes", label: "Move Res %", width: 120 },
  { type: "number", name: "debuffRes", label: "Debuff Res %", width: 130 },
  {
    type: "number",
    name: "deathblowRes",
    label: "Deathblow Res %",
    width: 150,
  },
  { type: "number", name: "trapRes", label: "Trap Res %", width: 120 },
];

trinketColumns.forEach((trinket) => {
  trinket.sortable = true;
});

const rows: RowDef<Trinket>[] = trinketData.map((trinket) => ({
  id: trinket.trinket,
  data: trinket,
}));

const PaginationDemoGrid: FC = () => {
  const [pageSizeIndex, setPageSizeIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Grid
      rows={rows}
      cols={trinketColumns}
      width="parent"
      sortModel={{ type: "uncontrolled", initialSortColDef: null }}
      pagination={{
        type: "controlled",
        pageSizeIndex: pageSizeIndex,
        setPageSizeIndex,
        currentPage,
        setCurrentPage,
      }}
    />
  );
};

export default PaginationDemoGrid;
