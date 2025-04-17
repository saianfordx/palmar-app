'use client';

import React, { useEffect, useState } from 'react';

// Seeded random number generator for consistent rendering
function seededRandom(seed: number) {
  let value = seed;
  return function() {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

interface Star {
  id: number;
  x: string;
  y: string;
  size: string;
  width: string;
  height: string;
  color: string;
  opacity: number;
  animationDuration: string;
  animationDelay: string;
}

interface StarryBackgroundProps {
  starCount?: number;
  className?: string;
}

export const StarryBackground: React.FC<StarryBackgroundProps> = ({ 
  starCount = 100,
  className = ""
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Use a fixed seed for random generation to ensure consistent client/server rendering
    const random = seededRandom(123);
    
    const colors = [
      '#FFFFFF', // White
      '#F29D2A',  // Palmar Orange
      '#D6B355',  // Palmar Gold
      '#C13E38',   // Palmar Red
      '#259696',  // Palmar Teal
    ];

    const generatedStars = Array.from({ length: starCount }, (_, i) => {
      // Generate all random values at once to ensure consistency
      const xRand = random();
      const yRand = random();
      const sizeRand = random();
      const opacityRand = random();
      const durationRand = random();
      const colorRand = random();
      const delayRand = random();
      
      const size = Math.max(1, sizeRand * 2 + 1);
      
      return {
        id: i,
        x: `${xRand * 100}%`,
        y: `${yRand * 100}%`,
        size: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        color: colors[Math.floor(colorRand * colors.length)],
        opacity: opacityRand * 0.7 + 0.3,
        animationDuration: `${durationRand * 5 + 2}s`,
        animationDelay: `${delayRand * 5}s`,
      };
    });

    setStars(generatedStars);
  }, [starCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: star.width,
            height: star.height,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground; 