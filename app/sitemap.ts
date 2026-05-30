import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.myloanpreview.com",
      lastModified: new Date(),
    },

    {
      url: "https://www.myloanpreview.com/auto-loan-calculator",
      lastModified: new Date(),
    },

    {
      url: "https://www.myloanpreview.com/personal-loan-calculator",
      lastModified: new Date(),
    },

    {
      url: "https://www.myloanpreview.com/mortgage-calculator",
      lastModified: new Date(),
    },

    {
      url: "https://www.myloanpreview.com/about",
      lastModified: new Date(),
    },

    {
      url: "https://www.myloanpreview.com/privacy-policy",
      lastModified: new Date(),
    },

    {
      url: "https://www.myloanpreview.com/disclaimer",
      lastModified: new Date(),
    },
  ];
}