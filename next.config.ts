import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  async rewrites() {
    return [{ source: "/blog/:slug.md", destination: "/blog/:slug/raw" }];
  },
};

export default nextConfig;
