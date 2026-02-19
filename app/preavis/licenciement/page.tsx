import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import PreavisCalculateur from '@/components/calculateurs/PreavisCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/preavis/licenciement'

export const metadata: Metadata = {
  title: 'Préavis Licenciement 2026 — Durée et Calcul',
  description:
    'Calculez la durée de votre préavis en cas de licenciement. Règles légales 2026 pour cadres et non-cadres. Résultat et date de fin immédiats.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle est la durée du préavis en cas de licenciement ?',
    answer:
      'Pour un non-cadre : moins de 6 mois → selon convention, 6 mois à 2 ans → 1 mois, plus de 2 ans → 2 mois. Pour un cadre : généralement 3 mois. En cas de licenciement pour faute grave ou lourde, il n\'y a pas de préavis.',
  },
  {
    question: 'Puis-je trouver un emploi pendant mon préavis de licenciement ?',
    answer:
      'Oui. Pendant le préavis, vous pouvez chercher un emploi. Selon votre convention collective, vous pouvez avoir droit à des heures d\'absence pour recherche d\'emploi (souvent 2 heures par jour ou 50 heures pour l\'ensemble du préavis).',
  },
  {
    question: 'L\'employeur peut-il me dispenser de préavis en cas de licenciement ?',
    answer:
      'Oui. L\'employeur peut dispenser le salarié d\'effectuer son préavis. Il doit alors lui verser l\'intégralité de l\'indemnité compensatrice de préavis (équivalente au salaire qui aurait été versé). Cette dispense n\'est pas désavantageuse pour le salarié.',
  },
]

const relatedTools = [
  {
    href: '/indemnite-licenciement',
    emoji: '⚖️',
    title: 'Indemnité de Licenciement',
    description: 'Calculez également votre indemnité légale.',
  },
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage',
    description: 'Estimez votre ARE après le licenciement.',
  },
]

export default function PagePreavisLicenciement() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/preavis" className="hover:text-primary">Préavis</a>
        <span className="mx-1">›</span>
        <span>Licenciement</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Préavis Licenciement 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Durée et date de fin selon votre statut et ancienneté.
      </p>

      <Calculator>
        <PreavisCalculateur defaultStatut="non-cadre" defaultTypeRupture="licenciement" />
      </Calculator>

      <AdBanner slot="lic1111111" />

      <section className="prose-content mt-2">
        <h2>Préavis de licenciement : mêmes durées que la démission</h2>
        <p>
          Les durées légales du préavis en cas de licenciement sont <strong>identiques à celles de la démission</strong> pour les non-cadres. Seule exception : le licenciement pour <strong>faute grave ou lourde</strong> supprime l'obligation de préavis.
        </p>
        <ul>
          <li>Non-cadre, 6 mois à 2 ans → <strong>1 mois</strong></li>
          <li>Non-cadre, plus de 2 ans → <strong>2 mois</strong></li>
          <li>Cadre → généralement <strong>3 mois</strong></li>
        </ul>
      </section>

      <DisclaimerLegal />
      <Faq items={faqItems} />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
