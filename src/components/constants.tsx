import { PrefixBadgeId } from "@/components/types";
import { ReactNode } from "react";
import Badge from "react-bootstrap/Badge";

export const prefixBadges: Record<PrefixBadgeId, ReactNode> = {
  function: <Badge>F</Badge>,
  typeAlias: <Badge>T</Badge>,
  interface: <Badge>I</Badge>,
  variable: <Badge>V</Badge>,
};
