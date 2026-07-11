import { ReactNode, useState } from "react";
import Form from "react-bootstrap/Form";

const useToggleSwitch: (
  name: string,
  label: string,
) => { switchUi: ReactNode; enabled: boolean } = (name, label) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const switchUi = (
    <Form.Check
      id={`${name}-settingToggle`}
      type="switch"
      label={label}
      checked={enabled}
      onChange={({ target }) => setEnabled(target.checked)}
    />
  );

  return {
    switchUi,
    enabled,
  };
};

export default useToggleSwitch;
