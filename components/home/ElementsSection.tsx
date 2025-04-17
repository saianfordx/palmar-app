"use client";

import React, { useEffect, useState } from 'react';

interface ElementCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  delay: number;
  color: string;
}

const ElementCard: React.FC<ElementCardProps> = ({ title, subtitle, icon, delay, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 200);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`flex flex-col items-center text-center gap-6 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div 
        className="rounded-xl border-2 p-6 bg-black backdrop-blur-sm w-28 h-28 flex items-center justify-center"
        style={{ borderColor: color }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-4xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-lg max-w-xs mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

// Animated stars/particles in background
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

// Gradient backgrounds with CSS animations
const AnimatedGradients = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-30 bg-blend-screen animate-gradient-1"></div>
      <div className="absolute inset-0 opacity-30 bg-blend-screen animate-gradient-2"></div>
    </>
  );
};

export const ElementsSection = () => {
  return (
    <section className="relative py-28 min-h-screen bg-black flex items-center overflow-hidden">
      {/* Animated background with stars/particles */}
      <StarryBackground />
      
      {/* Color pulsing radial gradients */}
      <AnimatedGradients />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16 max-w-5xl mx-auto leading-tight">
          Una experiencia transformadora que te invita a re-conectar con tus raíces, a explorar tu potencial y a construir un futuro lleno de sabiduría y prosperidad.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-24 max-w-4xl mx-auto">
          <ElementCard 
            title="Transformar" 
            subtitle="Ritual de iniciación"
            delay={0}
            color="#F29D2A"
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30C15 25 20 20 30 20C40 20 40 25 40 30C40 35 35 40 25 40C15 40 15 35 15 30Z" stroke="#F29D2A" strokeWidth="3" strokeLinecap="round"/>
                <path d="M10 20C10 15 15 15 20 15" stroke="#F29D2A" strokeWidth="3" strokeLinecap="round"/>
                <path d="M40 15C45 15 50 15 50 20" stroke="#F29D2A" strokeWidth="3" strokeLinecap="round"/>
                <path d="M50 40C50 45 45 45 40 45" stroke="#F29D2A" strokeWidth="3" strokeLinecap="round"/>
                <path d="M20 45C15 45 10 45 10 40" stroke="#F29D2A" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />
          
          <ElementCard 
            title="Desarrollar" 
            subtitle="Habilidades y crecimiento"
            delay={1}
            color="#30B5AE"
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25C20 20 40 30 50 25" stroke="#30B5AE" strokeWidth="3" strokeLinecap="round"/>
                <path d="M10 35C20 30 40 40 50 35" stroke="#30B5AE" strokeWidth="3" strokeLinecap="round"/>
                <path d="M10 45C20 40 40 50 50 45" stroke="#30B5AE" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />
          
          <ElementCard 
            title="Conocimiento" 
            subtitle="Sumérgete en el aprendizaje y la innovación"
            delay={2}
            color="#D6B355"
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10L50 45H10L30 10Z" stroke="#D6B355" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 25L40 45H20L30 25Z" stroke="#D6B355" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <ElementCard 
            title="Celebración" 
            subtitle="Reconocimiento y gratitud"
            delay={3}
            color="#C13E38"
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 50C40 50 45 40 45 30C45 25 42 15 30 10C18 15 15 25 15 30C15 40 20 50 30 50Z" stroke="#C13E38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 40C35 40 37.5 35 37.5 30C37.5 27.5 36 22.5 30 20C24 22.5 22.5 27.5 22.5 30C22.5 35 25 40 30 40Z" stroke="#C13E38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}; 