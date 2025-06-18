export function SwedishHeritage() {
  const heritageItems = [
    {
      year: "1897",
      title: "Första Svenska Lotteriet",
      description: "Det första officiella svenska lotteriet grundades för att stödja välgörenhet",
      color: "card-gradient-primary",
    },
    {
      year: "1934",
      title: "Tipstjänst Bildas",
      description: "Svenska Tipstjänst grundas och blir en del av svensk kultur",
      color: "card-gradient-accent",
    },
    {
      year: "1980",
      title: "Lotto Lanseras",
      description: "Det klassiska Lotto-spelet introduceras och blir folkkärt",
      color: "card-gradient-secondary",
    },
    {
      year: "2019",
      title: "Ny Spellag",
      description: "Modern spellagstiftning för säkrare och mer ansvarsfull spelupplevelse",
      color: "card-gradient-neutral",
    },
  ]

  const traditions = [
    {
      title: "Lördagsmys & Lotto",
      description: "Traditionell svensk lördagskväll med familjen och lottodragning",
      color: "card-gradient-primary",
    },
    {
      title: "Midsommar Lycka",
      description: "Speciella midsommarlotterier för att fira ljusa nätter",
      color: "card-gradient-accent",
    },
    {
      title: "Lucia Drömmar",
      description: "Vinterens hopp och drömmar genom december-lotterier",
      color: "card-gradient-secondary",
    },
    {
      title: "Kräftskiva Glädje",
      description: "Augustitraditioner med vänner och lyckodrömmar",
      color: "card-gradient-neutral",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Svenska <span className="text-yellow-400">Lotteriarv</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Över 125 år av svenska lotteritraditioner - från välgörenhet till modern underhållning
          </p>
        </div>

        {/* Historical Timeline */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            Historisk Tidslinje
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {heritageItems.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold opacity-10">
                  {item.year.slice(-2)}
                </div>
                <div className="relative z-10">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-yellow-300">
                    {item.year}
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swedish Traditions */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            Svenska Traditioner & Lotterier
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {traditions.map((tradition, index) => (
              <div
                key={index}
                className={`${tradition.color} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                    {tradition.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">{tradition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Quote */}
        <div className="glass-card rounded-2xl sm:rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-12 shadow-2xl text-center">
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4 sm:mb-6 italic leading-relaxed max-w-4xl mx-auto">
            Lotterier har alltid varit en del av svensk kultur - från att stödja välgörenhet till att skapa gemensamma
            drömmar och hopp för framtiden.
          </p>
          <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
          <p className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
            Svenska Lotterihistoriska Sällskapet
          </p>
        </div>
      </div>
    </section>
  )
}
