import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  color: string;
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
    const colors = [
      'rgb(255, 255, 255)', // White
      'rgb(242, 157, 42)',  // Palmar Orange
      'rgb(214, 179, 85)',  // Palmar Gold
      'rgb(193, 62, 56)',   // Palmar Red
      'rgb(37, 150, 150)',  // Palmar Teal
    ];

    const generatedStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      animationDuration: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setStars(generatedStars);
  }, [starCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground; 