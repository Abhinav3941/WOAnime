/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
       
      },
    ],
    formats: ['image/webp'],
    domains: ['images.pexels.com'],
  },
};

export default nextConfig;
