"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface FormData {
  email: string
  password: string
  confirmPassword: string
  title: string
  firstName: string
  lastName: string
  birthName: string
  zip: string
  location: string
  street: string
  houseNumber: string
  dateOfBirth: string
  placeOfBirth: string
  phone: string
  bankIban: string
  acceptTerms: boolean
  acceptMarketing: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zip: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    bankIban: "",
    acceptTerms: false,
    acceptMarketing: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "E-postadress är obligatorisk"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ogiltig e-postadress"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Lösenord är obligatoriskt"
    } else if (formData.password.length < 8) {
      newErrors.password = "Lösenordet måste vara minst 8 tecken"
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Lösenorden matchar inte"
    }

    // Required fields
    const requiredFields = [
      { field: "title", message: "Titel är obligatorisk" },
      { field: "firstName", message: "Förnamn är obligatoriskt" },
      { field: "lastName", message: "Efternamn är obligatoriskt" },
      { field: "zip", message: "Postnummer är obligatoriskt" },
      { field: "location", message: "Ort är obligatorisk" },
      { field: "street", message: "Gatuadress är obligatorisk" },
      { field: "houseNumber", message: "Husnummer är obligatoriskt" },
      { field: "dateOfBirth", message: "Födelsedatum är obligatoriskt" },
      { field: "placeOfBirth", message: "Födelseort är obligatorisk" },
      { field: "phone", message: "Telefonnummer är obligatoriskt" },
      { field: "bankIban", message: "Bank IBAN är obligatoriskt" },
    ]

    requiredFields.forEach(({ field, message }) => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = message
      }
    })

    // ZIP validation (Swedish postal code)
    if (formData.zip && !/^\d{3}\s?\d{2}$/.test(formData.zip)) {
      newErrors.zip = "Ogiltigt postnummer (format: 123 45)"
    }

    // Phone validation
    if (formData.phone && !/^\+46\s?\d{1,3}\s?\d{3,4}\s?\d{3,4}$/.test(formData.phone)) {
      newErrors.phone = "Ogiltigt telefonnummer (format: +46 XX XXX XXXX)"
    }

    // IBAN validation (basic)
    if (formData.bankIban && !/^[A-Z]{2}\d{2}[A-Z0-9]{4,30}$/.test(formData.bankIban.replace(/\s/g, ""))) {
      newErrors.bankIban = "Ogiltigt IBAN-nummer"
    }

    // Date validation
    if (formData.dateOfBirth) {
      const date = new Date(formData.dateOfBirth)
      const today = new Date()
      const age = today.getFullYear() - date.getFullYear()
      if (age < 18) {
        newErrors.dateOfBirth = "Du måste vara minst 18 år gammal"
      }
    }

    // Terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Du måste acceptera villkoren"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    router.push("/login")
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl">Skapa Konto</CardTitle>
          <CardDescription className="text-sm sm:text-base">Skapa ditt konto för att komma igång</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email and Password Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 form-grid-adaptive gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  E-postadress *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="din@email.se"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`text-sm sm:text-base ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  Lösenord *
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`text-sm sm:text-base ${errors.password ? "border-red-500" : ""}`}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm sm:text-base">
                Bekräfta Lösenord *
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className={`text-sm sm:text-base ${errors.confirmPassword ? "border-red-500" : ""}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
            </div>

            {/* Title, First Name, Last Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 form-grid-3-adaptive gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm sm:text-base">
                  Titel *
                </Label>
                <Select value={formData.title} onValueChange={(value) => handleInputChange("title", value)}>
                  <SelectTrigger className={`${errors.title ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Välj titel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="herr">Herr</SelectItem>
                    <SelectItem value="fru">Fru</SelectItem>
                    <SelectItem value="fröken">Fröken</SelectItem>
                  </SelectContent>
                </Select>
                {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm sm:text-base">
                  Förnamn *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`text-sm sm:text-base ${errors.firstName ? "border-red-500" : ""}`}
                />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm sm:text-base">
                  Efternamn *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`text-sm sm:text-base ${errors.lastName ? "border-red-500" : ""}`}
                />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
              </div>
            </div>

            {/* Birth Name */}
            <div className="space-y-2">
              <Label htmlFor="birthName" className="text-sm sm:text-base">
                Födelsenamn (om annorlunda)
              </Label>
              <Input
                id="birthName"
                type="text"
                value={formData.birthName}
                onChange={(e) => handleInputChange("birthName", e.target.value)}
                className="text-sm sm:text-base"
              />
            </div>

            {/* ZIP and Location Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 form-grid-adaptive gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-sm sm:text-base">
                  Postnummer *
                </Label>
                <Input
                  id="zip"
                  type="text"
                  placeholder="123 45"
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
                  className={`text-sm sm:text-base ${errors.zip ? "border-red-500" : ""}`}
                />
                {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm sm:text-base">
                  Ort *
                </Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className={`text-sm sm:text-base ${errors.location ? "border-red-500" : ""}`}
                />
                {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
              </div>
            </div>

            {/* Street and House Number Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 form-grid-adaptive gap-4">
              <div className="space-y-2">
                <Label htmlFor="street" className="text-sm sm:text-base">
                  Gatuadress *
                </Label>
                <Input
                  id="street"
                  type="text"
                  value={formData.street}
                  onChange={(e) => handleInputChange("street", e.target.value)}
                  className={`text-sm sm:text-base ${errors.street ? "border-red-500" : ""}`}
                />
                {errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="houseNumber" className="text-sm sm:text-base">
                  Husnummer *
                </Label>
                <Input
                  id="houseNumber"
                  type="text"
                  value={formData.houseNumber}
                  onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                  className={`text-sm sm:text-base ${errors.houseNumber ? "border-red-500" : ""}`}
                />
                {errors.houseNumber && <p className="text-red-500 text-xs">{errors.houseNumber}</p>}
              </div>
            </div>

            {/* Date of Birth and Place of Birth Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 form-grid-adaptive gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm sm:text-base">
                  Födelsedatum * (ÅÅÅÅ-MM-DD)
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className={`text-sm sm:text-base ${errors.dateOfBirth ? "border-red-500" : ""}`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="placeOfBirth" className="text-sm sm:text-base">
                  Födelseort *
                </Label>
                <Input
                  id="placeOfBirth"
                  type="text"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                  className={`text-sm sm:text-base ${errors.placeOfBirth ? "border-red-500" : ""}`}
                />
                {errors.placeOfBirth && <p className="text-red-500 text-xs">{errors.placeOfBirth}</p>}
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm sm:text-base">
                Telefonnummer * (+46 XX XXX XXXX)
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+46 70 123 4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`text-sm sm:text-base ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>

            {/* Bank IBAN */}
            <div className="space-y-2">
              <Label htmlFor="bankIban" className="text-sm sm:text-base">
                Bank IBAN *
              </Label>
              <Input
                id="bankIban"
                type="text"
                placeholder="SE35 5000 0000 0549 1000 0003"
                value={formData.bankIban}
                onChange={(e) => handleInputChange("bankIban", e.target.value)}
                className={`text-sm sm:text-base ${errors.bankIban ? "border-red-500" : ""}`}
              />
              {errors.bankIban && <p className="text-red-500 text-xs">{errors.bankIban}</p>}
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed">
                  Jag godkänner policyer för svenskchans.com och databehandling för min förfrågan *
                </Label>
              </div>
              {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={formData.acceptMarketing}
                  onCheckedChange={(checked) => handleInputChange("acceptMarketing", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="marketing" className="text-xs sm:text-sm leading-relaxed">
                  Jag vill få marknadsföringsinformation via e-post
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm sm:text-base py-2 sm:py-3"
            >
              {isSubmitting ? "Registrerar..." : "Registrera"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Har du redan ett konto?{" "}
              <Link href="/login" className="text-blue-600 hover:underline" onClick={handleLinkClick}>
                Logga in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
