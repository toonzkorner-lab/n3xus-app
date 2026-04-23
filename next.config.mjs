/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix for Turbopack + Prisma issues
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;