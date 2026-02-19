// Logique calculateur heures supplémentaires — Article L3121-28 du Code du travail
// Majorations légales 2026 : +25% pour les 8 premières heures, +50% au-delà

export interface HeuresSupInput {
  tauxHoraireBrut: number   // taux horaire brut de base (€/h)
  heures25: number           // heures supp 1 à 8 par semaine (majoration 25%)
  heures50: number           // heures supp au-delà de 8 par semaine (majoration 50%)
  nombreSemaines: number     // nombre de semaines concernées sur le mois
}

export interface DetailHeures {
  heuresTotal: number
  tauxBase: number
  majoration: number         // en %
  montant: number
}

export interface HeuresSupResult {
  montant25: number
  montant50: number
  totalBrut: number
  details: DetailHeures[]
  heuresTotales: number
}

export function calculerHeuresSup(input: HeuresSupInput): HeuresSupResult {
  const { tauxHoraireBrut, heures25, heures50, nombreSemaines } = input

  const heuresTotal25 = heures25 * nombreSemaines
  const heuresTotal50 = heures50 * nombreSemaines

  // Majoration 25% : taux × 1,25
  const montant25 = tauxHoraireBrut * heuresTotal25 * 1.25
  // Majoration 50% : taux × 1,50
  const montant50 = tauxHoraireBrut * heuresTotal50 * 1.50

  const details: DetailHeures[] = []

  if (heuresTotal25 > 0) {
    details.push({
      heuresTotal: heuresTotal25,
      tauxBase: tauxHoraireBrut,
      majoration: 25,
      montant: Math.round(montant25 * 100) / 100,
    })
  }

  if (heuresTotal50 > 0) {
    details.push({
      heuresTotal: heuresTotal50,
      tauxBase: tauxHoraireBrut,
      majoration: 50,
      montant: Math.round(montant50 * 100) / 100,
    })
  }

  return {
    montant25: Math.round(montant25 * 100) / 100,
    montant50: Math.round(montant50 * 100) / 100,
    totalBrut: Math.round((montant25 + montant50) * 100) / 100,
    details,
    heuresTotales: heuresTotal25 + heuresTotal50,
  }
}
