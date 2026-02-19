import type { Metadata } from 'next'

const CANONICAL = 'https://mes-droits-travail.fr/confidentialite'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — mes-droits-travail.fr',
  description: 'Politique de confidentialité et gestion des cookies du site mes-droits-travail.fr.',
  alternates: { canonical: CANONICAL },
  robots: { index: false, follow: false },
}

export default function PageConfidentialite() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Politique de Confidentialité
      </h1>

      <div className="prose-content space-y-6">
        <section>
          <h2>Données collectées</h2>
          <p>
            Le site <strong>mes-droits-travail.fr</strong> ne collecte aucune
            donnée personnelle via ses calculateurs. Toutes les données que vous
            saisissez dans les formulaires (salaire, ancienneté, dates) restent
            uniquement dans votre navigateur et ne sont jamais transmises à nos serveurs.
          </p>
        </section>

        <section>
          <h2>Cookies Google AdSense</h2>
          <p>
            Ce site utilise <strong>Google AdSense</strong> pour afficher des
            annonces publicitaires. Google peut utiliser des cookies et des technologies
            similaires pour afficher des annonces pertinentes en fonction de vos
            visites précédentes sur ce site et d'autres sites internet.
          </p>
          <p>
            Ces cookies sont déposés par Google LLC, dont le siège social est
            situé à 1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis.
          </p>
          <p>
            Vous pouvez désactiver la personnalisation des annonces Google en
            visitant{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              google.com/settings/ads
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Analytics</h2>
          <p>
            Ce site peut utiliser des outils d'analyse d'audience (Google Search Console,
            Plausible Analytics) pour mesurer le trafic de manière agrégée. Ces outils
            ne collectent pas de données personnelles identifiables.
          </p>
        </section>

        <section>
          <h2>Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez des droits suivants : accès, rectification, suppression,
            opposition, portabilité et limitation de traitement de vos données.
          </p>
          <p>
            Pour exercer ces droits, vous pouvez contacter l'éditeur du site via
            les coordonnées indiquées dans les{' '}
            <a href="/mentions-legales" className="text-primary hover:underline">
              mentions légales
            </a>
            .
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la{' '}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              CNIL
            </a>{' '}
            (Commission Nationale de l'Informatique et des Libertés).
          </p>
        </section>

        <section>
          <h2>Consentement aux cookies</h2>
          <p>
            En continuant à naviguer sur ce site, vous acceptez l'utilisation
            des cookies décrits dans cette politique. Vous pouvez à tout moment
            modifier vos préférences de cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <p className="text-xs text-gray-400 mt-8">
          Dernière mise à jour : Février 2026
        </p>
      </div>
    </main>
  )
}
