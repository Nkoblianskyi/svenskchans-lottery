export function Dreams() {
  const dreams = [
    "Starta en verksamhet",
    "Resa för upptäckter",
    "Hjälpa till välgörenhet",
    "Familjelycka",
    "Spela med vänner",
    "Torsdag kväll ritual",
    "Drömmar om förändring",
    "Leva för imorgon",
    "Moment av spänning",
    "Generationell visdom",
    "Tro på ödet",
    "Hopp om framtiden",
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Drömmar <span className="text-yellow-400">Mosaik</span>
          </h2>
          <p className="text-xl text-white/80">Varför väljer människor lotterier? Alla har sina egna anledningar...</p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {dreams.map((dream, index) => (
              <div
                key={index}
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm md:text-base font-medium">{dream}</span>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
