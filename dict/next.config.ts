import type { NextConfig } from "next";

const getAllowedOrigins = () => {
  if (process.env.NODE_ENV == 'production') {
    return ['yourdomain.com', 'www.yourdomain.com']; // production
  }

  const origins = [
    'localhost:3000',
    '127.0.0.1:3000',
    '[::1]:3000',
  ];

  if (process.env.CODESPACE_NAME) {
    origins.push(`${process.env.CODESPACE_NAME}-3000.app.github.dev`);
  }

  return origins;
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: getAllowedOrigins()
    },
  },
};

export default nextConfig;
