/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // here you can add the url's that you are planning 
   // to use inside your next/image.
    domains: ["web3wellness.fit","res.cloudinary.com", "i.ytimg.com"],
  },
}

module.exports = nextConfig
