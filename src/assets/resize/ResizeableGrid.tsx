"use client";

import GridPro, {
  ProColDef,
  RowDef,
  StyleModel,
} from "@absreim/react-bootstrap-data-grid-pro";
import { FC, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

interface UnitStats {
  name: string;
  hp: number;
  speed: number;
  attack: number;
  range: number;
  desc: string;
}

const rows: RowDef<UnitStats>[] = [
  {
    id: 0,
    data: {
      name: "Arclight",
      hp: 4813,
      speed: 7,
      attack: 347,
      range: 95,
      desc: "Medium anti-swarm mech",
    },
  },
  {
    id: 1,
    data: {
      name: "Crawler",
      hp: 263,
      speed: 16,
      attack: 79,
      range: 6,
      desc: "Light melee swarm robot",
    },
  },
  {
    id: 2,
    data: {
      name: "Fang",
      hp: 117,
      speed: 6,
      attack: 63,
      range: 75,
      desc: "Light ranged swarm robot",
    },
  },
  {
    id: 3,
    data: {
      name: "Hound",
      hp: 879,
      speed: 10,
      attack: 246,
      range: 70,
      desc: "Light anti-swarm mech",
    },
  },
  {
    id: 4,
    data: {
      name: "Marksman",
      hp: 1622,
      speed: 8,
      attack: 2329,
      range: 140,
      desc: "Long range sniper",
    },
  },
  {
    id: 5,
    data: {
      name: "Void Eye",
      hp: 1522,
      speed: 8,
      attack: 995,
      range: 100,
      desc: "Light high-damage robot",
    },
  },
  {
    id: 6,
    data: {
      name: "Vortex",
      hp: 7071,
      speed: 8,
      attack: 1385,
      range: 85,
      desc: "Medium anti-medium robot",
    },
  },
];

const styleModel: StyleModel = {
  mainTableStyleModel: {
    tbodyTd: (rowId, displayRowIndex, colIndex) =>
      colIndex === 5
        ? ["text-nowrap", "text-truncate"]
        : [],
  },
};

const ResizeableGrid: FC = () => {
  const [descWidth, setDescWidth] = useState<number>(200);
  const cols: ProColDef[] = useMemo<ProColDef[]>(
    () => [
      {
        name: "name",
        type: "string",
        label: "Name",
        sortable: true,
        resizeable: true,
        width: 150,
        minResizeWidth: 150,
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
        sortable: false,
        resizeable: true,
        width: {
          width: descWidth,
          setWidth: setDescWidth,
        },
        maxResizeWidth: 300,
      },
    ],
    [descWidth],
  );

  return (
    <Stack gap={2}>
      <h6>Mechabellum 100-cost Units</h6>
      <Button onClick={() => setDescWidth(200)} className="align-self-start">
        Reset Description Column Width
      </Button>
      <GridPro
        sortModel={{ type: "uncontrolled", initialSortColDef: null }}
        responsive={true}
        rows={rows}
        cols={cols}
        displayMode="block"
        styleModel={styleModel}
      />
    </Stack>
  );
};

export default ResizeableGrid;
