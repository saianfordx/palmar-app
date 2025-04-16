"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, Sunrise, Sun, Sunset, Moon, Coffee, Utensils, Music, Users, Presentation, Award } from "lucide-react";

// Animated stars/particles in background
const StarryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[1]">
      {Array.from({ length: 60 }).map((_, i) => (
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
    <div className="absolute inset-0 z-[2]">
      <div className="absolute inset-0 opacity-10 bg-blend-screen animate-gradient-1"></div>
      <div className="absolute inset-0 opacity-10 bg-blend-screen animate-gradient-2"></div>
    </div>
  );
};

// Data for each day's agenda
const day1Agenda = [
  {
    time: "08:00",
    title: "Registro y Desayuno",
    description: "Recepción y registro de asistentes. Desayuno continental.",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    time: "10:00",
    title: "Ceremonia de Apertura",
    description: "Bienvenida oficial y presentación del programa.",
    icon: <Presentation className="w-5 h-5" />,
  },
  {
    time: "12:00",
    title: "Almuerzo Networking",
    description: "Tiempo para conectar con otros asistentes mientras disfrutas de un delicioso almuerzo.",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    time: "15:00",
    title: "Sesiones Paralelas",
    description: "Diferentes sesiones temáticas para elegir según tus intereses.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    time: "19:00",
    title: "Cóctel de Bienvenida",
    description: "Cóctel con vistas al mar para dar la bienvenida a todos los asistentes.",
    icon: <Sunset className="w-5 h-5" />,
  },
];

const day2Agenda = [
  {
    time: "07:30",
    title: "Yoga al Amanecer",
    description: "Sesión opcional de yoga frente al mar.",
    icon: <Sunrise className="w-5 h-5" />,
  },
  {
    time: "09:00",
    title: "Desayuno & Networking",
    description: "Desayuno buffet y tiempo para hacer conexiones.",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    time: "11:00",
    title: "Sesión Principal",
    description: "Ponencia magistral con invitado especial.",
    icon: <Presentation className="w-5 h-5" />,
  },
  {
    time: "14:00",
    title: "Actividades de Playa",
    description: "Tiempo libre para disfrutar de actividades acuáticas y la playa.",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    time: "20:00",
    title: "Cena de Gala",
    description: "Cena formal con espectáculo y premios especiales.",
    icon: <Award className="w-5 h-5" />,
  },
];

const day3Agenda = [
  {
    time: "08:30",
    title: "Desayuno de Despedida",
    description: "Último desayuno del evento para despedirse de los asistentes.",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    time: "10:00",
    title: "Sesión de Clausura",
    description: "Resumen del evento y próximos pasos.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    time: "12:00",
    title: "Almuerzo de Networking",
    description: "Último almuerzo para intercambiar contactos.",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    time: "14:00",
    title: "Check-out y Despedida",
    description: "Fin del evento. Traslados al aeropuerto disponibles.",
    icon: <Sunset className="w-5 h-5" />,
  },
];

export const AgendaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="agenda" className="py-20 bg-black relative overflow-hidden">
      {/* Starry background */}
      <StarryBackground />
      
      {/* Animated gradient background */}
      <AnimatedGradients />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Badge className="bg-palmar-teal text-palmar-white mb-4 px-4 py-1 text-sm font-medium">
            Agenda Completa
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Programa del Evento
          </h2>
          <div className="w-20 h-1 bg-palmar-gold mx-auto"></div>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto bg-black/20 border border-palmar-gold/30 mb-8">
            <TabsTrigger 
              value="day1" 
              className="data-[state=active]:bg-palmar-red data-[state=active]:text-white"
            >
              Día 1
            </TabsTrigger>
            <TabsTrigger 
              value="day2" 
              className="data-[state=active]:bg-palmar-orange data-[state=active]:text-white"
            >
              Día 2
            </TabsTrigger>
            <TabsTrigger 
              value="day3" 
              className="data-[state=active]:bg-palmar-teal data-[state=active]:text-white"
            >
              Día 3
            </TabsTrigger>
          </TabsList>
          
          <div className="border border-palmar-gold/30 rounded-lg p-1 backdrop-blur-sm bg-black/30">
            <TabsContent 
              value="day1" 
              className={`bg-black/10 rounded-md p-6 space-y-6 border-l-4 border-palmar-red mt-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              {day1Agenda.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start transition-all duration-500"
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <div className="shrink-0 w-16 text-center">
                    <div className="text-palmar-gold font-semibold">{item.time}</div>
                    <Clock className="w-4 h-4 mx-auto mt-1 text-palmar-red" />
                  </div>
                  <div className="bg-palmar-red/10 rounded-md p-4 flex-grow border-l-2 border-palmar-red">
                    <div className="flex items-center mb-2">
                      <span className="bg-palmar-red/20 rounded-full p-2 mr-3">
                        {item.icon}
                      </span>
                      <h3 className="font-semibold text-palmar-gold">{item.title}</h3>
                    </div>
                    <p className="text-palmar-cream/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent 
              value="day2" 
              className={`bg-black/10 rounded-md p-6 space-y-6 border-l-4 border-palmar-orange mt-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              {day2Agenda.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start transition-all duration-500"
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <div className="shrink-0 w-16 text-center">
                    <div className="text-palmar-gold font-semibold">{item.time}</div>
                    <Clock className="w-4 h-4 mx-auto mt-1 text-palmar-orange" />
                  </div>
                  <div className="bg-palmar-orange/10 rounded-md p-4 flex-grow border-l-2 border-palmar-orange">
                    <div className="flex items-center mb-2">
                      <span className="bg-palmar-orange/20 rounded-full p-2 mr-3">
                        {item.icon}
                      </span>
                      <h3 className="font-semibold text-palmar-gold">{item.title}</h3>
                    </div>
                    <p className="text-palmar-cream/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent 
              value="day3" 
              className={`bg-black/10 rounded-md p-6 space-y-6 border-l-4 border-palmar-teal mt-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              {day3Agenda.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start transition-all duration-500"
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <div className="shrink-0 w-16 text-center">
                    <div className="text-palmar-gold font-semibold">{item.time}</div>
                    <Clock className="w-4 h-4 mx-auto mt-1 text-palmar-teal" />
                  </div>
                  <div className="bg-palmar-teal/10 rounded-md p-4 flex-grow border-l-2 border-palmar-teal">
                    <div className="flex items-center mb-2">
                      <span className="bg-palmar-teal/20 rounded-full p-2 mr-3">
                        {item.icon}
                      </span>
                      <h3 className="font-semibold text-palmar-gold">{item.title}</h3>
                    </div>
                    <p className="text-palmar-cream/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}; 