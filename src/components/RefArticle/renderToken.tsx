import { CodeSpan, Token, Reference } from "@/static/api/types";
import { Key, ReactNode } from "react";
import Link from "next/link";

export function renderToken(token: Token, key?: Key): ReactNode {
  if (typeof token === "string") {
    return token;
  }

  if (Object.hasOwn(token, "type")) {
    return <code key={key}>{(token as CodeSpan).text}</code>
  }

  return (
    <Link href={(token as Reference).href} key={key}>
      {token.text}
    </Link>
  );
}
