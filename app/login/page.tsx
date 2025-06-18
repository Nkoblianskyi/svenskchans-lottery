"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      router.push("/")
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }, 100)
    }, 2000)
  }

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm sm:max-w-md">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
                <div className="w-3 sm:w-4 h-1.5 sm:h-2 border-b-2 border-l-2 border-white transform rotate-45 -translate-y-0.5"></div>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">Inloggning Lyckades!</h2>
            <p className="text-gray-600 text-sm sm:text-base">Du omdirigeras till startsidan...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm sm:max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl">Logga in</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Ange dina uppgifter för att komma åt ditt konto
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                E-postadress
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="din@email.se"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm sm:text-base">
                Lösenord
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-sm sm:text-base"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3">
              Logga in
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Har du inget konto?{" "}
              <Link href="/register" className="text-blue-600 hover:underline" onClick={handleLinkClick}>
                Registrera dig här
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
