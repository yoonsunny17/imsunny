import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/imsunny",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
