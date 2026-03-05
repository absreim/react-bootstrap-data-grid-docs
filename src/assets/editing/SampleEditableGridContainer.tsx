"use client";

import Grid, {
  ColDef,
  UpdateCallbackGenerator,
  RowDef,
  RowId,
  inputStrsToRowData,
} from "@absreim/react-bootstrap-data-grid";
import { FC, useState } from "react";

const cols: ColDef[] = [
  {
    name: "name",
    type: "string",
    label: "Name",
  },
  {
    name: "class",
    type: "string",
    label: "Class",
  },
  {
    name: "selectionPriority",
    type: "number",
    label: "Selection Priority",
  },
  {
    name: "recruitmentDate",
    type: "date",
    label: "Recruitment Date",
  },
];

interface Data {
  name: string;
  class: string;
  selectionPriority: number;
  recruitmentDate: Date;
}

const initRows: RowDef<Data>[] = [
  {
    id: 0,
    data: {
      name: "Astarion",
      class: "Rogue",
      selectionPriority: 1,
      recruitmentDate: new Date("2023-10-02"),
    },
  },
  {
    id: 1,
    data: {
      name: "Lae'zel",
      class: "Fighter",
      selectionPriority: 4,
      recruitmentDate: new Date("2023-09-30"),
    },
  },
  {
    id: 2,
    data: {
      name: "Shadowheart",
      class: "Cleric",
      selectionPriority: 2,
      recruitmentDate: new Date("2023-10-01"),
    },
  },
  {
    id: 3,
    data: {
      name: "Dark Urge",
      class: "Sorcerer",
      selectionPriority: 5,
      recruitmentDate: new Date("2023-09-29"),
    },
  },
  {
    id: 4,
    data: {
      name: "Gale",
      class: "Wizard",
      selectionPriority: 3,
      recruitmentDate: new Date("2023-10-03"),
    },
  },
  {
    id: 5,
    data: {
      name: "Wyll",
      class: "Warlock",
      selectionPriority: 5,
      recruitmentDate: new Date("2023-10-04"),
    },
  },
  {
    id: 6,
    data: {
      name: "Karlach",
      class: "Barbarian",
      selectionPriority: 4,
      recruitmentDate: new Date("2023-10-05"),
    },
  },
  {
    id: 7,
    data: {
      name: "Minthara",
      class: "Paladin",
      selectionPriority: 5,
      recruitmentDate: new Date("2023-10-06"),
    },
  },
  {
    id: 8,
    data: {
      name: "Halsin",
      class: "Druid",
      selectionPriority: 4,
      recruitmentDate: new Date("2023-10-07"),
    },
  },
  {
    id: 9,
    data: {
      name: "Jaheira",
      class: "Druid",
      selectionPriority: 4,
      recruitmentDate: new Date("2023-10-08"),
    },
  },
  {
    id: 10,
    data: {
      name: "Minsc",
      class: "Ranger",
      selectionPriority: 2,
      recruitmentDate: new Date("2023-10-09"),
    },
  },
];

const SampleEditableGridContainer: FC = () => {
  const [rows, setRows] = useState<RowDef[]>(initRows.slice());
  const getUpdateCallback: UpdateCallbackGenerator = (id) => (inputStrs) => {
    const newRows = rows.slice();
    const index = rows.findIndex((row) => row.id === id);
    if (index === undefined) {
      return;
    }

    newRows[index] = {
      id,
      data: inputStrsToRowData(cols, inputStrs),
    };
    setRows(newRows);
  };
  const getDeleteCallback: (id: RowId) => () => void = (id) => () => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      const index = rows.findIndex((row) => row.id === id);
      if (index === undefined) {
        return;
      }

      setRows(rows.toSpliced(index, 1));
    }
  };

  return (
    <Grid
      rows={rows}
      cols={cols}
      editModel={{ getUpdateCallback, getDeleteCallback }}
      caption={"Plan out your party for your BG3 adventure"}
    />
  );
};

export default SampleEditableGridContainer;
