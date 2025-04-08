import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MayanBorder, DecorativePattern } from "@/components/ui/decorative-patterns"
import {
  MapPin,
  Calendar,
  Plane,
  Bus,
  Hotel,
  Utensils,
  CoffeeIcon as Cocktail,
  Clock,
  Camera,
  Luggage,
  CheckCircle,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  Sun,
  Palmtree,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Palmtree className="h-6 w-6" />
            <span className="text-xl font-bold">Pal&apos; Mar</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#acerca" className="hover:text-accent transition-colors">
              Acerca
            </a>
            <a href="#agenda" className="hover:text-accent transition-colors">
              Agenda
            </a>
            <a href="#hotel" className="hover:text-accent transition-colors">
              Hotel
            </a>
            <a href="#galeria" className="hover:text-accent transition-colors">
              Galería
            </a>
            <a href="#registro" className="hover:text-accent transition-colors">
              Registro
            </a>
          </nav>
          <Button variant="mayan">
            <a href="#registro">Registrarme</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel.jpg"
            alt="Pal' Mar - Evento exclusivo"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 z-[1]"></div>
        <DecorativePattern variant="mayan" className="opacity-20 z-[2]" color="white" />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Sun className="h-16 w-16 text-accent animate-pulse-subtle" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pal&apos; Mar 2025</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Una experiencia exclusiva en la Riviera Maya para celebrar, conectar y disfrutar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="mayan" className="text-base">
              <a href="#registro" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Quiero asistir</span>
              </a>
            </Button>
            <Button
              size="xl"
              variant="tropical"
              className="text-base"
            >
              <a href="#agenda" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Ver agenda</span>
              </a>
            </Button>
          </div>
          <div className="mt-16 flex justify-center">
            <a href="#acerca" className="animate-bounce bg-accent/20 p-3 rounded-full">
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1 text-sm font-medium">
              15-17 Julio 2025
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Acerca del Evento</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card variant="mayan" className="p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-accent mr-2" />
                Una experiencia inolvidable
              </h3>
              <p className="text-foreground mb-6">
                Pal&apos; Mar es un evento exclusivo que reúne a profesionales y entusiastas en un entorno paradisíaco
                para compartir experiencias, establecer conexiones y disfrutar de momentos únicos.
              </p>
              <p className="text-foreground mb-6">
                Durante tres días, los asistentes podrán disfrutar de actividades especialmente diseñadas, gastronomía
                de primer nivel, y un ambiente de lujo en uno de los destinos más hermosos de México.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start bg-muted p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary">Networking</h4>
                    <p className="text-sm text-muted-foreground">Conecta con profesionales</p>
                  </div>
                </div>
                <div className="flex items-start bg-muted p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary">Experiencias</h4>
                    <p className="text-sm text-muted-foreground">Actividades exclusivas</p>
                  </div>
                </div>
                <div className="flex items-start bg-muted p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary">Gastronomía</h4>
                    <p className="text-sm text-muted-foreground">Cocina de autor</p>
                  </div>
                </div>
                <div className="flex items-start bg-muted p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary">Bienestar</h4>
                    <p className="text-sm text-muted-foreground">Spa y actividades</p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/beach1.jpg"
                  alt="Pal' Mar experiencias"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-3 left-3 text-white font-medium">Experiencias</div>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg mt-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/beach2.jpg"
                  alt="Pal' Mar networking"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-3 left-3 text-white font-medium">Networking</div>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg -mt-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/beach3.jpg"
                  alt="Pal' Mar gastronomía"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-3 left-3 text-white font-medium">Gastronomía</div>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/beach4.jpg"
                  alt="Pal' Mar bienestar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-3 left-3 text-white font-medium">Bienestar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-tropical-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1 text-sm font-medium">
              Programa
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Agenda del Evento</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
            <Tabs defaultValue="dia1" className="w-full">
              <div className="bg-primary p-1 rounded-t-xl">
                <TabsList className="grid w-full grid-cols-3 bg-transparent gap-1">
                  <TabsTrigger
                    value="dia1"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary text-white rounded-lg"
                  >
                    Viernes, 15 Julio
                  </TabsTrigger>
                  <TabsTrigger
                    value="dia2"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary text-white rounded-lg"
                  >
                    Sábado, 16 Julio
                  </TabsTrigger>
                  <TabsTrigger
                    value="dia3"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary text-white rounded-lg"
                  >
                    Domingo, 17 Julio
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-6 relative">
                <DecorativePattern variant="tropical" className="opacity-5" color="var(--accent)" />
                
                <TabsContent value="dia1">
                  <div className="flex items-center mb-6">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold text-foreground">Viernes, 15 de Julio</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">10:00</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="mayan" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Registro de Participantes</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <MapPin className="h-4 w-4 text-primary mr-1" />
                            Lobby del Hotel
                          </p>
                          <p className="text-foreground">Recoge tu kit de bienvenida y acreditación para el evento.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">14:00</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="tropical" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Check-in y Tiempo Libre</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Hotel className="h-4 w-4 text-primary mr-1" />
                            Hotel Pal&apos; Mar Resort
                          </p>
                          <p className="text-foreground">
                            Tiempo para instalarte en tu habitación y disfrutar de las instalaciones del hotel.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">19:00</span>
                        </div>
                      </div>
                      <Card variant="mayan" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Cóctel de Bienvenida</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Cocktail className="h-4 w-4 text-primary mr-1" />
                            Terraza Principal
                          </p>
                          <p className="text-foreground">
                            Disfruta de bebidas y canapés mientras conoces a otros asistentes. Incluye discurso de
                            bienvenida y presentación del evento.
                          </p>
                          <Badge className="mt-3 bg-primary/20 text-primary">Evento Destacado</Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dia2">
                  <div className="flex items-center mb-6">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold text-foreground">Sábado, 16 de Julio</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">08:00</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="tropical" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Desayuno Networking</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Utensils className="h-4 w-4 text-primary mr-1" />
                            Restaurante Principal
                          </p>
                          <p className="text-foreground">Desayuno buffet con oportunidades de networking.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">10:30</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="mayan" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Conferencias y Talleres</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Sparkles className="h-4 w-4 text-primary mr-1" />
                            Salón Esmeralda
                          </p>
                          <p className="text-foreground">
                            Serie de conferencias y talleres sobre innovación, creatividad y desarrollo personal.
                          </p>
                          <Badge className="mt-3 bg-secondary/20 text-secondary">Educación</Badge>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">14:00</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="tropical" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Actividades en la Playa</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Palmtree className="h-4 w-4 text-primary mr-1" />
                            Playa Privada
                          </p>
                          <p className="text-foreground">
                            Diversas actividades recreativas en la playa, incluyendo deportes acuáticos, yoga y más.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">20:00</span>
                        </div>
                      </div>
                      <Card variant="mayan" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Cena de Gala</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Sparkles className="h-4 w-4 text-primary mr-1" />
                            Salón Diamante
                          </p>
                          <p className="text-foreground">
                            Cena formal con espectáculo y premiaciones. Código de vestimenta: Elegante.
                          </p>
                          <Badge className="mt-3 bg-primary/20 text-primary">Evento Destacado</Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dia3">
                  <div className="flex items-center mb-6">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold text-foreground">Domingo, 17 de Julio</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">08:30</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="tropical" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Yoga al Amanecer</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Sun className="h-4 w-4 text-primary mr-1" />
                            Jardín Zen
                          </p>
                          <p className="text-foreground">
                            Clase de yoga para todos los niveles con vistas al mar.
                          </p>
                          <Badge className="mt-3 bg-secondary/20 text-secondary">Bienestar</Badge>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">10:00</span>
                        </div>
                        <div className="h-full w-0.5 bg-accent/50 my-2"></div>
                      </div>
                      <Card variant="mayan" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Brunch de Despedida</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Utensils className="h-4 w-4 text-primary mr-1" />
                            Jardín Central
                          </p>
                          <p className="text-foreground">Brunch de despedida con resumen del evento y agradecimientos.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                          <span className="font-bold">12:00</span>
                        </div>
                      </div>
                      <Card variant="tropical" className="flex-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg text-foreground">Check-out y Traslados</h4>
                          <p className="text-muted-foreground mb-2 flex items-center">
                            <Luggage className="h-4 w-4 text-primary mr-1" />
                            Lobby del Hotel
                          </p>
                          <p className="text-foreground">
                            Servicio de check-out y coordinación de traslados al aeropuerto.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Hotel Section */}
      <section id="hotel" className="py-20 bg-mayan-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1 text-sm font-medium">
              Alojamiento
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hotel Pal&apos; Mar Resort & Spa
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card variant="mayan" className="p-6 relative overflow-hidden">
                <DecorativePattern variant="tropical" className="opacity-5" color="var(--primary)" />
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <Palmtree className="h-5 w-5 text-accent mr-2" />
                  Un paraíso tropical
                </h3>
                <p className="text-foreground mb-6">
                  El Hotel Pal&apos; Mar Resort & Spa es un lujoso complejo de 5 estrellas ubicado en la hermosa Riviera
                  Maya. Con acceso directo a la playa y rodeado de exuberante vegetación tropical, ofrece una experiencia
                  única para los asistentes al evento Pal&apos; Mar.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start bg-muted p-3 rounded-lg">
                    <div className="bg-accent/20 p-2 rounded-full mr-3 mt-1">
                      <Utensils className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Restaurantes</h4>
                      <p className="text-sm text-muted-foreground">6 restaurantes de especialidades</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-muted p-3 rounded-lg">
                    <div className="bg-accent/20 p-2 rounded-full mr-3 mt-1">
                      <Cocktail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Bares</h4>
                      <p className="text-sm text-muted-foreground">4 bares con barra libre</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-muted p-3 rounded-lg">
                    <div className="bg-accent/20 p-2 rounded-full mr-3 mt-1">
                      <Hotel className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Habitaciones</h4>
                      <p className="text-sm text-muted-foreground">350 habitaciones de lujo</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-muted p-3 rounded-lg">
                    <div className="bg-accent/20 p-2 rounded-full mr-3 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Ubicación</h4>
                      <p className="text-sm text-muted-foreground">Riviera Maya, México</p>
                    </div>
                  </div>
                </div>

                <Card variant="tropical" className="p-4 mb-6">
                  <h4 className="font-medium mb-2 flex items-center text-foreground">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    Horarios importantes
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-accent rounded-full mr-2"></span>
                      Check-in: 15:00 hrs
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-accent rounded-full mr-2"></span>
                      Check-out: 12:00 hrs
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-accent rounded-full mr-2"></span>
                      Restaurante principal: 7:00 - 23:00 hrs
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-accent rounded-full mr-2"></span>
                      Bares: 10:00 - 02:00 hrs
                    </li>
                  </ul>
                </Card>
              </Card>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-4 transform hover:scale-[1.02] transition-transform duration-300 group">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hotel Pal' Mar Resort"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Hotel Pal&apos; Mar Resort</h4>
                  <p className="text-sm">Riviera Maya, México</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 group">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Hotel - Piscina"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 "></div>
                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">Piscina</div>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 group">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Hotel - Restaurante"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 "></div>
                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">Restaurante</div>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 group">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Hotel - Habitación"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 "></div>
                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">Habitación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-tropical-yellow text-tropical-darkred mb-4 px-4 py-1 text-sm font-medium">
              Logística
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-tropical-darkred mb-4">Información de Viaje</h2>
            <div className="w-20 h-1 bg-tropical-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-tropical-yellow/30 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="bg-tropical-orange h-2"></div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-tropical-yellow/20 p-3 rounded-full mr-4">
                    <Plane className="h-6 w-6 text-tropical-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-tropical-darkred">Vuelos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  El aeropuerto más cercano es el Aeropuerto Internacional de Cancún (CUN), ubicado a aproximadamente 45
                  minutos del hotel.
                </p>
                <p className="text-gray-700">
                  Recomendamos reservar vuelos con llegada el 15 de julio antes de las 16:00 hrs y salida el 17 de julio
                  después de las 14:00 hrs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-tropical-yellow/30 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="bg-tropical-orange h-2"></div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-tropical-yellow/20 p-3 rounded-full mr-4">
                    <Bus className="h-6 w-6 text-tropical-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-tropical-darkred">Traslados</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Se proporcionará servicio de traslado desde el aeropuerto hasta el hotel para todos los asistentes.
                </p>
                <p className="text-gray-700">
                  Los horarios de los traslados se coordinarán según los vuelos de los participantes. El punto de
                  encuentro será en la Terminal 3, Salida Internacional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-tropical-yellow/30 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="bg-tropical-orange h-2"></div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-tropical-yellow/20 p-3 rounded-full mr-4">
                    <Luggage className="h-6 w-6 text-tropical-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-tropical-darkred">Qué Llevar</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tropical-orange mr-2 mt-0.5 shrink-0" />
                    <span>Ropa ligera y fresca para el día</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tropical-orange mr-2 mt-0.5 shrink-0" />
                    <span>Atuendo elegante para la cena de gala</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tropical-orange mr-2 mt-0.5 shrink-0" />
                    <span>Traje de baño y protector solar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tropical-orange mr-2 mt-0.5 shrink-0" />
                    <span>Identificación oficial y documentos de viaje</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-mayan-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-tropical-yellow text-tropical-darkred mb-4 px-4 py-1 text-sm font-medium">
              Momentos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-tropical-darkred mb-4">
              Galería de Ediciones Anteriores
            </h2>
            <div className="w-20 h-1 bg-tropical-orange mx-auto"></div>
          </div>

          <div className="bg-white/80 p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm4.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cena de Gala
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm3.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Actividades
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm2.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Playa
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm1.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Networking
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm5.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Gastronomía
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm6.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cóctel
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm7.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Spa
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="/pm8.jpg"
                  alt="Pal' Mar - Edición anterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-darkred/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Atardecer
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-tropical-orange text-tropical-orange hover:bg-tropical-orange/10 group"
              >
                <span>Ver más fotos</span>
                <Camera className="h-4 w-4 ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registro" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <DecorativePattern variant="mayan" className="opacity-10" color="white" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1 text-sm font-medium">
              Participa
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Regístrate Ahora</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <MayanBorder className="bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-accent mr-2" />
                ¿Quieres ser parte de Pal&apos; Mar?
              </h3>
              <p className="mb-6">
                Completa el formulario para registrar tu interés en asistir a Pal&apos; Mar 2025. Nuestro equipo se
                pondrá en contacto contigo con toda la información sobre disponibilidad e inscripción.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>Acceso a todas las actividades del evento</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>Alojamiento en el Hotel Pal&apos; Mar Resort & Spa</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>Todas las comidas y bebidas incluidas</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>Traslados aeropuerto-hotel-aeropuerto</p>
                </div>
              </div>
            </MayanBorder>

            <Card variant="tropical" className="relative overflow-hidden">
              <CardContent className="p-6">
                <form className="space-y-4">
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

                  <Button type="submit" variant="mayan" className="w-full">
                    <span>Enviar solicitud</span>
                    <Sparkles className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 relative overflow-hidden">
        <DecorativePattern variant="zigzag" className="opacity-5" color="var(--accent)" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palmtree className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">Pal&apos; Mar</h3>
              </div>
              <p className="text-accent/80 mb-4">
                Una experiencia exclusiva en la Riviera Maya para celebrar, conectar y disfrutar.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#acerca" className="text-accent/80 hover:text-primary-foreground transition-colors">
                    Acerca del evento
                  </a>
                </li>
                <li>
                  <a href="#agenda" className="text-accent/80 hover:text-primary-foreground transition-colors">
                    Agenda
                  </a>
                </li>
                <li>
                  <a href="#hotel" className="text-accent/80 hover:text-primary-foreground transition-colors">
                    Hotel
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-accent/80 hover:text-primary-foreground transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#registro" className="text-accent/80 hover:text-primary-foreground transition-colors">
                    Registro
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Contacto</h3>
              <ul className="space-y-3 text-accent/80">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                  <span>Riviera Maya, México</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                  <span>info@palmar-evento.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                  <span>+52 (999) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 mt-8 pt-8 text-center text-accent/70">
            <p>© 2025 Pal&apos; Mar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

