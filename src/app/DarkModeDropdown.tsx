"use client";

import Dropdown from "react-bootstrap/Dropdown";
import { FC, ReactNode, useState } from "react";
import LightModeIcon from "@/assets/LightModeIcon";
import DarkModeIcon from "@/assets/DarkModeIcon";
import SystemModeIcon from "@/assets/SystemModeIcon";

const menuOptions: [ReactNode, string, string][] = [
  [<LightModeIcon key="light" />, "Light", "light"],
  [<DarkModeIcon key="dark" />, "Dark", "dark"],
  [<SystemModeIcon key="system" />, "Auto", "auto"],
];

const DarkModeDropdown: FC = () => {
  // Possible values are supposed to be "auto", "light", and "dark", but I am
  // setting this type to string to account for the fact that local storage can
  // return any kind of string.
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "auto",
  );

  const getThemeIcon: (theme: string) => ReactNode = () => {
    switch (theme) {
      case "light": {
        return <LightModeIcon />;
      }
      case "dark": {
        return <DarkModeIcon />;
      }
      default:
        return <SystemModeIcon />;
    }
  };

  const getItemClickHandler: (theme: string) => () => void = (theme) => () => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    (window as (Window & typeof globalThis & { syncTheme: () => void })).syncTheme();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>{getThemeIcon(theme)}</Dropdown.Toggle>
      <Dropdown.Menu>
        {menuOptions.map(([icon, label, value]) => (
          <Dropdown.Item key={value} onClick={getItemClickHandler(value)}>
            {icon} {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DarkModeDropdown;
