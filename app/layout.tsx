import type React from "react"
import type { Metadata } from "next"
import { Cousine } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Cousine({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Svensk Chans - Din Portal till Svenska Lotterier",
  description: "Upptäck spänningen i svenska lotteriupplevelser med vår licensierade plattform.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
