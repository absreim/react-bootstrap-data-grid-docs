import type { Metadata } from "next";
import "./style.scss";
import AppBar from "./AppBar";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ReactNode } from "react";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Home Page",
  description:
    "Home page for the react-bootstrap-data-grid project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "auto";

  return (
    <html
      lang="en"
      data-bs-theme={theme}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="vh-100">
        <Script src="/dark-mode.js" strategy="beforeInteractive" />
        <div className="d-flex flex-column h-100">
          <AppBar />
          <div className="container d-flex flex-row gap-2 flex-grow-1 rbdg-docs-main">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
