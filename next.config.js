/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fakestoreapi.com",
      "picsum.photos",
      "placeimg.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
