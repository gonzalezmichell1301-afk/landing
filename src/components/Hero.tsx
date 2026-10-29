import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/nativaData';
import { TeVitalIllustration } from './ProductIllustrations';
import { ArrowRight, Sparkles, Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onScrollToProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onScrollToProducts }) => {
  const [heroVisualTab, setHeroVisualTab] = useState<'logo' | 'product'>('logo');
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 14,
    minutes: 45,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle organic botanical ambient glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#6F9E73]/10 via-[#F3EBDD]/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-10%] w-[380px] h-[380px] bg-[#C97852]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition, Headline, Subtitle, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial metadata (Anti-slop compliant: no pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest text-[#285943]/80 uppercase mb-4 font-sans">
              <span>Gran Evento de Lanzamiento</span>
              <span aria-hidden="true" className="text-[#C97852]">·</span>
              <span>Nueva Colección Artesanal</span>
              <span aria-hidden="true" className="text-[#C97852]">·</span>
              <span className="text-[#C97852]">Cupos Limitados</span>
            </div>

            {/* Exact Title Required: [NATIVA] */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#285943] font-sans leading-[1.05] text-balance mb-4">
              NATIVA
            </h1>

            {/* Exact Subtitle Required: [Lo natural también puede transformar tu día] */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif text-[#C97852] italic mb-6 leading-snug">
              &ldquo;Lo natural también puede transformar tu día&rdquo;
            </h2>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-[#285943]/85 font-normal leading-relaxed max-w-xl mb-8 font-sans">
              Te invitamos a ser parte del nacimiento de una nueva experiencia de bienestar.
              Descubre nuestra primera línea de infusiones, granolas y mieles crudas recolectadas
              artesanalmente en las montañas andinas colombianas, sin químicos ni conservantes.
            </p>

            {/* Action Buttons: [ME QUIERO REGISTRAR] and [COMPRAR] */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Primary CTA */}
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#285943] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] active:scale-98 transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#285943]"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onScrollToProducts}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#285943] text-[#285943] text-sm font-semibold tracking-wider uppercase hover:bg-[#285943] hover:text-white active:scale-98 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#285943]"
              >
                <span>COMPRAR</span>
              </button>
            </div>

            {/* Event Countdown Module */}
            <div className="bg-white/90 backdrop-blur-sm border border-[#285943]/10 rounded-2xl p-5 shadow-xs max-w-lg">
              <div className="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-[#285943]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#285943]">
                  <Calendar className="w-4 h-4 text-[#C97852]" />
                  <span>Sábado 14 de Noviembre · 10:00 AM</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#C97852]">
                  <Users className="w-3.5 h-3.5" />
                  <span>{EVENT_DETAILS.spotsLeft} cupos restantes</span>
                </div>
              </div>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#FAF6EE] rounded-xl py-2 px-1 border border-[#285943]/5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#285943] tabular-nums">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#285943]/70 font-medium">Días</div>
                </div>
                <div className="bg-[#FAF6EE] rounded-xl py-2 px-1 border border-[#285943]/5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#285943] tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#285943]/70 font-medium">Horas</div>
                </div>
                <div className="bg-[#FAF6EE] rounded-xl py-2 px-1 border border-[#285943]/5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#285943] tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#285943]/70 font-medium">Min</div>
                </div>
                <div className="bg-[#FAF6EE] rounded-xl py-2 px-1 border border-[#285943]/5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#C97852] tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#285943]/70 font-medium">Seg</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with Marquee Presentation */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Visual Frame with Natural Styling */}
            <div className="w-full relative rounded-3xl overflow-hidden bg-white border border-[#285943]/15 shadow-xl p-3 sm:p-4">
              {/* Top Selector / Banner Tag inside card */}
              <div className="flex items-center justify-between px-2 py-1.5 bg-[#FAF6EE] rounded-xl mb-3 text-xs">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setHeroVisualTab('logo')}
                    className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                      heroVisualTab === 'logo'
                        ? 'bg-[#285943] text-white shadow-xs'
                        : 'text-[#285943]/70 hover:text-[#285943]'
                    }`}
                  >
                    Logotipo Oficial
                  </button>
                  <button
                    onClick={() => setHeroVisualTab('product')}
                    className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                      heroVisualTab === 'product'
                        ? 'bg-[#285943] text-white shadow-xs'
                        : 'text-[#285943]/70 hover:text-[#285943]'
                    }`}
                  >
                    Té Vital Insignia
                  </button>
                </div>
                <span className="text-[#6F9E73] font-semibold text-[11px] hidden sm:inline">Edición 2026</span>
              </div>

              {/* Main Visual Display */}
              <div className="w-full h-72 sm:h-84 rounded-2xl overflow-hidden flex items-center justify-center bg-[#FAF9F6] border border-[#285943]/8">
                {heroVisualTab === 'logo' ? (
                  <div className="p-6 w-full h-full flex flex-col items-center justify-center animate-fade-in">
                    <img
                      src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                      alt="Logotipo Oficial NATIVA - Productos Naturales y Bienestar"
                      className="w-full h-full max-h-72 object-contain transition-transform duration-300 hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <TeVitalIllustration className="w-full h-full" />
                )}
              </div>

              {/* Caption Card */}
              <div className="p-4 bg-white">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-bold text-lg text-[#285943] font-sans">
                    {heroVisualTab === 'logo' ? 'NATIVA · Identidad Visual' : 'Té Vital · Mezcla Andina'}
                  </h3>
                  <span className="font-serif italic text-sm text-[#C97852]">
                    {heroVisualTab === 'logo' ? 'Marca Registrada' : 'Cosecha Silvestre'}
                  </span>
                </div>
                <p className="text-xs text-[#285943]/70 leading-relaxed">
                  {heroVisualTab === 'logo'
                    ? 'Isotipo oficial con la letra A entrelazada en un brote de hojas verdes sobre fondo claro, símbolo de vitalidad, pureza y conexión con la naturaleza.'
                    : 'Mezcla insignia elaborada con hierbabuena de páramo, té verde de altura y cedrón aromático para el ritual del evento.'}
                </p>

                {/* Micro indicators */}
                <div className="mt-3 pt-3 border-t border-[#285943]/10 flex items-center justify-between text-xs text-[#285943]/80">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6F9E73]" />
                    {heroVisualTab === 'logo' ? 'Identidad Oficial Aprobada' : 'Kit de degustación incluido'}
                  </span>
                  <span className="font-semibold text-[#285943]">Lanzamiento 2026</span>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#285943]/70 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#C97852]" />
              <span>Casa Boutique Quinta Camacho, Bogotá + Transmisión Online</span>
            </div>
          </div>
        </div>

        {/* 4-Column Feature & Trust Strip below Hero Split */}
        <div className="mt-16 pt-10 border-t border-[#285943]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C97852] font-sans block">01 · Experiencia</span>
            <h4 className="text-sm sm:text-base font-bold text-[#285943] font-sans">Cata Guiada en Vivo</h4>
            <p className="text-xs text-[#285943]/70">Descubre aromas, maridajes e infusiones guiado por herbolarias expertas.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C97852] font-sans block">02 · Obsequio</span>
            <h4 className="text-sm sm:text-base font-bold text-[#285943] font-sans">Kit de Bienvenida</h4>
            <p className="text-xs text-[#285943]/70">Recibe una muestra física de Té Vital y Miel pura para disfrutar durante el evento.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C97852] font-sans block">03 · Acceso</span>
            <h4 className="text-sm sm:text-base font-bold text-[#285943] font-sans">Formato Híbrido</h4>
            <p className="text-xs text-[#285943]/70">Participa presencialmente en Bogotá o conéctate en streaming de alta fidelidad.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C97852] font-sans block">04 · Beneficio</span>
            <h4 className="text-sm sm:text-base font-bold text-[#285943] font-sans">Descuento de Preventa</h4>
            <p className="text-xs text-[#285943]/70">20% de descuento preferencial en todos los productos para los registrados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
