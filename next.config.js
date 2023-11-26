/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/notion/:path*",
  //       destination: "https://api.notion.com/:path*",
  //     },
  //   ];
  // },
  // trailingSlash: true,
};

module.exports = nextConfig;

// constㄴ nextConfig = {
// reactStrictMode: true,
// swcMinify: true,
// rewrites: async () => {
//   return [
//     {
//       source: `/notion-api/:path*`,
//       destination: `https://api.notion.com/:path*`,
//     },
//   ];
// },
// };

// module.exports = nextConfig;

// module.exports = {
//   rewrites: async () => {
//     return [
//       {
//         source: "/notion-api/:path*",
//         destination: "https://api.notion.com/:path*",
//       },
//     ];
//   },
// };

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async rewrites() {
//     return [
//       {
//         source: "/api/notion/:path*",
//         destination: "https://api.notion.com/:path*",
//       },
//     ];
//   },
// };
// module.exports = nextConfig;

// "https://api.notion.com/v1/databases/8a1703dbb7154c34b29dd0ecd04594f0/query",
// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
