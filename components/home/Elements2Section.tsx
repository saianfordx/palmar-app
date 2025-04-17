"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from '@/lib/i18n';

export const Elements2Section: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslations('elements2');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('elements2-section')?.offsetTop || 0;
      
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Display stars in the background
  const StarryBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
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
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="elements2-section" className="relative py-24 bg-black min-h-screen flex items-center">
      <StarryBackground />
      
      <div className="container mx-auto px-4">
        <div 
          className={`w-full transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
         
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Image on the left */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[800px] w-full">
                <Image
                  src="/arbol.png"
                  alt={t('title')}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Elements on the right */}
            <div className="w-full md:w-1/2 space-y-8">
             {/* Title and Description at the top */}
          <div className="mb-16 text-center md:text-left">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h2> */}
            <p className="text-lg text-gray-300 max-w-3xl">
            Una experiencia transformadora que te invita a re-conectar con tus raíces, a explorar tu potencial y a construir un futuro lleno de sabiduría y prosperidad.
            </p>
          </div>
              {/* Transform */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full border-2 border-orange-500 bg-black w-16 h-16 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 30C15 25 20 20 30 20C40 20 40 25 40 30C40 35 35 40 25 40C15 40 15 35 15 30Z" stroke="#F29D2A" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M10 20C10 15 15 15 20 15" stroke="#F29D2A" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M40 15C45 15 50 15 50 20" stroke="#F29D2A" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M50 40C50 45 45 45 40 45" stroke="#F29D2A" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M20 45C15 45 10 45 10 40" stroke="#F29D2A" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Transformar
                  </h3>
                  <p className="text-lg text-gray-300">
                   Ritual de iniciación
                  </p>
                </div>
              </div>
              
              {/* Develop */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full border-2 border-teal-500 bg-black w-16 h-16 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 25C20 20 40 30 50 25" stroke="#30B5AE" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M10 35C20 30 40 40 50 35" stroke="#30B5AE" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M10 45C20 40 40 50 50 45" stroke="#30B5AE" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                  Desarrollar
                  </h3>
                  <p className="text-lg text-gray-300">
                  Habilidades y crecimiento.
                  </p>
                </div>
              </div>
              
              {/* Knowledge */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full border-2 border-yellow-500 bg-black w-16 h-16 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 10L50 45H10L30 10Z" stroke="#D6B355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M30 25L40 45H20L30 25Z" stroke="#D6B355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                  Conocimiento
                  </h3>
                  <p className="text-lg text-gray-300">
                  Sumérgete en el aprendizaje y la innovación.
                  </p>
                </div>
              </div>
              
              {/* Celebration */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full border-2 border-red-500 bg-black w-16 h-16 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 50C40 50 45 40 45 30C45 25 42 15 30 10C18 15 15 25 15 30C15 40 20 50 30 50Z" stroke="#C13E38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M30 40C35 40 37.5 35 37.5 30C37.5 27.5 36 22.5 30 20C24 22.5 22.5 27.5 22.5 30C22.5 35 25 40 30 40Z" stroke="#C13E38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                  Celebración
                  </h3>
                  <p className="text-lg text-gray-300">
                  Reconocimiento y gratitud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 