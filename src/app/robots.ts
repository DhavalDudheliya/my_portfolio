import { MetadataRoute } from "next";

import { seoConfig } from "@/config/seo.config";

const BASE_URL = seoConfig.baseUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
