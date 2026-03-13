import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  } as any,
  experimental: {
    nextDevToolbar: false,
  } as any,
};

export default nextConfig;
