import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import RuptureCalculateur from '@/components/calculateurs/RuptureCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/rupture-conventionnelle/calcul-indemnite'

export const metadata: Metadata = {
  title: 'Calcul Indemnité Rupture Conventionnelle 2026 — Formule Exacte',
  description:
    'Calculez précisément votre indemnité de rupture conventionnelle par tranche d\'ancienneté. Formule 1/4 et 1/3 de mois. Gratuit et immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Comment calculer exactement l\'indemnité de RC par tranche ?',
    answer:
      'Pour 7 ans et 3 000€ brut/mois : 3 000 × (1/4) × 7 = 5 250€. Pour 12 ans et 4 000€ brut/mois : 4 000 × (1/4) × 10 + 4 000 × (1/3) × 2 = 10 000 + 2 666,67 = 12 666,67€.',
  },
  {
    question: 'Qu\'est-ce que le salaire de référence pour la RC ?',
    answer:
      'C\'est la moyenne mensuelle brute la plus favorable entre : la moyenne des 12 derniers mois de salaire et la moyenne des 3 derniers mois (avec 1/3 des primes annuelles). Ce salaire inclut les primes, avantages en nature et commissions.',
  },
  {
    question: 'L\'indemnité RC est-elle plafonnée ?',
    answer:
      'Non, il n\'y a pas de plafond légal au montant de l\'indemnité de RC. En revanche, l\'exonération de cotisations sociales et d\'impôt sur le revenu est limitée à 2 × PASS (94 200€ en 2026). Au-delà, la partie excédentaire est soumise à cotisations.',
  },
]

const relatedTools = [
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'Page principale du simulateur RC.',
  },
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Convertisseur Brut / Net',
    description: 'Vérifiez votre salaire brut de référence.',
  },
]

export default function PageCalculIndemniteRC() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/rupture-conventionnelle" className="hover:text-primary">Rupture conventionnelle</a>
        <span className="mx-1">›</span>
        <span>Calcul indemnité</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Calcul Indemnité Rupture Conventionnelle 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Formule exacte avec détail par tranche d'ancienneté.
      </p>

      <Calculator>
        <RuptureCalculateur />
      </Calculator>

      <AdBanner slot="rc-ind1111" />

      <section className="prose-content mt-2">
        <h2>Formule détaillée par tranche</h2>
        <p>
          L'indemnité de RC se calcule en deux tranches selon l'ancienneté :
        </p>
        <ul>
          <li><strong>Tranche 1</strong> : 1/4 × salaire mensuel de référence × nombre d'années (jusqu'à 10 ans)</li>
          <li><strong>Tranche 2</strong> : 1/3 × salaire mensuel de référence × nombre d'années (au-delà de 10 ans)</li>
        </ul>
        <p>
          <strong>Exemple concret :</strong> Salarié avec 12 ans d'ancienneté et 3 500€ brut/mois :
          Tranche 1 : 3 500 × (1/4) × 10 = 8 750€ + Tranche 2 : 3 500 × (1/3) × 2 = 2 333€ = <strong>Total : 11 083€</strong>
        </p>
      </section>

      <DisclaimerLegal />
      <Faq items={faqItems} />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
