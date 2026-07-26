import type { MDXComponents } from "mdx/types";
import Link, { LinkProps } from "next/link";

const components = {
  a: (props) => <Link {...(props as LinkProps)} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
