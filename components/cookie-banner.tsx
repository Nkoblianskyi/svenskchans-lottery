"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-gray-700 p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-sm">
            <p>
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda
              webbplatsen godkänner du vår användning av cookies.{" "}
              <Link href="/cookie-policy" className="text-yellow-400 hover:underline">
                Läs mer
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-gray-600 hover:bg-gray-800 text-slate-950"
            >
              Avböj
            </Button>
            <Button size="sm" onClick={acceptCookies} className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              Acceptera
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
