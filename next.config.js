/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/class-details/:id",
        destination: "/class-details/[id]",
      },
    ];
  },
};

module.exports = nextConfig;
