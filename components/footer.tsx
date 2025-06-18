"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 footer-grid-adaptive gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4" onClick={handleLinkClick}>
              <Image src='/logo.png' alt='logo' width={50} height={50} className='w-8 h-8' />
              <span className="text-white font-bold text-lg sm:text-xl">Svensk Chans</span>
            </Link>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Din pålitliga partner för svenska lotteriupplevelser
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Juridisk</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base sm:text-lg"
                  onClick={handleLinkClick}
                >
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base sm:text-lg"
                  onClick={handleLinkClick}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Konto</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base sm:text-lg"
                  onClick={handleLinkClick}
                >
                  Logga in
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base sm:text-lg"
                  onClick={handleLinkClick}
                >
                  Registrera
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Ansvarsfullt Spelande</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-yellow-400 font-bold text-base sm:text-lg">Stödlinjen</p>
                <p className="text-gray-300 text-sm sm:text-base">Ring 020-81 91 00</p>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">Spel för dig som är över 18 år</p>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Organizations */}
        <div className="border-t border-gray-700 pt-8 sm:pt-12 md:pt-16 mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
            Ansvarsfullt Spelande & Stödorganisationer
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 footer-orgs-grid gap-4 sm:gap-6 md:gap-8 items-center">
            {/* Stödlinjen */}
            <Link
              href="https://www.stodlinjen.se"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center hover:scale-105 transition-transform duration-300"
            >
              <Image src="/stodli.png" alt="Stodlinjen" width={200} height={120} className="p-2 bg-white rounded" />
            </Link>

            {/* Spelinspektionen */}
            <Link
              href="https://www.spelinspektionen.se"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center hover:scale-105 transition-transform duration-300"
            >
              <Image src="/spel.png" alt="SPEL" width={200} height={120} className="p-2 bg-white rounded" />
            </Link>

            {/* GambleAware */}
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center hover:scale-105 transition-transform duration-300"
            >
              <Image src="/gamble.webp" alt="GambleAware" width={200} height={120} className="p-2 bg-white rounded" />
            </Link>

            {/* GamCare */}
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center hover:scale-105 transition-transform duration-300"
            >
              <Image src="/gamecare.svg" alt="GamCare" width={200} height={120} className="p-2 bg-white rounded" />
            </Link>

            {/* SPER */}
            <Link
              href="https://www.sper.se"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center hover:scale-105 transition-transform duration-300"
            >
              <Image src="/sper.png" alt="SPER" width={200} height={120} className="p-2 bg-white rounded" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 sm:w-12 h-6 sm:h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">18+</span>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">Spel för dig över 18 år</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-yellow-400 font-bold text-base sm:text-lg mb-1 sm:mb-2">Spelar du för mycket?</p>
              <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Ring Stödlinjen 020-81 91 00</p>
              <Link
                href="https://www.stodlinjen.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              >
                Gör ett självtest och testa dina spelvanor
              </Link>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-2 text-sm sm:text-base">
              Lotterilicens beviljad för Svenska Postkodföreningen
            </p>
            <p className="text-gray-500 text-sm">© 2025 Svensk Chans. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
