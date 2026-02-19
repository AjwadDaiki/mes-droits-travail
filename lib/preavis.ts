// Logique calcul préavis — Articles L1234-1 et L1234-2 du Code du travail

export type StatutSalarie = 'cadre' | 'non-cadre'
export type TypeRupture = 'demission' | 'licenciement' | 'retraite'

export interface PreavisInput {
  statut: StatutSalarie
  ancienneteAnnees: number
  ancienneteMois: number
  typeRupture: TypeRupture
  dateDebutPreavis: string // ISO date string
}

export interface PreavisResult {
  dureeMois: number
  dureeJours: number
  dateFinPreavis: string // ISO date string
  avertissement: string
  eligible: boolean
}

function addMonths(dateStr: string, months: number): string {
  const date = new Date(dateStr)
  date.setMonth(date.getMonth() + months)
  return date.toISOString().split('T')[0]
}

export function calculerPreavis(input: PreavisInput): PreavisResult {
  const ancienneteTotale = input.ancienneteAnnees * 12 + input.ancienneteMois // en mois

  let dureeMois = 0

  if (input.statut === 'cadre') {
    // Cadre : 3 mois quelle que soit la rupture (sauf convention collective)
    dureeMois = 3
  } else {
    // Non-cadre
    if (input.typeRupture === 'demission') {
      if (ancienneteTotale < 6) {
        dureeMois = 0
      } else if (ancienneteTotale < 24) {
        dureeMois = 1
      } else {
        dureeMois = 2
      }
    } else if (input.typeRupture === 'licenciement') {
      if (ancienneteTotale < 6) {
        dureeMois = 0
      } else if (ancienneteTotale < 24) {
        dureeMois = 1
      } else {
        dureeMois = 2
      }
    } else if (input.typeRupture === 'retraite') {
      if (ancienneteTotale < 6) {
        dureeMois = 0
      } else if (ancienneteTotale < 24) {
        dureeMois = 1
      } else {
        dureeMois = 2
      }
    }
  }

  const dureeJours = dureeMois * 30 // jours calendaires approximatifs
  const dateFinPreavis = addMonths(input.dateDebutPreavis, dureeMois)

  const avertissement =
    ancienneteTotale < 6 && input.statut === 'non-cadre'
      ? "Ancienneté inférieure à 6 mois : la durée dépend de votre convention collective."
      : "Votre convention collective peut prévoir une durée supérieure à la durée légale."

  return {
    dureeMois,
    dureeJours,
    dateFinPreavis,
    avertissement,
    eligible: ancienneteTotale >= 6 || input.statut === 'cadre',
  }
}

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
