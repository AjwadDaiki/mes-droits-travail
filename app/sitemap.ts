import type { MetadataRoute } from 'next'

const BASE_URL = 'https://mes-droits-travail.fr'

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
  { url: '/preavis', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/preavis/cdi', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/preavis/cdd', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/preavis/cadre', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/preavis/licenciement', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/rupture-conventionnelle', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/rupture-conventionnelle/calcul-indemnite', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/indemnite-licenciement', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/indemnite-licenciement/anciennete', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/salaire-brut-net', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/salaire-brut-net/cadre', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/salaire-brut-net/non-cadre', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/heures-supplementaires', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/heures-supplementaires/25-50', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/simulation-chomage', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/simulation-chomage/are', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/conges-payes', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/conges-payes/restants', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/outils', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
