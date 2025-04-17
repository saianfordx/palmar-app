"use client";

import { DecorativePattern } from "@/components/ui/decorative-patterns"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import PalmarLogo from "@/components/ui/palmar-logo"
import { useEffect, useState } from "react"

// Animated stars/particles in background
const StarryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[1]">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.max(1, Math.random() * 3)}px`,
            height: `${Math.max(1, Math.random() * 3)}px`,
            backgroundColor: i % 5 === 0 ? '#F29D2A' : i % 7 === 0 ? '#C13E38' : i % 3 === 0 ? '#D6B355' : '#FFFFFF',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 3}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <footer className="bg-black text-palmar-cream py-12 relative overflow-hidden">
      {/* Starry background */}
      <StarryBackground />
      
      {/* Animated pattern background */}
      <div className="absolute inset-0 bg-palmar-pattern-gold opacity-5 z-[0]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PalmarLogo variant="cream" size="sm" />
            </div>
            <p className="text-palmar-gold mb-4">
              Una experiencia exclusiva Pal'Mar 2025.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-palmar-orange">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#acerca" className="text-palmar-gold hover:text-palmar-cream transition-colors relative group">
                  <span className="relative z-10">Acerca del evento</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-palmar-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#agenda" className="text-palmar-gold hover:text-palmar-cream transition-colors relative group">
                  <span className="relative z-10">Agenda</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-palmar-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#hotel" className="text-palmar-gold hover:text-palmar-cream transition-colors relative group">
                  <span className="relative z-10">Hotel</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-palmar-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-palmar-gold hover:text-palmar-cream transition-colors relative group">
                  <span className="relative z-10">Galería</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-palmar-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#registro" className="text-palmar-gold hover:text-palmar-cream transition-colors relative group">
                  <span className="relative z-10">Registro</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-palmar-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-palmar-orange">Contacto</h3>
            <ul className="space-y-3 text-palmar-gold">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-palmar-teal" />
                <span>Cancún, México</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-palmar-teal" />
                <span>tsanchez@arkusnexus.com</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-palmar-teal" />
                <span>ghernandez@arkusnexus.com</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-palmar-teal" />
                <span>amado@arkusnexus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-palmar-gold/30 mt-8 pt-8 text-center text-palmar-gold">
          <p className="transition-all duration-1000 ease-out" style={{ transitionDelay: '500ms' }}>
            © 2025 Pal&apos; Mar.
          </p>
        </div>
      </div>
    </footer>
  )
} 