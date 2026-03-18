import { SpecTableRow } from "@/shared/TypeSpecTable";

export const colDef: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "ColDataTypeStrings",
    isRequired: true,
    description: "The string that specifies the type of values in the column.",
  },
  {
    propertyName: "name",
    typeDefinition: "string",
    isRequired: true,
    description: (
      <p>
        The name of the property on the <code>RowData</code> object.
      </p>
    ),
  },
  {
    propertyName: "label",
    typeDefinition: "string",
    isRequired: true,
    description:
      "The name of the column displayed in the UI in places like " +
      "the column heading.",
  },
  {
    propertyName: "formatter",
    typeDefinition: "(value: ValueType) => string",
    isRequired: false,
    description:
      "A function called on the value of data in the column for " +
      "display in the grid.",
  },
  {
    propertyName: "sortable",
    typeDefinition: "boolean",
    isRequired: false,
    description: (
      <p>
        When set to <code>true</code>, makes it possible to sort on this column
        via the UI. Otherwise, the user cannot sort on this column.
      </p>
    ),
  },
];

export const rowDef: SpecTableRow[] = [
  {
    propertyName: "id",
    typeDefinition: "RowId",
    isRequired: true,
    description: (
      <p>
        Used for the <code>key</code> prop of the components used internally by
        the <code>Grid</code> component to represent rows. Like any{" "}
        <code>key</code> props for React, the values must be unique for each
        item in the same list.
      </p>
    ),
  },
  {
    propertyName: "data",
    typeDefinition: "RowData<Data>",
    isRequired: true,
    description: (
      <>
        <p>
          Contains the values for the row as prescribed by the <code>cols</code>
          prop passed to the same <code>Grid</code> component.
        </p>
        <p>
          There should be one property in this object for each{" "}
          <code>ColDef</code> in the <code>cols</code> prop. The name of each
          property should be the same the corresponding <code>name</code>
          property in the <code>ColDef</code>.
        </p>
        <p>
          The generic type <code>Data</code> in this property is meant to
          provide coding assistance in IDEs and is optional. It is up to the
          developer to ensure that generic type provided lines up with the
          column definitions in the <code>cols</code> prop. If the values in
          this property do not line up with the column definitions, one is
          likely to experience a runtime error.
        </p>
      </>
    ),
  },
];
