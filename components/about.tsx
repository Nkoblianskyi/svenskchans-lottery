export function About() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Om <span className="text-yellow-400">Svensk Chans</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Sveriges främsta licensierade lotteriupplevelse
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Vårt Uppdrag</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Att skapa den säkraste och mest spännande lotteriupplevelsen. Vår plattform kombinerar säkerhet med
                innovation för att leverera den bästa möjliga spelupplevelsen.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Licensierad & Säker</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Fullständigt licensierad av Spelinspektionen med högsta säkerhetsstandarder och transparent verksamhet.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Trygg Gemenskap</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                En välkomnande miljö där alla spelare kan njuta av lotteriupplevelsen på ett ansvarsfullt sätt.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Svensk Kvalitet</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Byggd för svenska spelare med förståelse för lokala behov och preferenser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
