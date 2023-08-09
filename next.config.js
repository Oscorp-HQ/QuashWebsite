/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:"export",
  images: {
    domains: ['www.figma.com'],
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' }
      // Add more routes here if needed
    };
  }
}

module.exports = nextConfig
