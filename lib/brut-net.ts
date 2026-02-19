// Logique convertisseur brut / net — Cotisations salariales 2026

export type StatutSalarie = 'cadre' | 'non-cadre'
export type Periodicite = 'mensuel' | 'annuel'

// Taux de cotisations salariales 2026 (approximations)
const TAUX_COTISATIONS: Record<StatutSalarie, number> = {
  'non-cadre': 0.22, // ≈ 22% du brut
  cadre: 0.25,       // ≈ 25% du brut (retraite complémentaire supérieure)
}

const MULTIPLICATEUR_EMPLOYEUR = 1.42 // coût total employeur = brut × 1,42

export interface BrutNetInput {
  salaire: number
  statut: StatutSalarie
  periodicite: Periodicite
}

export interface BrutNetResult {
  brutMensuel: number
  brutAnnuel: number
  netMensuel: number
  netAnnuel: number
  coutEmployeurMensuel: number
  coutEmployeurAnnuel: number
  tauxCotisations: number
  cotisationsMensuelles: number
}

export function calculerBrutNet(input: BrutNetInput): BrutNetResult {
  const taux = TAUX_COTISATIONS[input.statut]

  const brutMensuel =
    input.periodicite === 'annuel' ? input.salaire / 12 : input.salaire

  const netMensuel = brutMensuel * (1 - taux)
  const netAnnuel = netMensuel * 12
  const brutAnnuel = brutMensuel * 12
  const coutEmployeurMensuel = brutMensuel * MULTIPLICATEUR_EMPLOYEUR
  const coutEmployeurAnnuel = coutEmployeurMensuel * 12
  const cotisationsMensuelles = brutMensuel * taux

  return {
    brutMensuel: Math.round(brutMensuel * 100) / 100,
    brutAnnuel: Math.round(brutAnnuel * 100) / 100,
    netMensuel: Math.round(netMensuel * 100) / 100,
    netAnnuel: Math.round(netAnnuel * 100) / 100,
    coutEmployeurMensuel: Math.round(coutEmployeurMensuel * 100) / 100,
    coutEmployeurAnnuel: Math.round(coutEmployeurAnnuel * 100) / 100,
    tauxCotisations: taux * 100,
    cotisationsMensuelles: Math.round(cotisationsMensuelles * 100) / 100,
  }
}

export function calculerNetToBrut(
  netMensuel: number,
  statut: StatutSalarie
): number {
  const taux = TAUX_COTISATIONS[statut]
  const brutMensuel = netMensuel / (1 - taux)
  return Math.round(brutMensuel * 100) / 100
}
