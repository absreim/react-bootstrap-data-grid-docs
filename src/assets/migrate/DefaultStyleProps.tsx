import { FC } from "react";

const DefaultStyleProps: FC = () => (
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Default Classes</th>
          <th>Previously Customizable Defaults</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>mainTableStyleModel.table</code>
          </td>
          <td>
            <code>{"string[]"}</code>
          </td>
          <td>
            <code>{'["table"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>mainTableStyleModel.tbodyTdInput</code>
          </td>
          <td>
            <code>
              {
                "(rowId: RowId, displayRowIndex: number, colIndex: number) => string[] | null"
              }
            </code>
          </td>
          <td>
            <code>{'["form-control"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>mainTableStyleModel.editCancelButton</code>
          </td>
          <td>
            <code>
              {"(rowId: RowId, displayIndex: number) => string[] | null"}
            </code>
          </td>
          <td>
            <code>{'["btn", "btn-secondary"]'}</code>
          </td>
          <td>
            <code>{'["btn-secondary"]'}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>mainTableStyleModel.editSaveButton</code>
          </td>
          <td>
            <code>
              {"(rowId: RowId, displayIndex: number) => string[] | null"}
            </code>
          </td>
          <td>
            <code>{'["btn", "btn-primary"]'}</code>
          </td>
          <td>
            <code>{'["btn-primary"]'}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>mainTableStyleModel.editDeleteButton</code>
          </td>
          <td>
            <code>
              {"(rowId: RowId, displayIndex: number) => string[] | null"}
            </code>
          </td>
          <td>
            <code>{'["btn", "btn-secondary"]'}</code>
          </td>
          <td>
            <code>{'["btn"]'}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>mainTableStyleModel.editStartButton</code>
          </td>
          <td>
            <code>
              {"(rowId: RowId, displayIndex: number) => string[] | null"}
            </code>
          </td>
          <td>
            <code>{'["btn", "btn-primary"]'}</code>
          </td>
          <td>
            <code>{'["btn"]'}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>mainTableStyleModel.rowSelectColTh</code>
          </td>
          <td>
            <code>{"string[]"}</code>
          </td>
          <td>
            <code>{'["btn-primary"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>filterInputTableStyleModel.startDateInput</code>
          </td>
          <td>
            <code>{"(rowIndex: number) => string[] | null"}</code>
          </td>
          <td>
            <code>{'["form-control"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>filterInputTableStyleModel.endDateInput</code>
          </td>
          <td>
            <code>{"(rowIndex: number) => string[] | null"}</code>
          </td>
          <td>
            <code>{'["form-control"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>filterInputTableStyleModel.submitButton</code>
          </td>
          <td>
            <code>{"string[]"}</code>
          </td>
          <td>
            <code>{'["btn", "btn-primary"]'}</code>
          </td>
          <td>
            <code>{'["btn-primary"]'}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>filterInputTableStyleModel.schemeSelectionInput</code>
          </td>
          <td>
            <code>{"(rowIndex: number) => string[] | null"}</code>
          </td>
          <td>
            <code>{'["form-select"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>filterInputTableStyleModel.numberInput</code>
          </td>
          <td>
            <code>{"(rowIndex: number) => string[] | null"}</code>
          </td>
          <td>
            <code>{'["form-control"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
        <tr>
          <td>
            <code>filterInputTableStyleModel.searchStringInput</code>
          </td>
          <td>
            <code>{"(rowIndex: number) => string[] | null"}</code>
          </td>
          <td>
            <code>{'["form-control"]'}</code>
          </td>
          <td>(none)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DefaultStyleProps;
