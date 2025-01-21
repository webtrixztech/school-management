/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOSTNAME: 'localhost',
    APIBASEURL: 'http://localhost:5000',
  },
  experimental: {
    appDir: true, // Enable app directory for routing
  },
};

export default nextConfig;
