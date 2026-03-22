import fs from "node:fs/promises";
import path from "node:path";
import DocContents from "@/app/DocContents";

const CONTENT_DIR = path.join(process.cwd(), "src", "mdx");

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <DocContents slug={slug} />;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const entries = await fs.readdir(CONTENT_DIR, { withFileTypes: true });

  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => ({
      slug: e.name.replace(/\.mdx$/, ""),
    }))
}

export const dynamicParams = false;
