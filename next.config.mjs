/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
}

export default nextConfig
