import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/projects/Restaurant-AI",
        destination: "/projects/restaurant-ai",
        permanent: true,
      },
      {
        source: "/restaurant-ai",
        destination: "/projects/restaurant-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

