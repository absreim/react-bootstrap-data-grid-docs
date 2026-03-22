import { FC } from "react";
import { TocItem } from "rehype-mdx-toc";
import Stack from "react-bootstrap/Stack";
import Toc from "@/app/Toc";

export default async function DocContents({ slug }: { slug: string }) {
  const { default: Post, toc }: { default: FC; toc: TocItem[] } = await import(
    `@/mdx/${slug}.mdx`
  );

  return (
    <Stack className="align-items-start h-100" direction="horizontal" gap={2}>
      <div className="overflow-lg-y-auto h-100 w-100 px-2">
        <Post />
      </div>
      <nav className="d-none d-xl-block rbdg-docs-toc overflow-y-auto h-100">
        <Toc tocItems={toc} />
      </nav>
    </Stack>
  );
}
