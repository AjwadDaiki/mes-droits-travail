'use client'

import { useState } from 'react'
import { calculerRuptureConventionnelle } from '@/lib/rupture'

export default function RuptureCalculateur() {
  const [salaire, setSalaire] = useState('')
  const [annees, setAnnees] = useState('')
  const [mois, setMois] = useState('')
  const [result, setResult] = useState<ReturnType<
    typeof calculerRuptureConventionnelle
  > | null>(null)

  function handleCalculer() {
    const salaireNum = parseFloat(salaire.replace(',', '.'))
    if (!salaireNum || salaireNum <= 0) return
    setResult(
      calculerRuptureConventionnelle({
        salaireBrutMensuel: salaireNum,
        ancienneteAnnees: parseInt(annees || '0', 10),
        ancienneteMois: parseInt(mois || '0', 10),
      })
    )
  }

  return (
    <div>
      <div className="space-y-4">
        {/* Salaire */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Salaire brut mensuel (€)
          </label>
          <input
            type="number"
            min="0"
            step="10"
            value={salaire}
            onChange={(e) => setSalaire(e.target.value)}
            placeholder="Ex : 3 000"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Moyenne des 12 derniers mois (ou 3 si plus favorable)
          </p>
        </div>

        {/* Ancienneté */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ancienneté dans l'entreprise
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="number"
                min="0"
                max="50"
                value={annees}
                onChange={(e) => setAnnees(e.target.value)}
                placeholder="0"
                className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Années</p>
            </div>
            <div>
              <input
                type="number"
                min="0"
                max="11"
                value={mois}
                onChange={(e) => setMois(e.target.value)}
                placeholder="0"
                className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Mois</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculer}
          className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Calculer mon indemnité
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
          <div className="text-center">
            <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
              Indemnité minimale légale
            </p>
            <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
              {result.indemniteMinimale.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              })}
            </p>
            <p className="text-[#0A3D6B] text-sm mt-2 opacity-80">
              Pour {result.anneesTotales.toFixed(1)} an(s) d'ancienneté
            </p>
          </div>

          {/* Détail tranches */}
          {result.tranche2 > 0 && (
            <div className="mt-4 pt-3 border-t border-blue-200 space-y-1.5 text-sm text-[#0A3D6B]">
              <div className="flex justify-between">
                <span>Tranche 1 (10 ans × 1/4)</span>
                <strong>
                  {result.tranche1.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 0,
                  })}
                </strong>
              </div>
              <div className="flex justify-between">
                <span>Tranche 2 (au-delà × 1/3)</span>
                <strong>
                  {result.tranche2.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 0,
                  })}
                </strong>
              </div>
            </div>
          )}

          {result.depasse_seuil_exoneration && (
            <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              Votre indemnité dépasse 50 000€. Le plafond d'exonération de
              cotisations sociales 2026 est de{' '}
              {result.seuilExoneration.toLocaleString('fr-FR')}€ (2 × PASS).
              Consultez un expert-comptable.
            </p>
          )}

          <p className="mt-3 text-xs text-blue-700 bg-blue-100 rounded-lg px-3 py-2 text-center">
            Ce montant est le minimum légal. La négociation peut aller au-delà.
          </p>
        </div>
      )}
    </div>
  )
}
