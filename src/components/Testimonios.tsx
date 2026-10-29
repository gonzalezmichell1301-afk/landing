import React from 'react';
import { TESTIMONIALS } from '../data/nativaData';
import { Star, Quote } from 'lucide-react';

export const Testimonios: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F3EBDD]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C97852] uppercase mb-2 font-sans">
            <span>Comunidad NATIVA</span>
            <span aria-hidden="true">·</span>
            <span>Experiencias Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943] tracking-tight font-sans">
            Historias de Bienestar Cotidiano
          </h2>
          <p className="mt-3 text-base text-[#285943]/80 font-sans">
            Descubre cómo pequeños rituales botánicos han ayudado a transformar el día a día de nuestra comunidad.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#285943]/10 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C97852]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#285943]/20" />
                </div>

                {/* Quote in Lora font as specified in brand manual */}
                <p className="font-serif italic text-base text-[#285943] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#285943]/10">
                <div className="font-bold text-sm text-[#285943] font-sans">
                  {t.author}
                </div>
                <div className="text-xs text-[#285943]/70 font-sans">
                  {t.role} · <span className="text-[#6F9E73]">{t.city}</span>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-[#C97852] uppercase tracking-wider font-sans">
                  Probó: {t.productTested}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
