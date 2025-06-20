import Link from "next/link"
import React from "react"
import { DecorativePattern } from "@/components/ui/decorative-patterns"
import { Shield, Users, Heart, Scale, AlertTriangle, Building, Headphones } from 'lucide-react'

const conductRules = [
  {
    title: "Respeto a la Diversidad",
    icon: Users,
    content: [
      "Se espera una actitud inclusiva y respetuosa hacia todas las personas, sin importar su género, edad, identidad, orientación sexual, nacionalidad, idioma, creencias, capacidades u origen.",
      "No se tolerarán comentarios, gestos ni comportamientos discriminatorios o que generen incomodidad."
    ]
  },
  {
    title: "Comportamiento Ético y Profesional",
    icon: Scale,
    content: [
      "Cada participante debe conducirse con integridad, cordialidad y cortesía en todo momento.",
      "Se espera evitar cualquier tipo de conflicto, provocación o actitud ofensiva hacia colegas, personal del hotel u otros huéspedes."
    ]
  },
  {
    title: "Convivencia Responsable",
    icon: Heart,
    content: [
      "La convivencia está pensada para fortalecer los lazos entre compañeros y fomentar un ambiente positivo.",
      "No se permitirán comportamientos que alteren el orden, pongan en riesgo la seguridad o afecten el bienestar de otros."
    ]
  },
  {
    title: "Consumo Responsable de Bebidas Alcohólicas",
    icon: AlertTriangle,
    content: [
      "El consumo de bebidas alcohólicas debe realizarse con moderación.",
      "No se permitirá la participación en actividades bajo evidente estado de ebriedad o en condiciones que comprometan la seguridad."
    ]
  },
  {
    title: "Respeto a Otros Huéspedes y Entorno",
    icon: Users,
    content: [
      "Se deben evitar ruidos excesivos, gritos o conductas que alteren la tranquilidad de otros huéspedes del hotel.",
      "No está permitido ingresar a habitaciones ajenas sin consentimiento ni utilizar áreas comunes de manera indebida."
    ]
  },
  {
    title: "Cuidado de las Instalaciones",
    icon: Building,
    content: [
      "Las instalaciones del hotel deben ser utilizadas con respeto y cuidado.",
      "Cualquier daño causado por negligencia o mal uso será responsabilidad del participante y deberá ser cubierto por este."
    ]
  },
  {
    title: "Atención a las Indicaciones del Personal",
    icon: Headphones,
    content: [
      "Las indicaciones del personal del hotel y de la organización del evento deberán seguirse de manera puntual y respetuosa.",
      "Su objetivo es preservar la seguridad y el disfrute de todas las personas asistentes."
    ]
  }
]

export function CodigoConductaSection() {
  return (
    <section
      id="codigo-de-conducta"
      className="relative py-24 bg-gradient-palmar-subtle overflow-hidden shadow-inner"
    >
      {/* Decorative background pattern */}
      <DecorativePattern variant="palmar-gold" className="opacity-20" />

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-palmar-red" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-palmar-teal drop-shadow-sm">
              Código de Conducta
            </h2>
          </div>
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-palmar-teal mb-4">
              Pal' Mar - Cancún 2025
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-palmar-teal/90">
              Con el propósito de garantizar una experiencia positiva, respetuosa y segura para todas las personas participantes, este Código de Conducta establece las pautas mínimas de comportamiento esperadas durante el evento.
            </p>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {conductRules.map((rule, index) => {
            const IconComponent = rule.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-palmar-gold/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-palmar-red to-palmar-orange rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-palmar-teal leading-tight">
                    {index + 1}. {rule.title}
                  </h3>
                </div>
                <div className="space-y-4 text-palmar-teal/80">
                  {rule.content.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-palmar-orange rounded-full mt-2"></div>
                      <p className="text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-palmar-gold/20 max-w-2xl mx-auto">
            <p className="text-palmar-teal font-semibold mb-4">
              Al participar en este evento, aceptas cumplir con estas normas y contribuir a crear una experiencia memorable y positiva para todos.
            </p>
            <div className="text-sm text-palmar-teal/70">
              Si tienes alguna duda o necesitas reportar algún incidente, no dudes en contactar al equipo organizador.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 