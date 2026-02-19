const outilsLinks = [
  { href: '/preavis', label: 'Calculateur Préavis' },
  { href: '/rupture-conventionnelle', label: 'Rupture Conventionnelle' },
  { href: '/indemnite-licenciement', label: 'Indemnité Licenciement' },
  { href: '/salaire-brut-net', label: 'Salaire Brut/Net' },
  { href: '/heures-supplementaires', label: 'Heures Supplémentaires' },
  { href: '/simulation-chomage', label: 'Simulation Chômage' },
  { href: '/conges-payes', label: 'Congés Payés' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="/" className="font-bold text-primary text-base">
              mes-droits-travail.fr
            </a>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Calculateurs gratuits pour le droit du travail français.
              Résultats immédiats, sans inscription.
            </p>
          </div>

          {/* Outils */}
          <div>
            <p className="font-semibold text-gray-700 text-sm mb-3">
              Nos outils
            </p>
            <ul className="space-y-1.5">
              {outilsLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="font-semibold text-gray-700 text-sm mb-3">
              Informations
            </p>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="/outils"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Tous les outils
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/confidentialite"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2026 mes-droits-travail.fr — Calculs indicatifs basés sur le
            droit du travail français en vigueur. Consultez un avocat pour toute
            décision importante.
          </p>
        </div>
      </div>
    </footer>
  )
}
