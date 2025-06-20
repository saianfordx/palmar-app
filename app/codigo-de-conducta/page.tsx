import React from "react"
import Link from "next/link"
import { DecorativePattern, MayanBorder } from "@/components/ui/decorative-patterns"

export const metadata = {
  title: "Código de conducta | Pal' Mar",
  description: "Lee el código de conducta completo del evento Pal' Mar.",
}

export default function CodigoDeConductaPage() {
  return (
    <main className="relative min-h-screen py-24 px-4 bg-gradient-palmar-subtle text-black flex items-start justify-center overflow-hidden">
      {/* Background pattern overlay */}
      <DecorativePattern variant="palmar-gold" className="opacity-20" />

      {/* Content card */}
      <div className="relative z-10 w-full max-w-3xl">
        <MayanBorder className="bg-palmar-cream/60 backdrop-blur-md rounded-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-palmar-orange drop-shadow-sm">
            Código de Conducta
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-palmar-teal">
            Pal' Mar - Cancún 2025
          </h2>

          <p className="mb-8 leading-relaxed text-lg">
            Con el propósito de garantizar una experiencia positiva, respetuosa y segura para todas las personas participantes, este Código de Conducta establece las pautas mínimas de comportamiento esperadas durante el evento.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                Respeto a la Diversidad
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Se espera una actitud inclusiva y respetuosa hacia todas las personas, sin importar su género, edad, identidad, orientación sexual, nacionalidad, idioma, creencias, capacidades u origen.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  No se tolerarán comentarios, gestos ni comportamientos discriminatorios o que generen incomodidad.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                Comportamiento Ético y Profesional
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Cada participante debe conducirse con integridad, cordialidad y cortesía en todo momento.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Se espera evitar cualquier tipo de conflicto, provocación o actitud ofensiva hacia colegas, personal del hotel u otros huéspedes.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                Convivencia Responsable
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  La convivencia está pensada para fortalecer los lazos entre compañeros y fomentar un ambiente positivo.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  No se permitirán comportamientos que alteren el orden, pongan en riesgo la seguridad o afecten el bienestar de otros.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                Consumo Responsable de Bebidas Alcohólicas
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  El consumo de bebidas alcohólicas debe realizarse con moderación.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  No se permitirá la participación en actividades bajo evidente estado de ebriedad o en condiciones que comprometan la seguridad.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                Respeto a Otros Huéspedes y Entorno
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Se deben evitar ruidos excesivos, gritos o conductas que alteren la tranquilidad de otros huéspedes del hotel.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  No está permitido ingresar a habitaciones ajenas sin consentimiento ni utilizar áreas comunes de manera indebida.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">6</span>
                Cuidado de las Instalaciones
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Las instalaciones del hotel deben ser utilizadas con respeto y cuidado.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Cualquier daño causado por negligencia o mal uso será responsabilidad del participante y deberá ser cubierto por este.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-palmar-orange flex items-center">
                <span className="bg-palmar-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">7</span>
                Atención a las Indicaciones del Personal
              </h3>
              <ul className="ml-11 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Las indicaciones del personal del hotel y de la organización del evento deberán seguirse de manera puntual y respetuosa.
                </li>
                <li className="flex items-start">
                  <span className="text-palmar-orange mr-2 mt-1">•</span>
                  Su objetivo es preservar la seguridad y el disfrute de todas las personas asistentes.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-palmar-orange/10 rounded-lg border-l-4 border-palmar-orange">
            <p className="font-semibold text-palmar-teal leading-relaxed">
              Al participar en este evento, aceptas cumplir con estas normas y contribuir a crear una experiencia memorable y positiva para todos.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block rounded-full bg-palmar-red hover:bg-palmar-orange transition-colors px-10 py-4 text-white font-semibold shadow-lg glowing-border-red"
            >
              Volver al inicio
            </Link>
          </div>
        </MayanBorder>
      </div>
    </main>
  )
} 