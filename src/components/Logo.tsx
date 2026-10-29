import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'forest' | 'white' | 'neutral';
  showSubtitle?: boolean;
}

export const LOGO_IMAGE_PATH = '/assets/aistudio/logotipo-removebg-preview_1eba05d6.png';

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'forest',
}) => {
  // Dimensiones predefinidas: pequeña, mediana, grande y extra grande
  const sizeMap = {
    sm: 'h-8 sm:h-9 max-w-[150px]',
    md: 'h-11 sm:h-13 max-w-[190px]',
    lg: 'h-24 sm:h-32 max-w-[320px]',
    xl: 'h-48 sm:h-64 max-w-[500px]',
  };

  const isDarkBg = variant === 'white';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {isDarkBg ? (
        // Versión para fondo oscuro (ej. footer): Enmarcado en contenedor claro para preservar el fondo original del logo
        <div className="bg-white/95 p-2 rounded-2xl shadow-sm border border-white/20 transition-transform hover:scale-[1.02]">
          <img
            src={LOGO_IMAGE_PATH}
            alt="NATIVA - Productos Naturales y Bienestar"
            className={`${sizeMap[size]} w-auto object-contain`}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        // Versión estándar para fondos claros (Header, Hero, etc.)
        <img
          src={LOGO_IMAGE_PATH}
          alt="NATIVA - Productos Naturales y Bienestar"
          className={`${sizeMap[size]} w-auto object-contain transition-transform hover:scale-[1.02]`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

export const LargeBrandLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-white border border-[#285943]/15 p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center text-center ${className}`}>
      {/* Sutil halo botánico de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBF6EE]/70 via-white to-[#F3EBDD]/50 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#52B788]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Imagen del Logotipo en tamaño Grande */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <img
          src={LOGO_IMAGE_PATH}
          alt="Logotipo Oficial NATIVA - Productos Naturales y Bienestar"
          className="w-full max-h-64 sm:max-h-80 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        <div className="mt-6 pt-5 border-t border-[#285943]/10 w-full flex items-center justify-between text-xs text-[#285943]/70 font-sans">
          <span className="font-semibold text-[#1B4332] uppercase tracking-wider">Identidad Corporativa Oficial</span>
          <span className="text-[#40916C]">Isotipo & Tipografía Registrada</span>
        </div>
      </div>
    </div>
  );
};
