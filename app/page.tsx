import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculateurs Droit du Travail 2026 Gratuits',
  description:
    'Calculateurs gratuits pour le droit du travail français : préavis, rupture conventionnelle, indemnité licenciement, salaire brut/net, chômage ARE, congés payés. Résultats immédiats.',
  alternates: {
    canonical: 'https://mes-droits-travail.fr/',
    languages: { 'fr-FR': 'https://mes-droits-travail.fr/' },
  },
}

const tools = [
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Convertisseur Salaire Brut / Net',
    description: 'Estimez votre salaire net à partir du brut, cadre ou non-cadre.',
    badge: 'Le plus utilisé',
    badgeColor: 'bg-blue-100 text-blue-700',
    volume: '200 000 recherches/mois',
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage (ARE)',
    description: 'Calculez votre allocation de retour à l\'emploi et sa durée.',
    volume: '80 000 recherches/mois',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'Calculez votre indemnité minimale légale selon la formule 2026.',
    volume: '60 000 recherches/mois',
  },
  {
    href: '/indemnite-licenciement',
    emoji: '⚖️',
    title: 'Calculateur Indemnité de Licenciement',
    description: 'Indemnité légale selon ancienneté et salaire de référence.',
    volume: '50 000 recherches/mois',
  },
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Durée et date de fin de préavis selon statut et ancienneté.',
    volume: '40 000 recherches/mois',
  },
  {
    href: '/conges-payes',
    emoji: '🏖️',
    title: 'Calculateur Congés Payés',
    description: 'Jours restants et indemnité compensatrice (double méthode).',
    volume: '35 000 recherches/mois',
  },
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Calculateur Heures Supplémentaires',
    description: 'Majorations légales 25% et 50% calculées instantanément.',
    volume: '30 000 recherches/mois',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'mes-droits-travail.fr',
  url: 'https://mes-droits-travail.fr',
  description:
    'Hub de calculateurs gratuits dédiés au droit du travail français.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mes-droits-travail.fr/outils',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Calculateurs Droit du Travail 2026
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Calculez vos droits en quelques secondes. Gratuit, sans inscription,
            sans publicité intrusive. Formules légales 2026.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Gratuit
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Sans inscription
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Résultat immédiat
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Formules 2026
            </span>
          </div>
        </div>

        {/* Grille des outils */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-5 hover:border-primary hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  {tool.emoji}
                </span>
                {tool.badge && (
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                )}
              </div>
              <h2 className="font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                {tool.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1.5 flex-1">
                {tool.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-400">{tool.volume}</span>
                <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Calculer →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bloc confiance */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Pourquoi utiliser nos calculateurs ?
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-medium text-gray-800 mb-1">
                Formules légales exactes
              </p>
              <p className="text-gray-500">
                Basées sur le Code du travail et les règles en vigueur en 2026.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">
                Résultat en 10 secondes
              </p>
              <p className="text-gray-500">
                Remplissez le formulaire, cliquez, obtenez votre résultat.
                Pas de scroll.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">100% gratuit</p>
              <p className="text-gray-500">
                Aucune inscription, aucun email demandé. Vos données restent
                sur votre appareil.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <strong>Information légale :</strong> Ces calculs sont fournis à titre
          indicatif et se basent sur le droit du travail français en vigueur.
          Votre convention collective peut prévoir des règles différentes. En cas
          de litige, consultez un avocat spécialisé en droit du travail.
        </div>
      </main>
    </>
  )
}
