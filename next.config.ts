import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: "/medzik",
  assetPrefix: "/medzik"
};

export default nextConfig;
