import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // Correct hostname
        pathname: "/**", // Allow any path
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**", // Allow any path under this hostname
      },
      {
        protocol:"https",
        hostname:"ik.imagekit.io",
        port:"",
      }
    ],
  },
};

export default nextConfig;
