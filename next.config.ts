import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/project-dashboard",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
