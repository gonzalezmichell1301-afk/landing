import React from 'react';

export const TeVitalIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#285943]/10 via-[#FAF6EE] to-[#6F9E73]/20 ${className}`}>
    <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="steamGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="100%" stopColor="#E2D7C5" />
        </linearGradient>
        <linearGradient id="teaLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8DA362" />
          <stop offset="50%" stopColor="#ADC47E" />
          <stop offset="100%" stopColor="#6E8546" />
        </linearGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6F9E73" />
          <stop offset="100%" stopColor="#285943" />
        </linearGradient>
      </defs>

      {/* Wooden coaster / tray */}
      <ellipse cx="200" cy="245" rx="140" ry="35" fill="#D7C4A5" />
      <ellipse cx="200" cy="240" rx="135" ry="30" fill="#E8DBC6" />
      <ellipse cx="200" cy="240" rx="125" ry="26" fill="#DECAB0" />

      {/* Ceramic Saucer */}
      <ellipse cx="200" cy="225" rx="95" ry="22" fill="#E2D7C5" />
      <ellipse cx="200" cy="222" rx="90" ry="19" fill="#FAF6EE" />

      {/* Cup Base & Body */}
      <path d="M145 160 C145 220, 255 220, 255 160 Z" fill="url(#cupGrad)" stroke="#D0C0A5" strokeWidth="1.5" />
      <path d="M142 160 C142 153, 258 153, 258 160 C258 167, 142 167, 142 160 Z" fill="#F4EFE6" stroke="#D0C0A5" strokeWidth="1.5" />

      {/* Cup Handle */}
      <path d="M250 170 C275 170, 280 205, 245 208" fill="none" stroke="#E2D7C5" strokeWidth="9" strokeLinecap="round" />
      <path d="M250 170 C275 170, 280 205, 245 208" fill="none" stroke="#D0C0A5" strokeWidth="2" strokeLinecap="round" />

      {/* Tea liquid rim */}
      <ellipse cx="200" cy="160" rx="52" ry="12" fill="url(#teaLiquid)" />

      {/* Floating mint leaf inside cup */}
      <path d="M190 158 C195 153, 208 156, 206 163 C200 164, 188 162, 190 158 Z" fill="#4D774E" />

      {/* Rising gentle steam waves */}
      <path d="M185 140 C180 120, 195 105, 185 85" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M205 135 C215 115, 200 95, 210 75" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
      <path d="M220 142 C225 125, 215 110, 222 92" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

      {/* Fresh Mint & Green Tea Leaves scattered */}
      <g transform="translate(95, 210) rotate(-15)">
        <path d="M0 25 C-10 10, -2 0, 20 -15 C25 5, 20 20, 0 25 Z" fill="url(#leafGrad)" />
        <path d="M0 25 Q10 8 20 -15" stroke="#FAF6EE" strokeWidth="1" opacity="0.6" />
      </g>
      <g transform="translate(290, 220) rotate(25)">
        <path d="M0 20 C-8 8, 0 0, 18 -10 C20 4, 16 16, 0 20 Z" fill="#6F9E73" />
        <path d="M0 20 Q8 6 18 -10" stroke="#FAF6EE" strokeWidth="0.8" opacity="0.7" />
      </g>
      <g transform="translate(130, 248) rotate(40)">
        <path d="M0 16 C-6 6, 0 0, 14 -8 C16 3, 12 12, 0 16 Z" fill="#285943" />
      </g>

      {/* Dried Citrus Slice on tray */}
      <circle cx="280" cy="235" r="18" fill="#E6953B" />
      <circle cx="280" cy="235" r="14" fill="#F4B05C" />
      <circle cx="280" cy="235" r="3" fill="#FFF4D6" />
      <line x1="280" y1="221" x2="280" y2="249" stroke="#FFF4D6" strokeWidth="1" />
      <line x1="266" y1="235" x2="294" y2="235" stroke="#FFF4D6" strokeWidth="1" />
      <line x1="270" y1="225" x2="290" y2="245" stroke="#FFF4D6" strokeWidth="1" />
      <line x1="270" y1="245" x2="290" y2="225" stroke="#FFF4D6" strokeWidth="1" />
    </svg>
  </div>
);

export const GranolaIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#C97852]/10 via-[#FAF6EE] to-[#E2D7C5]/40 ${className}`}>
    <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Linen placemat */}
      <rect x="70" y="210" width="260" height="75" rx="8" fill="#EAE0D0" stroke="#D7C9B2" strokeDasharray="3 3" />

      {/* Terracotta ceramic bowl */}
      <ellipse cx="200" cy="230" rx="100" ry="24" fill="#A85735" />
      <path d="M110 160 C110 240, 290 240, 290 160 Z" fill="#C97852" />
      <ellipse cx="200" cy="160" rx="90" ry="24" fill="#B35E39" />
      <ellipse cx="200" cy="158" rx="84" ry="20" fill="#E5B97A" />

      {/* Granola cluster texture */}
      <circle cx="170" cy="155" r="8" fill="#C48D48" />
      <circle cx="190" cy="150" r="10" fill="#D8A057" />
      <circle cx="215" cy="152" r="9" fill="#B37C38" />
      <circle cx="235" cy="158" r="7" fill="#C48D48" />
      <circle cx="150" cy="162" r="6" fill="#D8A057" />
      <circle cx="180" cy="165" r="9" fill="#E6B26A" />
      <circle cx="205" cy="164" r="8" fill="#B37C38" />
      <circle cx="225" cy="166" r="7" fill="#D8A057" />

      {/* Sliced almonds */}
      <ellipse cx="160" cy="148" rx="12" ry="5" fill="#FAF1D8" transform="rotate(-20 160 148)" stroke="#BA985C" strokeWidth="1" />
      <ellipse cx="220" cy="146" rx="11" ry="5" fill="#FAF1D8" transform="rotate(30 220 146)" stroke="#BA985C" strokeWidth="1" />
      <ellipse cx="195" cy="162" rx="10" ry="4.5" fill="#FAF1D8" transform="rotate(10 195 162)" stroke="#BA985C" strokeWidth="1" />

      {/* Blueberries & cranberries */}
      <circle cx="145" cy="154" r="6" fill="#2E3859" />
      <circle cx="146" cy="153" r="1.5" fill="#7B88B2" />
      <circle cx="240" cy="150" r="6.5" fill="#6A1A24" />
      <circle cx="175" cy="160" r="5.5" fill="#2E3859" />
      <circle cx="210" cy="158" r="6" fill="#6A1A24" />

      {/* Honey thread */}
      <path d="M200 110 Q205 130 195 145 Q210 152 205 160" stroke="#F4B03E" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />

      {/* Wooden Spoon */}
      <path d="M285 140 L330 215 C335 223 325 230 318 223 L275 155 Z" fill="#D4B07D" />
      <ellipse cx="270" cy="148" rx="14" ry="9" fill="#C49B64" transform="rotate(-40 270 148)" />
    </svg>
  </div>
);

export const MielIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#E5A84B]/15 via-[#FAF6EE] to-[#C97852]/10 ${className}`}>
    <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rustic wood surface */}
      <ellipse cx="200" cy="245" rx="130" ry="32" fill="#D3C0A1" />
      <ellipse cx="200" cy="240" rx="120" ry="28" fill="#DECAB0" />

      {/* Hexagonal glass jar */}
      <path d="M150 135 L160 220 C162 235 238 235 240 220 L250 135 Z" fill="#F7CA68" fillOpacity="0.85" stroke="#E6A633" strokeWidth="2" />
      {/* Honey content gradient */}
      <path d="M152 150 L160 218 C162 230 238 230 240 218 L248 150 Z" fill="#EFA425" />

      {/* Jar reflections */}
      <path d="M165 145 L170 215" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M235 145 L232 215" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Parchment lid & twine string */}
      <path d="M142 135 C142 125, 258 125, 258 135 L252 142 C230 145 170 145 148 142 Z" fill="#E2D4BE" stroke="#C2B299" strokeWidth="1.5" />
      <rect x="146" y="137" width="108" height="4" rx="2" fill="#9D6938" />
      <path d="M235 141 C245 155, 255 170, 250 178" stroke="#9D6938" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Kraft Paper Label */}
      <rect x="168" y="165" width="64" height="42" rx="3" fill="#FAF4EB" stroke="#DECAB0" strokeWidth="1" />
      <text x="200" y="180" textAnchor="middle" fill="#285943" fontSize="8" fontWeight="bold" fontFamily="Montserrat">NATIVA</text>
      <text x="200" y="190" textAnchor="middle" fill="#C97852" fontSize="6.5" fontFamily="Lora" fontStyle="italic">Miel de Montaña</text>
      <text x="200" y="199" textAnchor="middle" fill="#6F9E73" fontSize="5" fontFamily="Montserrat">100% PURA · 300g</text>

      {/* Wooden Dipper with honey drop */}
      <g transform="translate(255, 120) rotate(32)">
        <rect x="0" y="0" width="8" height="95" rx="4" fill="#C89D66" />
        <ellipse cx="4" cy="75" rx="14" ry="6" fill="#B3854E" />
        <ellipse cx="4" cy="65" rx="12" ry="5" fill="#B3854E" />
        <ellipse cx="4" cy="55" rx="10" ry="4" fill="#B3854E" />
        {/* Honey clinging to dipper */}
        <path d="M-6 65 C-8 80, 16 80, 14 65 Z" fill="#F7B733" opacity="0.9" />
        <circle cx="4" cy="85" r="3.5" fill="#F7B733" />
      </g>

      {/* Wildflowers */}
      <circle cx="125" cy="230" r="5" fill="#F5E487" />
      <circle cx="125" cy="230" r="2" fill="#D49E34" />
      <circle cx="118" cy="235" r="4" fill="#FFFFFF" />
      <circle cx="132" cy="235" r="4" fill="#FFFFFF" />
    </svg>
  </div>
);

export const RelaxIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#6F9E73]/15 via-[#FAF6EE] to-[#A2B9A0]/20 ${className}`}>
    <svg viewBox="0 0 400 320" className="w-full h-full max-h-72 object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Calming circular aura */}
      <circle cx="200" cy="180" r="100" fill="#EBF3EB" opacity="0.7" />

      {/* Porcelain Teacup */}
      <ellipse cx="200" cy="230" rx="90" ry="20" fill="#D9E5D9" />
      <path d="M140 165 C140 225, 260 225, 260 165 Z" fill="#F7FAF7" stroke="#CCDACC" strokeWidth="1.5" />
      <ellipse cx="200" cy="165" rx="60" ry="14" fill="#CCDDC5" />

      {/* Chamomile & Lavender floating in the soothing tea */}
      {/* Chamomile flower */}
      <g transform="translate(195, 165)">
        <circle cx="0" cy="0" r="5" fill="#E6A835" />
        <ellipse cx="0" cy="-9" rx="3" ry="5" fill="#FFFFFF" />
        <ellipse cx="7" cy="-6" rx="3" ry="5" fill="#FFFFFF" transform="rotate(45 7 -6)" />
        <ellipse cx="9" cy="0" rx="3" ry="5" fill="#FFFFFF" transform="rotate(90 9 0)" />
        <ellipse cx="7" cy="6" rx="3" ry="5" fill="#FFFFFF" transform="rotate(135 7 6)" />
        <ellipse cx="0" cy="9" rx="3" ry="5" fill="#FFFFFF" />
        <ellipse cx="-7" cy="6" rx="3" ry="5" fill="#FFFFFF" transform="rotate(225 -7 6)" />
        <ellipse cx="-9" cy="0" rx="3" ry="5" fill="#FFFFFF" transform="rotate(270 -9 0)" />
        <ellipse cx="-7" cy="-6" rx="3" ry="5" fill="#FFFFFF" transform="rotate(315 -7 -6)" />
      </g>

      {/* Sprig of Lavender on side */}
      <g transform="translate(285, 200) rotate(35)">
        <path d="M0 40 L0 -20" stroke="#5E835E" strokeWidth="2" />
        <ellipse cx="-4" cy="5" rx="3.5" ry="5" fill="#9587B6" />
        <ellipse cx="4" cy="0" rx="3.5" ry="5" fill="#8473A8" />
        <ellipse cx="-4" cy="-8" rx="3.5" ry="5" fill="#9587B6" />
        <ellipse cx="4" cy="-14" rx="3.5" ry="5" fill="#8473A8" />
        <ellipse cx="0" cy="-22" rx="3" ry="4" fill="#A89AC7" />
      </g>

      {/* Melissa / Toronjil leaves */}
      <g transform="translate(120, 215) rotate(-30)">
        <path d="M0 25 C-12 10, -2 0, 18 -12 C22 4, 18 18, 0 25 Z" fill="#6F9E73" />
        <path d="M0 25 Q10 8 18 -12" stroke="#E8F1E8" strokeWidth="1" opacity="0.8" />
      </g>

      {/* Night calming moon crescent & soft vapor */}
      <path d="M200 135 C195 110, 205 95, 200 70" stroke="#A6C2A6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M185 130 C180 115, 190 100, 185 85" stroke="#CCDACC" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  </div>
);

export const ProductVisual: React.FC<{ productId: string; className?: string }> = ({ productId, className }) => {
  switch (productId) {
    case 'te-vital':
      return <TeVitalIllustration className={className} />;
    case 'granola-nativa':
      return <GranolaIllustration className={className} />;
    case 'miel-de-montana':
      return <MielIllustration className={className} />;
    case 'infusion-relax':
      return <RelaxIllustration className={className} />;
    default:
      return <TeVitalIllustration className={className} />;
  }
};
