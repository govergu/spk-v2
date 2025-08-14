import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spkcleaning.com.au";
  // Use a fixed date for static export (current date: August 14, 2025, 08:16 PM +0545)
  const fixedDate = "2025-08-14";

  // Static pages with hardcoded URLs
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: fixedDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: fixedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: fixedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial`,
      lastModified: fixedDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/specialized`,
      lastModified: fixedDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/maintenance`,
      lastModified: fixedDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: fixedDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: fixedDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Hardcode blog URLs based on known slugs (from your previous data)
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/top-sanitation-tips-for-offices`,
      lastModified: fixedDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/purity-in-high-traffic-areas`,
      lastModified: fixedDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/eco-cleaning-benefits`,
      lastModified: fixedDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [...staticPages, ...blogPages];
}
