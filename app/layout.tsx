import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const SITE_URL = 'https://mes-droits-travail.fr'
const SITE_NAME = 'mes-droits-travail.fr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Calculateurs Droit du Travail 2026 Gratuits | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Calculateurs gratuits pour le droit du travail français : préavis, rupture conventionnelle, indemnité licenciement, salaire brut/net, chômage, congés payés. Résultats immédiats.',
  keywords: [
    'calcul préavis',
    'rupture conventionnelle calculateur',
    'indemnité licenciement',
    'salaire brut net',
    'simulation chômage',
    'congés payés',
    'heures supplémentaires',
    'droit du travail français',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Calculateurs Droit du Travail 2026 | ${SITE_NAME}`,
    description:
      'Calculateurs gratuits et instantanés pour le droit du travail français.',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'fr-FR': SITE_URL,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9657496359488658"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D3RXH4HT4B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D3RXH4HT4B');
          `}
        </Script>

        <Header />
        <div className="min-h-[calc(100vh-56px-theme(spacing.16))]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
