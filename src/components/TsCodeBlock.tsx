import { codeToHtml } from "shiki";
import { ReactNode } from "react";

export interface TsCodeBlockProps {
  children: string;
}

export default async function TsCodeBlock({
  children,
}: TsCodeBlockProps): Promise<ReactNode> {
  const outHtml = await codeToHtml(children, {
    lang: "typescript",
    themes: {
      light: "github-light-default",
      dark: "github-dark-default",
    },
  });

  return <div dangerouslySetInnerHTML={{ __html: outHtml }} />;
}
