"use client";

import Grid, { ColDef, RowDef } from "@absreim/react-bootstrap-data-grid";
import { FC } from "react";

interface SpellData {
  name: string;
  range: number;
  school: string;
}

const data: SpellData[] = [
  {
    name: "Arcane Gate",
    range: 18,
    school: "Conjuration",
  },
  {
    name: "Chain Lightning",
    range: 18,
    school: "Evocation",
  },
  {
    name: "Circle of Death",
    range: 18,
    school: "Necromancy",
  },
  {
    name: "Create Undead",
    range: 3,
    school: "Necromancy",
  },
  {
    name: "Disintegrate",
    range: 9,
    school: "Evocation",
  },
  {
    name: "Eyebite",
    range: 18,
    school: "Necromancy",
  },
  {
    name: "Flesh to Stone",
    range: 18,
    school: "Transmutation",
  },
  {
    name: "Globe of Invulnerability",
    range: 3,
    school: "Abjuration",
  },
  {
    name: "Otiluke's Freezing Sphere",
    range: 1.5,
    school: "Evocation",
  },
  {
    name: "Otto's Irresistible Dance",
    range: 9,
    school: "Evocation",
  },
  {
    name: "Sunbeam",
    range: 18,
    school: "Evocation",
  },
  {
    name: "Wall of Ice",
    range: 18,
    school: "Evocation",
  },
];

const rows: RowDef<SpellData>[] = data.map((data, index) => ({
  id: index,
  data,
}));

const cols: ColDef[] = [
  {
    name: "name",
    label: "Name",
    type: "string",
  },
  {
    name: "range",
    label: "Range (m)",
    type: "number",
  },
  {
    name: "school",
    label: "School",
    type: "string",
  },
];

const SampleToolbarGrid: FC = () => (
  <Grid
    rows={rows}
    cols={cols}
    useToolbar
    filterModel={{ type: "uncontrolled" }}
    pagination={{
      type: "uncontrolled",
      pageSizeOptions: [5, 10, 50],
      startingPageSizeIndex: 0,
    }}
  />
);

export default SampleToolbarGrid;
