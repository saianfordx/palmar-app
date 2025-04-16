"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MayanBorder, DecorativePattern } from "@/components/ui/decorative-patterns"
import { Sparkles, CheckCircle } from "lucide-react"
import { FormEvent } from "react"

export const RegistrationSection = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <section id="registro" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <DecorativePattern variant="palmar-gold" className="opacity-10" color="white" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-palmar-red text-palmar-white mb-4 px-4 py-1 text-sm font-medium">
            Participa
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Regístrate Ahora</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <MayanBorder className="bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Sparkles className="h-5 w-5 text-palmar-orange mr-2" />
              ¿Quieres ser parte de Pal&apos; Mar?
            </h3>
            <p className="mb-6">
              Completa el formulario para registrar tu interés en asistir a Pal&apos; Mar 2025. Nuestro equipo se
              pondrá en contacto contigo con toda la información sobre disponibilidad e inscripción.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1" />
                <p>Acceso a todas las actividades del evento</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1" />
                <p>Alojamiento en el Hotel Pal&apos; Mar Resort & Spa</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1" />
                <p>Todas las comidas y bebidas incluidas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1" />
                <p>Traslados aeropuerto-hotel-aeropuerto</p>
              </div>
            </div>
          </MayanBorder>

          <Card variant="palmarPattern" className="relative overflow-hidden">
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre completo"
                    required
                    className="border-primary/30 focus-visible:ring-primary"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="border-primary/30 focus-visible:ring-primary"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    required
                    className="border-primary/30 focus-visible:ring-primary"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                    Mensaje (opcional)
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="¿Tienes alguna pregunta o comentario?"
                    rows={3}
                    className="border-primary/30 focus-visible:ring-primary"
                  />
                </div>

                <Button type="submit" variant="palmarOrange" className="w-full">
                  <span>Enviar solicitud</span>
                  <Sparkles className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 