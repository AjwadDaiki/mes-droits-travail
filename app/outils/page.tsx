import type { Metadata } from 'next'

const CANONICAL = 'https://mes-droits-travail.fr/outils'

export const metadata: Metadata = {
  title: 'Tous les Outils Droit du Travail 2026 — Hub Calculateurs',
  description:
    'Retrouvez tous nos calculateurs gratuits : préavis, rupture conventionnelle, licenciement, brut/net, chômage, congés, heures sup. Résultats immédiats.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const outils = [
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Calculez la durée et la date de fin de votre préavis selon votre statut (cadre/non-cadre) et votre ancienneté.',
    volume: '40 000 recherches/mois',
    variantes: [
      { href: '/preavis/cdi', label: 'Préavis CDI' },
      { href: '/preavis/cadre', label: 'Préavis cadre' },
      { href: '/preavis/cdd', label: 'Préavis CDD' },
      { href: '/preavis/licenciement', label: 'Préavis licenciement' },
    ],
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'Calculez votre indemnité minimale légale de rupture conventionnelle selon la formule 1/4 et 1/3 de mois.',
    volume: '60 000 recherches/mois',
    variantes: [
      { href: '/rupture-conventionnelle/calcul-indemnite', label: 'Calcul indemnité détaillé' },
    ],
  },
  {
    href: '/indemnite-licenciement',
    emoji: '⚖️',
    title: 'Calculateur Indemnité de Licenciement',
    description: 'Indemnité légale de licenciement calculée par tranche, avec cas spécial inaptitude professionnelle (doublement).',
    volume: '50 000 recherches/mois',
    variantes: [
      { href: '/indemnite-licenciement/anciennete', label: 'Calcul par ancienneté' },
    ],
  },
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Convertisseur Salaire Brut / Net',
    description: 'Convertissez instantanément votre salaire brut en net. Cotisations 2026 pour cadres (25%) et non-cadres (22%).',
    volume: '200 000 recherches/mois',
    variantes: [
      { href: '/salaire-brut-net/cadre', label: 'Brut/Net cadre' },
      { href: '/salaire-brut-net/non-cadre', label: 'Brut/Net non-cadre' },
    ],
  },
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Calculateur Heures Supplémentaires',
    description: 'Calculez vos heures supp. avec les majorations légales +25% (heures 36 à 43) et +50% (heures 44 et au-delà).',
    volume: '30 000 recherches/mois',
    variantes: [
      { href: '/heures-supplementaires/25-50', label: 'Majorations 25% et 50%' },
    ],
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage (ARE)',
    description: 'Estimez votre allocation de retour à l\'emploi : SJR, allocation journalière, mensuelle et durée d\'indemnisation.',
    volume: '80 000 recherches/mois',
    variantes: [
      { href: '/simulation-chomage/are', label: 'Calcul ARE détaillé' },
    ],
  },
  {
    href: '/conges-payes',
    emoji: '🏖️',
    title: 'Calculateur Congés Payés',
    description: 'Jours acquis, jours restants et indemnité compensatrice calculés selon les deux méthodes légales (1/10e et maintien).',
    volume: '35 000 recherches/mois',
    variantes: [
      { href: '/conges-payes/restants', label: 'Jours restants' },
    ],
  },
]

const hubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Outils calculateurs droit du travail',
  description: 'Liste des calculateurs gratuits en droit du travail français',
  numberOfItems: outils.length,
  itemListElement: outils.map((outil, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: outil.title,
    url: `https://mes-droits-travail.fr${outil.href}`,
    description: outil.description,
  })),
}

export default function PageOutils() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Tous les Outils Droit du Travail 2026
          </h1>
          <p className="text-gray-600">
            {outils.length} calculateurs gratuits et instantanés — formules légales françaises actualisées.
          </p>
        </div>

        <div className="space-y-5">
          {outils.map((outil) => (
            <div
              key={outil.href}
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">
                  {outil.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <a
                      href={outil.href}
                      className="font-semibold text-gray-900 hover:text-primary transition-colors text-lg"
                    >
                      {outil.title}
                    </a>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {outil.volume}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{outil.description}</p>
                  {outil.variantes.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {outil.variantes.map((v) => (
                        <a
                          key={v.href}
                          href={v.href}
                          className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors"
                        >
                          {v.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <strong>Information légale :</strong> Ces calculs sont fournis à titre
          indicatif et se basent sur le droit du travail français en vigueur. Votre
          convention collective peut prévoir des règles différentes. En cas de litige,
          consultez un avocat spécialisé.
        </div>
      </main>
    </>
  )
}
