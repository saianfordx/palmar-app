import Link from "next/link"
import React from "react"
import { DecorativePattern } from "@/components/ui/decorative-patterns"
import { Shield, ArrowRight } from 'lucide-react'

export function CodigoConductaSection() {
  return (
    <section
      id="codigo-de-conducta"
      className="relative py-24 bg-gradient-palmar-subtle overflow-hidden shadow-inner"
    >
      {/* Decorative background pattern */}
      <DecorativePattern variant="palmar-gold" className="opacity-20" />

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-palmar-red" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-palmar-teal drop-shadow-sm">
              Código de Conducta
            </h2>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-palmar-gold/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-palmar-teal mb-6">
              Pal' Mar - Cancún 2025
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-palmar-teal/90 mb-8">
              En Mind queremos que todos nuestros eventos sean espacios seguros, respetuosos e incluyentes para todas las personas. Conoce nuestras normas de convivencia y contribuye a crear una experiencia memorable y positiva para todos.
            </p>
            
            <Link
              href="/codigo-de-conducta"
              className="inline-flex items-center gap-3 rounded-full bg-palmar-red hover:bg-palmar-orange transition-colors px-8 py-4 text-white font-semibold shadow-lg glowing-border-red group"
            >
              Leer Código Completo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 