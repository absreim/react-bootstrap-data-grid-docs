import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    silenceDeprecations: ["import"],
    quietDeps: true,
  },
};

export default nextConfig;
