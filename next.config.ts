import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // ✅ Add the remote image host(s) here
  },
};

export default nextConfig;
