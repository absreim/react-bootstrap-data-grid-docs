"use client";

import { FC, useMemo, useState } from "react";
import Grid, {
  ColDef,
  RowDef,
  RowId,
  SelectMode,
  SingleSelectModel,
} from "@absreim/react-bootstrap-data-grid";

export interface SampleSingleSelectGridProps {
  mode: SelectMode;
}

const cols: ColDef[] = [
  {
    name: "name",
    type: "string",
    label: "Name",
  },
  {
    name: "school",
    type: "string",
    label: "School",
  },
];

interface Data {
  name: string;
  school: string;
}

const rows: RowDef<Data>[] = [
  {
    id: 0,
    data: {
      name: "Acid Splash",
      school: "Conjuration",
    },
  },
  {
    id: 1,
    data: {
      name: "Blade Ward",
      school: "Abjuration",
    },
  },
  {
    id: 2,
    data: {
      name: "Bone Chill",
      school: "Necromancy",
    },
  },
  {
    id: 3,
    data: {
      name: "Fire Bolt",
      school: "Evocation",
    },
  },
  {
    id: 4,
    data: {
      name: "Minor Illusion",
      school: "Illusion",
    },
  },
  {
    id: 5,
    data: {
      name: "Friends",
      school: "Enchantment",
    },
  },
  {
    id: 6,
    data: {
      name: "Ray of Frost",
      school: "Evocation",
    },
  },
];

const SampleSingleSelectGrid: FC<SampleSingleSelectGridProps> = ({ mode }) => {
  const [selected, setSelected] = useState<RowId | null>(null);
  const selectModel: SingleSelectModel = useMemo(
    () => ({
      mode,
      type: "single",
      selected,
      setSelected,
      groupName: "single selection example grid (BG3 cantrips)",
    }),
    [mode, selected],
  );

  return <Grid rows={rows} cols={cols} selectModel={selectModel} />;
};

export default SampleSingleSelectGrid;
