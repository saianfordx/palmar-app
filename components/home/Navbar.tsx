"use client";

import { Button } from "@/components/ui/button"
import PalmarLogo from "@/components/ui/palmar-logo"
import Link from "next/link"
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [heroSection, setHeroSection] = useState<HTMLElement | null>(null);

  // Listen for hero section mounted event
  useEffect(() => {
    const handleHeroMounted = (e: CustomEvent) => {
      setHeroSection(e.detail.heroSection);
    };

    const handleHeroUnmounted = () => {
      setHeroSection(null);
    };

    window.addEventListener('heroSectionMounted', handleHeroMounted as EventListener);
    window.addEventListener('heroSectionUnmounted', handleHeroUnmounted);

    return () => {
      window.removeEventListener('heroSectionMounted', handleHeroMounted as EventListener);
      window.removeEventListener('heroSectionUnmounted', handleHeroUnmounted);
    };
  }, []);

  // Handle scroll events to determine if navbar should be transparent
  useEffect(() => {
    const checkScroll = () => {
      if (!heroSection) {
        setIsTransparent(false);
        return;
      }

      const heroRect = heroSection.getBoundingClientRect();
      const isAtHero = heroRect.top <= 0 && heroRect.bottom >= 50;
      setIsTransparent(isAtHero);
    };

    // Initial check
    checkScroll();

    // Set up scroll listener
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [heroSection]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent text-white' 
          : 'bg-black text-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          {/* Left section - empty or logo */}
          <div className="col-span-1"></div>
          
          {/* Center section - Navigation */}
          <nav className="col-span-1 flex justify-center space-x-8">
            <Link href="#acerca" className="hover:text-[#ffd863] transition-colors text-white font-medium">
              Acerca
            </Link>
            <Link href="#hotel" className="hover:text-[#ffd863] transition-colors text-white font-medium">
              Hotel
            </Link>
            <Link href="#galeria" className="hover:text-[#ffd863] transition-colors text-white font-medium">
              Galería
            </Link>
          </nav>
          
          {/* Right section - Button */}
          <div className="col-span-1 flex justify-end">
            <Button className={`${
              isTransparent 
                ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30' 
                : 'bg-[#ffd863] hover:bg-[#ffce3a] text-black'
              } font-medium transition-all relative`}
            >
              <Link href="#room-registration">
                Registrar habitación
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">nuevo</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          {/* Navigation */}
          <nav className="flex justify-center space-x-8 mb-2">
            <Link href="#acerca" className="hover:text-[#ffd863] transition-colors text-white font-medium">
              Acerca
            </Link>
            <Link href="#hotel" className="hover:text-[#ffd863] transition-colors text-white font-medium">
              Hotel
            </Link>
            <Link href="#galeria" className="hover:text-[#ffd863] transition-colors text-white font-medium">
              Galería
            </Link>
          </nav>
          
          {/* Button */}
          <Button className={`${
            isTransparent 
              ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30' 
              : 'bg-[#ffd863] hover:bg-[#ffce3a] text-black'
            } font-medium transition-all relative`}
          >
            <Link href="#room-registration">
              Registrar habitación
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">nuevo</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 