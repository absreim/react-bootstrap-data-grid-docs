"use client";

import { FC, useMemo, useState } from "react";
import Grid, {
  ColDef,
  MultiSelectModel,
  RowDef,
  RowId,
} from "@absreim/react-bootstrap-data-grid";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const cols: ColDef[] = [
  {
    type: "number",
    name: "number",
    label: "Number",
  },
];

const origRows: RowDef<{ number: number }>[] = [
  {
    id: 0,
    data: {
      number: 1,
    },
  },
  {
    id: 1,
    data: {
      number: 2,
    },
  },
  {
    id: 2,
    data: {
      number: 3,
    },
  },
  {
    id: 3,
    data: {
      number: 4,
    },
  },
  {
    id: 4,
    data: {
      number: 5,
    },
  },
];

const ExternalInteractionExample: FC = () => {
  const [rows, setRows] = useState<RowDef[]>(origRows);
  const [selected, setSelected] = useState<RowId[]>([]);
  const selectModel: MultiSelectModel = useMemo(
    () => ({
      mode: "both",
      type: "multi",
      selected,
      setSelected,
    }),
    [selected],
  );

  const deleteSelectedRows = () => {
    setRows(rows.filter((_, index) => !selected.includes(index)));
    setSelected([]);
  };

  const resetRows = () => {
    setRows(origRows.slice());
  };

  return (
    <Stack gap={2}>
      <Grid rows={rows} cols={cols} selectModel={selectModel} />
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Button
          onClick={resetRows}
          disabled={rows.length === origRows.length}
          variant="secondary"
        >
          Reset
        </Button>
        <Button
          onClick={deleteSelectedRows}
          disabled={selected.length === 0}
          variant="primary"
        >
          Delete Selected
        </Button>
      </Stack>
    </Stack>
  );
};

export default ExternalInteractionExample;
