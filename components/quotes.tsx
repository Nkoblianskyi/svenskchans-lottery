export function Quotes() {
  const quotes = [
    {
      text: "Lycka är inget slumpmässigt fenomen. Det kommer från dina egna handlingar.",
      author: "Dalai Lama",
    },
    {
      text: "En dröm som du drömmer ensam är bara en dröm. En dröm som du drömmer tillsammans med andra är verklighet.",
      author: "Yoko Ono",
    },
    {
      text: "Det bästa sättet att förutsäga framtiden är att skapa den själv.",
      author: "Peter Drucker",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Citat Om <span className="text-yellow-400">Drömmar och Lycka</span>
          </h2>
        </div>

        <div className="space-y-16">
          {quotes.map((quote, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-px bg-yellow-400 mx-auto mb-8"></div>
              <blockquote className="text-2xl md:text-3xl text-white/90 italic mb-6 max-w-4xl mx-auto leading-relaxed">
                "{quote.text}"
              </blockquote>
              <cite className="text-yellow-400 font-semibold text-lg">— {quote.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
