import { TocItem } from "rehype-mdx-toc";
import { FC } from "react";
import Toc from "@/app/docs/[slug]/Toc";

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
    <div>
      <Toc tocItems={toc} />
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "main" }];
}

export const dynamicParams = false;
