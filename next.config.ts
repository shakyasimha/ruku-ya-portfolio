import type { NextConfig } from "next";

const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    domains: ["flagcdn.com"],
  },
});

export default nextConfig;
