import getUnsectionedMdxStaticParamsFn from "@/lib/mdxStaticParamGenerators";
import { FC } from "react";
import DocContents from "@/components/DocContents";
import { TocItem } from "rehype-mdx-toc";
import path from "path";

const contentDir = path.join(process.cwd(), "src", "articles", "docs");

export const generateStaticParams = getUnsectionedMdxStaticParamsFn(contentDir);

export const dynamicParams = false;

const Page: FC<{ params: Promise<string> }> = async ({ params }) => {
  const path = await params;
  const { default: Post, toc }: { default: FC; toc: TocItem[] } = await import(
    `@/docs/${path}/article.mdx`
  );

  return <DocContents main={<Post />} tocItems={toc} />;
};

export default Page;
