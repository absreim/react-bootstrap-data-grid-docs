import DocContents from "@/shared/DocContents";
import { FC } from "react";

const DocContentsPage: FC<{
  params: Promise<{ slug: string }>;
}> = async ({ params }) => {
  const { slug } = await params;

  return <DocContents slug={slug} />;
};

export default DocContentsPage;
