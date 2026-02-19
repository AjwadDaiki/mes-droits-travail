import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import PreavisCalculateur from '@/components/calculateurs/PreavisCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/preavis/cadre'

export const metadata: Metadata = {
  title: 'Préavis Cadre 2026 — 3 Mois, Calcul et Date de Fin',
  description:
    'Calculez votre préavis cadre : généralement 3 mois quelle que soit l\'ancienneté. Date de fin et durée précises. Gratuit et immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle est la durée du préavis pour un cadre ?',
    answer:
      'Pour un cadre, le préavis est généralement de 3 mois, quelle que soit l\'ancienneté. Cette durée est fixée par la plupart des conventions collectives. Certaines CCN prévoient 2 mois pour les cadres de moins de 2 ans. Vérifiez votre convention collective.',
  },
  {
    question: 'Le préavis d\'un cadre peut-il être réduit ?',
    answer:
      'Oui, avec l\'accord des deux parties. L\'employeur peut dispenser le cadre de l\'exécuter (avec maintien du salaire). Le salarié peut aussi demander à être libéré plus tôt pour prendre un nouvel emploi — l\'employeur peut accepter avec ou sans indemnité compensatrice.',
  },
  {
    question: 'Un cadre licencié a-t-il le même préavis qu\'en démission ?',
    answer:
      'En règle générale, la durée du préavis est identique à la démission et au licenciement pour un cadre. Sauf licenciement pour faute grave ou lourde où le préavis est supprimé.',
  },
]

const relatedTools = [
  {
    href: '/preavis/cdi',
    emoji: '📄',
    title: 'Préavis CDI',
    description: 'Préavis pour les salariés non-cadres en CDI.',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Rupture Conventionnelle',
    description: 'Calculez votre indemnité de rupture conventionnelle.',
  },
]

export default function PagePreavisCadre() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/preavis" className="hover:text-primary">Préavis</a>
        <span className="mx-1">›</span>
        <span>Cadre</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Préavis Cadre 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Généralement 3 mois — calculez votre date de fin.
      </p>

      <Calculator>
        <PreavisCalculateur defaultStatut="cadre" defaultTypeRupture="demission" />
      </Calculator>

      <AdBanner slot="cadre11111" />

      <section className="prose-content mt-2">
        <h2>Préavis cadre : la règle des 3 mois</h2>
        <p>
          La plupart des conventions collectives fixent à <strong>3 mois</strong> la durée du préavis pour les cadres, quelle que soit leur ancienneté. Cette durée s'applique à la démission, au licenciement et au départ en retraite.
        </p>
        <p>
          Vérifiez votre convention collective et votre contrat de travail — certains prévoient des durées inférieures (2 mois) pour les cadres de moins de 2 ans d'ancienneté.
        </p>
      </section>

      <DisclaimerLegal />
      <Faq items={faqItems} />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
