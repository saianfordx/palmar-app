"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, ArrowLeft, ArrowRight, X } from "lucide-react";

// Animated stars/particles in background - same as ElementsSection
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

// Gradient backgrounds with CSS animations - same as ElementsSection
const AnimatedGradients = () => {
  return (
    <div className="absolute inset-0 z-[2]">
      <div className="absolute inset-0 opacity-10 bg-blend-screen animate-gradient-1"></div>
      <div className="absolute inset-0 opacity-10 bg-blend-screen animate-gradient-2"></div>
    </div>
  );
};

// Image gallery data
const galleryImages = [
  {
    src: "/talsk.png",
    alt: "The Sandbox",
    caption: "The Sandbox",
  },
  {
    src: "/pm3.jpg",
    alt: "Team Building",
    caption: "Team Building",
  },
  {
    src: "/actividad.png",
    alt: "Actividades",
    caption: "Actividades",
  },
  {
    src: "/tb1.png",
    alt: "Team Building",
    caption: "Team Building",
  },
  {
    src: "/pm5.jpg",
    alt: "Hospedaje",
    caption: "Hospedaje",
  },
  {
    src: "/pm6.jpg",
    alt: "Good Vibes",
    caption: "Good Vibes",
  },
];

export const GallerySection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          goToPrevImage();
          break;
        case "ArrowRight":
          goToNextImage();
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section id="galeria" className="py-20 bg-black relative overflow-hidden">
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
          <Badge className="bg-palmar-red text-palmar-white mb-4 px-4 py-1 text-sm font-medium">
            Galería
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Momentos para recordar
          </h2>
          <div className="w-20 h-1 bg-palmar-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group transform transition duration-500 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: `${150 + index * 100}ms`,
                border: '2px solid rgba(242, 157, 42, 0.3)'
              }}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end">
                <p className="text-white text-sm md:text-base">{image.caption}</p>
                <span className="bg-palmar-gold/80 backdrop-blur-sm text-white p-2 rounded-full">
                  <Camera size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white z-50 p-2 bg-palmar-red/80 rounded-full hover:bg-palmar-red transition-colors"
          >
            <X size={24} />
          </button>
          
          {/* Navigation buttons */}
          <button
            onClick={goToPrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-50 p-2 bg-palmar-teal/80 rounded-full hover:bg-palmar-teal transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={goToNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-50 p-2 bg-palmar-teal/80 rounded-full hover:bg-palmar-teal transition-colors"
          >
            <ArrowRight size={24} />
          </button>
          
          {/* Image container */}
          <div className="relative w-full max-w-4xl h-screen max-h-[80vh] z-50">
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-palmar-orange/60 backdrop-blur-md text-white p-4 text-center">
              {galleryImages[currentImageIndex].caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 