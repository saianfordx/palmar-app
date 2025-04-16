"use client";

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export const AboutSection = () => {
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
    
    const section = document.getElementById("acerca");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="acerca" className="py-20 bg-[#212121] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/textures/palmar-pattern-gold.svg')] opacity-5 bg-repeat"></div>
      
      {/* Mayan-inspired decorative border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5a74d] to-transparent opacity-50"></div>
        <div className="w-full flex justify-center">
          <div className="relative">
            {/* Central Mayan symbol */}
            <div className="absolute left-1/2 top-0 w-16 h-16 -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="w-full h-full bg-[#212121] border-[3px] border-[#f5a74d] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#e05d4d] rotate-45"></div>
              </div>
            </div>
            
            {/* Mayan pattern strip */}
            <div className="w-[800px] h-8 bg-[url('/textures/mayan-pattern.svg')] bg-repeat-x relative">
              {/* End decorations */}
              <div className="absolute left-0 top-0 w-8 h-16 -translate-y-1/4 bg-[#212121] border-r-[3px] border-t-[3px] border-b-[3px] border-[#f5a74d] rounded-tr-full rounded-br-full"></div>
              <div className="absolute right-0 top-0 w-8 h-16 -translate-y-1/4 bg-[#212121] border-l-[3px] border-t-[3px] border-b-[3px] border-[#f5a74d] rounded-tl-full rounded-bl-full"></div>
              
              {/* Step pattern accents */}
              <div className="absolute left-1/4 top-full w-4 h-4 -translate-y-1/2 bg-[#2acbab] rotate-45"></div>
              <div className="absolute right-1/4 top-full w-4 h-4 -translate-y-1/2 bg-[#2acbab] rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="bg-[#e05d4d] text-white mb-4 px-4 py-1.5 text-sm font-medium">
            15-17 Julio 2025
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f5a74d] mb-4">
            Acerca del Evento
          </h2>
          <div className="w-32 h-1 bg-[#2acbab] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left content panel */}
          <div className="md:col-span-6 lg:col-span-5">
            <Card 
              className={`bg-[#333333]/70 backdrop-blur-sm border-[#f5a74d]/30 rounded-xl shadow-xl p-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#f5a74d]/20 p-2 rounded-full mr-3">
                  <Sparkles className="h-6 w-6 text-[#f5a74d]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#f5a74d]">
                  Una experiencia inolvidable
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pal' Mar es un evento exclusivo que reúne a profesionales y entusiastas en un entorno paradisíaco
                para compartir experiencias, establecer conexiones y disfrutar de momentos únicos.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Durante tres días, los asistentes podrán disfrutar de actividades especialmente diseñadas, gastronomía
                de primer nivel, y un ambiente de lujo en uno de los destinos más hermosos de México.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2b2b2b] rounded-lg p-4 border border-[#f5a74d]/20 hover:border-[#f5a74d]/40 transition-colors">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-[#2acbab] mr-2" />
                    <h4 className="font-medium text-white">Networking</h4>
                  </div>
                  <p className="text-sm text-gray-400">Conecta con profesionales</p>
                </div>
                
                <div className="bg-[#2b2b2b] rounded-lg p-4 border border-[#f5a74d]/20 hover:border-[#f5a74d]/40 transition-colors">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-[#2acbab] mr-2" />
                    <h4 className="font-medium text-white">Experiencias</h4>
                  </div>
                  <p className="text-sm text-gray-400">Actividades exclusivas</p>
                </div>
                
                <div className="bg-[#2b2b2b] rounded-lg p-4 border border-[#f5a74d]/20 hover:border-[#f5a74d]/40 transition-colors">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-[#2acbab] mr-2" />
                    <h4 className="font-medium text-white">Gastronomía</h4>
                  </div>
                  <p className="text-sm text-gray-400">Cocina de autor</p>
                </div>
                
                <div className="bg-[#2b2b2b] rounded-lg p-4 border border-[#f5a74d]/20 hover:border-[#f5a74d]/40 transition-colors">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-[#2acbab] mr-2" />
                    <h4 className="font-medium text-white">Bienestar</h4>
                  </div>
                  <p className="text-sm text-gray-400">Spa y actividades</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right image grid */}
          <div className="md:col-span-6 lg:col-span-7">
            <div 
              className={`grid grid-cols-2 gap-4 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Main featured image */}
              <div className="col-span-2 lg:col-span-1 row-span-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/beach1.jpg"
                  alt="Experiencias en la playa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Experiencias</h4>
                  <p className="text-sm opacity-80">Momentos que perduran</p>
                </div>
              </div>
              
              {/* Secondary images */}
              <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
                <Image
                  src="/beach2.jpg"
                  alt="Networking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Networking</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
                <Image
                  src="/beach3.jpg"
                  alt="Gastronomía"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Gastronomía</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden h-48 shadow-lg lg:h-auto lg:col-span-2 lg:row-span-1">
                <Image
                  src="/beach4.jpg"
                  alt="Bienestar y relax"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100%"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Bienestar y relax</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 