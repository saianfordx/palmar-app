import React from 'react';
import { cn } from '@/lib/utils';

interface PalmarLogoProps {
  variant?: 'orange' | 'red' | 'white' | 'cream';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PalmarLogo: React.FC<PalmarLogoProps> = ({
  variant = 'orange',
  className,
  size = 'md',
}) => {
  const variantStyles = {
    orange: 'text-palmar-orange',
    red: 'text-palmar-red',
    cream: 'text-palmar-cream',
    white: 'text-palmar-white',
  };

  const sizeStyles = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <div className={cn(variantStyles[variant], sizeStyles[size], className)}>
      <svg
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Stylized PALMAR text based on the logo design */}
        <path
          d="M20 20 L20 80 L40 80 L40 60 L60 60 L50 80 L70 80 L80 60 L80 20 L60 20 L60 40 L40 40 L40 20 Z"
          fill="currentColor"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path
          d="M90 20 L90 80 L110 80 L130 50 L130 80 L150 80 L150 20 L130 20 L110 50 L110 20 Z"
          fill="currentColor"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path
          d="M160 20 L160 80 L180 80 L180 20 Z"
          fill="currentColor"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path
          d="M170 15 L175 10 L180 15"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};

export default PalmarLogo; 