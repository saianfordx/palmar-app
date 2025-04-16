import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';

const cardVariants = cva(
  "relative rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "glowing-border",
        orange: "glowing-border",
        red: "glowing-border-red",
        teal: "glowing-border-teal",
        gold: "glowing-border-gold",
      },
      size: {
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
      animation: {
        none: "",
        float: "floating",
        pulse: "animate-pulse",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      animation: "none",
    },
  }
);

export interface PalmarCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
  withStars?: boolean;
  withGradient?: boolean;
  gradientVariant?: 'default' | 'subtle' | 'dark';
}

const PalmarCard = ({
  className,
  children,
  variant,
  size,
  animation,
  withStars = false,
  withGradient = false,
  gradientVariant = 'default',
  ...props
}: PalmarCardProps) => {
  const gradientClass = withGradient 
    ? gradientVariant === 'subtle' 
      ? 'bg-gradient-palmar-subtle'
      : gradientVariant === 'dark'
        ? 'bg-gradient-dark'
        : 'bg-gradient-palmar'
    : '';
  
  const starryClass = withStars ? 'starry-bg' : '';
  
  return (
    <div
      className={cn(
        cardVariants({ variant, size, animation }),
        gradientClass,
        starryClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default PalmarCard; 