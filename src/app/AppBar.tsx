"use client"

import { FC } from "react";
import ContentsHamburger from "@/app/ContentsHamburger";
import dynamic from "next/dynamic";

const DarkModeDropdown  = dynamic(
  () => import("@/app/DarkModeDropdown"),
  { ssr: false },
);

const AppBar: FC = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-start">
          <ContentsHamburger />
          <span className="navbar-brand">React Bootstrap Data Grid</span>
        </div>
        <div>
          <DarkModeDropdown />
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
