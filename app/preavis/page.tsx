import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import PreavisCalculateur from '@/components/calculateurs/PreavisCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/preavis'

export const metadata: Metadata = {
  title: 'Calculateur Préavis Démission 2026 — Résultat Immédiat',
  description:
    'Calculez votre durée de préavis et votre date de fin de contrat en 10 secondes. Gratuit, sans inscription, selon votre statut et ancienneté.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Calculateur Préavis Démission 2026 — Résultat Immédiat',
    description:
      'Calculez votre durée de préavis selon statut et ancienneté.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle est la durée du préavis pour un CDI ?',
    answer:
      'Pour un salarié non-cadre en CDI, la durée légale du préavis est de 1 mois entre 6 mois et 2 ans d\'ancienneté, et de 2 mois au-delà de 2 ans. Pour les cadres, le préavis est généralement de 3 mois, quelle que soit l\'ancienneté. Ces durées sont des minimums légaux — votre convention collective peut prévoir des durées supérieures.',
  },
  {
    question: 'Le préavis est-il le même en cas de démission et de licenciement ?',
    answer:
      'Oui, les durées légales sont identiques pour la démission et le licenciement dans le Code du travail. Cependant, certaines conventions collectives prévoient des durées différentes selon le motif de rupture. En cas de licenciement pour faute grave ou lourde, le salarié perd son droit au préavis.',
  },
  {
    question: 'Peut-on être dispensé d\'effectuer son préavis ?',
    answer:
      'Oui. L\'employeur peut dispenser le salarié d\'effectuer son préavis (dispense de préavis). Dans ce cas, l\'employeur doit verser une indemnité compensatrice de préavis équivalente au salaire qui aurait été perçu pendant la durée du préavis. Le salarié peut également, d\'un commun accord, partir avant la fin du préavis.',
  },
  {
    question: 'Comment calculer la date de fin de préavis ?',
    answer:
      'La date de fin de préavis se calcule en ajoutant la durée du préavis (en mois) à la date de notification. Notre calculateur le fait automatiquement. Attention : le préavis court en jours calendaires (tous les jours comptent, week-ends et jours fériés inclus).',
  },
  {
    question: 'Que se passe-t-il si mon employeur ne respecte pas le préavis ?',
    answer:
      'Si votre employeur ne vous laisse pas effectuer votre préavis sans vous verser d\'indemnité compensatrice, vous pouvez saisir le Conseil de Prud\'hommes pour obtenir le paiement de l\'indemnité compensatrice de préavis. Ce manquement peut aussi entrer dans le cadre d\'un licenciement sans cause réelle et sérieuse.',
  },
]

const relatedTools = [
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage (ARE)',
    description: 'Estimez votre allocation après la fin de votre contrat.',
  },
  {
    href: '/indemnite-licenciement',
    emoji: '⚖️',
    title: 'Calculateur Indemnité de Licenciement',
    description: 'Calculez l\'indemnité légale selon votre ancienneté.',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'Calculez votre indemnité de rupture conventionnelle.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculateur de Préavis 2026',
  description:
    'Calculez votre durée de préavis (démission, licenciement, retraite) selon votre statut et ancienneté.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PagePreavis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Calculateur Préavis Démission 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Résultat immédiat selon votre statut et ancienneté.
        </p>

        <Calculator>
          <PreavisCalculateur />
        </Calculator>

        {/* Variantes */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/preavis/cdi" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Préavis CDI
          </a>
          <a href="/preavis/cdd" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Préavis CDD
          </a>
          <a href="/preavis/cadre" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Préavis cadre
          </a>
          <a href="/preavis/licenciement" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Préavis licenciement
          </a>
        </div>

        {/* AdSense — entre résultat et explication */}
        <AdBanner slot="1111111111" />

        {/* Explication légale */}
        <section className="prose-content mt-2">
          <h2>Comment calculer son préavis en 2026 ?</h2>
          <p>
            Le préavis est la période pendant laquelle vous continuez à travailler après avoir notifié votre démission ou après réception de votre lettre de licenciement. Sa durée dépend de <strong>votre statut (cadre ou non-cadre)</strong>, de <strong>votre ancienneté</strong> et du <strong>motif de la rupture</strong>.
          </p>
          <h2>Règles légales du préavis (Code du travail)</h2>
          <ul>
            <li><strong>Non-cadre — moins de 6 mois</strong> : durée selon convention collective</li>
            <li><strong>Non-cadre — entre 6 mois et 2 ans</strong> : 1 mois</li>
            <li><strong>Non-cadre — plus de 2 ans</strong> : 2 mois</li>
            <li><strong>Cadre</strong> : 3 mois (quelle que soit l'ancienneté)</li>
          </ul>
          <p>
            Attention : votre convention collective peut prévoir des durées supérieures. En cas de doute, consultez votre contrat de travail ou contactez votre syndicat.
          </p>
        </section>

        {/* AdSense secondaire */}
        <AdBanner slot="2222222222" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
