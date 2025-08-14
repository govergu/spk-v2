/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true, // Required for static exports
  },
  eslint: {
    ignoreDuringBuilds: true, // Optional
  },
  typescript: {
    ignoreBuildErrors: true, // Optional
  },
};

export default nextConfig;
