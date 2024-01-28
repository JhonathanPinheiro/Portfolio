/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.graphassets.com", "placehold.co"],
  },
};

module.exports = nextConfig;
