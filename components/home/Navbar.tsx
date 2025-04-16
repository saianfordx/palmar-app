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
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PalmarLogo variant="white" size="sm" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#acerca" className="hover:text-[#ffd863] transition-colors text-white font-medium">
            Acerca
          </Link>
          <Link href="#agenda" className="hover:text-[#ffd863] transition-colors text-white font-medium">
            Agenda
          </Link>
          <Link href="#hotel" className="hover:text-[#ffd863] transition-colors text-white font-medium">
            Hotel
          </Link>
          <Link href="#galeria" className="hover:text-[#ffd863] transition-colors text-white font-medium">
            Galería
          </Link>
          <Link href="#registro" className="hover:text-[#ffd863] transition-colors text-white font-medium">
            Registro
          </Link>
        </nav>
        <Button className={`${
          isTransparent 
            ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30' 
            : 'bg-[#ffd863] hover:bg-[#ffce3a] text-black'
          } font-medium transition-all`}
        >
          <Link href="#registro">Registrarme</Link>
        </Button>
      </div>
    </header>
  )
} 