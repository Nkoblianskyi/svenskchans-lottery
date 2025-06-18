import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Values } from "@/components/values"
import { Dreams } from "@/components/dreams"
import { LuckySymbols } from "@/components/lucky-symbols"
import { Quotes } from "@/components/quotes"
import { SwedishHeritage } from "@/components/swedish-heritage"
import { LuckyNumbers } from "@/components/lucky-numbers"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Values />
      <Dreams />
      <LuckySymbols />
      <Quotes />
      <SwedishHeritage />
      <LuckyNumbers />
    </main>
  )
}
