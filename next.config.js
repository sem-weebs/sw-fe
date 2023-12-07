/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pagesDir: "src/pages",
  images: {
    domains: ["commons.wikimedia.org"],
  },
};

module.exports = nextConfig;
