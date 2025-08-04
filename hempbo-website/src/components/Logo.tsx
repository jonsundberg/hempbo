import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className} ${sizeClasses[size]}`}>
      {/* Dark green circle with cannabis leaf */}
      <div className="relative">
        <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
          >
            {/* Cannabis leaf - simplified 5-pointed leaf */}
            <path 
              d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      
      {/* Hempbo text */}
      <span className="font-bold text-gray-900">Hempbo</span>
    </div>
  );
} 