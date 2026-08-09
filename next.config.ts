import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  // Static HTML export — GitHub Pages serves files only, no Node runtime.
  output: "export",

  // Trailing slashes keep deep links working as directory-index files on Pages.
  trailingSlash: true,

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // No image optimization server on Pages, so images are served as-authored.
  images: {
    unoptimized: true,
  },

  // Bundle analyzer for performance monitoring
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
};

export default nextConfig;
