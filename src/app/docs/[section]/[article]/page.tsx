import { getSectionedFn } from "@/static/mdxStaticParamGen";
import { FC } from "react";
import DocContents from "@/components/DocContents";
import { TocItem } from "rehype-mdx-toc";
import path from "path";
import refParams from "@/static/api/staticParams";
import { REF_URL_SEGMENT } from "@/static/constants";
import RefArticle from "@/components/RefArticle";
import docContent from "@/static/api/docContent";

const contentDir = path.join(process.cwd(), "src", "articles", "docs");

export const generateStaticParams = async () => {
  const mdxParams = await getSectionedFn(contentDir)();
  return mdxParams.concat(refParams);
};

export const dynamicParams = false;

const Page: FC<{
  params: Promise<{ section: string; article: string }>;
}> = async ({ params }) => {
  const { section, article } = await params;

  if (section === REF_URL_SEGMENT) {
    return <RefArticle item={docContent[article]} />
  }

  const { default: Post, toc }: { default: FC; toc: TocItem[] } = await import(
    `@/articles/docs/${section}/${article}/article.mdx`
  );

  return <DocContents main={<Post />} tocItems={toc} />;
};

export default Page;
