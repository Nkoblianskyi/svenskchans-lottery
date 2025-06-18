"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [nextDrawDate, setNextDrawDate] = useState<Date | null>(null)

  // Function to get next Saturday at 20:00 (Svenska Post Kod Lotteriet draws on Saturdays)
  const getNextDrawDate = useCallback((): Date => {
    const now = new Date()
    const nextSaturday = new Date()

    // Find next Saturday
    const daysUntilSaturday = (6 - now.getDay()) % 7
    if (daysUntilSaturday === 0) {
      // If today is Saturday, check if it's before 20:00
      const todayAt8PM = new Date(now)
      todayAt8PM.setHours(20, 0, 0, 0)

      if (now < todayAt8PM) {
        // Today's draw hasn't happened yet
        nextSaturday.setHours(20, 0, 0, 0)
      } else {
        // Today's draw has passed, go to next Saturday
        nextSaturday.setDate(now.getDate() + 7)
        nextSaturday.setHours(20, 0, 0, 0)
      }
    } else {
      // Go to next Saturday
      nextSaturday.setDate(now.getDate() + daysUntilSaturday)
      nextSaturday.setHours(20, 0, 0, 0)
    }

    return nextSaturday
  }, [])

  // Function to calculate time difference
  const calculateTimeLeft = useCallback((targetDate: Date) => {
    const now = new Date().getTime()
    const target = targetDate.getTime()
    const difference = target - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }, [])

  // Format date for display
  const formatDrawDate = useCallback((date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return date.toLocaleDateString("sv-SE", options)
  }, [])

  // Initialize the draw date only once
  useEffect(() => {
    const initialDrawDate = getNextDrawDate()
    setNextDrawDate(initialDrawDate)
    setTimeLeft(calculateTimeLeft(initialDrawDate))
  }, [getNextDrawDate, calculateTimeLeft])

  // Separate effect for the timer
  useEffect(() => {
    if (!nextDrawDate) return

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(nextDrawDate)

      // Check if countdown has reached zero
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        // Time's up! Get next draw date
        const newDrawDate = getNextDrawDate()
        setNextDrawDate(newDrawDate)
        setTimeLeft(calculateTimeLeft(newDrawDate))
      } else {
        setTimeLeft(newTimeLeft)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [nextDrawDate, calculateTimeLeft, getNextDrawDate])

  return (
    <section className="hero-background py-2 sm:py-4 md:py-6 lg:py-10 px-4 relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-10 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-4 sm:right-10 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-adaptive-xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
          Din Portal till
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Svenska Lotterier
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-adaptive-base text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
          Upptäck spänningen i svenska lotteriupplevelser med vår licensierade plattform. Anslut dig till tusentals
          spelare i gemenskapen för drömmar och möjligheter.
        </p>

        <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 shadow-2xl">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Svenska PostKodLotteriet
            </h2>
          </div>

          {/* Real-time Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 timer-grid mb-4 sm:mb-6">
            {[
              { value: timeLeft.days, label: "Dagar" },
              { value: timeLeft.hours, label: "Timmar" },
              { value: timeLeft.minutes, label: "Minuter" },
              { value: timeLeft.seconds, label: "Sekunder" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 timer-item border border-white/20"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl timer-number font-bold text-yellow-400 mb-1 sm:mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-white/70 text-xs sm:text-sm md:text-base timer-label font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Draw Date Display */}
          <div className="mb-4 sm:mb-6">
            <p className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg mb-2">Nästa dragning:</p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-semibold">
              {nextDrawDate ? formatDrawDate(nextDrawDate) : "Laddas..."}
            </p>
          </div>

          {/* Status indicator */}
          <div className="mb-4 sm:mb-6">
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes < 30 ? (
              <div className="flex items-center justify-center gap-2 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Dragningen startar snart!</span>
              </div>
            ) : timeLeft.days === 0 && timeLeft.hours < 2 ? (
              <div className="flex items-center justify-center gap-2 text-orange-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Sista chansen att delta!</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Öppet för deltagande</span>
              </div>
            )}
          </div>

          <Link href="/login">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-300 hover:to-yellow-400 px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Delta Nu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
