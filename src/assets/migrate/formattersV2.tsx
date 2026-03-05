import { FC } from "react";

const formattersV2: FC = () => (
  <table>
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
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString">
            Date.prototype.toDateString()
          </a>
        </td>
      </tr>
      <tr>
        <td>datetime</td>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString">
            Date.prototype.toLocaleString()
          </a>
        </td>
      </tr>
      <tr>
        <td>number</td>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString">
            Number.prototype.toLocaleString()
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export default formattersV2;
