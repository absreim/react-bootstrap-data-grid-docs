import { SpecTableRow } from "@/shared/TypeSpecTable";
import Link from "next/link";

export const additionalComponentsStyleModel: SpecTableRow[] = [
  {
    propertyName: "topLevelDiv",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          CSS classes for the top level <i>div</i> element that contains other
          divs, the following order:
        </p>
        <ul>
          <li>
            A div that contains the button to toggle the visibility of the
            filter options table followed by the filter options table itself
          </li>
          <li>
            A div that contains he main table for displaying data followed by
            the pagination component (if pagination is enabled)
          </li>
        </ul>
      </>
    ),
  },
  {
    propertyName: "filterInputsDiv",
    typeDefinition: "string[]",
    isRequired: false,
    description:
      "CSS classes for the div that contains toggle button for the " +
      "filter options table followed by the filter options table itself",
  },
  {
    propertyName: "tableAndPaginationDiv",
    typeDefinition: "string[]",
    isRequired: false,
    description:
      "CSS classes for the div that contains main table followed by the " +
      "pagination component if pagination is enabled",
  },
  {
    propertyName: "filterUiToggleButton",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          CSS classes for the button that toggles the visibility of the filter
          options table. Only appears if filtering is enabled (by supplying the{" "}
          <code>filterModel</code> prop) on the <code>Grid</code> component.
        </p>
        <p>
          The variant of this button is set to <i>primary</i> by default via the{" "}
          <code>btn-primary</code> class. That class will not be applied if a
          non-empty is passed via this property.
        </p>
      </>
    ),
  },
  {
    propertyName: "paginationUiDiv",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          CSS classes for the <code>div</code> that contains the page selector
          and page size selector UI components. Useful for changing the
          alignment and/or orientation of the two components.
        </p>
      </>
    ),
  },
];

export const styleModel: SpecTableRow[] = [
  {
    propertyName: "mainTableStyleModel",
    typeDefinition: "TableStyleModel",
    isRequired: false,
    description: (
      <>
        Properties to apply custom CSS classes to elements of the main table of
        the <code>Grid</code> component
      </>
    ),
  },
  {
    propertyName: "filterInputTableStyleModel",
    typeDefinition: "FilterInputTableStyleModel",
    isRequired: false,
    description:
      "Properties to apply custom CSS classes to elements of the filter inputs table",
  },
  {
    propertyName: "additionalComponentsStyleModel",
    typeDefinition: "AdditionalComponentsStyleModel",
    isRequired: false,
    description: (
      <>
        Properties to apply custom CSS classes for any elements not covered by
        the other properties in <code>StyleModel</code>
      </>
    ),
  },
  {
    propertyName: "toolbarStyleModel",
    typeDefinition: "ToolbarStyleModel",
    isRequired: false,
    description: (
      <p>
        Properties to apply CSS classes to various elements of the toolbar that
        allows the user to access separate interfaces like{" "}
        <Link href="/docs/filtering">filtering options</Link> or the{" "}
        <Link href="/docs/export">export</Link> feature.
      </p>
    ),
  },
  {
    propertyName: "exportFormStyleModel",
    typeDefinition: "ExportFormStyleModel",
    isRequired: false,
    description: (
      <p>
        Properties to apply CSS classes various elements of the{" "}
        <Link href="/docs/export">export form</Link>.
      </p>
    ),
  },
];

export const tableStyleModel: SpecTableRow[] = [
  {
    propertyName: "table",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          Specifies additional CSS classes for the main <code>table</code>{" "}
          element. This element always has the <code>table</code> class to apply
          Bootstrap styles.
        </p>
        <p>
          When row selection mode is enabled, the table will have the{" "}
          <code>table-hover</code> class to indicate that the rows are
          selectable by clicking on them.
        </p>
      </>
    ),
  },
  {
    propertyName: "tbody",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>tbody</code> element of
        the main table.
      </>
    ),
  },
  {
    propertyName: "thead",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>thead</code> element of
        the main table.
      </>
    ),
  },
  {
    propertyName: "theadTr",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the sole <code>tr</code> element of
        the <code>thead</code> element of the main table.
      </>
    ),
  },
  {
    propertyName: "theadTh",
    typeDefinition: "(colIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        <p>
          Specifies additional CSS classes for <code>th</code> elements inside
          the <code>thead</code> element of the main table.
        </p>
        <p>
          For columns that are currently being used for sorting, the{" "}
          <code>Grid</code> will automatically apply the{" "}
          <code>table-active</code> class. In addition, if a column is available
          as an option for sorting, the <code>Grid</code> will use a CSS class
          to set the cursor to be a pointer.
        </p>
      </>
    ),
  },
  {
    propertyName: "caption",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        Specifies additional CSS classes for the <code>caption</code> element of
        the main table.
      </p>
    ),
  },
  {
    propertyName: "tbodyTr",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for <code>tr</code> elements inside the{" "}
        <code>tbody</code> element of the main table. The <code>Grid</code>{" "}
        component will automatically apply the <code>table-active</code> class
        to selected rows.
      </>
    ),
  },
  {
    propertyName: "tbodyTd",
    typeDefinition:
      "(origRowIndex: number, displayRowIndex: number, colIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for <code>td</code> elements in side
        the <code>tbody</code> element of the main table.
      </>
    ),
  },
  {
    propertyName: "editColTh",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>th</code> element of the
        editing controls column.
      </>
    ),
  },
  {
    propertyName: "editColTd",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>td</code> elements of the
        editing controls column.
      </>
    ),
  },
  {
    propertyName: "selectColTh",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>th</code> element of the
        selection controls column.
      </>
    ),
  },
  {
    propertyName: "selectColTd",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>td</code> elements of the
        selection controls column.
      </>
    ),
  },
  {
    propertyName: "selectInput",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>input</code> elements
        inside the <code>td</code> elements of the selection controls column.
      </>
    ),
  },
  {
    propertyName: "editStartButton",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies the styles for all <b>Edit</b> buttons of the editing controls
        column. The <code>Grid</code> automatically applies the{" "}
        <code>btn-primary</code> class to these buttons, but if an array of
        non-zero length is supplied, the <code>btn-primary</code> class will not
        be applied, allowing for customization of the button variant.
      </>
    ),
  },
  {
    propertyName: "editDeleteButton",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies the styles for all <b>Delete</b> buttons of the editing
        controls column. The <code>Grid</code> automatically applies the{" "}
        <code>btn-secondary</code> class to these buttons, but if an array of
        non-zero length is supplied, the <code>btn-secondary</code> class will
        not be applied, allowing for customization of the button variant.
      </>
    ),
  },
  {
    propertyName: "editSaveButton",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies the styles for all <b>Save</b> buttons of the editing controls
        column. The <code>Grid</code> automatically applies the{" "}
        <code>btn-primary</code> class to these buttons, but if an array of
        non-zero length is supplied, the <code>btn-primary</code> class will not
        be applied, allowing for customization of the button variant.
      </>
    ),
  },
  {
    propertyName: "editCancelButton",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies the styles for all <b>Cancel</b> buttons of the editing
        controls column. The <code>Grid</code> automatically applies the{" "}
        <code>btn-secondary</code> class to these buttons, but if an array of
        non-zero length is supplied, the <code>btn-secondary</code> class will
        not be applied, allowing for customization of the button variant.
      </>
    ),
  },
  {
    propertyName: "rowSelectColTh",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          Specifies additional classes of the <code>th</code> element that
          contains the control for selecting and deselecting all rows. The cell
          only appears if selection for the <code>Grid</code> is enabled by
          passing a <code>selectModel</code> prop.
        </p>
        <p>
          By default, the CSS classes <code>btn-primary</code> and{" "}
          <code>rbdg-select-header-cell</code> are applied. The{" "}
          <code>rbdg-select-header-cell</code> class colors the SVG icon of the
          control based on the Bootstrap button variant. To maximize
          customizability, the <code>btn-primary</code> class will be omitted if
          an array of length at least 1 is passed in for this property, allowing
          one to change the variant of the SVG icon in this cell with a
          different variant (e.g. <code>btn-secondary</code>
          .)
        </p>
        <p>
          There is also a class <code>rbdg-sort-toggler</code> that changes the
          mouse pointer based on whether the cell is clickable.
        </p>
      </>
    ),
  },
  {
    propertyName: "rowSelectColTd",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional classes of the <code>td</code> elements in the
        selection controls column
      </>
    ),
  },
  {
    propertyName: "rowSelectInput",
    typeDefinition: "(id: number | string, displayIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional classes of the <code>input</code> elements in the
        selection controls column
      </>
    ),
  },
];

export const filterInputTableStyleModel: SpecTableRow[] = [
  {
    propertyName: "table",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>table</code> element of
        filter options interface. This element always has the <code>table</code>{" "}
        class to apply Bootstrap styles.
      </>
    ),
  },
  {
    propertyName: "tbody",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>tbody</code> element of
        the filter options table.
      </>
    ),
  },
  {
    propertyName: "thead",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>thead</code> element of
        the filter options table.
      </>
    ),
  },
  {
    propertyName: "theadTr",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the sole <code>tr</code> element of
        the <code>thead</code> element of the filter options table.
      </>
    ),
  },
  {
    propertyName: "theadTh",
    typeDefinition: "(colIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for <code>th</code> elements inside the{" "}
        <code>thead</code> element of the filter options table.
      </>
    ),
  },
  {
    propertyName: "caption",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        Specifies additional CSS classes for the <code>caption</code> element of
        the filter options table.
      </p>
    ),
  },
  {
    propertyName: "tbodyTr",
    typeDefinition: "(index: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for <code>tr</code> elements inside the{" "}
        <code>tbody</code> element of the filter options table.
      </>
    ),
  },
  {
    propertyName: "tbodyTd",
    typeDefinition: "(index: number, colIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for <code>td</code> elements in side
        the <code>tbody</code> element of the filter options table.
      </>
    ),
  },
  {
    propertyName: "enablementInput",
    typeDefinition: "(rowIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for <code>input</code> checkbox
        elements that enable and disable filtering based on certain fields.
      </>
    ),
  },
  {
    propertyName: "schemeSelectionInput",
    typeDefinition: "(rowIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>select</code> elements
        that are used to adjust the operators used for filtering for a field.
      </>
    ),
  },
  {
    propertyName: "searchStringInput",
    typeDefinition: "(rowIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>input</code> elements
        used to specify string values on which to filter. This property only
        applies if the row is associated with a column of type{" "}
        <code>string</code>. It is up to the developer to confirm that fact.
      </>
    ),
  },
  {
    propertyName: "numberInput",
    typeDefinition: "(rowIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>input</code> elements
        used to specify the number values on which to filter. This property only
        applies if the row is associated with a column of type{" "}
        <code>number</code>. It is up to the developer to confirm that fact.
      </>
    ),
  },
  {
    propertyName: "startDateInput",
    typeDefinition: "(rowIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>input</code> elements
        used to specify the starting dates or datetimes on which to filter. This
        property only applies if the row is associated with a column of type{" "}
        <code>date</code> or <code>datetime</code>. It is up to the developer to
        confirm that fact.
      </>
    ),
  },
  {
    propertyName: "endDateInput",
    typeDefinition: "(rowIndex: number) => string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the <code>input</code> elements
        used to specify the ending dates or datetimes on which to filter. This
        property only applies if the row is associated with a column of type{" "}
        <code>date</code> or <code>datetime</code>. It is up to the developer to
        confirm that fact.
      </>
    ),
  },
  {
    propertyName: "submitButton",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        Specifies additional CSS classes for the submit button used to save
        changes to the filter criteria. The <code>btn-secondary</code> class is
        applied automatically, but will not be applied if an array of length at
        least 1 is passed for this property.
      </>
    ),
  },
  {
    propertyName: "form",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          Specifies CSS classes for the <code>form</code> element that encloses
          the filter options table.
        </p>
        <p>
          Supplying the{" "}
          <Link href="https://getbootstrap.com/docs/5.3/content/tables/#responsive-tables">
            table-responsive
          </Link>{" "}
          Bootstrap utility class may be used to make the table responsive.
        </p>
        <p>
          Note that this responsive behavior only works if the <code>form</code>{" "}
          element itself has constrained width. If, for example, the
          <code>form</code>{" "}
          element is the child of a flex container with{" "}
          <code>align-items: start;</code>, one can constrain the width of the{" "}
          <code>form</code> with the{" "}
          <Link href="https://getbootstrap.com/docs/5.3/utilities/sizing/#relative-to-the-parent">
            w-100
          </Link>{" "}
          utility class.
        </p>
      </>
    ),
  },
];

export const toolbarStyleModel: SpecTableRow[] = [
  {
    propertyName: "activeButton",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the button on the toolbar that is currently selected. By
        default contains <code>btn</code>, <code>btn-outline-secondary</code>{" "}
        and <code>active</code>.
      </p>
    ),
  },
  {
    propertyName: "inactiveButton",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for buttons on the toolbar that are not selected. By default
        contains <code>btn</code>, <code>btn-outline-secondary</code>.
      </p>
    ),
  },
  {
    propertyName: "toolbar",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the <code>div</code> that contains buttons to toggle the
        visibility of interfaces like filtering and export and has the ARIA role{" "}
        <code>toolbar</code>. By default, the <code>div</code> has the classes
        {" "}<code>hstack</code>, <code>gap-2</code>,{" "}
        <code>justify-content-start</code>, and <code>px-2</code>.
      </p>
    ),
  },
  {
    propertyName: "interfaceContainer",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <>
        <p>
          CSS classes for the <code>div</code> that contains the toolbar UI
          interfaces, such as those for filtering and export settings.
        </p>
        <p>
          By default, the <code>div</code> contains the following classes:{" "}
          <code>position-absolute</code>, <code>z-1</code>, <code>bg-body</code>
          , <code>border</code>, <code>shadow</code>, <code>p-2</code>. Among
          other purposes, these default classes are meant to give the look of a
          dropdown menu-like container overlaying the rest of the grid.
        </p>
      </>
    ),
  },
];

export const exportFormStyleModel: SpecTableRow[] = [
  {
    propertyName: "legend",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the <code>legend</code> elements in the export form. Useful
        for adjusting the appearance of the text.
      </p>
    ),
  },
  {
    propertyName: "radioContainer",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the <code>div</code>s containing
        radio <code>input</code>s and{" "}
        <code>label</code>s. As prescribed in{" "}
        <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios">
          Bootstrap&apos;s documentation on checks and radios
        </a>
        , these <code>div</code>s by default have the
        <code>form-check</code> class and the
        layout of radio inputs can be further customized by adding additional
        classes according to the documentation.
      </p>
    ),
  },
  {
    propertyName: "radioInput",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the <code>input</code> radio controls of the export form.
        Following{" "}
        <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios">
          Bootstrap&apos;s documentation
        </a>
        , these elements have the <code>form-check-input</code> class by
        default.
      </p>
    ),
  },
  {
    propertyName: "radioLabel",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the <code>labels</code> of the radio controls of the
        export
        form. Following{" "}
        <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios">
          Bootstrap&apos;s documentation
        </a>
        , these elements have the <code>form-check-label</code> class by
        default.
      </p>
    ),
  },
  {
    propertyName: "submitButton",
    typeDefinition: "string[]",
    isRequired: false,
    description: (
      <p>
        CSS classes for the submit button of the export form. Contains the
        classes <code>btn</code> and <code>btn-secondary</code> by default.
      </p>
    ),
  },
];
