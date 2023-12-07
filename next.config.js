/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pagesDir: "src/pages",
  images: {
    domains: ["commons.wikimedia.org"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
