import React from 'react'
import { Badge } from './badge'

interface MayanHeadingProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  decorated?: boolean;
  center?: boolean;
}

const sizeMappings = {
  sm: 'text-xl md:text-2xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
  xl: 'text-3xl md:text-5xl',
}

export function MayanHeading({
  badge,
  badgeColor = 'bg-[#e05d4d]',
  title,
  as: HeadingTag = 'h2', 
  size = 'lg',
  className = '',
  decorated = true,
  center = true
}: MayanHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-8 ${className}`}>
      {badge && (
        <Badge className={`${badgeColor} text-white mb-4 px-4 py-1.5 text-sm font-medium text-mayan`}>
          {badge}
        </Badge>
      )}
      <HeadingTag className={`${sizeMappings[size]} font-bold text-white mb-3 text-mayan-heading`}>
        {decorated ? (
          <span className="text-mayan-decorated">{title}</span>
        ) : (
          title
        )}
      </HeadingTag>
      <div className={`w-32 ${center ? 'mx-auto' : 'ml-0'} h-1 bg-[#f5a74d] relative border-mayan-pattern`}>
        <div className="absolute -inset-y-1 -inset-x-4 bg-[#f5a74d]/30 filter blur-sm"></div>
      </div>
    </div>
  )
} 