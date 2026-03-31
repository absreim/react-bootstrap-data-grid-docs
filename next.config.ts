import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createWithVercelToolbar from "@vercel/toolbar/plugins/next";

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
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
    rehypePlugins: [
      "rehype-slug",
      "rehype-mdx-toc",
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light-default", dark: "github-dark-default" },
        },
      ],
    ],
  },
});

const withVercelToolbar = createWithVercelToolbar();

export default withVercelToolbar(withMDX(nextConfig));
