import type { Metadata } from "next";
import "./style.scss";
import AppBar from "./AppBar";
import ContentsNavbar from "@/app/ContentsNavbar";

export const metadata: Metadata = {
  title: "React Bootstrap Data Grid Documentation",
  description:
    "Technical documentation for the react-bootstrap-data-grid project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vh-100">
        <div className="d-flex flex-column h-100">
          <AppBar />
          <div className="container d-flex flex-row gap-2 flex-grow-1" style={{minHeight: "0"}}>
            <div className="d-none d-lg-block">
              <ContentsNavbar />
            </div>
            <main className="h-100">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
