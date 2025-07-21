import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devServer: {
    // This is necessary to allow the Next.js dev server to accept requests from the Cloud Workstations preview.
    // For more details, see: https://nextjs.org/docs/app/api-reference/next-config-js/allowedDevOrigins
    allowedDevOrigins: [
      'https://*.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
