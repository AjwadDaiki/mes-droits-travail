import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import CongesCalculateur from '@/components/calculateurs/CongesCalculateur'
import AdBanner from '@/components/AdBanner'
import DisclaimerLegal from '@/components/DisclaimerLegal'
import InternalLinks from '@/components/InternalLinks'

const CANONICAL = 'https://mes-droits-travail.fr/conges-payes/restants'

export const metadata: Metadata = {
  title: 'Congés Payés Restants 2026 — Jours et Indemnité',
  description:
    'Calculez exactement vos jours de congés payés restants et l\'indemnité compensatrice si vous quittez l\'entreprise. Résultat immédiat.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'fr-FR': CANONICAL },
  },
}

const relatedTools = [
  {
    href: '/conges-payes',
    emoji: '🏖️',
    title: 'Congés Payés',
    description: 'Retour au calculateur principal.',
  },
  {
    href: '/preavis',
    emoji: '📅',
    title: 'Calculateur de Préavis',
    description: 'Les congés restants s\'ajoutent au préavis en fin de contrat.',
  },
]

export default function PageCongesRestants() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-400 mb-4">
        <a href="/conges-payes" className="hover:text-primary">Congés payés</a>
        <span className="mx-1">›</span>
        <span>Jours restants</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
        Congés Payés Restants 2026
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Jours restants et indemnité compensatrice à la fin du contrat.
      </p>

      <Calculator>
        <CongesCalculateur />
      </Calculator>

      <AdBanner slot="conges-r1" />

      <section className="prose-content mt-2">
        <h2>Que deviennent mes congés restants à la fin du contrat ?</h2>
        <p>
          Quelle que soit la cause de rupture (démission, licenciement, rupture conventionnelle), l'employeur doit verser une <strong>indemnité compensatrice de congés payés</strong> pour tous les jours de congés acquis et non pris.
        </p>
        <p>
          Cette indemnité est calculée selon la méthode la plus favorable entre :
        </p>
        <ul>
          <li>La méthode du <strong>1/10e</strong> : 1/10e du total des salaires bruts de la période</li>
          <li>La méthode du <strong>maintien du salaire</strong> : rémunération habituelle proratisée</li>
        </ul>
        <p>
          Elle figure obligatoirement sur le <strong>solde de tout compte</strong> et est soumise aux mêmes cotisations que le salaire.
        </p>
      </section>

      <DisclaimerLegal />
      <InternalLinks links={relatedTools} />
    </main>
  )
}
