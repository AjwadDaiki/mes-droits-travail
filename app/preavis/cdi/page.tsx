import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import PreavisCalculateur from '@/components/calculateurs/PreavisCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/preavis/cdi'

export const metadata: Metadata = {
  title: 'Préavis CDI Démission 2026 — Durée et Date de Fin',
  description:
    'Calculez votre préavis CDI en cas de démission : 1 mois (moins de 2 ans) ou 2 mois (plus de 2 ans). Résultat et date de fin immédiats.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle est la durée du préavis pour un CDI non-cadre ?',
    answer:
      'Pour un salarié non-cadre en CDI : moins de 6 mois d\'ancienneté → selon convention collective, de 6 mois à 2 ans → 1 mois, plus de 2 ans → 2 mois. Ces durées sont des minimums légaux.',
  },
  {
    question: 'Le préavis CDI est-il le même en démission et en licenciement ?',
    answer:
      'Oui, les durées légales sont identiques. Cependant, en cas de licenciement pour faute grave ou lourde, le préavis est supprimé. Votre convention collective peut également prévoir des durées différentes selon le motif.',
  },
  {
    question: 'Comment est calculée la date de fin de préavis CDI ?',
    answer:
      'La date de fin se calcule en ajoutant la durée du préavis (1 ou 2 mois) à la date de notification. Les mois s\'ajoutent en jours calendaires (tous les jours, y compris week-ends et jours fériés).',
  },
]

const relatedTools = [
  {
    href: '/preavis/cadre',
    emoji: '👔',
    title: 'Préavis cadre',
    description: 'Calculez le préavis pour les cadres (généralement 3 mois).',
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage',
    description: 'Estimez votre ARE après la fin de votre CDI.',
  },
]

export default function PagePreavisCDI() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/preavis" className="hover:text-primary">Préavis</a>
        <span className="mx-1">›</span>
        <span>CDI</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Préavis CDI Démission 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Durée et date de fin selon votre ancienneté.
      </p>

      <Calculator>
        <PreavisCalculateur defaultStatut="non-cadre" defaultTypeRupture="demission" />
      </Calculator>

      <AdBanner slot="cdi111111" />

      <section className="prose-content mt-2">
        <h2>Préavis CDI : règles 2026</h2>
        <p>
          Pour un salarié en <strong>CDI non-cadre</strong>, la durée légale du préavis en cas de démission est :
        </p>
        <ul>
          <li>Moins de 6 mois d'ancienneté → selon convention collective</li>
          <li>De 6 mois à 2 ans → <strong>1 mois</strong></li>
          <li>Plus de 2 ans → <strong>2 mois</strong></li>
        </ul>
      </section>

      <DisclaimerLegal />
      <Faq items={faqItems} />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
