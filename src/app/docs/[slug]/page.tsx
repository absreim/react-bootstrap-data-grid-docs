import path from "node:path";
import getMdxStaticParamsFn from "@/shared/getMdxStaticParamsFn";
import DocContentsPage from "@/shared/DocContentsPage";

const CONTENT_DIR = path.join(process.cwd(), "src", "mdx");

export const generateStaticParams = getMdxStaticParamsFn(CONTENT_DIR);

export const dynamicParams = false;

export default DocContentsPage;
