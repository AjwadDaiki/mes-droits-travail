// Logique simulateur rupture conventionnelle — Article L1237-19 du Code du travail
// Indemnité spécifique de RC : au moins égale à l'indemnité légale de licenciement

// Constantes 2026
const PASS_2026 = 47_100 // Plafond annuel de la Sécurité Sociale 2026
const SEUIL_EXONERATION = PASS_2026 * 2 // 94 200€ — exonération cotisations sociales

export interface RuptureInput {
  salaireBrutMensuel: number
  ancienneteAnnees: number
  ancienneteMois: number
}

export interface RuptureResult {
  indemniteMinimale: number
  anneesTotales: number
  tranche1: number // part 0-10 ans
  tranche2: number // part au-delà de 10 ans
  depasse_seuil_exoneration: boolean
  seuilExoneration: number
}

export function calculerRuptureConventionnelle(input: RuptureInput): RuptureResult {
  const { salaireBrutMensuel, ancienneteAnnees, ancienneteMois } = input

  // Ancienneté en années avec fraction de mois
  const anneesFraction = ancienneteAnnees + ancienneteMois / 12

  let tranche1 = 0
  let tranche2 = 0

  if (anneesFraction <= 10) {
    // 1/4 de mois par année pour les 10 premières années
    tranche1 = salaireBrutMensuel * (1 / 4) * anneesFraction
    tranche2 = 0
  } else {
    // 1/4 de mois par année pour les 10 premières années
    // 1/3 de mois par année au-delà de 10 ans
    tranche1 = salaireBrutMensuel * (1 / 4) * 10
    tranche2 = salaireBrutMensuel * (1 / 3) * (anneesFraction - 10)
  }

  const indemniteMinimale = tranche1 + tranche2

  return {
    indemniteMinimale: Math.round(indemniteMinimale * 100) / 100,
    anneesTotales: Math.round(anneesFraction * 100) / 100,
    tranche1: Math.round(tranche1 * 100) / 100,
    tranche2: Math.round(tranche2 * 100) / 100,
    depasse_seuil_exoneration: indemniteMinimale > 50_000,
    seuilExoneration: SEUIL_EXONERATION,
  }
}
