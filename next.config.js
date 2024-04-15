/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/class-details/:id",
        destination: "/class-details/[id]", // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};

module.exports = nextConfig;
