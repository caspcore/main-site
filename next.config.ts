import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/main-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/main-site/' : '',
};

export default nextConfig;