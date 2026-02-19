// Logique calculateur indemnité de licenciement — Article L1234-9 du Code du travail
// Formule identique à la RC, avec doublement pour inaptitude d'origine professionnelle

export type TypeLicenciement = 'economique' | 'personnel' | 'inaptitude'
export type OrigineInaptitude = 'professionnelle' | 'non-professionnelle'

export interface LicenciementInput {
  salaireBrutMensuel: number // moyenne des 12 derniers mois (ou 3 mois si plus favorable)
  ancienneteAnnees: number
  ancienneteMois: number
  typeLicenciement: TypeLicenciement
  origineInaptitude?: OrigineInaptitude
}

export interface TrancheLicenciement {
  label: string
  annees: number
  taux: string
  montant: number
}

export interface LicenciementResult {
  indemniteBase: number
  indemniteFinale: number
  anneesTotales: number
  tranches: TrancheLicenciement[]
  doublee: boolean
  conditionsEligibilite: string
}

export function calculerIndemniteLicenciement(input: LicenciementInput): LicenciementResult {
  const {
    salaireBrutMensuel,
    ancienneteAnnees,
    ancienneteMois,
    typeLicenciement,
    origineInaptitude,
  } = input

  const anneesFraction = ancienneteAnnees + ancienneteMois / 12
  const tranches: TrancheLicenciement[] = []

  let indemniteBase = 0

  if (anneesFraction <= 10) {
    const montant = salaireBrutMensuel * (1 / 4) * anneesFraction
    tranches.push({
      label: `${anneesFraction.toFixed(2)} an(s) × 1/4 de mois`,
      annees: anneesFraction,
      taux: '1/4',
      montant: Math.round(montant * 100) / 100,
    })
    indemniteBase = montant
  } else {
    const montantT1 = salaireBrutMensuel * (1 / 4) * 10
    const montantT2 = salaireBrutMensuel * (1 / 3) * (anneesFraction - 10)
    tranches.push({
      label: '10 premières années × 1/4 de mois',
      annees: 10,
      taux: '1/4',
      montant: Math.round(montantT1 * 100) / 100,
    })
    tranches.push({
      label: `${(anneesFraction - 10).toFixed(2)} an(s) au-delà × 1/3 de mois`,
      annees: anneesFraction - 10,
      taux: '1/3',
      montant: Math.round(montantT2 * 100) / 100,
    })
    indemniteBase = montantT1 + montantT2
  }

  // Doublement pour inaptitude d'origine professionnelle
  const doublee =
    typeLicenciement === 'inaptitude' && origineInaptitude === 'professionnelle'

  const indemniteFinale = doublee ? indemniteBase * 2 : indemniteBase

  return {
    indemniteBase: Math.round(indemniteBase * 100) / 100,
    indemniteFinale: Math.round(indemniteFinale * 100) / 100,
    anneesTotales: Math.round(anneesFraction * 100) / 100,
    tranches,
    doublee,
    conditionsEligibilite:
      anneesFraction >= 0.67 // 8 mois minimum
        ? 'Vous remplissez la condition d\'ancienneté minimale (8 mois).'
        : 'Attention : l\'indemnité légale nécessite 8 mois d\'ancienneté minimum.',
  }
}
