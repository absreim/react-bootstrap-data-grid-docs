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
    type: "string",
    name: "race",
    label: "Race",
  },
  {
    type: "string",
    name: "class",
    label: "Class",
  },
];

const rows: RowDef<{ name: string; race: string; class: string }>[] = [
  {
    id: 0,
    data: {
      name: "The Dark Urge",
      race: "Dragonborn",
      class: "Sorcerer",
    },
  },
  {
    id: 1,
    data: {
      name: "Lae'zel",
      race: "Githyanki",
      class: "Fighter",
    },
  },
  {
    id: 2,
    data: {
      name: "Shadowheart",
      race: "Half-elf",
      class: "Cleric",
    },
  },
  {
    id: 3,
    data: {
      name: "Astarion",
      race: "Elf",
      class: "Rogue",
    },
  },
  {
    id: 4,
    data: {
      name: "Gale",
      race: "Human",
      class: "Wizard",
    },
  },
  {
    id: 5,
    data: {
      name: "Wyll",
      race: "Human",
      class: "Warlock",
    },
  },
  {
    id: 6,
    data: {
      name: "Karlach",
      race: "Tiefling",
      class: "Barbarian",
    },
  },
];

const BasicSampleGrid: FC = () => {
  return <Grid rows={rows} cols={cols} />;
};

export default BasicSampleGrid;
