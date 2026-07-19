import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  reactStrictMode: true,
  transpilePackages: [
    "@cumbre/llm-runtime",
    "@cumbre/tutor-engine",
    "@cumbre/retrieval-engine"
  ],
  webpack: (config) => {
    // Permite importar pdfjs-dist/build/pdf.worker.mjs como URL
    config.resolve.alias["canvas"] = false;
    return config;
  },
};

export default nextConfig;
