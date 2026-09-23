/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  typescript: {
    // Allows production builds to successfully complete even if your project has type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
