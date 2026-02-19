import type { Metadata } from 'next'

const CANONICAL = 'https://mes-droits-travail.fr/mentions-legales'

export const metadata: Metadata = {
  title: 'Mentions Légales — mes-droits-travail.fr',
  description: 'Mentions légales du site mes-droits-travail.fr — calculateurs gratuits en droit du travail français.',
  alternates: { canonical: CANONICAL },
  robots: { index: false, follow: false },
}

export default function PageMentionsLegales() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Mentions légales</h1>

      <div className="prose-content space-y-6">
        <section>
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>mes-droits-travail.fr</strong> est un site d'information
            et de calcul en droit du travail français, à destination des salariés
            et employeurs souhaitant effectuer des estimations rapides.
          </p>
          <p>
            Pour nous contacter : utilisez le formulaire disponible sur le site ou
            l'adresse email indiquée dans votre espace Google Search Console.
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, logiques de calcul, mise en page)
            est protégé par le droit de la propriété intellectuelle. Toute reproduction,
            même partielle, sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            Les calculs fournis par ce site sont <strong>indicatifs</strong> et ne
            constituent pas un conseil juridique. Ils se basent sur la législation
            française en vigueur et les règles légales connues à la date de publication.
          </p>
          <p>
            Votre convention collective peut prévoir des règles différentes et plus
            favorables. En cas de litige ou de décision importante, consultez un
            <strong> avocat spécialisé en droit du travail</strong> ou votre
            inspecteur du travail.
          </p>
          <p>
            L'éditeur ne saurait être tenu responsable des erreurs ou inexactitudes
            dans les calculs, ni des conséquences de leur utilisation.
          </p>
        </section>

        <section>
          <h2>Cookies et données personnelles</h2>
          <p>
            Ce site peut utiliser des cookies à des fins publicitaires (Google AdSense)
            et analytiques. Aucune donnée personnelle n'est collectée par les calculateurs —
            tous les calculs s'effectuent côté navigateur, aucune donnée n'est envoyée
            à un serveur.
          </p>
          <p>
            Consultez notre{' '}
            <a href="/confidentialite" className="text-primary hover:underline">
              politique de confidentialité
            </a>{' '}
            pour plus d'informations.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige,
            les tribunaux français sont seuls compétents.
          </p>
        </section>
      </div>
    </main>
  )
}
