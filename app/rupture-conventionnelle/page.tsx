import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import RuptureCalculateur from '@/components/calculateurs/RuptureCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/rupture-conventionnelle'

export const metadata: Metadata = {
  title: 'Simulateur Rupture Conventionnelle 2026 — Indemnité Minimum',
  description:
    'Calculez votre indemnité de rupture conventionnelle selon votre salaire et ancienneté. Formule légale actualisée 2026, résultat instantané.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Simulateur Rupture Conventionnelle 2026 — Indemnité Minimum',
    description:
      'Calculez votre indemnité de rupture conventionnelle selon la formule légale 2026.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quel est le montant minimum de l\'indemnité de rupture conventionnelle ?',
    answer:
      'L\'indemnité de rupture conventionnelle est au minimum égale à l\'indemnité légale de licenciement : 1/4 de mois de salaire par année d\'ancienneté pour les 10 premières années, puis 1/3 de mois au-delà. Exemple : pour un salaire de 3 000€ et 7 ans d\'ancienneté : 3 000 × 1/4 × 7 = 5 250€ minimum.',
  },
  {
    question: 'Peut-on négocier une indemnité supérieure au minimum légal ?',
    answer:
      'Oui, absolument. Le montant calculé par notre simulateur est le minimum légal en dessous duquel l\'accord de rupture conventionnelle ne peut pas descendre. En pratique, de nombreux salariés négocient un montant supérieur, notamment lorsque l\'employeur souhaite faciliter le départ.',
  },
  {
    question: 'Peut-on toucher le chômage après une rupture conventionnelle ?',
    answer:
      'Oui. La rupture conventionnelle ouvre droit à l\'allocation de retour à l\'emploi (ARE) de France Travail, contrairement à la démission classique. Après un délai de carence de 7 jours + un différé d\'indemnisation spécifique lié aux indemnités perçues, vous commencez à percevoir vos allocations.',
  },
  {
    question: 'Comment se déroule la procédure de rupture conventionnelle ?',
    answer:
      'La procédure comporte : 1) Un ou plusieurs entretiens entre l\'employeur et le salarié, 2) La signature de la convention CERFA, 3) Un délai de rétractation de 15 jours calendaires, 4) L\'homologation par la DREETS (délai de 15 jours ouvrables). La rupture prend effet le lendemain de l\'homologation.',
  },
  {
    question: 'L\'indemnité de rupture conventionnelle est-elle imposable ?',
    answer:
      'L\'indemnité de RC est exonérée d\'impôt sur le revenu et de cotisations sociales dans la limite de 2 fois le Plafond Annuel de la Sécurité Sociale (94 200€ en 2026), sous réserve qu\'elle ne dépasse pas certains plafonds. Au-delà, la partie excédentaire est soumise à cotisations et impôts.',
  },
]

const relatedTools = [
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage (ARE)',
    description: 'Calculez votre ARE après votre rupture conventionnelle.',
  },
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Convertisseur Brut / Net',
    description: 'Vérifiez votre salaire de référence net avant négociation.',
  },
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'La RC n\'implique pas de préavis, mais vérifiez vos droits.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Simulateur Rupture Conventionnelle 2026',
  description: 'Calculez votre indemnité de rupture conventionnelle minimale selon la formule légale.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PageRuptureConventionnelle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Simulateur Rupture Conventionnelle 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Calculez votre indemnité minimale légale selon le Code du travail.
        </p>

        <Calculator>
          <RuptureCalculateur />
        </Calculator>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/rupture-conventionnelle/calcul-indemnite" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Calcul indemnité détaillé
          </a>
        </div>

        <AdBanner slot="3333333333" />

        <section className="prose-content mt-2">
          <h2>Formule légale de la rupture conventionnelle 2026</h2>
          <p>
            L'indemnité spécifique de rupture conventionnelle est régie par l'<strong>article L1237-19 du Code du travail</strong>. Elle ne peut être inférieure à l'indemnité légale de licenciement.
          </p>
          <ul>
            <li><strong>Tranche 1 (≤ 10 ans)</strong> : 1/4 de mois de salaire par année d'ancienneté</li>
            <li><strong>Tranche 2 (&gt; 10 ans)</strong> : 1/3 de mois de salaire par année supplémentaire</li>
          </ul>
          <p>
            Le <strong>salaire de référence</strong> est le plus favorable entre la moyenne des 12 derniers mois et la moyenne des 3 derniers mois. Primes et avantages en nature entrent dans la base de calcul.
          </p>
          <h2>Plafond d'exonération 2026</h2>
          <p>
            L'indemnité est exonérée de cotisations sociales et d'impôt dans la limite de <strong>2 × PASS = 94 200€ en 2026</strong>. Au-delà de 50 000€, consultez un expert-comptable avant de signer.
          </p>
        </section>

        <AdBanner slot="4444444444" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
