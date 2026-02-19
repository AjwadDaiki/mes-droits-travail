'use client'

import { useState } from 'react'
import { calculerChomage, type MotifFin } from '@/lib/chomage'

export default function ChomageCalculateur() {
  const [salaire, setSalaire] = useState('')
  const [anciennete, setAnciennete] = useState('')
  const [age, setAge] = useState('')
  const [motif, setMotif] = useState<MotifFin>('licenciement')
  const [result, setResult] = useState<ReturnType<typeof calculerChomage> | null>(null)

  function handleCalculer() {
    const salaireNum = parseFloat(salaire.replace(',', '.'))
    const ancienneteNum = parseInt(anciennete || '0', 10)
    const ageNum = parseInt(age || '40', 10)
    if (!salaireNum || salaireNum <= 0) return
    setResult(
      calculerChomage({
        salaireBrutMensuel: salaireNum,
        anciennete: ancienneteNum,
        age: ageNum,
        motifFin: motif,
      })
    )
  }

  return (
    <div>
      <div className="space-y-4">
        {/* Motif */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Motif de fin de contrat
          </label>
          <select
            value={motif}
            onChange={(e) => setMotif(e.target.value as MotifFin)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            <option value="licenciement">Licenciement</option>
            <option value="rupture-conventionnelle">Rupture conventionnelle</option>
            <option value="fin-cdd">Fin de CDD</option>
            <option value="demission-legitime">Démission légitime</option>
            <option value="demission">Démission volontaire</option>
          </select>
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
            placeholder="Ex : 2 200"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Ancienneté */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ancienneté chez le dernier employeur (mois)
          </label>
          <input
            type="number"
            min="0"
            max="36"
            value={anciennete}
            onChange={(e) => setAnciennete(e.target.value)}
            placeholder="Ex : 18"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Minimum 6 mois pour être éligible
          </p>
        </div>

        {/* Âge */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Âge
          </label>
          <input
            type="number"
            min="18"
            max="67"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ex : 35"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Impact sur la durée d'indemnisation (≥ 53 ans → durée allongée)
          </p>
        </div>

        <button
          onClick={handleCalculer}
          className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Simuler mon allocation chômage
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4">
          {!result.eligible ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
              <p className="font-semibold mb-1">Non éligible à l'ARE</p>
              <p>{result.motifIneligibilite}</p>
            </div>
          ) : (
            <div className="bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
              <div className="text-center">
                <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
                  Allocation journalière estimée
                </p>
                <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
                  {result.allocationJournaliere.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 2,
                  })}
                  <span className="text-2xl font-normal">/jour</span>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-200 grid grid-cols-2 gap-3 text-sm text-[#0A3D6B]">
                <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                  <p className="text-xs opacity-70">Allocation mensuelle</p>
                  <p className="font-bold mt-0.5">
                    {result.allocationMensuelle.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                  <p className="text-xs opacity-70">Durée max.</p>
                  <p className="font-bold mt-0.5">{result.dureeMaxMois} mois</p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                  <p className="text-xs opacity-70">SJR (base de calcul)</p>
                  <p className="font-bold mt-0.5">
                    {result.sjr.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                      maximumFractionDigits: 2,
                    })}
                    /j
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                  <p className="text-xs opacity-70">Délai de carence</p>
                  <p className="font-bold mt-0.5">{result.delaiCarence} jours</p>
                </div>
              </div>

              <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-center">
                {result.message}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
