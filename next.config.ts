import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure page extensions to include MDX
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// MDX configuration - minimal setup for Turbopack compatibility
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
