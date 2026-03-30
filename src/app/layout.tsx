import type { Metadata } from "next";
import "./style.scss";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "react-bootstrap-data-grid Home Page",
  description:
    "Home page for the react-bootstrap-data-grid project",
};

const darkModeInitScript = `
  let currentTheme = "auto";
  const storedTheme = localStorage.getItem("theme");
  if (["dark", "light"].includes(storedTheme)) {
    currentTheme = storedTheme;
  }

  if (currentTheme === "auto") {
    document.documentElement.setAttribute(
      "data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  } else {
    document.documentElement.setAttribute("data-bs-theme", currentTheme);
  }
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: darkModeInitScript }}
        ></script>
      </head>
      <body className="vh-100">
        <Script src="/dark-mode.js" strategy="beforeInteractive" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
