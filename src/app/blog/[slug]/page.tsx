import getMdxStaticParamsFn from "@/lib/getMdxStaticParamsFn";
import { FC } from "react";
import DocContents from "../../../shared/DocContents";
import { TocItem } from "rehype-mdx-toc";
import path from "path";

const contentDir = path.join(process.cwd(), "src", "mdx", "blog");

export const generateStaticParams = getMdxStaticParamsFn(contentDir);

export const dynamicParams = false;

const Page: FC<{ params: Promise<string> }> = async ({ params }) => {
  const path = await params;
  const { default: Post, toc }: { default: FC; toc: TocItem[] } = await import(
    `@/blog/${path}/article.mdx`
  );

  return <DocContents main={<Post />} tocItems={toc} />;
};

export default Page;
