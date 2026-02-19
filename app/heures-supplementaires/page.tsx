import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import HeuresSupCalculateur from '@/components/calculateurs/HeuresSupCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/heures-supplementaires'

export const metadata: Metadata = {
  title: 'Calculateur Heures Supplémentaires 2026 — 25% et 50%',
  description:
    'Calculez le montant brut de vos heures supplémentaires avec majorations légales 25% et 50%. Formule 2026, résultat immédiat et gratuit.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Calculateur Heures Supplémentaires 2026 — 25% et 50%',
    description: 'Majorations légales 25% et 50% calculées instantanément.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quel est le taux de majoration des heures supplémentaires ?',
    answer:
      'Les 8 premières heures supplémentaires par semaine (de la 36e à la 43e heure) sont majorées de 25%. Les heures au-delà (à partir de la 44e heure) sont majorées de 50%. Ces taux sont les minimums légaux — votre convention collective peut prévoir des taux supérieurs.',
  },
  {
    question: 'Qu\'est-ce que le contingent annuel d\'heures supplémentaires ?',
    answer:
      'Le contingent légal est fixé à 220 heures supplémentaires par an et par salarié. Au-delà de ce contingent, les heures supplémentaires restent possibles mais nécessitent l\'avis du Comité Social et Économique (CSE) et donnent droit à une contrepartie obligatoire en repos (COR). Ce contingent peut être modifié par accord collectif.',
  },
  {
    question: 'Les heures supplémentaires sont-elles imposables ?',
    answer:
      'Depuis 2019, les heures supplémentaires bénéficient d\'une exonération d\'impôt sur le revenu dans la limite de 7 500€ par an. Elles sont également partiellement exonérées de cotisations salariales et patronales, ce qui augmente leur avantage net pour le salarié.',
  },
  {
    question: 'Peut-on refuser de faire des heures supplémentaires ?',
    answer:
      'En principe, les heures supplémentaires sont décidées par l\'employeur. Le salarié peut refuser si : les heures sont imposées de façon abusive, si elles dépassent les durées maximales légales (10h/jour, 48h/semaine, 44h en moyenne sur 12 semaines), ou si un accord collectif l\'interdit. Un refus injustifié peut constituer une faute.',
  },
]

const relatedTools = [
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Convertisseur Brut / Net',
    description: 'Calculez le net que vous percevrez sur vos heures sup.',
  },
  {
    href: '/conges-payes',
    emoji: '🏖️',
    title: 'Calculateur Congés Payés',
    description: 'Les heures sup entrent dans la base de calcul des congés.',
  },
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Calculez votre préavis en cas de démission ou licenciement.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculateur Heures Supplémentaires 2026',
  description: 'Calculez le montant brut de vos heures supplémentaires avec majorations légales 25% et 50%.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PageHeuresSup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Calculateur Heures Supplémentaires 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Majorations légales +25% et +50% calculées instantanément.
        </p>

        <Calculator>
          <HeuresSupCalculateur />
        </Calculator>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/heures-supplementaires/25-50" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Détail majorations 25% et 50%
          </a>
        </div>

        <AdBanner slot="9999999999" />

        <section className="prose-content mt-2">
          <h2>Règles légales des heures supplémentaires 2026</h2>
          <p>
            Les heures supplémentaires sont régies par l'<strong>article L3121-28 du Code du travail</strong>. Elles correspondent aux heures effectuées au-delà de la durée légale de travail de <strong>35 heures par semaine</strong>.
          </p>
          <ul>
            <li><strong>Heures 36 à 43 (1ère à 8e heure sup.)</strong> : taux majoré de +25%</li>
            <li><strong>Heures 44 et au-delà (au-delà de la 8e)</strong> : taux majoré de +50%</li>
          </ul>
          <h2>Comment calculer son taux horaire ?</h2>
          <p>
            Divisez votre salaire brut mensuel par <strong>151,67 heures</strong> (durée mensuelle légale). Exemple : 2 500€ brut ÷ 151,67 = 16,48€/heure brut.
          </p>
        </section>

        <AdBanner slot="1010101010" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
