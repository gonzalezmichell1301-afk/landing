import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenRegister: () => void;
  onScrollToProducts: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRegister, onScrollToProducts }) => {
  return (
    <section className="py-20 md:py-28 bg-[#285943] text-white relative overflow-hidden">
      {/* Decorative botanical light glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6F9E73]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C97852]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#FAF6EE]/80 uppercase mb-4 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#C97852]" />
          <span>Transforma Tu Rutina Cotidiana</span>
          <span aria-hidden="true" className="text-[#C97852]">·</span>
          <span>NATIVA 2026</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-balance leading-tight mb-6">
          Lo natural también puede transformar tu día
        </h2>

        <p className="font-serif italic text-lg sm:text-xl text-[#F3EBDD] max-w-2xl mx-auto mb-10 leading-relaxed">
          &ldquo;Cada taza, cada cucharada de miel y cada grano tostado es un recordatorio de que la vida sabia y serena empieza con lo que eliges consumir.&rdquo;
        </p>

        {/* Action Buttons: [ME QUIERO REGISTRAR] and [COMPRAR] */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          {/* Primary CTA */}
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C97852] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#B2643E] active:scale-98 transition-all duration-150 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>ME QUIERO REGISTRAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onScrollToProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/50 text-white text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-[#285943] active:scale-98 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>COMPRAR</span>
          </button>
        </div>

        {/* Quick event reminder */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FAF6EE]/70 font-sans">
          <span>Evento Gratuito Presencial en Bogotá</span>
          <span aria-hidden="true">·</span>
          <span>Transmisión Global en Vivo</span>
          <span aria-hidden="true">·</span>
          <span>Kit de Degustación Incluido para Asistentes</span>
        </div>
      </div>
    </section>
  );
};
