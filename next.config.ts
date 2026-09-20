import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/prndl-nyc",
        destination: "https://nyc-parking-eight.vercel.app/",
      },
      {
        source: "/prndl-nyc/:path*",
        destination: "https://nyc-parking-eight.vercel.app/:path*",
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
