"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Image src='/logo.png' alt='logo' width={50} height={50} className='w-8 h-8' />
            <span className="text-white font-bold text-lg sm:text-xl">Svensk Chans</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-white/80 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Integritetspolicy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white/80 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Cookie Policy
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link href="/login" onClick={handleLinkClick}>
              <Button variant="outline" className="border-white/30 hover:bg-white/10 text-sm px-4 py-2 text-slate-950">
                Logga in
              </Button>
            </Link>
            <Link href="/register" onClick={handleLinkClick}>
              <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-sm px-4 py-2">Registrera</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></div>
              <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/privacy-policy"
                className="text-white/80 hover:text-white transition-colors"
                onClick={handleLinkClick}
              >
                Integritetspolicy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-white/80 hover:text-white transition-colors"
                onClick={handleLinkClick}
              >
                Cookie Policy
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link href="/login" onClick={handleLinkClick}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Logga in
                  </Button>
                </Link>
                <Link href="/register" onClick={handleLinkClick}>
                  <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 w-full">Registrera</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
