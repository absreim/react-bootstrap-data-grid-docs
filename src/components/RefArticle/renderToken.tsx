import { Token } from "@/static/api/types";
import { Key, ReactNode } from "react";
import Link from "next/link";

export function renderToken(token: Token, key?: Key): ReactNode {
  if (typeof token === "string") {
    return token;
  }

  return (
    <Link href={token.href} key={key}>
      {token.text}
    </Link>
  );
}
