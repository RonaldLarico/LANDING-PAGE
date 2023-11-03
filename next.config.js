const nextConfig = {
  reactStrictMode: true,
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
