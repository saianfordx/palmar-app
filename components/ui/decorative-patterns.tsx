import React from "react";
import { cn } from "@/lib/utils";

type PatternProps = {
  className?: string;
  variant?: "zigzag" | "dots" | "mayan" | "tropical" | "palmar-gold" | "palmar-red";
  color?: string;
};

export function DecorativePattern({
  className,
  variant = "zigzag",
  color = "currentColor",
  ...props
}: PatternProps & React.HTMLAttributes<HTMLDivElement>) {
  // Select the appropriate pattern based on the variant
  const patternContent = {
    zigzag: (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="opacity-10"
      >
        <path
          fill="none"
          stroke={color}
          strokeWidth="2"
          d="M0,10 L10,0 L20,10 L30,0 L40,10 L50,0 L60,10 L70,0 L80,10 L90,0 L100,10"
        />
      </svg>
    ),
    dots: (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        <pattern
          id="dots"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="2" fill={color} />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    ),
    mayan: (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="opacity-10"
      >
        <pattern
          id="mayan"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="none"
            stroke={color}
            strokeWidth="1"
            d="M0,0 L20,0 L20,20 L0,20 Z M10,0 L10,20 M0,10 L20,10 M5,5 L15,15 M15,5 L5,15"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#mayan)" />
      </svg>
    ),
    tropical: (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="opacity-10"
      >
        <pattern
          id="tropical"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="none"
            stroke={color}
            strokeWidth="1"
            d="M20,0 Q30,10 40,0 M0,20 Q10,30 0,40 M40,20 Q30,30 40,40 M20,40 Q10,30 20,20 Q30,10 20,0"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#tropical)" />
      </svg>
    ),
    "palmar-gold": (
      <div className="w-full h-full bg-palmar-pattern-gold opacity-20"></div>
    ),
    "palmar-red": (
      <div className="w-full h-full bg-palmar-pattern-red opacity-20"></div>
    )
  };

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      {...props}
    >
      {patternContent[variant]}
    </div>
  );
}

export function MayanBorder({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative border-2 border-palmar-gold/50 p-4", className)}
      {...props}
    >
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-palmar-gold" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-palmar-gold" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-palmar-gold" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-palmar-gold" />
      {props.children}
    </div>
  );
} 