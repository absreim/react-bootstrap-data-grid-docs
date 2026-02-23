import { TocItem } from "rehype-mdx-toc";
import { FC } from "react";
import Toc from "@/app/docs/[slug]/Toc";
import Stack from "react-bootstrap/Stack";
import fs from "node:fs/promises";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

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

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const entries = await fs.readdir(CONTENT_DIR, { withFileTypes: true });

  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => ({
      slug: e.name.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;
