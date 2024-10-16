import nextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} **/
const nextConfig = {};
const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);
