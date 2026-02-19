'use client'

import { useState } from 'react'
import {
  calculerPreavis,
  formatDate,
  type StatutSalarie,
  type TypeRupture,
} from '@/lib/preavis'

interface PreavisCalculateurProps {
  defaultStatut?: StatutSalarie
  defaultTypeRupture?: TypeRupture
}

export default function PreavisCalculateur({
  defaultStatut = 'non-cadre',
  defaultTypeRupture = 'demission',
}: PreavisCalculateurProps) {
  const [statut, setStatut] = useState<StatutSalarie>(defaultStatut)
  const [ancienneteAnnees, setAncienneteAnnees] = useState('')
  const [ancienneteMois, setAncienneteMois] = useState('')
  const [typeRupture, setTypeRupture] = useState<TypeRupture>(defaultTypeRupture)
  const [dateDebut, setDateDebut] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [result, setResult] = useState<ReturnType<typeof calculerPreavis> | null>(null)

  function handleCalculer() {
    const input = {
      statut,
      ancienneteAnnees: parseInt(ancienneteAnnees || '0', 10),
      ancienneteMois: parseInt(ancienneteMois || '0', 10),
      typeRupture,
      dateDebutPreavis: dateDebut,
    }
    setResult(calculerPreavis(input))
  }

  return (
    <div>
      <div className="space-y-4">
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
            <option value="non-cadre">Non-cadre</option>
            <option value="cadre">Cadre</option>
          </select>
        </div>

        {/* Type de rupture */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Motif de rupture
          </label>
          <select
            value={typeRupture}
            onChange={(e) => setTypeRupture(e.target.value as TypeRupture)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            <option value="demission">Démission</option>
            <option value="licenciement">Licenciement</option>
            <option value="retraite">Départ à la retraite</option>
          </select>
        </div>

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
                value={ancienneteAnnees}
                onChange={(e) => setAncienneteAnnees(e.target.value)}
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
                value={ancienneteMois}
                onChange={(e) => setAncienneteMois(e.target.value)}
                placeholder="0"
                className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Mois</p>
            </div>
          </div>
        </div>

        {/* Date début */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Date de début du préavis
          </label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Bouton */}
        <button
          onClick={handleCalculer}
          className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Calculer mon préavis
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
          {result.dureeMois === 0 ? (
            <div className="text-center">
              <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
                Durée légale
              </p>
              <p className="text-[#0A3D6B] text-3xl font-bold mt-1">
                Selon convention collective
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
                Durée du préavis
              </p>
              <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
                {result.dureeMois} mois
              </p>
              <p className="text-[#0A3D6B] text-base mt-2">
                soit environ{' '}
                <strong>{result.dureeJours} jours</strong> calendaires
              </p>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <p className="text-[#0A3D6B] text-sm">
                  Fin de préavis estimée :{' '}
                  <strong>{formatDate(result.dateFinPreavis)}</strong>
                </p>
              </div>
            </div>
          )}
          <p className="mt-3 text-xs text-blue-700 bg-blue-100 rounded-lg px-3 py-2 text-center">
            {result.avertissement}
          </p>
        </div>
      )}
    </div>
  )
}
