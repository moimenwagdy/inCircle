import nextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/incircle-f2a58.appspot.com/o/**",
      },
    ],
  },
};

const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);
