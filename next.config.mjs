/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ui-avatars.com", pathname: "/**" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/Joseph_Raju_Myla_CV.pdf",
        destination: "/api/cv",
      },
    ];
  },
};

export default nextConfig;
