import React from 'react';

interface GradientBackgroundProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  opacity?: number;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className = "",
  variant = 'primary',
  opacity = 0.5
}) => {
  const animationClass = variant === 'primary' ? 'animate-gradient-1' : 'animate-gradient-2';
  
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${animationClass} ${className}`}
      style={{ 
        opacity,
        backgroundSize: '400% 400%'
      }}
    />
  );
};

export default GradientBackground; 