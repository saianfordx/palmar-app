"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from '@/lib/i18n';

export const Air: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslations('air');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('air-section')?.offsetTop || 0;
      
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="air-section" className="relative py-24 bg-black min-h-screen flex items-center">
      {/* Background with stars effect */}
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              {t('title')}
            </h2>
            <h3 className="text-3xl font-medium text-white mb-12">
              {t('subtitle')}
            </h3>
            <div className="space-y-6 text-lg text-gray-200">
              <p>
                {t('description1')}
              </p>
              <p>
                {t('description2')}
              </p>
            </div>
            <div className="mt-12">
              <p className="text-xl text-gray-300">{t('author')}</p>
            </div>
          </div>
          
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              {/* Placeholder for image - replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/ritual-aire.jpg"
                  alt={t('subtitle')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 