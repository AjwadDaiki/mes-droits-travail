import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import HeuresSupCalculateur from '@/components/calculateurs/HeuresSupCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/heures-supplementaires/25-50'

export const metadata: Metadata = {
  title: 'Majoration Heures Sup 25% et 50% — Calcul 2026',
  description:
    'Comprenez et calculez les majorations de 25% et 50% sur vos heures supplémentaires. Règles légales 2026, résultat immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const relatedTools = [
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Calculateur Heures Sup.',
    description: 'Retour au calculateur principal.',
  },
  {
    href: '/salaire-brut-net',
    emoji: '💶',
    title: 'Brut / Net',
    description: 'Convertissez vos heures sup. en net.',
  },
]

export default function PageMajoration2550() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/heures-supplementaires" className="hover:text-primary">Heures supp.</a>
        <span className="mx-1">›</span>
        <span>Majorations 25% et 50%</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Majorations Heures Supplémentaires 25% et 50%
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Calculez le montant selon les deux tranches de majoration légale.
      </p>

      <Calculator>
        <HeuresSupCalculateur />
      </Calculator>

      <AdBanner slot="hs-2550-1" />

      <section className="prose-content mt-2">
        <h2>Comprendre les deux taux de majoration</h2>
        <p>
          La loi distingue deux tranches d'heures supplémentaires avec des taux de majoration différents :
        </p>
        <ul>
          <li>
            <strong>Heures de la 36e à la 43e (1ère à 8e heure supp.)</strong> : majoration de <strong>+25%</strong>. Exemple : taux de 15€/h → 15 × 1,25 = 18,75€/h
          </li>
          <li>
            <strong>Heures à partir de la 44e (au-delà de 8 heures supp.)</strong> : majoration de <strong>+50%</strong>. Exemple : taux de 15€/h → 15 × 1,50 = 22,50€/h
          </li>
        </ul>
        <p>
          Ces taux peuvent être majorés par votre convention collective. Depuis 2019, les heures supplémentaires bénéficient d'une <strong>exonération d'impôt sur le revenu</strong> dans la limite de 7 500€ par an.
        </p>
      </section>

      <DisclaimerLegal />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
