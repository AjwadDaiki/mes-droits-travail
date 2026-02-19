import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import BrutNetCalculateur from '@/components/calculateurs/BrutNetCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/salaire-brut-net/cadre'

export const metadata: Metadata = {
  title: 'Salaire Brut Net Cadre 2026 — Cotisations 25%',
  description:
    'Convertissez votre salaire brut en net pour les cadres. Taux de cotisations 25% en 2026. Coût employeur inclus. Résultat immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const relatedTools = [
  {
    href: '/salaire-brut-net/non-cadre',
    emoji: '👤',
    title: 'Brut/Net Non-Cadre',
    description: 'Cotisations ≈ 22% pour les non-cadres.',
  },
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Heures Supplémentaires',
    description: 'Calculez vos heures supp. au taux cadre.',
  },
]

export default function PageSalaireBrutNetCadre() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/salaire-brut-net" className="hover:text-primary">Brut / Net</a>
        <span className="mx-1">›</span>
        <span>Cadre</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Salaire Brut Net Cadre 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Cotisations salariales ≈ 25% — Net ≈ Brut × 0,75
      </p>

      <Calculator>
        <BrutNetCalculateur defaultStatut="cadre" />
      </Calculator>

      <AdBanner slot="cadre-bn1" />

      <section className="prose-content mt-2">
        <h2>Cotisations salariales pour les cadres en 2026</h2>
        <p>
          Les cadres cotisent davantage que les non-cadres principalement du fait d'une <strong>cotisation de retraite complémentaire supérieure</strong> (Tranche B de l'AGIRC-ARRCO). Le taux global de cotisations salariales est d'environ <strong>25%</strong> du salaire brut.
        </p>
        <ul>
          <li>Net mensuel ≈ Brut × 0,75</li>
          <li>Coût employeur ≈ Brut × 1,42</li>
          <li>Cotisations ≈ 25% du brut</li>
        </ul>
      </section>

      <DisclaimerLegal />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
