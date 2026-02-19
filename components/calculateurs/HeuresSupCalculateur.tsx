'use client'

import { useState } from 'react'
import { calculerHeuresSup } from '@/lib/heures-sup'

export default function HeuresSupCalculateur() {
  const [tauxHoraire, setTauxHoraire] = useState('')
  const [heures25, setHeures25] = useState('')
  const [heures50, setHeures50] = useState('')
  const [semaines, setSemaines] = useState('4')
  const [result, setResult] = useState<ReturnType<typeof calculerHeuresSup> | null>(null)

  function handleCalculer() {
    const taux = parseFloat(tauxHoraire.replace(',', '.'))
    if (!taux || taux <= 0) return
    setResult(
      calculerHeuresSup({
        tauxHoraireBrut: taux,
        heures25: parseFloat(heures25 || '0'),
        heures50: parseFloat(heures50 || '0'),
        nombreSemaines: parseInt(semaines || '4', 10),
      })
    )
  }

  return (
    <div>
      <div className="space-y-4">
        {/* Taux horaire */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Taux horaire brut (€/h)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={tauxHoraire}
            onChange={(e) => setTauxHoraire(e.target.value)}
            placeholder="Ex : 15,50"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Salaire mensuel ÷ 151,67 = taux horaire brut
          </p>
        </div>

        {/* Heures 25% */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Heures supp. à{' '}
            <span className="text-green-600 font-semibold">+25%</span> par
            semaine
          </label>
          <input
            type="number"
            min="0"
            max="8"
            step="0.5"
            value={heures25}
            onChange={(e) => setHeures25(e.target.value)}
            placeholder="1 à 8 h/semaine"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Heures 36 à 43 (1ères à 8e heures supp.)
          </p>
        </div>

        {/* Heures 50% */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Heures supp. à{' '}
            <span className="text-orange-600 font-semibold">+50%</span> par
            semaine
          </label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={heures50}
            onChange={(e) => setHeures50(e.target.value)}
            placeholder="Au-delà de 8 h/semaine"
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Heures 44 et au-delà
          </p>
        </div>

        {/* Semaines */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nombre de semaines concernées
          </label>
          <select
            value={semaines}
            onChange={(e) => setSemaines(e.target.value)}
            className="w-full h-12 rounded-lg border border-gray-300 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            <option value="1">1 semaine</option>
            <option value="2">2 semaines</option>
            <option value="3">3 semaines</option>
            <option value="4">4 semaines (1 mois)</option>
            <option value="52">52 semaines (1 an)</option>
          </select>
        </div>

        <button
          onClick={handleCalculer}
          className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Calculer mes heures supplémentaires
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 bg-[#E8F4FD] border border-blue-100 rounded-xl p-4">
          <div className="text-center">
            <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
              Total brut supplémentaire
            </p>
            <p className="text-[#0A3D6B] text-5xl font-bold mt-1">
              {result.totalBrut.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-[#0A3D6B] text-sm mt-1 opacity-75">
              pour {result.heuresTotales} heure(s) supplémentaire(s)
            </p>
          </div>

          {result.details.length > 0 && (
            <div className="mt-4 pt-3 border-t border-blue-200 space-y-2 text-sm text-[#0A3D6B]">
              {result.details.map((d, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <span className="text-xs">
                      {d.heuresTotal} h × {d.tauxBase}€ × 1,
                      {d.majoration === 25 ? '25' : '50'}{' '}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        d.majoration === 25
                          ? 'text-green-600'
                          : 'text-orange-600'
                      }`}
                    >
                      (+{d.majoration}%)
                    </span>
                  </div>
                  <strong>
                    {d.montant.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                      maximumFractionDigits: 2,
                    })}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
