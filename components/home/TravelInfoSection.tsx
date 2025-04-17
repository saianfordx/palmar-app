"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

// Mayan-styled icons as SVG components
const MayanPlaneIcon = () => (
  <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan bird/sky deity glyph - for flights */}
    <g transform="translate(10, 10)">
      {/* Base glyph cartouche */}
      <rect x="10" y="10" width="80" height="80" rx="4" fill="#e05d4d" opacity="0.2"/>
      
      {/* Stylized bird body - Quetzal inspired */}
      <path d="M30 45C30 45 45 30 50 30C55 30 70 45 70 45L60 65L40 65L30 45Z" fill="#e05d4d"/>
      
      {/* Stylized angular wings */}
      <path d="M60 65L75 55L80 60L70 70L60 65Z" fill="#e05d4d"/>
      <path d="M40 65L25 55L20 60L30 70L40 65Z" fill="#e05d4d"/>
      
      {/* Face/head with typical Mayan profile */}
      <path d="M45 30C45 30 47 20 50 20C53 20 55 30 55 30L50 35L45 30Z" fill="#e05d4d"/>
      
      {/* Eye - characteristic circular Mayan eye */}
      <circle cx="50" cy="25" r="3" fill="#6b442d"/>
      
      {/* Characteristic Mayan decorative elements */}
      <path d="M50 60L55 70L45 70L50 60Z" fill="#6b442d"/>
      
      {/* Feather patterns - angular Mayan style */}
      <path d="M40 40L35 45L40 50L45 45L40 40Z" fill="#6b442d"/>
      <path d="M60 40L65 45L60 50L55 45L60 40Z" fill="#6b442d"/>
      
      {/* Mayan scroll patterns */}
      <path d="M20 75C20 75 25 80 30 75C35 70 30 65 25 70C20 75 20 75 20 75Z" fill="#e05d4d"/>
      <path d="M80 75C80 75 75 80 70 75C65 70 70 65 75 70C80 75 80 75 80 75Z" fill="#e05d4d"/>
      
      {/* Dot patterns typical of Mayan codices */}
      <circle cx="25" cy="30" r="2" fill="#6b442d"/>
      <circle cx="75" cy="30" r="2" fill="#6b442d"/>
      <circle cx="25" cy="80" r="2" fill="#6b442d"/>
      <circle cx="75" cy="80" r="2" fill="#6b442d"/>
    </g>
  </svg>
);

const MayanBusIcon = () => (
  <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan journey/road glyph - for transportation */}
    <g transform="translate(10, 10)">
      {/* Base glyph cartouche */}
      <rect x="10" y="10" width="80" height="80" rx="4" fill="#e05d4d" opacity="0.2"/>
      
      {/* Central road/path symbol - common in Mayan codices */}
      <path d="M20 50H80" stroke="#6b442d" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4"/>
      
      {/* Footprint symbols - indicating travel/journey */}
      <path d="M30 40C32 38 36 38 38 40C40 42 40 46 38 48C36 50 32 50 30 48C28 46 28 42 30 40Z" fill="#6b442d"/>
      <circle cx="31" cy="41" r="1.5" fill="#e05d4d"/>
      <circle cx="35" cy="43" r="1.5" fill="#e05d4d"/>
      
      <path d="M55 40C57 38 61 38 63 40C65 42 65 46 63 48C61 50 57 50 55 48C53 46 53 42 55 40Z" fill="#6b442d"/>
      <circle cx="56" cy="41" r="1.5" fill="#e05d4d"/>
      <circle cx="60" cy="43" r="1.5" fill="#e05d4d"/>
      
      {/* Pyramid symbol - representing cities/destinations */}
      <path d="M25 65H40V80H25V65Z" fill="#6b442d"/>
      <path d="M28 70H37V75H28V70Z" fill="#e05d4d"/>
      
      <path d="M60 65H75V80H60V65Z" fill="#6b442d"/>
      <path d="M63 70H72V75H63V70Z" fill="#e05d4d"/>
      
      {/* Sky band symbols - common in Mayan art */}
      <path d="M15 25H85" stroke="#6b442d" strokeWidth="3"/>
      <path d="M20 25L25 20L30 25L35 20L40 25L45 20L50 25L55 20L60 25L65 20L70 25L75 20L80 25" stroke="#e05d4d" strokeWidth="2"/>
      
      {/* Mayan cardinal direction markers */}
      <circle cx="20" cy="25" r="3" fill="#f5a74d"/>
      <circle cx="50" cy="25" r="3" fill="#f5a74d"/>
      <circle cx="80" cy="25" r="3" fill="#f5a74d"/>
    </g>
  </svg>
);

const MayanLuggageIcon = () => (
  <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mayan belongings/bundle glyph - for what to bring */}
    <g transform="translate(10, 10)">
      {/* Base glyph cartouche */}
      <rect x="10" y="10" width="80" height="80" rx="4" fill="#e05d4d" opacity="0.2"/>
      
      {/* Main bundle/sack symbol */}
      <path d="M30 35H70V75H30V35Z" fill="#f5a74d"/>
      
      {/* Typical Mayan textile pattern */}
      <path d="M35 40H65V70H35V40Z" fill="#6b442d"/>
      
      {/* Geometric patterns inside - authentic Mayan style */}
      <path d="M40 45L50 55L60 45" stroke="#e05d4d" strokeWidth="2"/>
      <path d="M40 55L50 65L60 55" stroke="#e05d4d" strokeWidth="2"/>
      <path d="M50 45V65" stroke="#e05d4d" strokeWidth="2"/>
      
      {/* Mayan knot symbols - for binding/carrying */}
      <path d="M45 35C45 35 45 30 50 30C55 30 55 35 55 35" stroke="#6b442d" strokeWidth="3"/>
      <circle cx="50" cy="30" r="3" fill="#e05d4d"/>
      
      {/* Characteristic dots and dashes */}
      <circle cx="40" cy="50" r="2" fill="#e05d4d"/>
      <circle cx="60" cy="50" r="2" fill="#e05d4d"/>
      <circle cx="40" cy="60" r="2" fill="#e05d4d"/>
      <circle cx="60" cy="60" r="2" fill="#e05d4d"/>
      
      {/* Shell/jade decorative elements - symbols of value */}
      <path d="M30 80C30 80 35 85 40 80C45 75 40 70 35 75C30 80 30 80 30 80Z" fill="#e05d4d"/>
      <path d="M70 80C70 80 65 85 60 80C55 75 60 70 65 75C70 80 70 80 70 80Z" fill="#e05d4d"/>
    </g>
  </svg>
);

export const TravelInfoSection = () => {
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
    
    const section = document.getElementById("viaje");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="viaje" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#f9f5eb] to-[#f5efe0]">
      {/* Mayan pattern background */}
      <div className="absolute inset-0 bg-[url('/textures/palmar-pattern-gold.svg')] opacity-10 bg-repeat"></div>
      
      {/* Decorative zigzag border - top */}
      <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
        <svg className="w-full h-4" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L5,8 L10,0 L15,8 L20,0 L25,8 L30,0 L35,8 L40,0 L45,8 L50,0 L55,8 L60,0 L65,8 L70,0 L75,8 L80,0 L85,8 L90,0 L95,8 L100,0 V10 H0 Z" className="fill-[#6b442d]/20" />
        </svg>
      </div>
      
      {/* Decorative zigzag border - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden transform rotate-180">
        <svg className="w-full h-4" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L5,8 L10,0 L15,8 L20,0 L25,8 L30,0 L35,8 L40,0 L45,8 L50,0 L55,8 L60,0 L65,8 L70,0 L75,8 L80,0 L85,8 L90,0 L95,8 L100,0 V10 H0 Z" className="fill-[#6b442d]/20" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="bg-[#6b442d] text-white mb-4 px-4 py-1.5 text-sm font-medium">
            Logística
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#6b442d] mb-4">Información de Viaje</h2>
          <div className="w-32 h-1 bg-[#f5a74d] mx-auto relative">
            <div className="absolute -inset-y-1 -inset-x-4 bg-[#f5a74d]/30 filter blur-sm"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card 
            className={`border-[#f5a74d]/30 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden backdrop-blur-sm bg-white/50 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-gradient-to-r from-[#f5a74d] via-[#e05d4d] to-[#f5a74d] h-2"></div>
            <CardContent className="pt-6 relative">
              {/* Decorative Mayan corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[url('/textures/palmar-pattern-gold.svg')] opacity-10 rounded-bl-full"></div>
              
              <div className="flex flex-col items-center mb-6">
                <div className="p-3 rounded-full mb-3 animate-pulse">
                  <MayanPlaneIcon />
                </div>
                <h3 className="text-2xl font-semibold text-[#6b442d] relative group-hover:text-[#e05d4d] transition-colors">
                  Vuelos
                </h3>
                <div className="w-16 h-1 bg-[#f5a74d] mt-2"></div>
              </div>
              
              <p className="text-[#6b442d] mb-4 leading-relaxed">
                El aeropuerto más cercano es el Aeropuerto Internacional de Cancún (CUN), ubicado a aproximadamente 15
                minutos del hotel.
              </p>
            </CardContent>
          </Card>

          <Card 
            className={`border-[#f5a74d]/30 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden backdrop-blur-sm bg-white/50 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gradient-to-r from-[#f5a74d] via-[#e05d4d] to-[#f5a74d] h-2"></div>
            <CardContent className="pt-6 relative">
              {/* Decorative Mayan corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[url('/textures/palmar-pattern-gold.svg')] opacity-10 rounded-bl-full"></div>
              
              <div className="flex flex-col items-center mb-6">
                <div className="p-3 rounded-full mb-3 animate-pulse">
                  <MayanBusIcon />
                </div>
                <h3 className="text-2xl font-semibold text-[#6b442d] relative group-hover:text-[#e05d4d] transition-colors">
                  Traslados
                </h3>
                <div className="w-16 h-1 bg-[#f5a74d] mt-2"></div>
              </div>
              
              <p className="text-[#6b442d] mb-4 leading-relaxed">
                Se proporcionará servicio de traslado desde el aeropuerto hasta el hotel para todos los asistentes.
              </p>
            </CardContent>
          </Card>

          <Card 
            className={`border-[#f5a74d]/30 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden backdrop-blur-sm bg-white/50 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-gradient-to-r from-[#f5a74d] via-[#e05d4d] to-[#f5a74d] h-2"></div>
            <CardContent className="pt-6 relative">
              {/* Decorative Mayan corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[url('/textures/palmar-pattern-gold.svg')] opacity-10 rounded-bl-full"></div>
              
              <div className="flex flex-col items-center mb-6">
                <div className="p-3 rounded-full mb-3 animate-pulse">
                  <MayanLuggageIcon />
                </div>
                <h3 className="text-2xl font-semibold text-[#6b442d] relative group-hover:text-[#e05d4d] transition-colors">
                  Qué Llevar
                </h3>
                <div className="w-16 h-1 bg-[#f5a74d] mt-2"></div>
              </div>
              
              <ul className="space-y-3 text-[#6b442d]">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-[#e05d4d] rounded-full bg-[#f5a74d]/10 mr-2 mt-0.5">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Ropa ligera y fresca para el día</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-[#e05d4d] rounded-full bg-[#f5a74d]/10 mr-2 mt-0.5">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Traje de baño y protector solar</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-[#e05d4d] rounded-full bg-[#f5a74d]/10 mr-2 mt-0.5">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Identificación oficial y documentos de viaje</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 