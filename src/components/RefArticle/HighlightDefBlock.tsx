import { FC } from "react";
import { Token } from "@/static/api/types";
import TsCodeBlock from "@/components/TsCodeBlock";

export interface HighlightDefBlockProps {
  tokens: Token[];
}

const HighlightDefBlock: FC<HighlightDefBlockProps> = ({ tokens }) => (
  <TsCodeBlock>
    {tokens
      .map((token) => (typeof token === "string" ? token : token.text))
      .join("")}
  </TsCodeBlock>
);

export default HighlightDefBlock;
