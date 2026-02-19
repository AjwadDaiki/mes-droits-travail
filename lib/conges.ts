// Logique calculateur congés payés — Articles L3141-1 et suivants du Code du travail
// Double méthode : 1/10e vs maintien du salaire (la plus favorable s'applique)

const JOURS_OUVRABLES_PAR_MOIS = 25    // jours ouvrables/mois pour maintien
const JOURS_ACQUIS_PAR_MOIS = 2.5      // 2,5 jours ouvrables par mois travaillé
const MAX_JOURS_ANNUELS = 30           // 5 semaines = 30 jours ouvrables

export interface CongesInput {
  dateDebutContrat: string  // ISO date string
  dateFinContrat?: string   // ISO date string (optionnel, sinon = aujourd'hui)
  joursPris: number
  salaireBrutMensuel: number
}

export interface CongesResult {
  moisTravailles: number
  joursAcquis: number
  joursPris: number
  joursRestants: number
  indemniteDixieme: number       // méthode 1/10e
  indemniteMaintien: number      // méthode maintien du salaire
  indemniteFavorable: number     // max des deux méthodes
  methodeAppliquee: '1/10e' | 'Maintien du salaire'
}

function diffMoisEntreDate(dateDebut: Date, dateFin: Date): number {
  const annees = dateFin.getFullYear() - dateDebut.getFullYear()
  const mois = dateFin.getMonth() - dateDebut.getMonth()
  const totalMois = annees * 12 + mois
  // Ajustement si le jour de fin est avant le jour de début dans le mois
  if (dateFin.getDate() < dateDebut.getDate()) {
    return Math.max(0, totalMois - 1)
  }
  return Math.max(0, totalMois)
}

export function calculerConges(input: CongesInput): CongesResult {
  const debut = new Date(input.dateDebutContrat)
  const fin = input.dateFinContrat
    ? new Date(input.dateFinContrat)
    : new Date()

  const moisTravailles = diffMoisEntreDate(debut, fin)

  // Jours acquis : 2,5 jours ouvrables par mois, max 30
  const joursAcquisBrut = moisTravailles * JOURS_ACQUIS_PAR_MOIS
  const joursAcquis = Math.min(joursAcquisBrut, MAX_JOURS_ANNUELS)
  const joursRestants = Math.max(0, joursAcquis - input.joursPris)

  // Méthode 1 : 1/10e de la rémunération brute de la période
  // Indemnité = total salaires / 10 (pour l'ensemble de la période de référence)
  // Pour les jours restants proportionnellement :
  const totalSalaires = input.salaireBrutMensuel * moisTravailles
  const indemniteDixieme =
    joursAcquis > 0
      ? (totalSalaires / 10) * (joursRestants / joursAcquis)
      : 0

  // Méthode 2 : maintien du salaire
  // Salaire journalier × nombre de jours de congé restants
  const salaireJournalier = input.salaireBrutMensuel / JOURS_OUVRABLES_PAR_MOIS
  const indemniteMaintien = salaireJournalier * joursRestants

  // Application de la méthode la plus favorable
  const indemniteFavorable = Math.max(indemniteDixieme, indemniteMaintien)
  const methodeAppliquee: CongesResult['methodeAppliquee'] =
    indemniteDixieme >= indemniteMaintien ? '1/10e' : 'Maintien du salaire'

  return {
    moisTravailles,
    joursAcquis: Math.round(joursAcquis * 10) / 10,
    joursPris: input.joursPris,
    joursRestants: Math.round(joursRestants * 10) / 10,
    indemniteDixieme: Math.round(indemniteDixieme * 100) / 100,
    indemniteMaintien: Math.round(indemniteMaintien * 100) / 100,
    indemniteFavorable: Math.round(indemniteFavorable * 100) / 100,
    methodeAppliquee,
  }
}
