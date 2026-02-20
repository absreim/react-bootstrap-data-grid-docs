export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, toc } = await import(`@/content/${slug}.mdx`);

  return <div><code>{String(toc)}</code><Post /></div>;
}

export function generateStaticParams() {
  return [{ slug: "main" }];
}

export const dynamicParams = false;
