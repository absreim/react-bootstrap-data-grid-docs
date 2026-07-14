import { SpecTableRow } from "@/shared/TypeSpecTable";

export const editModel: SpecTableRow[] = [
  {
    propertyName: "getUpdateCallback",
    typeDefinition: "UpdateCallbackGenerator",
    isRequired: true,
    description:
      "A function that takes the id of a row and returns a callback function for updating a row.",
  },
  {
    propertyName: "getDeleteCallback",
    typeDefinition: "(id: RowId) => () => void",
    isRequired: false,
    description:
      "A function takes the original index of a row and returns a callback function for deleting the row. Omitting this property disables the UI for deletions.",
  },
];
