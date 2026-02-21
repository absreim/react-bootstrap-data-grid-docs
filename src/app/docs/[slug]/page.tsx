import { TocItem } from "rehype-mdx-toc";
import { FC } from "react";
import Toc from "@/app/docs/[slug]/Toc";
import Stack from "react-bootstrap/Stack";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, toc }: { default: FC; toc: TocItem[] } = await import(
    `@/content/${slug}.mdx`
  );

  return (
    <Stack className="align-items-start h-100" direction="horizontal" gap={2}>
      <div className="overflow-y-auto h-100">
        <Post />
      </div>
      <nav className="d-none d-lg-block rbdg-docs-toc overflow-y-auto h-100">
        <Toc tocItems={toc} />
      </nav>
    </Stack>
  );
}

export function generateStaticParams() {
  return [{ slug: "main" }];
}

export const dynamicParams = false;
