import type { Metadata } from 'next'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/preavis/cdd'

export const metadata: Metadata = {
  title: 'Préavis CDD 2026 — Rupture Anticipée et Règles',
  description:
    'Règles du préavis en CDD : rupture anticipée, période d\'essai CDD, prime de précarité. Tout ce qu\'il faut savoir en 2026.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Y a-t-il un préavis à la fin d\'un CDD ?',
    answer:
      'Non. Un CDD prend fin automatiquement à son terme, sans préavis à respecter des deux côtés. Seule la période d\'essai d\'un CDD peut être rompue avec un délai de prévenance (généralement 24h jusqu\'à 8 jours, 48h au-delà).',
  },
  {
    question: 'Comment rompre un CDD avant son terme ?',
    answer:
      'La rupture anticipée d\'un CDD n\'est possible que dans des cas précis : accord commun des parties, faute grave de l\'une ou l\'autre, force majeure, ou si le salarié justifie d\'un CDI. En dehors de ces cas, la partie qui rompt doit indemniser l\'autre.',
  },
  {
    question: 'Ai-je droit à la prime de précarité à la fin de mon CDD ?',
    answer:
      'Oui, sauf exceptions. À la fin d\'un CDD, vous avez droit à une indemnité de fin de contrat (prime de précarité) égale à 10% du salaire brut total perçu. Cette prime ne s\'applique pas aux CDD saisonniers, CDD d\'usage, contrats de professionnalisation ou si le salarié est embauché en CDI.',
  },
  {
    question: 'Peut-on toucher le chômage à la fin d\'un CDD ?',
    answer:
      'Oui. La fin de CDD (non-renouvellement) ouvre droit à l\'ARE sous condition d\'avoir travaillé au moins 6 mois (130 jours) sur les 24 derniers mois. La prime de précarité perçue peut réduire le délai de franchise avant versement de l\'allocation.',
  },
]

const relatedTools = [
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis CDI',
    description: 'Calculez votre préavis en cas de CDI.',
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage',
    description: 'Estimez votre ARE après la fin de votre CDD.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function PagePreavisCDD() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <nav className="text-xs text-gray-400 mb-4">
          <a href="/preavis" className="hover:text-primary">Préavis</a>
          <span className="mx-1">›</span>
          <span>CDD</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Préavis CDD 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Rupture anticipée, fin de contrat et prime de précarité.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <p className="font-semibold text-blue-800 mb-2">
            À savoir : pas de préavis en fin de CDD
          </p>
          <p className="text-blue-700 text-sm">
            Un CDD prend fin automatiquement à la date prévue. Aucun préavis n'est requis de la part du salarié ou de l'employeur pour les CDD arrivant à terme.
          </p>
        </div>

        <AdBanner slot="cdd1111111" />

        <section className="prose-content">
          <h2>Rupture anticipée d'un CDD</h2>
          <p>
            La rupture avant terme d'un CDD n'est possible que dans des cas limitativement prévus par la loi :
          </p>
          <ul>
            <li><strong>Accord mutuel</strong> des deux parties</li>
            <li><strong>Faute grave</strong> commise par l'une ou l'autre partie</li>
            <li><strong>Force majeure</strong></li>
            <li><strong>Embauche en CDI</strong> pour le salarié (avec préavis d'1 à 2 semaines)</li>
          </ul>
          <p>
            En dehors de ces cas, la partie responsable de la rupture doit indemniser l'autre à hauteur des salaires qui auraient été versés jusqu'au terme du contrat.
          </p>
          <h2>Prime de précarité (indemnité de fin de CDD)</h2>
          <p>
            À la fin d'un CDD, l'employeur verse une <strong>indemnité de fin de contrat de 10%</strong> du salaire brut total perçu. Cette prime compense la précarité liée au contrat à durée déterminée.
          </p>
        </section>

        <AdBanner slot="cdd2222222" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
