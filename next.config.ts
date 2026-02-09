import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Allow static game files to be served from public/games/typing/
        {
          source: '/games/typing/:path((?!$).*)',
          destination: '/games/typing/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
