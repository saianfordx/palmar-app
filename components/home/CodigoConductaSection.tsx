import Link from "next/link"
import React from "react"
import { DecorativePattern } from "@/components/ui/decorative-patterns"

export function CodigoConductaSection() {
  return (
    <section
      id="codigo-de-conducta"
      className="relative py-24 bg-gradient-palmar-subtle text-center overflow-hidden shadow-inner"
    >
      {/* Decorative background pattern */}
      <DecorativePattern variant="palmar-gold" className="opacity-20" />

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-palmar-teal drop-shadow-sm">
          Código de conducta
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed text-palmar-teal/90">
          Conoce nuestro compromiso para mantener un entorno seguro y libre de
          abusos para todas las personas durante el evento.
        </p>
        <Link
          href="/codigo-de-conducta"
          className="inline-block rounded-full bg-palmar-red hover:bg-palmar-orange transition-colors px-10 py-4 text-white font-semibold shadow-lg glowing-border-red"
        >
          Leer código de conducta
        </Link>
      </div>
    </section>
  )
} 