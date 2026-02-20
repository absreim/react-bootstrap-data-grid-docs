import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    silenceDeprecations: ["import"],
    quietDeps: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      "rehype-slug",
      "rehype-mdx-toc",
      ["rehype-pretty-code", { theme: "github-light-default" }],
    ],
  },
});

export default withMDX(nextConfig);
