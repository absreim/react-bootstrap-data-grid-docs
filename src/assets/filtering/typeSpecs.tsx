import { SpecTableRow } from "@/shared/TypeSpecTable";

export const controlledFilterModel: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'controlled'",
    isRequired: false,
    description: (
      <p>
        Discriminator field to distinguish between this type and{" "}
        <code>UncontrolledFilterModel</code>. This property is optional for the
        sake of backwards compatibility.
      </p>
    ),
  },
  {
    propertyName: "tableFilterState",
    typeDefinition: "EditableTableFilterState",
    isRequired: true,
    description:
      "The state the represents the filtering options that are currently selected",
  },
  {
    propertyName: "setTableFilterState",
    typeDefinition: "(state: EditableTableFilterState) => void",
    isRequired: true,
    description: "Function to set a new tableFilterState",
  },
  {
    propertyName: "filterTableCaption",
    typeDefinition: "string",
    isRequired: false,
    description: (
      <p>
        String to set as the contents of the <code>caption</code> element of
        table containing filter options. If this property is not set, the filter
        options table will not have a caption.
      </p>
    ),
  },
];

export const uncontrolledFilterModel: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'uncontrolled'",
    isRequired: false,
    description: (
      <p>
        Discriminator field to distinguish between this type and{" "}
        <code>ControlledFilterModel</code>.
      </p>
    ),
  },
  {
    propertyName: "tableFilterState",
    typeDefinition: "EditableTableFilterState",
    isRequired: false,
    description: (
      <>
        <p>The starting state of the grid with regards to filtering.</p>
        <p>
          Note that this value is only read once, at the moment that the{" "}
          <code>Grid</code> component is mounted.
        </p>
        <p>
          If this property is not defined, the grid will create a blank filter
          state that includes each column in the gird. All form values will be
          blank and filtering will be initially disabled on every column.
        </p>
      </>
    ),
  },
  {
    propertyName: "filterTableCaption",
    typeDefinition: "string",
    isRequired: false,
    description: (
      <p>
        String to set as the contents of the <code>caption</code> element of
        table containing filter options. If this property is not set, the filter
        options table will not have a caption.
      </p>
    ),
  },
];

export const abstractFilterState: SpecTableRow[] = [
  {
    propertyName: "enabled",
    typeDefinition: "boolean",
    isRequired: true,
    description:
      "Flag representing whether this column's filter should be applied",
  },
];

export const stringFilterState: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'string'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between different column types. " +
      "Note that the type is the literal string 'string', not the JavaScript string type.",
  },
  {
    propertyName: "scheme",
    typeDefinition: "StringFilterScheme",
    isRequired: true,
    description: "The kind of string filter to apply",
  },
  {
    propertyName: "searchString",
    typeDefinition: "string",
    isRequired: true,
    description: "The search string with which to apply the filter",
  },
];

export const numberFilterState: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'number'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between different column types. " +
      "Note that the type is the literal string 'number', not the JavaScript number type.",
  },
  {
    propertyName: "scheme",
    typeDefinition: "NumberFilterScheme",
    isRequired: true,
    description: "The kind of number filter to apply",
  },
  {
    propertyName: "numValue",
    typeDefinition: "number | null",
    isRequired: true,
    description:
      "The number with which to apply the filter. A null value represents an empty number input value.",
  },
];

export const abstractDateFilterState: SpecTableRow[] = [
  {
    propertyName: "type",
    typeDefinition: "'date' | 'datetime'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between different column types.",
  },
  {
    propertyName: "scheme",
    typeDefinition: "DateFilterScheme",
    isRequired: true,
    description: "The kind of date/datetime filter to apply",
  },
];

export const startDateFilterState: SpecTableRow[] = [
  {
    propertyName: "scheme",
    typeDefinition: "'startFrom'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between date filter types.",
  },
  {
    propertyName: "startDate",
    typeDefinition: "Date | null",
    isRequired: true,
    description:
      "The starting date or datetime for the filter to apply. A null value represents an empty date input value.",
  },
];

export const endDateFilterState: SpecTableRow[] = [
  {
    propertyName: "scheme",
    typeDefinition: "'endAt'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between date filter types.",
  },
  {
    propertyName: "endDate",
    typeDefinition: "Date | null",
    isRequired: true,
    description:
      "The ending date or datetime for the filter to apply. A null value represents an empty date input value.",
  },
];

export const betweenDatesFilterState: SpecTableRow[] = [
  {
    propertyName: "scheme",
    typeDefinition: "'between'",
    isRequired: true,
    description:
      "A type discriminator used to differentiate between date filter types.",
  },
  {
    propertyName: "startDate",
    typeDefinition: "Date | null",
    isRequired: true,
    description:
      "The starting date or datetime for the filter to apply. A null value represents an empty date input value.",
  },
  {
    propertyName: "endDate",
    typeDefinition: "Date | null",
    isRequired: true,
    description:
      "The ending date or datetime for the filter to apply. A null value represents an empty date input value.",
  },
];
