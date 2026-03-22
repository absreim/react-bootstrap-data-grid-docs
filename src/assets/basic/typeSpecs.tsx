import { SpecTableRow } from "@/shared/TypeSpecTable";
import Link from "next/link";

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

export const gridProps: SpecTableRow[] = [
  {
    propertyName: "rows",
    typeDefinition: "RowDef[]",
    isRequired: true,
    description:
      "An array of objects containing the rows for the grid." +
      "Post-processing such as filtering, pagination, and formatting will be " +
      "applied to these objects.",
  },
  {
    propertyName: "cols",
    typeDefinition: "ColDef[]",
    isRequired: true,
    description:
      "An array of objects containing the column definitions for " +
      "the grid.",
  },
  {
    propertyName: "pagination",
    typeDefinition: "GridPaginationState",
    isRequired: false,
    description: (
      <p>
        Used to enable <Link href="/docs/pagination">pagination</Link> for the grid.
      </p>
    ),
  },
  {
    propertyName: "sortModel",
    typeDefinition: "TableSortModel",
    isRequired: false,
    description: (
      <p>
        Enables <Link href="/docs/sorting">sorting</Link> for the grid.
      </p>
    ),
  },
  {
    propertyName: "filterModel",
    typeDefinition: "FilterModel",
    isRequired: false,
    description: (
      <p>
        Enables <Link href="/docs/filtering">filtering</Link> for the grid.
      </p>
    ),
  },
  {
    propertyName: "selectModel",
    typeDefinition: "SelectModel",
    isRequired: false,
    description: (
      <p>
        Enables <Link href="/docs/selection">selection</Link> for the grid.
      </p>
    ),
  },
  {
    propertyName: "editModel",
    typeDefinition: "EditModel",
    isRequired: false,
    description: (
      <p>
        Enables <Link href="/docs/editing">editing</Link> for the grid.
      </p>
    ),
  },
  {
    propertyName: "caption",
    typeDefinition: "string",
    isRequired: false,
    description: (
      <p>
        If provided, displays a caption for the table with the string provided.
      </p>
    ),
  },
  {
    propertyName: "styleModel",
    typeDefinition: "StyleModel",
    isRequired: false,
    description: (
      <p>
        Allows for customizing CSS classes on various elements of the grid. See
        the <Link href="/docs/styling">styling</Link> section of the documentation
        for details.
      </p>
    ),
  },
  {
    propertyName: "useToolbar",
    typeDefinition: "boolean",
    isRequired: false,
    description: (
      <>
        <p>
          If set to <code>true</code>, displays a toolbar that the user can use
          to <Link href="/docs/export">export</Link> data from the grid.
        </p>
        <p>
          Additionally, if set to <code>true</code> and filtering is enabled for
          the grid, the filtering interface will only be accessible from the
          toolbar. The default button for accessing the filtering interface will
          no longer be rendered.
        </p>
      </>
    ),
  },
  {
    propertyName: "responsive",
    typeDefinition: "boolean",
    isRequired: false,
    description: (
      <>
        <p>
          If set to <code>true</code>, makes the table responsive at all
          breakpoints by inserting a containing <code>div</code> and using
          Bootstrap&apos;s{" "}
          <Link href="https://getbootstrap.com/docs/5.3/content/tables/#responsive-tables">
            table-responsive
          </Link>{" "}
          CSS class.
        </p>
        <p>
          Responsive tables are set to scroll horizontally when the containing
          element is not wide enough to fit the table&apos;s contents. If a
          table is not responsive, when horizontal space is tight, the browser
          may more aggressively try to shrink the width of each column and/or
          overflow content past the table&apos;s horizontal boundaries.
        </p>
      </>
    ),
  },
];
