import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://in-circle-iota.vercel.app/en/sitemap.xml",
  };
}
