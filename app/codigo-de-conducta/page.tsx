import React from "react"
import Link from "next/link"
import { DecorativePattern, MayanBorder } from "@/components/ui/decorative-patterns"

export const metadata = {
  title: "Código de conducta | Pal' Mar",
  description: "Lee el código de conducta completo del evento Pal' Mar.",
}

export default function CodigoDeConductaPage() {
  return (
    <main className="relative min-h-screen py-24 px-4 bg-gradient-palmar-subtle text-palmar-teal flex items-start justify-center overflow-hidden">
      {/* Background pattern overlay */}
      <DecorativePattern variant="palmar-gold" className="opacity-20" />

      {/* Content card */}
      <div className="relative z-10 w-full max-w-3xl">
        <MayanBorder className="bg-palmar-cream/60 backdrop-blur-md rounded-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-palmar-teal drop-shadow-sm">
            Código de conducta
          </h1>

          <p className="mb-6 leading-relaxed">
            En Mind, nos comprometemos a mantener un entorno sin abusos para todas las personas, sin importar sexo, identidad u orientación sexual, discapacidad, aspecto físico, edad, raza, nacionalidad o creencias religiosas. No toleraremos bajo ningún concepto el acoso a los asistentes de este y cualquier otro evento que organicemos.
          </p>

          <p className="mb-6 leading-relaxed">
            Las personas que violen estas reglas, podrán ser sancionadas o expulsadas del evento inmediatamente a discreción de la organización.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-palmar-orange">
            ¿Cómo se ve el acoso?
          </h2>
          <p className="mb-6 leading-relaxed">
            Las formas de acoso incluyen comentarios ofensivos, orales o escritos, relacionados con sexo, identidad u orientación sexual, discapacidades, aspecto físico, edad, raza, nacionalidad o creencias religiosas, intimidación, amenazas, persecución, acecho, fotografías o grabaciones abusivas, y atenciones sexuales no gratas.
          </p>

          <p className="mb-6 leading-relaxed">
            Todas las personas están sujetas a este código de conducta.
          </p>

          <p className="mb-6 leading-relaxed">
            Si algún asistente al evento muestra cualquier conducta abusiva, la organización tomará cualquier acción que crea apropiada, incluyendo llamarle la atención o expulsarle del evento y cualquiera del futuro.
          </p>

          <p className="mb-6 font-semibold leading-relaxed">
            Si eres víctima de conductas abusivas, ves a otra persona que está siendo acosada, o tienes dudas, por favor contacta al equipo de Cultura y Talento.
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