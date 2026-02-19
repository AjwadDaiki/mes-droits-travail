interface Tool {
  href: string
  title: string
  description: string
  emoji?: string
}

interface InternalLinksProps {
  links: Tool[]
  title?: string
}

export default function InternalLinks({
  links,
  title = 'Outils connexes',
}: InternalLinksProps) {
  return (
    <section className="mt-10" aria-label="Outils connexes">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-start gap-3">
              {link.emoji && (
                <span className="text-2xl flex-shrink-0" aria-hidden="true">
                  {link.emoji}
                </span>
              )}
              <div>
                <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {link.title}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
