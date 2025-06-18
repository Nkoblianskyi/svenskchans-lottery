import {
  Clover,
  Star,
  SnowflakeIcon as Crystal,
  VenetianMaskIcon as Mask,
  Rainbow,
  FlowerIcon as Butterfly,
} from "lucide-react"

export function LuckySymbols() {
  const symbols = [
    { title: "Fyrklöver", description: "Symbol för tur och framgång", icon: Clover },
    { title: "Stjärnfall", description: "Gör en önskan när stjärnor faller", icon: Star },
    { title: "Kristallkula", description: "Blicka in i framtiden", icon: Crystal },
    { title: "Lyckomask", description: "Traditionell symbol för lycka", icon: Mask },
    { title: "Regnbågens Slut", description: "Där skatten väntar", icon: Rainbow },
    { title: "Fjäril", description: "Symbol för transformation", icon: Butterfly },
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Svenska <span className="text-yellow-400">Lyckosymboler</span>
          </h2>
          <p className="text-xl text-white/80">
            Svenska kulturer är fulla med symboler som bringar lycka och inspiration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symbols.map((symbol, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <symbol.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{symbol.title}</h3>
              <p className="text-white/70">{symbol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
