import { Grid, RowDef, ColDef } from "@absreim/react-bootstrap-data-grid";
import heroData from "./heroes.json";
import { Hero } from "./types";
import { FC } from "react";

export const heroColumns: ColDef[] = [
  { type: "string", name: "hero", label: "Hero", width: 140 },
  { type: "string", name: "religious", label: "Religious", width: 110 },
  { type: "string", name: "provisions", label: "Provisions", width: 150 },
  { type: "number", name: "maxHp", label: "Max HP", width: 100 },
  { type: "number", name: "maxHpPerRank", label: "HP / Rank", width: 110 },
  { type: "number", name: "dodge", label: "Dodge", width: 90 },
  { type: "number", name: "dodgePerRank", label: "Dodge / Rank", width: 150 },
  { type: "number", name: "protection", label: "Protection", width: 120 },
  { type: "number", name: "speedLv1", label: "Speed Lv 1", width: 120 },
  { type: "number", name: "speedLv2", label: "Speed Lv 2", width: 120 },
  { type: "number", name: "speedLv3", label: "Speed Lv 3", width: 120 },
  { type: "number", name: "speedLv4", label: "Speed Lv 4", width: 120 },
  { type: "number", name: "speedLv5", label: "Speed Lv 5", width: 120 },
  { type: "number", name: "critLv1", label: "Crit % Lv 1", width: 120 },
  { type: "number", name: "critLv2", label: "Crit % Lv 2", width: 120 },
  { type: "number", name: "critLv3", label: "Crit % Lv 3", width: 120 },
  { type: "number", name: "critLv4", label: "Crit % Lv 4", width: 120 },
  { type: "number", name: "critLv5", label: "Crit % Lv 5", width: 120 },
  {
    type: "number",
    name: "damageMinLv1",
    label: "Damage Min Lv 1",
    width: 170,
  },
  {
    type: "number",
    name: "damageMinLv2",
    label: "Damage Min Lv 2",
    width: 170,
  },
  {
    type: "number",
    name: "damageMinLv3",
    label: "Damage Min Lv 3",
    width: 170,
  },
  {
    type: "number",
    name: "damageMinLv4",
    label: "Damage Min Lv 4",
    width: 170,
  },
  {
    type: "number",
    name: "damageMinLv5",
    label: "Damage Min Lv 5",
    width: 170,
  },
  {
    type: "number",
    name: "damageMaxLv1",
    label: "Damage Max Lv 1",
    width: 170,
  },
  {
    type: "number",
    name: "damageMaxLv2",
    label: "Damage Max Lv 2",
    width: 170,
  },
  {
    type: "number",
    name: "damageMaxLv3",
    label: "Damage Max Lv 3",
    width: 170,
  },
  {
    type: "number",
    name: "damageMaxLv4",
    label: "Damage Max Lv 4",
    width: 170,
  },
  {
    type: "number",
    name: "damageMaxLv5",
    label: "Damage Max Lv 5",
    width: 170,
  },
  { type: "number", name: "stunRes", label: "Stun Res %", width: 140 },
  { type: "number", name: "blightRes", label: "Blight Res %", width: 150 },
  { type: "number", name: "bleedRes", label: "Bleed Res %", width: 150 },
  { type: "number", name: "diseaseRes", label: "Disease Res %", width: 150 },
  { type: "number", name: "moveRes", label: "Move Res %", width: 140 },
  { type: "number", name: "debuffRes", label: "Debuff Res %", width: 150 },
  {
    type: "number",
    name: "deathblowRes",
    label: "Deathblow Res %",
    width: 170,
  },
  { type: "number", name: "trapRes", label: "Trap Res %", width: 120 },
];

heroColumns.forEach((hero) => {
  hero.sortable = true;
});

const rows: RowDef<Hero>[] = heroData.map((hero) => ({
  id: hero.hero,
  data: hero,
}));

const SortDemoGrid: FC = () => (
  <Grid
    rows={rows}
    cols={heroColumns}
    width="parent"
    sortModel={{ type: "uncontrolled", initialSortColDef: null }}
  />
);

export default SortDemoGrid;
