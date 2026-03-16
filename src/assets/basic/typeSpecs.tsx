import { SpecTableRow } from "@/shared/TypeSpecTable";

const cofDef: SpecTableRow[] = [
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
