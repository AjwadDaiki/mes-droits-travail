'use client'

import { useState } from 'react'
import { calculerBrutNet, type StatutSalarie, type Periodicite } from '@/lib/brut-net'

export default function BrutNetCalculateur({
  defaultStatut = 'non-cadre',
}: {
  defaultStatut?: StatutSalarie
}) {
  const [salaire, setSalaire] = useState('')
  const [statut, setStatut] = useState<StatutSalarie>(defaultStatut)
  const [periodicite, setPeriodicite] = useState<Periodicite>('mensuel')
  const [result, setResult] = useState<ReturnType<typeof calculerBrutNet> | null>(null)

  function handleCalculer() {
    const salaireNum = parseFloat(salaire.replace(',', '.'))
    if (!salaireNum || salaireNum <= 0) return
    setResult(
      calculerBrutNet({ salaire: salaireNum, statut, periodicite })
    )
  }

  return (
    <div>
      <div className="space-y-4">
        {/* Périodicité */}
        <div className="grid grid-cols-2 gap-2">
          {(['mensuel', 'annuel'] as Periodicite[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriodicite(p)}
              className={`h-10 rounded-lg text-sm font-medium transition-colors border ${
                periodicite === p
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-primary'
              }`}
            >
              {p === 'mensuel' ? 'Mensuel' : 'Annuel'}
            </button>
          ))}
        </div>

        {/* Salaire */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Salaire brut {periodicite} (€)
          </label>
          <input
            type="number"
            min="0"
            step="10"
            value={salaire}
            onChange={(e) => setSalaire(e.target.value)}
            placeholder={periodicite === 'mensuel' ? 'Ex : 2 500' : 'Ex : 30 000'}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Statut */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Statut
          </label>
          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value as StatutSalarie)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            <option value="non-cadre">Non-cadre (cotisations ≈ 22%)</option>
            <option value="cadre">Cadre (cotisations ≈ 25%)</option>
          </select>
        </div>

        <button
          onClick={handleCalculer}
          className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Convertir brut en net
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
          <div className="text-center">
            <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
              Salaire net mensuel estimé
            </p>
            <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
              {result.netMensuel.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              })}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-blue-200 grid grid-cols-2 gap-3 text-sm text-[#0A3D6B]">
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <p className="text-xs opacity-70">Net annuel</p>
              <p className="font-bold mt-0.5">
                {result.netAnnuel.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <p className="text-xs opacity-70">Coût employeur/mois</p>
              <p className="font-bold mt-0.5">
                {result.coutEmployeurMensuel.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <p className="text-xs opacity-70">Cotisations salariales</p>
              <p className="font-bold mt-0.5">
                {result.cotisationsMensuelles.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}{' '}
                <span className="font-normal text-xs">
                  ({result.tauxCotisations}%)
                </span>
              </p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <p className="text-xs opacity-70">Brut mensuel</p>
              <p className="font-bold mt-0.5">
                {result.brutMensuel.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-center">
            Estimation. Consultez votre fiche de paie pour le montant exact.
          </p>
        </div>
      )}
    </div>
  )
}
