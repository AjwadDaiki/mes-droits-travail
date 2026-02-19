// Logique simulateur ARE (allocation chômage) — Règles 2024-2026
// Source : règlement d'assurance chômage en vigueur

export type MotifFin =
  | 'licenciement'
  | 'rupture-conventionnelle'
  | 'fin-cdd'
  | 'demission-legitime'
  | 'demission'

// Constantes ARE 2026
const PLANCHER_ARE = 31.59     // €/jour
const COEFFICIENT_SJR = 1.4   // diviseur pour le SJR
const TAUX_ALLOC_1 = 0.404    // 40,4% × SJR
const COMPLEMENT_ALLOC_1 = 12.95 // + 12,95€
const TAUX_ALLOC_2 = 0.57     // 57% × SJR
const PLAFOND_SJR_PCT = 0.75  // 75% du SJR

export interface ChomageInput {
  salaireBrutMensuel: number
  anciennete: number  // en mois chez le dernier employeur
  age: number
  motifFin: MotifFin
}

export interface ChomageResult {
  eligible: boolean
  motifIneligibilite?: string
  sjr: number
  allocationJournaliere: number
  allocationMensuelle: number
  allocationAnnuelle: number
  dureeMaxMois: number
  delaiCarence: number
  message: string
}

export function calculerChomage(input: ChomageInput): ChomageResult {
  const { salaireBrutMensuel, anciennete, age, motifFin } = input

  // Démission non légitime = pas d'ARE (sauf réexamen après 4 mois)
  if (motifFin === 'demission') {
    return {
      eligible: false,
      motifIneligibilite:
        'En cas de démission volontaire, vous n\'êtes pas éligible à l\'ARE. Exceptions : démission pour suivi de conjoint, création d\'entreprise, etc. Renseignez-vous auprès de France Travail.',
      sjr: 0,
      allocationJournaliere: 0,
      allocationMensuelle: 0,
      allocationAnnuelle: 0,
      dureeMaxMois: 0,
      delaiCarence: 0,
      message: '',
    }
  }

  // Ancienneté minimale : 6 mois (130 jours) sur les 24 derniers mois
  if (anciennete < 6) {
    return {
      eligible: false,
      motifIneligibilite:
        'Ancienneté insuffisante. Il faut au minimum 6 mois (130 jours) de travail sur les 24 derniers mois pour être éligible à l\'ARE.',
      sjr: 0,
      allocationJournaliere: 0,
      allocationMensuelle: 0,
      allocationAnnuelle: 0,
      dureeMaxMois: 0,
      delaiCarence: 7,
      message: '',
    }
  }

  // SJR = total salaires des 24 derniers mois / (nombre de jours travaillés × 1,4)
  // Approximation : on utilise le salaire mensuel sur min(ancienneté, 24) mois
  const moisPrisEnCompte = Math.min(anciennete, 24)
  const totalSalaires = salaireBrutMensuel * moisPrisEnCompte
  const joursTravailles = moisPrisEnCompte * 30
  const sjr = totalSalaires / (joursTravailles / COEFFICIENT_SJR)
  // Simplification équivalente : sjr = salaireBrutMensuel × 1,4 / 30
  const sjrSimple = (salaireBrutMensuel * COEFFICIENT_SJR) / 30

  // Allocation journalière = max(40,4% × SJR + 12,95€ ; 57% × SJR)
  const alloc1 = sjrSimple * TAUX_ALLOC_1 + COMPLEMENT_ALLOC_1
  const alloc2 = sjrSimple * TAUX_ALLOC_2
  let allocationJournaliere = Math.max(alloc1, alloc2)

  // Plancher
  allocationJournaliere = Math.max(allocationJournaliere, PLANCHER_ARE)

  // Plafond : 75% du SJR
  const plafond = sjrSimple * PLAFOND_SJR_PCT
  allocationJournaliere = Math.min(allocationJournaliere, plafond)

  // Durée maximale d'indemnisation
  let dureeMaxMois: number
  if (age < 53) {
    dureeMaxMois = Math.min(anciennete, 24)
  } else if (age < 55) {
    dureeMaxMois = Math.min(anciennete, 30)
  } else {
    dureeMaxMois = Math.min(anciennete, 36)
  }

  const allocationMensuelle = allocationJournaliere * 30
  const allocationAnnuelle = allocationJournaliere * 365

  return {
    eligible: true,
    sjr: Math.round(sjrSimple * 100) / 100,
    allocationJournaliere: Math.round(allocationJournaliere * 100) / 100,
    allocationMensuelle: Math.round(allocationMensuelle * 100) / 100,
    allocationAnnuelle: Math.round(allocationAnnuelle * 100) / 100,
    dureeMaxMois,
    delaiCarence: 7, // délai de carence fixe (différé spécifique à calculer selon indemnités)
    message:
      'Simulation indicative. France Travail calcule le montant exact à l\'inscription.',
  }
}
