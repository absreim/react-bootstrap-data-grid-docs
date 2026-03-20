"use client";

import Grid, {
  ColDef,
  EditableTableFilterState,
  EditModel,
  FilterModel,
  RowDef,
  RowId,
  StyleModel,
  UpdateCallbackGenerator,
} from "@absreim/react-bootstrap-data-grid";
import { FC, MouseEventHandler, useCallback, useMemo, useState } from "react";

const cols: ColDef[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
  },
  {
    type: "number",
    name: "timesAttended",
    label: "Times Attended",
  },
  {
    type: "date",
    name: "recruitmentDate",
    label: "Recruitment Date",
  },
];

interface Data {
  name: string;
  timesAttended: number;
  recruitmentDate: Date;
}

const initRows: RowDef<Data>[] = [
  {
    id: 0,
    data: {
      name: "Commander Shepard",
      timesAttended: 100,
      recruitmentDate: new Date("2183-01-01"),
    },
  },
  {
    id: 1,
    data: {
      name: "Kaidan Alenko",
      timesAttended: 25,
      recruitmentDate: new Date("2183-01-02"),
    },
  },
  {
    id: 2,
    data: {
      name: "Ashley Williams",
      timesAttended: 20,
      recruitmentDate: new Date("2183-01-10"),
    },
  },
  {
    id: 3,
    data: {
      name: "Garrus Vakarian",
      timesAttended: 15,
      recruitmentDate: new Date("2183-02-01"),
    },
  },
  {
    id: 4,
    data: {
      name: "Tali'Zorah nar Rayya",
      timesAttended: 12,
      recruitmentDate: new Date("2183-03-15"),
    },
  },
  {
    id: 5,
    data: {
      name: "Urdnot Wrex",
      timesAttended: 10,
      recruitmentDate: new Date("2183-03-20"),
    },
  },
  {
    id: 6,
    data: {
      name: "Liara T'soni",
      timesAttended: 8,
      recruitmentDate: new Date("2183-06-21"),
    },
  },
];

const caption = "Normandy SR-1 Insiders";

const styleModel: StyleModel = {
  mainTableStyleModel: {
    table: ["table-striped"],
    tbodyTdInput: () => ["form-control-sm"],
    editDeleteButton: () => ["btn-danger"],
    editSaveButton: () => ["btn-success"],
    editCancelButton: () => ["btn-warning"],
  },
  additionalComponentsStyleModel: {
    topLevelDiv: ["vstack flex-column-reverse border"],
    filterInputsDiv: [
      "vstack flex-column-reverse align-items-start border m-2 p-2 gap-2",
    ],
    tableAndPaginationDiv: ["vstack flex-column-reverse border m-2 p-2"],
    filterUiToggleButton: ["btn-info"],
  },
  filterInputTableStyleModel: {
    table: ["table-striped-columns"],
    startDateInput: () => ["form-control-sm"],
    endDateInput: () => ["form-control-sm"],
    submitButton: ["btn-success"],
    form: ["table-responsive", "w-100"]
  },
};

const SampleStyledInputsGrid: FC = () => {
  const [rows, setRows] = useState<RowDef[]>(initRows);
  const [tableFilterState, setTableFilterState] =
    useState<EditableTableFilterState>({
      name: {
        type: "string",
        scheme: "contains",
        searchString: "",
        enabled: false,
      },
      timesAttended: {
        type: "number",
        scheme: "greaterOrEqual",
        numValue: null,
        enabled: false,
      },
      recruitmentDate: {
        type: "date",
        scheme: "between",
        startDate: null,
        endDate: null,
        enabled: false,
      },
    });

  const filterModel: FilterModel = useMemo(
    () => ({
      tableFilterState,
      setTableFilterState,
    }),
    [tableFilterState],
  );

  const getUpdateCallback: UpdateCallbackGenerator = useCallback(
    (id) => (rowData) => {
      const newRows = rows.slice();
      const index = rows.findIndex((row) => row.id === id);
      if (index === undefined) {
        return;
      }

      newRows[index] = {
        id,
        data: rowData,
      };
      setRows(newRows);
    },
    [rows],
  );
  const getDeleteCallback: (id: RowId) => () => void = useCallback(
    (id) => () => {
      const index = rows.findIndex((row) => row.id === id);
      if (index === undefined) {
        return;
      }

      setRows(rows.toSpliced(index, 1));
    },
    [rows],
  );

  const editModel: EditModel = { getUpdateCallback, getDeleteCallback };
  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    setRows(initRows);
  };

  return (
    <div className="vstack gap-2 align-items-start border p-2">
      <Grid
        rows={rows}
        cols={cols}
        caption={caption}
        filterModel={filterModel}
        editModel={editModel}
        styleModel={styleModel}
        responsive={true}
      />
      <button className="btn btn-secondary btn-sm" onClick={handleReset}>
        Reset Rows
      </button>
    </div>
  );
};

export default SampleStyledInputsGrid;
