'use client'

import { useState } from 'react'
import {
  calculerIndemniteLicenciement,
  type TypeLicenciement,
  type OrigineInaptitude,
} from '@/lib/licenciement'

export default function LicenciementCalculateur() {
  const [salaire, setSalaire] = useState('')
  const [annees, setAnnees] = useState('')
  const [mois, setMois] = useState('')
  const [type, setType] = useState<TypeLicenciement>('personnel')
  const [origine, setOrigine] = useState<OrigineInaptitude>('non-professionnelle')
  const [result, setResult] = useState<ReturnType<
    typeof calculerIndemniteLicenciement
  > | null>(null)

  function handleCalculer() {
    const salaireNum = parseFloat(salaire.replace(',', '.'))
    if (!salaireNum || salaireNum <= 0) return
    setResult(
      calculerIndemniteLicenciement({
        salaireBrutMensuel: salaireNum,
        ancienneteAnnees: parseInt(annees || '0', 10),
        ancienneteMois: parseInt(mois || '0', 10),
        typeLicenciement: type,
        origineInaptitude: type === 'inaptitude' ? origine : undefined,
      })
    )
  }

  return (
    <div>
      <div className="space-y-4">
        {/* Salaire */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Salaire brut mensuel de référence (€)
          </label>
          <input
            type="number"
            min="0"
            step="10"
            value={salaire}
            onChange={(e) => setSalaire(e.target.value)}
            placeholder="Ex : 2 800"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Max(moyenne 3 derniers mois / moyenne 12 derniers mois)
          </p>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Type de licenciement
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as TypeLicenciement)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            <option value="personnel">Motif personnel</option>
            <option value="economique">Motif économique</option>
            <option value="inaptitude">Inaptitude</option>
          </select>
        </div>

        {/* Origine inaptitude */}
        {type === 'inaptitude' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Origine de l'inaptitude
            </label>
            <select
              value={origine}
              onChange={(e) => setOrigine(e.target.value as OrigineInaptitude)}
              className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            >
              <option value="non-professionnelle">Non professionnelle</option>
              <option value="professionnelle">
                Professionnelle (accident / maladie travail) — indemnité doublée
              </option>
            </select>
          </div>
        )}

        {/* Ancienneté */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ancienneté
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
          Calculer l'indemnité
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
          <div className="text-center">
            <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
              {result.doublee ? 'Indemnité doublée (inaptitude pro.)' : 'Indemnité légale minimale'}
            </p>
            <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
              {result.indemniteFinale.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              })}
            </p>
          </div>

          {/* Détail par tranche */}
          <div className="mt-4 pt-3 border-t border-blue-200 space-y-2 text-sm text-[#0A3D6B]">
            {result.tranches.map((t, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-xs">{t.label}</span>
                <strong>
                  {t.montant.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 0,
                  })}
                </strong>
              </div>
            ))}
            {result.doublee && (
              <div className="flex justify-between text-xs font-medium pt-1 border-t border-blue-200">
                <span>× 2 (inaptitude professionnelle)</span>
                <strong>
                  {result.indemniteFinale.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 0,
                  })}
                </strong>
              </div>
            )}
          </div>

          <p className="mt-3 text-xs text-blue-700 bg-blue-100 rounded-lg px-3 py-2 text-center">
            {result.conditionsEligibilite}
          </p>
        </div>
      )}
    </div>
  )
}
