// next.config.js or next.config.ts
import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
