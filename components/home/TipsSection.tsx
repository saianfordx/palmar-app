import React from "react"
import Link from "next/link"
import { DecorativePattern } from "@/components/ui/decorative-patterns"
import { CheckCircle, Shirt, Laptop, Sun } from 'lucide-react'

const tips = [
  {
    number: 1,
    text: "Ropa cómoda y fresca (sneakers para actividades)",
    icon: Shirt
  },
  {
    number: 2,
    text: "Lleva tu traje de baño, sombrero/gorra",
    icon: Sun
  },
  {
    number: 3,
    text: "Bloqueador solar (biodegradable)",
    icon: Sun
  },
  {
    number: 4,
    text: "Repelente para insectos",
    icon: Sun
  },
  {
    number: 5,
    text: "En Sandbox habrá espacios de aprendizaje, ¡lleva tu laptop para aprovechar al máximo la experiencia!",
    icon: Laptop,
    highlight: true
  }
]

export function TipsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background pyramid pattern */}
      <div className="absolute inset-0 bg-[url('/textures/mayan-pyramid.svg')] bg-no-repeat bg-right-bottom bg-contain opacity-30"></div>
      <DecorativePattern variant="palmar-gold" className="opacity-10" />

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-palmar-teal mb-6 drop-shadow-sm">
            TIPS Y MAS...
          </h2>
          
          {/* Dress Code Highlight */}
          <div className="bg-gradient-to-r from-palmar-orange to-palmar-red text-white rounded-2xl p-6 md:p-8 mb-12 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shirt className="h-8 w-8 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold">DRESS CODE</h3>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-semibold">Sábado 28 Cena Celebración:</span> outfit tonos cálidos 
              <br />
              <span className="text-yellow-200">(rojo, anaranjado, amarillo, ocre o dorado)</span>
            </p>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-palmar-teal text-center mb-8">
            TE RECOMENDAMOS:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    tip.highlight 
                      ? 'bg-gradient-to-br from-palmar-orange/20 to-palmar-red/20 border-2 border-palmar-orange' 
                      : 'bg-white/80 backdrop-blur-sm border border-palmar-gold/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      tip.highlight 
                        ? 'bg-gradient-to-br from-palmar-orange to-palmar-red text-white' 
                        : 'bg-gradient-to-br from-palmar-teal to-palmar-orange text-white'
                    }`}>
                      {tip.number}
                    </div>
                    <div className="flex-1">
                      <p className={`leading-relaxed ${
                        tip.highlight ? 'text-palmar-teal font-semibold text-lg' : 'text-gray-700'
                      }`}>
                        {tip.text}
                      </p>
                      {tip.highlight && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-palmar-orange rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/codigo-de-conducta"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-palmar-orange to-palmar-red hover:from-palmar-red hover:to-palmar-orange transition-all duration-300 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Más info aquí
          </Link>
        </div>
      </div>
    </section>
  )
} 