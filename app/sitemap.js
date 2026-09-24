import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evcompass.in' // Replace with your domain[span_1](start_span)[span_1](end_span)

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Add your other page routes here as you build them:
    // {
    //   url: `${baseUrl}/routes`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}

