import { SpecTableRow } from "@/shared/TypeSpecTable";

export const controlledTableSortModel: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'controlled'",
    isRequired: false,
    description: (
      <p>
        Discriminator field between <code>ControlledTableSortModel</code> and{" "}
        <code>UncontrolledTableSortModel</code>. Marked optional for backwards
        compatibility.
      </p>
    ),
  },
  {
    propertyName: "sortColDef",
    typeDefinition: "SortColDef | null",
    isRequired: true,
    description: (
      <p>
        The current setting for sorting for the Grid. A null value means that no
        column is being sorted. If no column is being sorted, then the rows will
        appear in the order of the <code>rows</code> prop passed to the{" "}
        <code>Grid</code> component.
      </p>
    ),
  },
  {
    propertyName: "setSortColDef",
    typeDefinition: "(sortColDef: SortColDef | null) => void",
    isRequired: true,
    description: (
      <p>
        Callback function to set the state of <code>sortColDef</code> in
        response to user input
      </p>
    ),
  },
];

export const uncontrolledTableSortModel: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'uncontrolled'",
    isRequired: true,
    description: (
      <p>
        Discriminator field between <code>ControlledTableSortModel</code> and{" "}
        <code>UncontrolledTableSortModel</code>.
      </p>
    ),
  },
  {
    propertyName: "initialSortColDef",
    typeDefinition: "SortColDef | null",
    isRequired: true,
    description: (
      <>
        <p>
          The initial state of the grid with regards to sorting. Note that due
          to the nature of React and <code>useState</code>, this prop will only
          take effect once, upon per mounting of the <code>Grid</code>{" "}
          component.
        </p>
        <p>
          If you wish to update the sorting state of the grid externally, either
          unmount and remount the <code>Grid</code> component when doing so or
          use the sorting feature of the grid in controlled mode.
        </p>
        <p>
          A null value means that no column is being sorted. If no column is
          being sorted, then the rows will appear in the order of the{" "}
          <code>rows</code> prop passed to the <code>Grid</code> component.
        </p>
      </>
    ),
  },
];

export const sortColDef: SpecTableRow[] = [
  {
    propertyName: "name",
    typeDefinition: "string",
    isRequired: true,
    description: "The name of the column to sort",
  },
  {
    propertyName: "order",
    typeDefinition: '"asc" | "desc"',
    isRequired: true,
    description: "The sort order, ascending or descending",
  },
];
