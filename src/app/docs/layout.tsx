import { FC, ReactNode } from "react";
import ContentsNavbar from "@/app/ContentsNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Documentation",
  description:
    "Technical documentation for the react-bootstrap-data-grid project",
};


const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        <ContentsNavbar />
      </div>
      <main className="h-100 w-100">{children}</main>
    </>
  );
}

export default Layout;
