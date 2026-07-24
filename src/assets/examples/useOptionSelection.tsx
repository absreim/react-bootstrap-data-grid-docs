import { ReactNode, useState } from "react";
import Form from "react-bootstrap/Form";
import { OptionSet } from "@/assets/examples/types";

export interface UseOptionSelectionHook<PropValue> {
  value: PropValue;
  selectionUi: ReactNode;
}

export default function useOptionSelection<OptionName extends string, PropValue>(
  options: OptionSet<OptionName, PropValue>,
  startValue: OptionName,
  legend: string,
  optionTypeId: string,
): UseOptionSelectionHook<PropValue> {
  const [selectedOption, setSelectedOption] = useState<OptionName>(startValue);

  const selectionUi = (
    <fieldset>
      <legend>{legend}</legend>
      {Object.keys(options).map((optionName) => {
        const { label } = options[optionName as OptionName];
        return (
          <Form.Check
            key={optionName}
            type="radio"
            id={`${optionTypeId}-${optionName}`}
            label={label}
            checked={selectedOption === optionName}
            onChange={() => setSelectedOption(optionName as OptionName)}
          />
        );
      })}
    </fieldset>
  );

  return {
    value: options[selectedOption].value,
    selectionUi,
  };
}
