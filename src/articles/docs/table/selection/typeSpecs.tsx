import { SpecTableRow } from "@/shared/TypeSpecTable";

export const multiSelectMode: SpecTableRow[] = [
  {
    propertyName: "mode",
    typeDefinition: "SelectMode",
    isRequired: true,
    description:
      "Specified whether to allow selection via inputs elements in a dedicated column, via clicking on rows, or both simultaneously",
  },
  {
    propertyName: "type",
    typeDefinition: "'multi'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between different selection modes",
  },
  {
    propertyName: "selected",
    typeDefinition: "RowId[]",
    isRequired: true,
    description:
      "An array of index values that tracks the selected rows. Any rows with an index that is in this array is considered selected.",
  },
  {
    propertyName: "setSelected",
    typeDefinition: "(selected: RowId[]) => void",
    isRequired: true,
    description:
      "Setter function to update the state that tracks the selected rows",
  },
];

export const singleSelectMode: SpecTableRow[] = [
  {
    propertyName: "mode",
    typeDefinition: "SelectMode",
    isRequired: true,
    description:
      "Specified whether to allow selection via inputs elements in a dedicated column, via clicking on rows, or both simultaneously",
  },
  {
    propertyName: "type",
    typeDefinition: "'single'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between different selection modes",
  },
  {
    propertyName: "selected",
    typeDefinition: "RowId | null",
    isRequired: true,
    description:
      "A number value to track the index of the currently selected row, or null if no row is selected.",
  },
  {
    propertyName: "setSelected",
    typeDefinition: "(selected: RowId | null) => void",
    isRequired: true,
    description:
      "Setter function to update the state that tracks the selected row",
  },
  {
    propertyName: "groupName",
    typeDefinition: "string",
    isRequired: true,
    description:
      "A string used for the 'name' property of radio input elements. It must be unique across the entire page to avoid unexpected behavior.",
  },
];
