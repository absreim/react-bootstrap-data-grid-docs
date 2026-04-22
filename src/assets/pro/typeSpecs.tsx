import { SpecTableRow } from "@/shared/TypeSpecTable";

export const proColDef: SpecTableRow[] = [
  {
    propertyName: "resizeable",
    typeDefinition: "boolean",
    isRequired: false,
    description: (
      <p>
        Enables resizing for the column. Note that the <code>displayMode</code>{" "}
        prop for the <code>GridPro</code> component must be set to{" "}
        <code>block</code>
        for resizing to work.
      </p>
    ),
  },
  {
    propertyName: "width",
    typeDefinition: "number | WidthModel",
    isRequired: false,
    description: (
      <>
        <p>
          Causes the grid to set <code>min-width</code> and{" "}
          <code>max-width</code> CSS styles for each cell in the column.
        </p>
        <p>
          In all cases, if a <code>WidthModel</code> is specified, the values
          set are based on the <code>width</code> property of the{" "}
          <code>WidthModel</code>.
        </p>
        <p>
          Otherwise, if the column is not resizeable, either because{" "}
          <code>resizeable</code> is falsy or <code>displayMode</code> is not{" "}
          <code>block</code>:
        </p>
        <ul>
          <li>
            If the value is omitted or undefined, no <code>min-width</code> or{" "}
            <code>max-width</code> style will be applied.
          </li>
          <li>
            If the value is a number, that number will be used to set{" "}
            <code>min-width</code> and <code>max-width</code>.
          </li>
        </ul>
        <p>If column is resizable:</p>
        <ul>
          <li>
            If the value is omitted or undefined, a value of <code>100</code> be
            chosen as the starting size of the column.
          </li>
          <li>
            If the value is a number, that number will be used as the starting
            width of the column.
          </li>
        </ul>
      </>
    ),
  },
  {
    propertyName: "minResizeWidth",
    typeDefinition: "number",
    isRequired: false,
    description: (
      <p>
        The minimum width to which the column can be resized. Only applicable if
        the column and table are resizeable. A default value of <code>32</code>{" "}
        or <code>64</code> is applied depending on whether sorting is enabled
        for the column.
      </p>
    ),
  },
  {
    propertyName: "maxResizeWidth",
    typeDefinition: "number",
    isRequired: false,
    description: (
      <p>
        The maximum width to which the column can be resized. Only applicable if
        the column and table are resizeable.
      </p>
    ),
  },
  {
    propertyName: "keyboardResizeStep",
    typeDefinition: "number",
    isRequired: false,
    description: (
      <p>
        The number of pixels to resize the column far each keypress when
        resizing via keyboard arrow keys. Defaults to <code>10</code>.
      </p>
    ),
  },
];

export const widthModel: SpecTableRow[] = [
  {
    propertyName: "width",
    typeDefinition: "number",
    isRequired: true,
    description: (
      <p>
        The current value for the width of a column. Often used as the source of
        truth for the width of column where resizing is enabled, but can also be
        used to programmatically control the width of a non-resizeable column.
      </p>
    ),
  },
  {
    propertyName: "setWidth",
    typeDefinition: "(width: number) => void",
    isRequired: true,
    description: (
      <p>
        Function used to set the value for the <code>width</code> property.
        Generally, when this function called, the value of the
        <code>width</code> property in the same object should be updated with
        the value passed into the function.
      </p>
    )
  }
];
