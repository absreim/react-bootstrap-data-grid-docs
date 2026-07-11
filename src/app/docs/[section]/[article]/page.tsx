import { getSectionedMdxStaticParamsFn } from "@/lib/mdxStaticParamGenerators";
import { FC } from "react";
import DocContents from "@/components/DocContents";
import { TocItem } from "rehype-mdx-toc";
import path from "path";

const contentDir = path.join(process.cwd(), "src", "articles", "docs");

export const generateStaticParams = getSectionedMdxStaticParamsFn(contentDir);

export const dynamicParams = false;

const Page: FC<{
  params: Promise<{ section: string; article: string }>;
}> = async ({ params }) => {
  const { section, article } = await params;
  const { default: Post, toc }: { default: FC; toc: TocItem[] } = await import(
    `@/articles/docs/${section}/${article}/article.mdx`
  );

  return <DocContents main={<Post />} tocItems={toc} />;
};

export default Page;
