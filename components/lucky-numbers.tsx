export function LuckyNumbers() {
  const luckyNumbers = [
    {
      number: "7",
      meaning: "Lycka & Fullkomlighet",
      tradition: "Sju berg, sju hav - klassisk svensk lycka",
      color: "card-gradient-primary",
    },
    {
      number: "13",
      meaning: "Transformation & Förändring",
      tradition: "Fredag den 13:e - våga ta risken för lycka",
      color: "card-gradient-accent",
    },
    {
      number: "21",
      meaning: "Mognad & Framgång",
      tradition: "Myndighetsåldern - början på nya möjligheter",
      color: "card-gradient-secondary",
    },
    {
      number: "33",
      meaning: "Mästerskap & Visdom",
      tradition: "Kristus ålder - andlig fullkomlighet",
      color: "card-gradient-neutral",
    },
  ]

  const swedishNumberTraditions = [
    {
      title: "Födelsedatum",
      description: "Många svenskar spelar sina födelsedatum som lyckonummer",
      percentage: "67%",
      color: "card-gradient-primary",
    },
    {
      title: "Årsdagar",
      description: "Viktiga datum som bröllopsdag eller första dejt",
      percentage: "45%",
      color: "card-gradient-accent",
    },
    {
      title: "Adressnummer",
      description: "Hemadress eller barndomshem som lyckonummer",
      percentage: "38%",
      color: "card-gradient-secondary",
    },
    {
      title: "Slumptal",
      description: "Låter ödet bestämma genom slumpmässiga val",
      percentage: "52%",
      color: "card-gradient-neutral",
    },
  ]

  const numerologyFacts = [
    "I svensk folklore representerar talet 9 fullbordan och visdom",
    "Midsommarstången har traditionellt 12 kransar - ett lyckonummer",
    "Svenska flaggans proportioner 5:8 anses bringa nationell lycka",
    "Lucia-tåget har traditionellt 13 deltagare för extra lycka",
    "Kräftskiva firas den första torsdagen efter 8 augusti",
    "Svenska hus numreras ofta utan 13:an - men det kan vara lycka!",
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Svenska <span className="text-yellow-400">Lyckonummer</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Upptäck de magiska talen som har format svensk lycka och tradition genom århundradena
          </p>
        </div>

        {/* Lucky Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {luckyNumbers.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute -top-6 sm:-top-8 md:-top-10 -right-6 sm:-right-8 md:-right-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-2 sm:border-4 border-white/20 rounded-full"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -left-6 sm:-left-8 md:-left-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-2 sm:border-4 border-white/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-yellow-300">
                  {item.number}
                </div>
                <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2 md:mb-3">
                  {item.meaning}
                </h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{item.tradition}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Number Selection Traditions */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            Hur Svenskar Väljer Sina Nummer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {swedishNumberTraditions.map((tradition, index) => (
              <div
                key={index}
                className={`${tradition.color} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-3 sm:mb-4 md:mb-6">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2">
                      {tradition.percentage}
                    </div>
                    <div className="text-xs sm:text-sm opacity-70">av svenska spelare</div>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
                    {tradition.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed text-center">
                    {tradition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swedish Numerology Facts */}
        <div className="glass-card rounded-2xl sm:rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-12 shadow-2xl mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            Svenska Siffertraditioner
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {numerologyFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-blue-900 font-bold text-xs sm:text-sm md:text-base">{index + 1}</span>
                  </div>
                  <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Number Generator Teaser */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-xl border border-yellow-400/30 rounded-2xl sm:rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute -top-10 sm:-top-16 md:-top-20 -right-10 sm:-right-16 md:-right-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 border border-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -left-10 sm:-left-16 md:-left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-white/10 rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Upptäck Dina Personliga Lyckonummer
              </h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Baserat på svenska traditioner och din personliga historia - skapa din unika kombination av lyckonummer
              </p>
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-white/20">
                <div className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs sm:text-sm md:text-base font-medium">
                  Kommer snart - Personlig nummergenerator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
