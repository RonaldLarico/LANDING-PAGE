const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  /* experimental: {
    outputStandalone: true,
  } */
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true,
  },
  eslint: {
    dirs: ['pages']
  }
};

module.exports = nextConfig;
