'use client'

import { useEffect } from 'react'

const ADSENSE_ENABLED = true
const ADSENSE_CLIENT = 'ca-pub-9657496359488658'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface AdBannerProps {
  slot: string
  className?: string
}

export default function AdBanner({ slot, className = '' }: AdBannerProps) {
  useEffect(() => {
    if (!ADSENSE_ENABLED) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // AdSense non initialisé
    }
  }, [])

  if (!ADSENSE_ENABLED) {
    return (
      <div
        className={`my-6 bg-gray-50 border border-dashed border-gray-200 rounded-lg h-[90px] flex items-center justify-center text-gray-400 text-xs ${className}`}
        aria-hidden="true"
      >
        Espace publicitaire
      </div>
    )
  }

  return (
    <div className={`my-6 overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
