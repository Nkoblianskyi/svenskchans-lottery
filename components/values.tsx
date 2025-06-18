export function Values() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Våra <span className="text-yellow-400">Värderingar</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            På Svensk Chans står vi för mer än bara spel - vi är ett team av passionerade svenskar
          </p>
        </div>

        <div className="space-y-16">
          <div className="text-center">
            <div className="w-1 h-16 bg-yellow-400 mx-auto mb-8"></div>
            <h3 className="text-3xl font-bold text-white mb-6">Transparens Först</h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Fullständig öppenhet i alla våra processer och verksamheter. Vi tror på att bygga förtroende genom
              ärlighet och tydlighet i allt vi gör.
            </p>
          </div>

          <div className="text-center">
            <div className="w-1 h-16 bg-yellow-400 mx-auto mb-8"></div>
            <h3 className="text-3xl font-bold text-white mb-6">Svenskt Arv</h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Stolta över vårt svenska arv och engagerade i att stödja lokala gemenskaper och svenska värderingar i allt
              vi gör.
            </p>
          </div>

          <div className="text-center">
            <div className="w-1 h-16 bg-yellow-400 mx-auto mb-8"></div>
            <h3 className="text-3xl font-bold text-white mb-6">Innovation & Säkerhet</h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Ständigt utvecklande av nya sätt att förbättra spelupplevelsen samtidigt som vi upprätthåller högsta
              säkerhetsstandarder.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12"></div>
          <h3 className="text-2xl font-bold text-white mb-8">Stolt Att Tjäna Sverige</h3>
          <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
            Från vårt huvudkontor i Stockholm till spelare över hela landet, är vi stolta över att vara en del av den
            svenska lotteritraditionen. Vårt engagemang sträcker sig bortom spel - vi stöder lokala
            välgörenhetsorganisationer och bidrar till samhällsutveckling.
          </p>
        </div>
      </div>
    </section>
  )
}
