import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import LicenciementCalculateur from '@/components/calculateurs/LicenciementCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/indemnite-licenciement/anciennete'

export const metadata: Metadata = {
  title: 'Indemnité Licenciement par Ancienneté 2026 — Tranches 1/4 et 1/3',
  description:
    'Calculez votre indemnité de licenciement tranche par tranche : 1/4 de mois jusqu\'à 10 ans, 1/3 de mois au-delà. Formule légale 2026.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const relatedTools = [
  {
    href: '/indemnite-licenciement',
    emoji: '⚖️',
    title: 'Calculateur Licenciement',
    description: 'Retour à la page principale du calculateur.',
  },
  {
    href: '/rupture-conventionnelle',
    emoji: '🤝',
    title: 'Rupture Conventionnelle',
    description: 'Même formule, négociation possible au-delà du minimum.',
  },
]

// Tableau des exemples par ancienneté
const exemples = [
  { ans: 1, taux: '1/4', base3000: 750 },
  { ans: 3, taux: '1/4', base3000: 2_250 },
  { ans: 5, taux: '1/4', base3000: 3_750 },
  { ans: 10, taux: '1/4', base3000: 7_500 },
  { ans: 12, taux: '1/4 + 1/3', base3000: 9_500 },
  { ans: 15, taux: '1/4 + 1/3', base3000: 12_500 },
  { ans: 20, taux: '1/4 + 1/3', base3000: 16_667 },
]

export default function PageAnciennete() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/indemnite-licenciement" className="hover:text-primary">Indemnité licenciement</a>
        <span className="mx-1">›</span>
        <span>Par ancienneté</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Indemnité Licenciement par Ancienneté 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Calcul détaillé tranche 1/4 et 1/3 selon votre ancienneté.
      </p>

      <Calculator>
        <LicenciementCalculateur />
      </Calculator>

      <AdBanner slot="anc1111111" />

      {/* Tableau indicatif */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Tableau indicatif (base salaire 3 000€/mois)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-medium text-gray-600">Ancienneté</th>
                <th className="text-left p-3 font-medium text-gray-600">Formule</th>
                <th className="text-right p-3 font-medium text-gray-600">Indemnité (3 000€)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {exemples.map((ex) => (
                <tr key={ex.ans} className="hover:bg-gray-50">
                  <td className="p-3 font-medium">{ex.ans} an(s)</td>
                  <td className="p-3 text-gray-500">{ex.taux}</td>
                  <td className="p-3 text-right font-semibold text-primary">
                    {ex.base3000.toLocaleString('fr-FR')} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          * Calcul indicatif avec un salaire brut de 3 000€/mois. Ajustez selon votre salaire réel.
        </p>
      </section>

      <DisclaimerLegal />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
