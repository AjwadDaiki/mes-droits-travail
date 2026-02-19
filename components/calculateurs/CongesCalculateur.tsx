'use client'

import { useState } from 'react'
import { calculerConges } from '@/lib/conges'

export default function CongesCalculateur() {
  const today = new Date().toISOString().split('T')[0]
  const [dateDebut, setDateDebut] = useState('')
  const [dateFin, setDateFin] = useState(today)
  const [joursPris, setJoursPris] = useState('')
  const [salaire, setSalaire] = useState('')
  const [result, setResult] = useState<ReturnType<typeof calculerConges> | null>(null)

  function handleCalculer() {
    if (!dateDebut) return
    const salaireNum = parseFloat(salaire.replace(',', '.'))
    if (!salaireNum || salaireNum <= 0) return

    setResult(
      calculerConges({
        dateDebutContrat: dateDebut,
        dateFinContrat: dateFin || undefined,
        joursPris: parseInt(joursPris || '0', 10),
        salaireBrutMensuel: salaireNum,
      })
    )
  }

  return (
    <div>
      <div className="space-y-4">
        {/* Date début */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Date d'embauche (début du contrat)
          </label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Date fin */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Date de fin / aujourd'hui
          </label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Laissez la date d'aujourd'hui si le contrat est en cours
          </p>
        </div>

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
            placeholder="Ex : 2 000"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Jours déjà pris */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Jours déjà pris
          </label>
          <input
            type="number"
            min="0"
            max="30"
            value={joursPris}
            onChange={(e) => setJoursPris(e.target.value)}
            placeholder="0"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <button
          onClick={handleCalculer}
          className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Calculer mes congés payés
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
          <div className="text-center">
            <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
              Jours restants
            </p>
            <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
              {result.joursRestants}
              <span className="text-2xl font-normal"> jours</span>
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-blue-200 grid grid-cols-3 gap-2 text-sm text-[#0A3D6B] text-center">
            <div className="bg-white bg-opacity-60 rounded-lg p-2">
              <p className="text-xs opacity-70">Acquis</p>
              <p className="font-bold">{result.joursAcquis} j</p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-2">
              <p className="text-xs opacity-70">Pris</p>
              <p className="font-bold">{result.joursPris} j</p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-2">
              <p className="text-xs opacity-70">Mois travaillés</p>
              <p className="font-bold">{result.moisTravailles}</p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-blue-200 space-y-1.5 text-sm text-[#0A3D6B]">
            <div className="flex justify-between">
              <span className="text-xs">Indemnité méthode 1/10e</span>
              <strong>
                {result.indemniteDixieme.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-xs">Indemnité maintien salaire</span>
              <strong>
                {result.indemniteMaintien.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}
              </strong>
            </div>
            <div className="flex justify-between border-t border-blue-200 pt-1.5 font-semibold">
              <span className="text-xs">
                Indemnité favorable ({result.methodeAppliquee})
              </span>
              <span>
                {result.indemniteFavorable.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
