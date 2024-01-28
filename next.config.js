module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['miro.medium.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Proxy to Backend
      },
    ]
  },
}