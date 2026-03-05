"use client";

import Grid, {
  ColDef,
  MultiSelectModel,
  RowDef,
  RowId,
  SelectMode,
} from "@absreim/react-bootstrap-data-grid";
import { FC, useMemo, useState } from "react";

export interface SampleMultiSelectGridProps {
  mode: SelectMode;
}

const cols: ColDef[] = [
  {
    name: "name",
    type: "string",
    label: "Name",
  },
  {
    name: "damage",
    type: "number",
    label: "Average Damage",
  },
  {
    name: "weight",
    type: "number",
    label: "Weight (lb)",
  },
  {
    name: "price",
    type: "number",
    label: "Price",
  },
];

interface Data {
  name: string;
  damage: number;
  weight: number;
  price: number;
}

const rows: RowDef<Data>[] = [
  {
    id: 0,
    data: {
      name: "Short Bow",
      damage: 3.5,
      weight: 1.8,
      price: 16,
    },
  },
  {
    id: 1,
    data: {
      name: "Long Bow",
      damage: 4.5,
      weight: 2.2,
      price: 50,
    },
  },
  {
    id: 2,
    data: {
      name: "Light Crossbow",
      damage: 4.5,
      weight: 4.5,
      price: 30,
    },
  },
  {
    id: 3,
    data: {
      name: "Heavy Crossbow",
      damage: 5.5,
      weight: 16.2,
      price: 65,
    },
  },
  {
    id: 4,
    data: {
      name: "Hand Crossbow",
      damage: 3.5,
      weight: 1.8,
      price: 50,
    },
  },
];

const SampleMultiSelectGrid: FC<SampleMultiSelectGridProps> = ({ mode }) => {
  const [selected, setSelected] = useState<RowId[]>([]);
  const selectModel: MultiSelectModel = useMemo(
    () => ({
      mode,
      type: "multi",
      selected,
      setSelected,
    }),
    [mode, selected],
  );

  return <Grid rows={rows} cols={cols} selectModel={selectModel} />;
};

export default SampleMultiSelectGrid;
