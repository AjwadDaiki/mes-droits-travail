import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import CongesCalculateur from '@/components/calculateurs/CongesCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import Faq, { type FaqItem } from '@/components/Faq'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/conges-payes'

export const metadata: Metadata = {
  title: 'Calculateur Congés Payés 2026 — Jours et Indemnité',
  description:
    'Calculez vos jours de congés acquis, restants et votre indemnité compensatrice selon les deux méthodes légales. Gratuit, résultat immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
  openGraph: {
    title: 'Calculateur Congés Payés 2026 — Jours et Indemnité',
    description: 'Jours acquis, restants et indemnité compensatrice selon les deux méthodes légales.',
    url: CANONICAL,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqItems: FaqItem[] = [
  {
    question: 'Combien de jours de congés payés acquiert-on par mois ?',
    answer:
      'Tout salarié acquiert 2,5 jours ouvrables de congés payés par mois de travail effectif, soit 30 jours ouvrables (5 semaines) par an. Certains événements assimilés à du travail effectif (maladie professionnelle, maternité, congé de formation, etc.) permettent aussi d\'acquérir des congés.',
  },
  {
    question: 'Quelles sont les deux méthodes de calcul de l\'indemnité de congés ?',
    answer:
      'La loi prévoit deux méthodes, et l\'employeur doit appliquer la plus favorable : 1) Méthode du 1/10e : l\'indemnité = 1/10e de la rémunération brute totale perçue sur la période de référence. 2) Méthode du maintien du salaire : le salarié perçoit la même rémunération qu\'il aurait eue s\'il avait travaillé. Notre calculateur compare automatiquement les deux.',
  },
  {
    question: 'Peut-on perdre ses congés non pris ?',
    answer:
      'En principe, les congés non pris à la fin de la période de référence (31 mai) sont perdus si l\'employeur a bien mis le salarié en mesure de les prendre. Cependant, depuis une décision de la Cour de cassation (2023) alignée sur la jurisprudence européenne, des exceptions existent notamment en cas de maladie.',
  },
  {
    question: 'Que se passe-t-il pour mes congés si mon contrat se termine ?',
    answer:
      'À la fin du contrat (quelle qu\'en soit la cause), l\'employeur doit verser une indemnité compensatrice de congés payés pour tous les jours de congés acquis et non pris. Cette indemnité est calculée selon la méthode la plus favorable entre le 1/10e et le maintien du salaire. Elle figure sur le solde de tout compte.',
  },
  {
    question: 'Les congés payés sont-ils soumis à cotisations sociales ?',
    answer:
      'Oui. L\'indemnité de congés payés est soumise aux mêmes cotisations sociales que le salaire (charges salariales et patronales). Elle est également imposable à l\'impôt sur le revenu. En revanche, l\'indemnité compensatrice de congés payés versée en fin de contrat suit le même régime.',
  },
]

const relatedTools = [
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Préavis et congés payés se cumulent en fin de contrat.',
  },
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Calculateur Heures Supplémentaires',
    description: 'Les heures sup entrent dans la rémunération de référence.',
  },
  {
    href: '/indemnite-licenciement',
    emoji: '⚖️',
    title: 'Calculateur Indemnité Licenciement',
    description: 'Calculez toutes vos indemnités en cas de licenciement.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculateur Congés Payés 2026',
  description: 'Calculez jours acquis, restants et indemnité compensatrice selon les deux méthodes légales.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: CANONICAL,
}

export default function PageCongesPayes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
          Calculateur Congés Payés 2026
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          Jours acquis, restants et indemnité selon les deux méthodes légales.
        </p>

        <Calculator>
          <CongesCalculateur />
        </Calculator>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a href="/conges-payes/restants" className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary transition-colors">
            Calculer jours restants
          </a>
        </div>

        <AdBanner slot="2222333344" />

        <section className="prose-content mt-2">
          <h2>Règles légales des congés payés 2026</h2>
          <p>
            Les congés payés sont régis par les <strong>articles L3141-1 et suivants du Code du travail</strong>. Tout salarié acquiert <strong>2,5 jours ouvrables par mois</strong> travaillé, soit <strong>30 jours ouvrables (5 semaines)</strong> par an.
          </p>
          <h2>Les deux méthodes de calcul</h2>
          <ul>
            <li>
              <strong>Méthode 1/10e</strong> : Indemnité = 1/10e du total des salaires bruts perçus pendant la période de référence
            </li>
            <li>
              <strong>Méthode du maintien</strong> : Salaire habituel maintenu (comme si le salarié avait travaillé)
            </li>
          </ul>
          <p>
            L'employeur est légalement tenu d'appliquer la méthode la plus favorable pour le salarié. Notre calculateur compare automatiquement les deux.
          </p>
        </section>

        <AdBanner slot="2222333355" />

        <DisclaimerLegal />
        <Faq items={faqItems} />
        <InternalLinks links={relatedTools} />
      </main>
    </>
  )
}
