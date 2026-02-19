import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import ChomageCalculateur from '@/components/calculateurs/ChomageCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/simulation-chomage'

export const metadata: Metadata = {
  title: 'Simulateur Chômage ARE 2026 — Estimation Allocation',
  description:
    'Simulez votre allocation chômage ARE selon votre salaire, ancienneté et motif de fin de contrat. Règles France Travail 2026, résultat immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Simulateur Chômage ARE 2026 — Estimation Allocation',
    description: 'Estimez votre allocation ARE selon les règles France Travail 2026.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Qui peut bénéficier de l\'allocation chômage (ARE) ?',
    answer:
      'Pour bénéficier de l\'ARE, vous devez : avoir été salarié involontairement (licenciement, rupture conventionnelle, fin de CDD, démission légitime), avoir travaillé au moins 6 mois (130 jours) sur les 24 derniers mois, être en recherche active d\'emploi et être inscrit à France Travail. Les démissionnaires "classiques" ne sont pas éligibles sauf cas spéciaux.',
  },
  {
    question: 'Comment est calculée l\'allocation ARE en 2026 ?',
    answer:
      'L\'allocation journalière est calculée à partir du Salaire Journalier de Référence (SJR = salaire des 24 derniers mois / jours travaillés × 1,4). L\'ARE = le plus élevé entre : 40,4% × SJR + 12,95€ et 57% × SJR. Le plancher est de 31,59€/jour et le plafond est de 75% du SJR.',
  },
  {
    question: 'Pendant combien de temps peut-on toucher le chômage ?',
    answer:
      'La durée d\'indemnisation est égale à votre durée de cotisation, dans la limite de : 24 mois pour les moins de 53 ans, 30 mois pour les 53-54 ans, 36 mois pour les 55 ans et plus. Ces durées peuvent évoluer selon les réformes en cours.',
  },
  {
    question: 'Peut-on cumuler l\'ARE avec un emploi ?',
    answer:
      'Oui. Si vous reprenez un emploi à temps partiel ou à durée limitée, vous pouvez cumuler votre salaire avec une partie de votre ARE. Les règles de cumul permettent de garder jusqu\'à 70% de votre ancien salaire brut entre le salaire et l\'ARE. France Travail recalcule votre allocation en fonction de vos déclarations mensuelles.',
  },
  {
    question: 'Qu\'est-ce que le délai de carence ARE ?',
    answer:
      'Après votre inscription, un délai de carence de 7 jours s\'applique systématiquement. S\'ajoutent à cela des jours de franchise : franchise congés payés (indemnités de congés perçues / SJR) et franchise spécifique (indemnités de rupture supérieures au légal). Ces délais peuvent repousser le versement de plusieurs semaines à plusieurs mois.',
  },
]

const relatedTools = [
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Simulateur Rupture Conventionnelle',
    description: 'La RC ouvre droit au chômage — calculez votre indemnité.',
  },
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Calculez la durée de préavis avant la fin de votre contrat.',
  },
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Convertisseur Brut / Net',
    description: 'L\'ARE est calculée sur la base du salaire brut.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Simulateur Chômage ARE 2026',
  description: 'Simulez votre allocation chômage ARE selon les règles France Travail 2026.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PageSimulationChomage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Simulateur Chômage ARE 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Estimez votre allocation journalière et mensuelle selon les règles France Travail.
        </p>

        <Calculator>
          <ChomageCalculateur />
        </Calculator>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/simulation-chomage/are" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Calcul ARE détaillé
          </a>
        </div>

        <AdBanner slot="1111222233" />

        <section className="prose-content mt-2">
          <h2>Formule de calcul de l'ARE 2026</h2>
          <p>
            L'Allocation de Retour à l'Emploi (ARE) est calculée par France Travail selon les règles du règlement d'assurance chômage. Notre simulateur utilise les paramètres 2024-2026 en vigueur.
          </p>
          <ul>
            <li><strong>SJR</strong> = Total salaires sur 24 mois / (jours de travail × 1,4)</li>
            <li><strong>ARE/jour</strong> = max(40,4% × SJR + 12,95€ / 57% × SJR)</li>
            <li><strong>Plancher</strong> : 31,59€/jour</li>
            <li><strong>Plafond</strong> : 75% du SJR</li>
          </ul>
          <h2>Durée d'indemnisation</h2>
          <ul>
            <li><strong>Moins de 53 ans</strong> : durée = ancienneté, max 24 mois</li>
            <li><strong>53 à 54 ans</strong> : max 30 mois</li>
            <li><strong>55 ans et plus</strong> : max 36 mois</li>
          </ul>
        </section>

        <AdBanner slot="1111222244" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
