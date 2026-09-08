import { Token } from "@/static/api/types";
import { FC } from "react";
import { renderToken } from "@/components/RefArticle/renderToken";

export interface TokenBlockProps {
  tokens: Token[];
}

const TokenBlock: FC<TokenBlockProps> = ({ tokens }) => {
  return <code>{tokens.map((token, index) => renderToken(token, index))}</code>;
};

export default TokenBlock;
