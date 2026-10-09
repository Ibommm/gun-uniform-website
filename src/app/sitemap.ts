import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://domain-kamu.com', // Ganti dengan domain kamu nanti
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}