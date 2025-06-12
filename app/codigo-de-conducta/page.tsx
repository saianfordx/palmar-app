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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-palmar-orange drop-shadow-sm">
            Código de conducta
          </h1>

          <p className="mb-6 leading-relaxed">
            En Mind queremos que todos nuestros eventos sean espacios seguros, respetuosos e incluyentes para todas las personas, sin importar su sexo, identidad u orientación sexual, discapacidad, aspecto físico, edad, raza, nacionalidad o creencias religiosas.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-palmar-orange">
            ¿Qué consideramos acoso?
          </h2>
          <p className="mb-6 leading-relaxed">
            El acoso puede presentarse de muchas formas, entre ellas: comentarios ofensivos (verbales o escritos), intimidación, amenazas, persecución, acecho, fotografías o grabaciones sin consentimiento, atenciones sexuales no deseadas o cualquier conducta que haga sentir incómoda o insegura a otra persona.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-palmar-orange">
            ¿Qué pasa si ocurre?
          </h2>
          <p className="mb-6 leading-relaxed">
            Si alguien incurre en este tipo de conductas, el equipo organizador podrá tomar las medidas necesarias, que pueden ir desde una advertencia hasta la expulsión inmediata del evento, y de eventos futuros.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-palmar-orange">
            Si necesitas apoyo
          </h2>
          <p className="mb-6 leading-relaxed">
            Si en algún momento te sientes incómodo/a, notas alguna situación inapropiada o tienes dudas, por favor no dudes en acercarte al equipo de Cultura y Talento. Estamos aquí para apoyarte.
          </p>

          <p className="mb-6 font-semibold leading-relaxed">
            Entre todos podemos crear el ambiente que queremos en Mind: de respeto, confianza y bienestar para todas las personas.
          </p>

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