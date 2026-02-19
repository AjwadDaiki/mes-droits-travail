import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import LicenciementCalculateur from '@/components/calculateurs/LicenciementCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/indemnite-licenciement'

export const metadata: Metadata = {
  title: 'Calculateur Indemnité Licenciement 2026 — Résultat Immédiat',
  description:
    'Calculez votre indemnité légale de licenciement selon ancienneté et salaire. Formule 2026 (1/4 et 1/3 de mois). Résultat instantané et gratuit.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Calculateur Indemnité Licenciement 2026',
    description: 'Indemnité légale calculée selon ancienneté et salaire de référence.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Qui a droit à l\'indemnité légale de licenciement ?',
    answer:
      'Tout salarié en CDI ayant au moins 8 mois d\'ancienneté (ininterrompue) dans l\'entreprise a droit à l\'indemnité légale de licenciement, sauf en cas de licenciement pour faute grave ou faute lourde. Les salariés en CDD ou intérimaires ne bénéficient pas de cette indemnité mais peuvent avoir droit à la prime de précarité.',
  },
  {
    question: 'Comment est calculée l\'indemnité légale de licenciement ?',
    answer:
      'La formule légale (Article L1234-9) est : 1/4 de mois de salaire brut de référence par année d\'ancienneté pour les 10 premières années, puis 1/3 de mois par année au-delà. Le salaire de référence est le plus favorable entre la moyenne des 12 derniers mois et la moyenne des 3 derniers mois.',
  },
  {
    question: 'L\'indemnité de licenciement est-elle imposable ?',
    answer:
      'L\'indemnité légale de licenciement (ou conventionnelle si plus favorable) est exonérée d\'impôt sur le revenu et de cotisations sociales, dans la limite de certains plafonds. La partie excédant l\'indemnité légale peut être imposable. En cas de licenciement économique ou inaptitude, des règles spécifiques s\'appliquent.',
  },
  {
    question: 'Quelle différence entre licenciement économique et personnel ?',
    answer:
      'Le licenciement économique est lié à des difficultés économiques, à des mutations technologiques ou à une réorganisation. Le licenciement pour motif personnel est lié au salarié (insuffisance professionnelle, faute, inaptitude). Les formules de calcul de l\'indemnité légale sont identiques, mais le licenciement pour inaptitude d\'origine professionnelle donne droit à une indemnité doublée.',
  },
  {
    question: 'Mon employeur peut-il verser moins que l\'indemnité légale ?',
    answer:
      'Non. L\'indemnité légale est un plancher. L\'employeur ne peut en aucun cas verser moins. En revanche, votre convention collective ou votre contrat de travail peut prévoir une indemnité conventionnelle supérieure — dans ce cas, c\'est la plus favorable qui s\'applique.',
  },
]

const relatedTools = [
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Calculez la durée de votre préavis avant la fin du contrat.',
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage (ARE)',
    description: 'Estimez votre allocation ARE après licenciement.',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'Comparez avec l\'indemnité de rupture conventionnelle.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculateur Indemnité de Licenciement 2026',
  description: 'Calculez votre indemnité légale de licenciement selon la formule 1/4 et 1/3 de mois.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PageIndemniteLicenciement() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Calculateur Indemnité Licenciement 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Formule légale (1/4 et 1/3 de mois). Résultat immédiat.
        </p>

        <Calculator>
          <LicenciementCalculateur />
        </Calculator>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/indemnite-licenciement/anciennete" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Calcul par tranche d'ancienneté
          </a>
        </div>

        <AdBanner slot="5555555555" />

        <section className="prose-content mt-2">
          <h2>Formule légale de l'indemnité de licenciement 2026</h2>
          <p>
            L'indemnité légale de licenciement est définie par l'<strong>article L1234-9 du Code du travail</strong>. Elle est calculée sur la base du salaire brut mensuel de référence.
          </p>
          <ul>
            <li><strong>1/4 de mois</strong> par année d'ancienneté pour les 10 premières années</li>
            <li><strong>1/3 de mois</strong> par année d'ancienneté au-delà de 10 ans</li>
          </ul>
          <h2>Cas particulier : inaptitude d'origine professionnelle</h2>
          <p>
            En cas de licenciement pour inaptitude consécutive à un accident du travail ou une maladie professionnelle, l'indemnité légale est <strong>doublée</strong>. C'est la règle la plus avantageuse pour les salariés.
          </p>
          <h2>Salaire de référence</h2>
          <p>
            Le salaire de référence est le <strong>plus favorable entre</strong> : la moyenne des salaires bruts des 12 derniers mois et la moyenne des 3 derniers mois. Primes incluses dans le calcul.
          </p>
        </section>

        <AdBanner slot="6666666666" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
