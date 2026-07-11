"use client";

import Dropdown from "react-bootstrap/Dropdown";
import { FC, ReactNode, useState } from "react";
import LightMode from "@/assets/icons/LightMode";
import DarkMode from "@/assets/icons/DarkMode";
import SystemMode from "@/assets/icons/SystemMode";

const menuOptions: [ReactNode, string, string][] = [
  [<LightMode key="light" />, "Light", "light"],
  [<DarkMode key="dark" />, "Dark", "dark"],
  [<SystemMode key="system" />, "Auto", "auto"],
];

const getThemeIcon: (theme: string) => ReactNode = (theme) => {
  switch (theme) {
    case "light": {
      return <LightMode />;
    }
    case "dark": {
      return <DarkMode />;
    }
    default:
      return <SystemMode />;
  }
};

const DarkModeDropdown: FC = () => {
  // Possible values are supposed to be "auto", "light", and "dark", but I am
  // setting this type to string to account for the fact that local storage can
  // return any kind of string.
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "auto",
  );

  const getItemClickHandler: (theme: string) => () => void = (theme) => () => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    (
      window as Window & typeof globalThis & { syncTheme: () => void }
    ).syncTheme();
  };

  return (
    <Dropdown
      title="Choose color theme"
      as="li"
      className="nav-item"
      align="end"
    >
      <Dropdown.Toggle
        variant="link"
        className="nav-link"
        aria-label={`Toggle Theme (${theme})`}
      >
        {getThemeIcon(theme)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {menuOptions.map(([icon, label, value]) => (
          <Dropdown.Item
            key={value}
            onClick={getItemClickHandler(value)}
            active={theme === value}
          >
            {icon} {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DarkModeDropdown;
