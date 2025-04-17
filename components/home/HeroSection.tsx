"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, ChevronDown, Flame, Wind, Droplet, Mountain } from "lucide-react"
import PalmarLogo from "@/components/ui/palmar-logo"
import { useEffect, useState, useRef } from "react"

// Animated elemental particles
const ElementalParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
      {/* Fire particles (orange/red) */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`fire-${i}`}
          className="absolute rounded-full animate-float-slow"
          style={{
            top: `${60 + Math.random() * 40}%`,
            left: `${Math.random() * 30}%`,
            width: `${Math.max(2, Math.random() * 5)}px`,
            height: `${Math.max(2, Math.random() * 5)}px`,
            backgroundColor: Math.random() > 0.5 ? '#FF5733' : '#FFC300',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Water particles (blue) */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`water-${i}`}
          className="absolute rounded-full animate-float-slow"
          style={{
            top: `${60 + Math.random() * 40}%`,
            right: `${Math.random() * 30}%`,
            width: `${Math.max(2, Math.random() * 5)}px`,
            height: `${Math.max(2, Math.random() * 5)}px`,
            backgroundColor: Math.random() > 0.5 ? '#33C6FF' : '#337DFF',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Earth particles (green/brown) */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`earth-${i}`}
          className="absolute rounded-full animate-float-slow"
          style={{
            bottom: `${Math.random() * 30}%`,
            left: `${Math.random() * 30}%`,
            width: `${Math.max(2, Math.random() * 5)}px`,
            height: `${Math.max(2, Math.random() * 5)}px`,
            backgroundColor: Math.random() > 0.5 ? '#8D6E63' : '#7CB342',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Wind particles (white/light) */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`wind-${i}`}
          className="absolute rounded-full animate-float-fast"
          style={{
            bottom: `${Math.random() * 30}%`,
            right: `${Math.random() * 30}%`,
            width: `${Math.max(1, Math.random() * 3)}px`,
            height: `${Math.max(1, Math.random() * 3)}px`,
            backgroundColor: Math.random() > 0.5 ? '#FFFFFF' : '#E0E0E0',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Elemental glow effects
const ElementalGlows = () => {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {/* Fire glow (bottom left) */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-radial from-orange-500/30 via-red-600/5 to-transparent rounded-full"></div>
      
      {/* Water glow (bottom right) */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-radial from-cyan-500/30 via-blue-600/5 to-transparent rounded-full"></div>
      
      {/* Earth glow (top left) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-green-500/20 via-amber-800/5 to-transparent rounded-full"></div>
      
      {/* Wind glow (top right) */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-radial from-slate-200/30 via-teal-200/5 to-transparent rounded-full"></div>
    </div>
  );
};

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Stagger animations for a more dynamic entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Share hero section ref with navbar for transparency toggle
  useEffect(() => {
    if (sectionRef.current) {
      // Custom event to share hero section ref with navbar
      const event = new CustomEvent('heroSectionMounted', { 
        detail: { heroSection: sectionRef.current } 
      });
      window.dispatchEvent(event);
    }
    
    return () => {
      // Cleanup
      const event = new CustomEvent('heroSectionUnmounted');
      window.dispatchEvent(event);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/maya2.png"
          alt="Pal' Mar - Evento exclusivo"
          fill
          className={`object-cover brightness-[0.6] scale-110 transition-transform duration-10000 ${isLoaded ? 'scale-100' : 'scale-110'}`}
          priority
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Elemental effects */}
      <ElementalGlows />
      <ElementalParticles />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div 
          className={`flex flex-col items-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo with elemental icon row */}
          {/* <div className="relative mb-10">
            <div className="w-32 h-32 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6">
              <PalmarLogo variant="white" size="md" />
            </div>
          </div> */}
          
          <h1 className="mt-10 text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            PAL' MAR
          </h1>
          
          <div className="w-24 h-0.5 bg-white mx-auto mb-8 relative"></div>
          
          {/* Elemental icons in a row - moved below the heading */}
          <div className="flex justify-center items-center gap-10 mb-12">
            {/* Fire element - flame/candle animation */}
            <div className="relative element-container group">
              <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-md animate-pulse"></div>
              <div className="bg-orange-500/80 p-4 rounded-full shadow-lg shadow-orange-500/30 relative z-10 overflow-hidden hover:scale-110 transition-transform duration-300">
                <Flame className="h-8 w-8 text-white animate-flame" />
              </div>
              <div className="absolute -inset-2 bg-orange-500/10 rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100"></div>
            </div>
            
            {/* Wind element - blowing/swaying animation */}
            <div className="relative element-container group">
              <div className="absolute inset-0 bg-sky-300/30 rounded-full blur-md animate-pulse" style={{animationDelay: "0.3s"}}></div>
              <div className="bg-sky-300/80 p-4 rounded-full shadow-lg shadow-sky-300/30 relative z-10 overflow-hidden hover:scale-110 transition-transform duration-300">
                <Wind className="h-8 w-8 text-white animate-wind" />
              </div>
              <div className="absolute -inset-2 bg-sky-300/10 rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100"></div>
            </div>
            
            {/* Earth element - gentle rumble/shake animation */}
            <div className="relative element-container group">
              <div className="absolute inset-0 bg-green-700/30 rounded-full blur-md animate-pulse" style={{animationDelay: "0.6s"}}></div>
              <div className="bg-green-700/80 p-4 rounded-full shadow-lg shadow-green-700/30 relative z-10 overflow-hidden hover:scale-110 transition-transform duration-300">
                <Mountain className="h-8 w-8 text-white animate-earth" />
              </div>
              <div className="absolute -inset-2 bg-green-700/10 rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100"></div>
            </div>
            
            {/* Water element - flowing/ripple animation */}
            <div className="relative element-container group">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md animate-pulse" style={{animationDelay: "0.9s"}}></div>
              <div className="bg-blue-500/80 p-4 rounded-full shadow-lg shadow-blue-500/30 relative z-10 overflow-hidden hover:scale-110 transition-transform duration-300">
                <Droplet className="h-8 w-8 text-white animate-water" />
              </div>
              <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
           En la Cuspide de la Innovacion, con la Fuerza de Nuestro Legado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="palmarOrange" className="text-base backdrop-blur-sm bg-orange-500/90 border-orange-400/50 shadow-lg hover:shadow-orange-500/20 transition-all hover:-translate-y-1">
              <a href="#registro" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Quiero asistir</span>
              </a>
            </Button>
          </div>
          
          <div className="mt-16 md:mt-20 flex justify-center">
            <a 
              href="#acerca" 
              className="animate-bounce bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ChevronDown className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 