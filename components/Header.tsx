const navLinks = [
  { href: '/preavis', label: 'Préavis' },
  { href: '/rupture-conventionnelle', label: 'Rupture conv.' },
  { href: '/salaire-brut-net', label: 'Brut/Net' },
  { href: '/simulation-chomage', label: 'Chômage' },
  { href: '/outils', label: 'Tous les outils' },
]

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <a
          href="/"
          className="font-bold text-lg text-primary hover:opacity-80 transition-opacity"
          aria-label="mes-droits-travail.fr - Accueil"
        >
          mes-droits-travail.fr
        </a>
        <nav className="hidden md:flex items-center gap-5" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Menu mobile */}
        <a
          href="/outils"
          className="md:hidden text-sm font-medium text-primary border border-primary rounded-lg px-3 py-1.5"
        >
          Tous les outils
        </a>
      </div>
    </header>
  )
}
