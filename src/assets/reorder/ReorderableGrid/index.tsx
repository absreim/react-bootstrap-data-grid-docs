"use client";

import GridPro, {
  ProColDef,
  reorderRows,
  RowDef,
  ReorderCallback,
  ReorderStyleModel,
} from "@absreim/react-bootstrap-data-grid-pro";
import { UnitStats } from "@/assets/shared/types";
import { FC, useCallback, useState } from "react";
import "./custom.scss";

const initRows: RowDef<UnitStats>[] = [
  {
    id: "Fire Badger",
    data: {
      name: "Fire Badger",
      hp: 4222,
      speed: 9,
      attack: 27,
      range: 75,
      desc: "Medium anti-swarm tank",
    },
  },
  {
    id: "Hacker",
    data: {
      name: "Hacker",
      hp: 3249,
      speed: 8,
      attack: 585,
      range: 110,
      desc: "Hacker bot",
    },
  },
  {
    id: "Mustang",
    data: {
      name: "Mustang",
      hp: 343,
      speed: 16,
      attack: 36,
      range: 95,
      desc: "High-speed all-purpose tank",
    },
  },
  {
    id: "Phantom Ray",
    data: {
      name: "Phantom Ray",
      hp: 3412,
      speed: 16,
      attack: 1087,
      range: 65,
      desc: "Medium-sized aircraft",
    },
  },
  {
    id: "Phoenix",
    data: {
      name: "Phoenix",
      hp: 1491,
      speed: 16,
      attack: 3219,
      range: 120,
      desc: "Long-range strike aircraft",
    },
  },
  {
    id: "Rhino",
    data: {
      name: "Rhino",
      hp: 19297,
      speed: 16,
      attack: 3560,
      range: 6,
      desc: "Heavy melee bot",
    },
  },
  {
    id: "Sabertooth",
    data: {
      name: "Sabertooth",
      hp: 15541,
      speed: 8,
      attack: 7858,
      range: 95,
      desc: "Heavy tank",
    },
  },
  {
    id: "Sledgehammer",
    data: {
      name: "Sledgehammer",
      hp: 3478,
      speed: 7,
      attack: 608,
      range: 95,
      desc: "Heavy tank",
    },
  },
  {
    id: "Steel Ball",
    data: {
      name: "Steel Ball",
      hp: 4571,
      speed: 16,
      attack: 55,
      range: 45,
      desc: "High-speed anti-unit bot",
    },
  },
  {
    id: "Stormcaller",
    data: {
      name: "Stormcaller",
      hp: 1149,
      speed: 6,
      attack: 772,
      range: 180,
      desc: "Heavy rocket launcher",
    },
  },
  {
    id: "Tarantula",
    data: {
      name: "Tarantula",
      hp: 14773,
      speed: 8,
      attack: 496,
      range: 80,
      desc: "Heavy mech",
    },
  },
  {
    id: "Wasp",
    data: {
      name: "Wasp",
      hp: 311,
      speed: 16,
      attack: 202,
      range: 50,
      desc: "Light aircraft",
    },
  },
];

const cols: ProColDef[] = [
  {
    name: "name",
    type: "string",
    label: "Name",
    sortable: true,
  },
  {
    name: "hp",
    type: "number",
    label: "HP",
    sortable: true,
  },
  {
    name: "speed",
    type: "number",
    label: "Speed (m/s)",
    sortable: true,
  },
  {
    name: "attack",
    type: "number",
    label: "Attack",
    sortable: true,
  },
  {
    name: "range",
    type: "number",
    label: "Range (m)",
    sortable: true,
  },
  {
    name: "desc",
    type: "string",
    label: "Description",
  },
];

const reorderStyleModel: ReorderStyleModel = {
  draggedRowClasses: ["custom-reorder-dragged-row"],
  draggedRowPredecessorClasses: ["custom-reorder-dragged-row-pred"],
  topBorderRowClasses: ["custom-reorder-above-drag-target-row"],
  bottomBorderRowClasses: ["custom-reorder-below-drag-target-row"],
  ghostDivClasses: ["custom-reorder-ghost", "border", "border-3"],
};

const ReorderableGrid: FC = () => {
  const [rows, setRows] = useState(initRows);
  const reorderCallback: ReorderCallback = useCallback(
    (id, destIndex) => {
      const newRows = reorderRows(rows, id, destIndex);
      setRows(newRows);
    },
    [rows],
  );

  return (
    <GridPro
      useToolbar
      rows={rows}
      cols={cols}
      sortModel={{
        type: "uncontrolled",
        initialSortColDef: null,
      }}
      filterModel={{ type: "uncontrolled" }}
      reorder={{ callback: reorderCallback }}
      styleModel={{
        reorderModel: reorderStyleModel,
      }}
    />
  );
};

export default ReorderableGrid;
