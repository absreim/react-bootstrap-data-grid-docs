import { ReactNode, useState } from "react";
import Form from "react-bootstrap/Form";

const variants: string[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
];

const useVariantDropdown: (
  name: string,
  label: string,
) => { selectUi: ReactNode; propValue: string | undefined } = (name, label) => {
  const [stateVal, setStateVal] = useState<string>("");

  const id = `${name}-settingDropdown`;
  const selectUi = (
    <div>
      <label htmlFor={id}>{label}</label>
      <Form.Select
        id={id}
        value={stateVal}
        onChange={({ target }) => setStateVal(target.value)}
      >
        <option value="">(None)</option>
        {variants.map((variant) => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
      </Form.Select>
    </div>
  );
  const propValue = stateVal === "" ? undefined : stateVal;

  return {
    selectUi,
    propValue,
  };
};

export default useVariantDropdown;
