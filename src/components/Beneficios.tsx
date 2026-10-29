import React from 'react';
import { Leaf, Sparkles, HeartHandshake, MapPin } from 'lucide-react';

export const Beneficios: React.FC = () => {
  const pillars = [
    {
      id: 'natural',
      number: '01',
      title: '100% Natural',
      subtitle: 'Pureza Botánica Sin Aditivos',
      description: 'Nuestras mezclas y alimentos no contienen conservantes, colorantes, aromas sintéticos ni modificaciones químicas. Solo plantas y miel en su estado más genuino.',
      icon: Leaf,
      accent: '#285943'
    },
    {
      id: 'artesanal',
      number: '02',
      title: 'Elaboración Artesanal',
      subtitle: 'Hecho con Cuidado en Pequeños Lotes',
      description: 'Cada receta es cosechada a mano y procesada cuidadosamente para preservar intactos los aceites esenciales, enzimas vivas y propiedades organolépticas.',
      icon: Sparkles,
      accent: '#C97852'
    },
    {
      id: 'saludable',
      number: '03',
      title: 'Saludable & Consciente',
      subtitle: 'Bienestar Real para tu Día a Día',
      description: 'Formulaciones pensadas para devolverle el ritmo a tu cuerpo: revitalizar por las mañanas sin alterar tus nervios y propiciar descanso profundo al caer la noche.',
      icon: HeartHandshake,
      accent: '#6F9E73'
    },
    {
      id: 'local',
      number: '04',
      title: 'Comercio Local & Justo',
      subtitle: 'Alianzas con Familias Campesinas',
      description: 'Trabajamos directamente con productores y apicultores locales de las montañas colombianas, garantizando pagos justos y conservación de la biodiversidad andina.',
      icon: MapPin,
      accent: '#285943'
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6F9E73] uppercase mb-2 font-sans">
            <span>Nuestros Pilares</span>
            <span aria-hidden="true">·</span>
            <span>Compromiso NATIVA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943] tracking-tight font-sans leading-tight text-balance">
            Por qué lo natural transforma tu día
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#285943]/80 font-serif italic">
            &ldquo;Volver al origen no es retroceder, es aprender a nutrir nuestro cuerpo con lo que la tierra siempre supo darnos.&rdquo;
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group bg-white rounded-2xl p-7 border border-[#285943]/10 hover:border-[#285943]/30 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${pillar.accent}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: pillar.accent }} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#285943]/40">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#285943] font-sans mb-1 group-hover:text-[#C97852] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#6F9E73] mb-3 font-sans">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-[#285943]/75 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#285943]/5 flex items-center gap-1.5 text-xs font-medium text-[#285943]/60 group-hover:text-[#285943] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F9E73]" />
                  <span>Estándar certificado Nativa</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
