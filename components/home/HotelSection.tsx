"use client";

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"
import { MayanHeading } from "@/components/ui/mayan-heading"

// Mayan-styled icons as SVG components
const MayanPalmIcon = () => (
  <svg width="28" height="28" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan palm tree inspired by codices */}
    <g transform="translate(10, 5)">
      {/* Base trunk */}
      <path d="M50 25L55 85L45 85L50 25Z" fill="#f5a74d"/>
      
      {/* Stylized palm leaves in geometric Mayan style */}
      <path d="M50 25C50 25 30 15 20 25C10 35 25 45 50 25Z" fill="#f5a74d"/>
      <path d="M50 25C50 25 70 15 80 25C90 35 75 45 50 25Z" fill="#f5a74d"/>
      <path d="M50 35C50 35 30 25 15 30C0 35 20 50 50 35Z" fill="#f5a74d"/>
      <path d="M50 35C50 35 70 25 85 30C100 35 80 50 50 35Z" fill="#f5a74d"/>
      
      {/* Decorative elements */}
      <path d="M40 85H60V95H40V85Z" fill="#f5a74d"/>
      <circle cx="50" cy="20" r="5" fill="#f5a74d"/>
      
      {/* Mayan decorative patterns */}
      <path d="M30 95H70" stroke="#f5a74d" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2"/>
    </g>
  </svg>
);

const MayanBuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan temple/pyramid design */}
    <g transform="translate(15, 10)">
      {/* Stepped pyramid structure */}
      <path d="M10 80H80V100H10V80Z" fill="#f5a74d"/>
      <path d="M20 60H70V80H20V60Z" fill="#f5a74d"/>
      <path d="M30 40H60V60H30V40Z" fill="#f5a74d"/>
      <path d="M35 20H55V40H35V20Z" fill="#f5a74d"/>
      
      {/* Mayan decorative elements */}
      <path d="M40 10H50V20H40V10Z" fill="#f5a74d"/>
      
      {/* Temple doorway */}
      <rect x="40" y="70" width="10" height="10" fill="#081419"/>
      
      {/* Step decorations */}
      <path d="M25 70H35V75H25V70Z" fill="#081419"/>
      <path d="M55 70H65V75H55V70Z" fill="#081419"/>
      <path d="M35 50H55V55H35V50Z" fill="#081419"/>
      <path d="M40 30H50V35H40V30Z" fill="#081419"/>
    </g>
  </svg>
);

const MayanDrinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan drinking vessel/cup */}
    <g transform="translate(20, 15)">
      {/* Cup base with Mayan decorative pattern */}
      <path d="M25 60H55V90H25V60Z" fill="#f5a74d"/>
      <path d="M20 90H60V95H20V90Z" fill="#f5a74d"/>
      
      {/* Decorative elements */}
      <path d="M30 70H50V80H30V70Z" fill="#081419"/>
      <path d="M35 65L40 70L45 65" stroke="#081419" strokeWidth="2"/>
      <path d="M35 85L40 80L45 85" stroke="#081419" strokeWidth="2"/>
      
      {/* Steam/liquid symbols in Mayan style */}
      <path d="M30 50C35 45 45 45 50 50" stroke="#f5a74d" strokeWidth="2"/>
      <path d="M33 45C38 40 42 40 47 45" stroke="#f5a74d" strokeWidth="2"/>
      <path d="M36 40C39 37 41 37 44 40" stroke="#f5a74d" strokeWidth="2"/>
    </g>
  </svg>
);

const MayanWavesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan water/wave symbol */}
    <g transform="translate(10, 30)">
      {/* Stylized water glyph pattern */}
      <path d="M10 20C20 10 30 10 40 20C50 30 60 30 70 20C80 10 90 10 100 20" stroke="#f5a74d" strokeWidth="4"/>
      <path d="M10 40C20 30 30 30 40 40C50 50 60 50 70 40C80 30 90 30 100 40" stroke="#f5a74d" strokeWidth="4"/>
      <path d="M10 60C20 50 30 50 40 60C50 70 60 70 70 60C80 50 90 50 100 60" stroke="#f5a74d" strokeWidth="4"/>
      
      {/* Mayan dots representing water */}
      <circle cx="25" cy="20" r="3" fill="#f5a74d"/>
      <circle cx="55" cy="20" r="3" fill="#f5a74d"/>
      <circle cx="85" cy="20" r="3" fill="#f5a74d"/>
      
      <circle cx="40" cy="40" r="3" fill="#f5a74d"/>
      <circle cx="70" cy="40" r="3" fill="#f5a74d"/>
      
      <circle cx="25" cy="60" r="3" fill="#f5a74d"/>
      <circle cx="55" cy="60" r="3" fill="#f5a74d"/>
      <circle cx="85" cy="60" r="3" fill="#f5a74d"/>
    </g>
  </svg>
);

const MayanConnectivityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan connectivity symbol - inspired by Mayan glyphs for communication */}
    <g transform="translate(10, 20)">
      {/* Central symbol */}
      <circle cx="50" cy="40" r="15" fill="#f5a74d"/>
      <circle cx="50" cy="40" r="8" fill="#081419"/>
      
      {/* Emanating waves in Mayan angular style */}
      <path d="M25 30L35 40L25 50" stroke="#f5a74d" strokeWidth="3"/>
      <path d="M15 25L30 40L15 55" stroke="#f5a74d" strokeWidth="3"/>
      <path d="M75 30L65 40L75 50" stroke="#f5a74d" strokeWidth="3"/>
      <path d="M85 25L70 40L85 55" stroke="#f5a74d" strokeWidth="3"/>
      
      {/* Connection symbols */}
      <circle cx="25" cy="70" r="8" fill="#f5a74d"/>
      <circle cx="50" cy="70" r="8" fill="#f5a74d"/>
      <circle cx="75" cy="70" r="8" fill="#f5a74d"/>
      
      {/* Connection lines */}
      <path d="M25 70H75" stroke="#f5a74d" strokeWidth="2" strokeDasharray="4 2"/>
      <path d="M50 55V62" stroke="#f5a74d" strokeWidth="2"/>
    </g>
  </svg>
);

const MayanLocationIcon = ({ className = "" }) => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Mayan location marker inspired by Mayan cartography */}
    <g transform="translate(30, 10)">
      {/* Stylized location marker */}
      <path d="M30 20C30 10 50 0 60 20C70 40 50 70 30 20Z" fill="#2acbab"/>
      
      {/* Central symbol */}
      <circle cx="45" cy="25" r="8" fill="#081419"/>
      <circle cx="45" cy="25" r="3" fill="#2acbab"/>
      
      {/* Cardinal direction indicators - Mayan style */}
      <path d="M20 75L45 40L70 75" stroke="#2acbab" strokeWidth="2"/>
      <path d="M45 40V90" stroke="#2acbab" strokeWidth="2"/>
      
      {/* Decorative elements */}
      <path d="M35 80H55" stroke="#2acbab" strokeWidth="2" strokeDasharray="2 2"/>
      <path d="M35 85H55" stroke="#2acbab" strokeWidth="2" strokeDasharray="2 2"/>
      <path d="M35 90H55" stroke="#2acbab" strokeWidth="2" strokeDasharray="2 2"/>
    </g>
  </svg>
);

const MayanFoodIcon = ({ className = "" }) => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Mayan food/utensils symbol */}
    <g transform="translate(10, 10)">
      {/* Plate/bowl symbol (circular with Mayan pattern) */}
      <circle cx="50" cy="50" r="25" fill="#2acbab"/>
      <circle cx="50" cy="50" r="18" fill="#081419"/>
      <circle cx="50" cy="50" r="12" fill="#2acbab"/>
      
      {/* Stylized food elements */}
      <path d="M45 45L55 55M45 55L55 45" stroke="#081419" strokeWidth="2"/>
      
      {/* Crossed implements - Mayan style */}
      <path d="M25 25L40 40" stroke="#2acbab" strokeWidth="3"/>
      <path d="M75 25L60 40" stroke="#2acbab" strokeWidth="3"/>
      <path d="M25 75L40 60" stroke="#2acbab" strokeWidth="3"/>
      <path d="M75 75L60 60" stroke="#2acbab" strokeWidth="3"/>
      
      {/* Decorative elements */}
      <circle cx="25" cy="25" r="4" fill="#2acbab"/>
      <circle cx="75" cy="25" r="4" fill="#2acbab"/>
      <circle cx="25" cy="75" r="4" fill="#2acbab"/>
      <circle cx="75" cy="75" r="4" fill="#2acbab"/>
    </g>
  </svg>
);

export const HotelSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById("hotel");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="hotel" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1a2e35] to-[#1f373e]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/textures/palmar-pattern-gold.svg')] opacity-[0.03] bg-repeat"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-1">
        <div className="bg-gradient-to-r from-transparent via-[#f5a74d] to-transparent w-full h-full"></div>
      </div>
      
      {/* Animated ocean waves pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="w-full h-16 fill-[#2acbab]/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".15" className="animate-water"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".15" className="animate-water" style={{ animationDelay: '0.5s' }}></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <MayanHeading 
            badge="Alojamiento" 
            title="Royalton Riviera Cancún" 
            size="xl"
          />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="order-2 md:order-1 md:col-span-5">
            <Card 
              className={`p-0 relative overflow-hidden border-0 bg-transparent shadow-xl transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="relative bg-gradient-to-br from-[#081419]/80 to-[#0d2128]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                {/* Small decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f5a74d]/10 rounded-full blur-2xl"></div>
                
                <div className="mb-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#f5a74d]/20 p-2 rounded-full mr-3">
                        <MayanPalmIcon />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Un paraíso tropical</h3>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-[#f5a74d] fill-[#f5a74d]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    El Royalton Riviera Cancún es un lujoso complejo de 5 estrellas ubicado en la hermosa Riviera
                    Maya.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                 Con acceso directo a la playa y rodeado de exuberante vegetación tropical, ofrece una experiencia
                    única para los asistentes al evento Pal' Mar.
                  </p>
                </div>

                <h4 className="font-semibold text-[#f5a74d] text-lg mb-5 flex items-center text-mayan">
                  <span className="mr-2">Servicios destacados</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-[#f5a74d]/70 to-transparent ml-3"></div>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="bg-[#f5a74d]/20 p-2 rounded-full mr-3 group-hover:bg-[#f5a74d]/30 transition-colors duration-300">
                      <MayanBuildingIcon />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-mayan">Wellness</h4>
                      <p className="text-sm text-gray-400">Gimnasios, canchas y 20% de descuento en spa</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="bg-[#f5a74d]/20 p-2 rounded-full mr-3 group-hover:bg-[#f5a74d]/30 transition-colors duration-300">
                      <MayanDrinkIcon />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-mayan">Bares</h4>
                      <p className="text-sm text-gray-400">Bebidas internacionales en 13 bares</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="bg-[#f5a74d]/20 p-2 rounded-full mr-3 group-hover:bg-[#f5a74d]/30 transition-colors duration-300">
                      <MayanConnectivityIcon />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-mayan">All in Connectivity™</h4>
                      <p className="text-sm text-gray-400">Wi-Fi gratis y estaciones de carga USB</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="bg-[#f5a74d]/20 p-2 rounded-full mr-3 group-hover:bg-[#f5a74d]/30 transition-colors duration-300">
                      <MayanWavesIcon />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-mayan">Piscinas</h4>
                      <p className="text-sm text-gray-400">10 piscinas y parque acuático</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-xl bg-[#2acbab]/10 border border-[#2acbab]/20 border-mayan">
                  <div className="flex items-center mb-2">
                    <MayanLocationIcon className="h-5 w-5 text-[#2acbab] mr-2" />
                    <h4 className="font-medium text-white text-mayan">Cancún, México</h4>
                  </div>
                  <p className="text-sm text-gray-400 pl-7">A solo 15 minutos del Aeropuerto Internacional de Cancún (CUN)</p>
                </div>
              </div>
            </Card>
          </div>

          <div 
            className={`order-1 md:order-2 md:col-span-7 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Card-like container with gradient border */}
              <div className="p-1 bg-gradient-to-br from-[#f5a74d] via-[#ffffff20] to-[#2acbab] rounded-xl">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/h1.png"
                    alt="Royalton Riviera Cancun"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-5000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <MayanFoodIcon className="h-5 w-5 text-[#2acbab] mr-2" />
                      <span className="text-white text-sm text-mayan">9 restaurantes de especialidad</span>
                    </div>
                    <Badge className="bg-[#2acbab]/80 hover:bg-[#2acbab] text-white text-mayan">All-Inclusive</Badge>
                  </div>
                </div>
              </div>
              
              {/* Additional images gallery */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                {["/r1.png", "/s1.png", "/h4.png"].map((src, i) => (
                  <div 
                    key={i} 
                    className="relative rounded-lg overflow-hidden aspect-[4/3] group"
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <Image
                      src={src}
                      alt={`Royalton Riviera Cancun ${i+1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-2000"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 