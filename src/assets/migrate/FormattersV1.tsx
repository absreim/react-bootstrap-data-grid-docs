import { FC } from "react";

const FormattersV1: FC = () => (
  <table className="table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Default Formatter</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>date</td>
        <td>
          <code>dateToInputStr</code>
        </td>
      </tr>
      <tr>
        <td>datetime</td>
        <td>
          <code>dateToDatetimeInputStr</code>
        </td>
      </tr>
      <tr>
        <td>number</td>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString">
            Number.prototype.toString()
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export default FormattersV1;
