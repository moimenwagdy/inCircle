import nextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);
