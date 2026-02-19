import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import BrutNetCalculateur from '@/components/calculateurs/BrutNetCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/salaire-brut-net/non-cadre'

export const metadata: Metadata = {
  title: 'Salaire Brut Net Non-Cadre 2026 — Cotisations 22%',
  description:
    'Convertissez votre salaire brut en net pour les non-cadres. Taux de cotisations ≈ 22% en 2026. Résultat et coût employeur immédiats.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const relatedTools = [
  {
    href: '/salaire-brut-net/cadre',
    emoji: '👔',
    title: 'Brut/Net Cadre',
    description: 'Cotisations ≈ 25% pour les cadres.',
  },
  {
    href: '/heures-supplementaires',
    emoji: '⏰',
    title: 'Heures Supplémentaires',
    description: 'Calculez vos heures sup. avec majorations.',
  },
]

export default function PageSalaireBrutNetNonCadre() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/salaire-brut-net" className="hover:text-primary">Brut / Net</a>
        <span className="mx-1">›</span>
        <span>Non-cadre</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Salaire Brut Net Non-Cadre 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Cotisations salariales ≈ 22% — Net ≈ Brut × 0,78
      </p>

      <Calculator>
        <BrutNetCalculateur defaultStatut="non-cadre" />
      </Calculator>

      <AdBanner slot="nc-bn1111" />

      <section className="prose-content mt-2">
        <h2>Cotisations salariales non-cadre 2026</h2>
        <p>
          Pour un salarié non-cadre, les cotisations salariales représentent environ <strong>22% du salaire brut</strong>. Ce taux couvre : assurance maladie, retraite de base (CNAV), retraite complémentaire (AGIRC-ARRCO tranche A), assurance chômage (CSG/CRDS).
        </p>
        <ul>
          <li>Net mensuel ≈ Brut × 0,78</li>
          <li>Coût employeur ≈ Brut × 1,42</li>
        </ul>
        <p>
          Le SMIC brut mensuel 2026 est de 1 801,80€, soit un net d'environ 1 405€.
        </p>
      </section>

      <DisclaimerLegal />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
