import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import ChomageCalculateur from '@/components/calculateurs/ChomageCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/simulation-chomage/are'

export const metadata: Metadata = {
  title: 'Calcul ARE Détaillé 2026 — SJR et Allocation Journalière',
  description:
    'Calculez votre ARE avec détail du SJR (Salaire Journalier de Référence), allocation journalière et mensuelle. Règles France Travail 2026.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const relatedTools = [
  {
    href: '/simulation-chomage',
    emoji: '📋',
    title: 'Simulateur Chômage',
    description: 'Retour au simulateur principal.',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Rupture Conventionnelle',
    description: 'La RC ouvre droit à l\'ARE — calculez votre indemnité.',
  },
]

export default function PageARE() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/simulation-chomage" className="hover:text-primary">Chômage</a>
        <span className="mx-1">›</span>
        <span>Calcul ARE détaillé</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Calcul ARE Détaillé 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        SJR, allocation journalière et mensuelle selon les règles France Travail.
      </p>

      <Calculator>
        <ChomageCalculateur />
      </Calculator>

      <AdBanner slot="are-11111" />

      <section className="prose-content mt-2">
        <h2>Comment France Travail calcule votre ARE ?</h2>
        <p>
          Le calcul de l'Allocation de Retour à l'Emploi (ARE) se fait en deux étapes :
        </p>
        <ul>
          <li>
            <strong>Étape 1 — Calcul du SJR</strong> : Salaire Journalier de Référence = Total des salaires des 24 derniers mois ÷ (nombre de jours travaillés × 1,4)
          </li>
          <li>
            <strong>Étape 2 — Calcul de l'allocation</strong> : ARE = max(40,4% × SJR + 12,95€ / 57% × SJR)
          </li>
        </ul>
        <p>
          L'allocation est ensuite encadrée par un plancher (<strong>31,59€/jour</strong>) et un plafond (<strong>75% du SJR</strong>).
        </p>
        <h2>Exemple de calcul</h2>
        <p>
          Pour un salaire brut de 2 500€/mois : SJR ≈ 2 500 × 1,4 / 30 ≈ 116,67€. Formule 1 : 40,4% × 116,67 + 12,95 = 60,12€. Formule 2 : 57% × 116,67 = 66,50€. <strong>ARE = 66,50€/jour</strong> (formule 2 plus avantageuse) soit environ <strong>1 995€/mois</strong>.
        </p>
      </section>

      <DisclaimerLegal />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
