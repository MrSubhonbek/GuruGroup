/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    env: {
      urlData: "https://6075786f0baf7c0017fa64ce.mockapi.io/products",
    },
  },
  images: {
    domains: ["picsum.photos"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
