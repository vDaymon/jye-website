import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
      },
      {
        protocol: "https",
        hostname: "material-taillwind-pro-ct-tailwind-team.vercel.app",
      },
    ],
  },
};

export default nextConfig;
