import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import BrutNetCalculateur from '@/components/calculateurs/BrutNetCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/salaire-brut-net'

export const metadata: Metadata = {
  title: 'Calculateur Salaire Brut Net 2026 — Cadre & Non-Cadre',
  description:
    'Convertissez votre salaire brut en net instantanément. Estimation cadre/non-cadre avec cotisations 2026. Gratuit et sans inscription.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Calculateur Salaire Brut Net 2026 — Cadre & Non-Cadre',
    description: 'Convertissez salaire brut en net avec les cotisations 2026.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle est la différence entre salaire brut et salaire net ?',
    answer:
      'Le salaire brut est le montant convenu dans votre contrat de travail, avant déduction des cotisations sociales salariales. Le salaire net est ce que vous recevez réellement sur votre compte bancaire, après déduction des cotisations (retraite, santé, chômage, etc.) et du prélèvement à la source pour l\'impôt sur le revenu.',
  },
  {
    question: 'Quel est le taux de cotisations salariales en France en 2026 ?',
    answer:
      'En 2026, les cotisations salariales représentent environ 22% du salaire brut pour un non-cadre et 25% pour un cadre (du fait d\'une cotisation de retraite complémentaire supérieure). Ce taux est une approximation — le taux exact dépend de votre convention collective et de votre niveau de salaire.',
  },
  {
    question: 'Comment calculer le coût total employeur ?',
    answer:
      'Le coût total employeur (charges patronales incluses) est approximativement égal au salaire brut multiplié par 1,42. Ainsi, un salarié avec un brut de 2 000€/mois coûte environ 2 840€ à l\'employeur. Ce taux varie selon les effectifs, les exonérations (bas salaires) et la convention collective.',
  },
  {
    question: 'Comment passer du net au brut ?',
    answer:
      'Pour convertir un salaire net en brut : pour un non-cadre, divisez le net par 0,78. Pour un cadre, divisez par 0,75. Exemple : 2 000€ net non-cadre → 2 000 / 0,78 ≈ 2 564€ brut. Notre calculateur fait cette conversion dans les deux sens.',
  },
]

const relatedTools = [
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Calculateur Heures Supplémentaires',
    description: 'Calculez le montant brut de vos heures supplémentaires.',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'Calculez votre indemnité en brut avant négociation.',
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage (ARE)',
    description: 'Votre ARE est calculée sur la base de votre salaire brut.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculateur Salaire Brut Net 2026',
  description: 'Convertisseur salaire brut / net avec les cotisations salariales 2026, cadre et non-cadre.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PageSalaireBrutNet() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Calculateur Salaire Brut Net 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Convertissez instantanément — cadre ou non-cadre.
        </p>

        <Calculator>
          <BrutNetCalculateur />
        </Calculator>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/salaire-brut-net/cadre" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Brut/Net cadre
          </a>
          <a href="/salaire-brut-net/non-cadre" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Brut/Net non-cadre
          </a>
        </div>

        <AdBanner slot="7777777777" />

        <section className="prose-content mt-2">
          <h2>Comment convertir son salaire brut en net en 2026 ?</h2>
          <p>
            La conversion brut / net dépend principalement de votre statut (cadre ou non-cadre) et des cotisations sociales salariales applicables. En 2026, voici les taux approximatifs à retenir :
          </p>
          <ul>
            <li><strong>Non-cadre</strong> : Net ≈ Brut × 0,78 (cotisations ≈ 22%)</li>
            <li><strong>Cadre</strong> : Net ≈ Brut × 0,75 (cotisations ≈ 25%)</li>
            <li><strong>Coût employeur</strong> : Brut × 1,42 (charges patronales incluses)</li>
          </ul>
          <h2>Ces estimations incluent-elles le prélèvement à la source ?</h2>
          <p>
            Non. Le calculateur donne le <strong>net avant impôt</strong>. Le montant final sur votre compte dépend de votre taux de prélèvement à la source, qui varie selon votre situation fiscale. Ces estimations sont valables pour la grande majorité des salariés du secteur privé.
          </p>
        </section>

        <AdBanner slot="8888888888" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
