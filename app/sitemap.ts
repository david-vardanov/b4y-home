import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bet4yaar.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/cricket-betting/live',
    '/jet-x',
    '/lucky-jet',
    '/payment',
    '/promo-code',
    '/registration',
    '/slots/aviator'
  ]

  const staticPages = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add language variants
  const localePages = routes.flatMap(route => [
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 0.9 : 0.7,
    },
    {
      url: `${baseUrl}/hi${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 0.9 : 0.7,
    }
  ])

  return [...staticPages, ...localePages]
}