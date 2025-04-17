"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MayanBorder, DecorativePattern } from "@/components/ui/decorative-patterns"
import { Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"

export const RegistrationSection = () => {
  return (
    <section id="registro" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <DecorativePattern variant="palmar-gold" className="opacity-15" color="white" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-palmar-red text-palmar-white mb-4 px-4 py-1 text-sm font-medium">
            Participa
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-palmar-gold drop-shadow-md">Regístrate Ahora</h2>
          <div className="w-28 h-1 bg-palmar-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <MayanBorder className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-palmar-gold">
              <Sparkles className="h-6 w-6 text-palmar-orange mr-3" />
              Quiere ser parte de Pal&apos; Mar
            </h3>
            <p className="mb-6 text-lg">
              Presiona el botón de "Regístrate Ahora" y haz login con tu cuenta de Arkusnexus en nuestra aplicación "Arkade". Ahí podrás encontrar todos los eventos que tenemos en Arkusnexus incluyendo Palmar.
            </p>
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">¡Gana puntos y recompensas por asistir!</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">¿Qué esperas?</p>
              </div>
            </div>
          </MayanBorder>

          <div className="relative flex justify-center items-center p-8">
            <Link href="https://arkade.quest" passHref>
              <Button 
                className="bg-black hover:bg-black/80 text-white text-2xl font-bold px-12 py-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-md"
              >
                REGISTRATE AHORA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 