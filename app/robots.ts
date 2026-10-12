import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/*.json$'],
      },
    ],
    sitemap: 'https://higharch5-seo-smoketest.example.com/sitemap.xml',
  };
}
