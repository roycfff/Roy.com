import { NextConfig } from 'next';
import path from 'node:path';

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  // Only enable the custom loader in development for visual editing
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.module.rules.push({
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: LOADER,
        },
      });
    }
    return config;
  },
  
  // Production optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
// Orchids restart: 1760961597655