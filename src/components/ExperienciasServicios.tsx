import React, { useState } from 'react';
import { NATIVA_SERVICES } from '../data/nativaData';
import { Clock, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceExperience } from '../types';

interface ExperienciasServiciosProps {
  onSelectServiceForRegistration: (serviceName: string) => void;
}

export const ExperienciasServicios: React.FC<ExperienciasServiciosProps> = ({
  onSelectServiceForRegistration,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceExperience>(NATIVA_SERVICES[0]);

  return (
    <section id="experiencias" className="py-20 md:py-28 bg-[#F3EBDD]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C97852] uppercase mb-2 font-sans">
            <span>Experiencias & Bienestar</span>
            <span aria-hidden="true">·</span>
            <span>Encuentros Vivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943] tracking-tight font-sans">
            Talleres y Servicios del Evento
          </h2>
          <p className="mt-3 text-base text-[#285943]/80 font-sans">
            Más que una marca, NATIVA es un punto de encuentro para aprender a reconectar con la sabiduría de las plantas y el autocuidado consciente.
          </p>
        </div>

        {/* 2-column Asymmetric Service Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service List Selection (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {NATIVA_SERVICES.map((srv) => {
              const isSelected = selectedService.id === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#285943] shadow-md ring-1 ring-[#285943]/20'
                      : 'bg-white/60 border-[#285943]/10 hover:bg-white hover:border-[#285943]/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-mono text-xs font-bold text-[#C97852]">
                      {srv.number}
                    </span>
                    {srv.includedInLaunch && (
                      <span className="text-[11px] font-semibold text-[#6F9E73] uppercase tracking-wider">
                        Incluido en el Lanzamiento
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#285943] font-sans">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#285943]/70 font-sans line-clamp-2">
                    {srv.shortDescription}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#285943]/5 flex items-center justify-between text-xs text-[#285943]/60">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {srv.duration}
                    </span>
                    <span className="font-medium text-[#285943] flex items-center gap-1">
                      Ver detalles <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#285943]/15 shadow-lg">
            <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#285943]/10">
              <span className="font-mono text-sm font-bold text-[#C97852]">
                Experiencia {selectedService.number}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#285943]">
                <Clock className="w-4 h-4 text-[#6F9E73]" />
                {selectedService.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#285943] font-sans mb-4">
              {selectedService.title}
            </h3>

            <p className="text-base text-[#285943]/80 leading-relaxed font-sans mb-6">
              {selectedService.description}
            </p>

            {/* Instructor / Facilitator */}
            <div className="mb-6 p-4 rounded-xl bg-[#FAF6EE] border border-[#285943]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#285943] text-white flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#285943]/60 font-semibold font-sans">
                  Facilitador(a)
                </div>
                <div className="text-xs font-bold text-[#285943]">
                  {selectedService.instructor}
                </div>
              </div>
            </div>

            {/* Highlights bullet list */}
            <div className="mb-8 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#285943] font-sans">
                ¿Qué incluye esta experiencia?
              </div>
              {selectedService.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#285943]/85 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#6F9E73] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action to register for this experience */}
            <div className="pt-6 border-t border-[#285943]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#285943]/70 font-sans">
                {selectedService.includedInLaunch
                  ? 'Cupos de taller asignados por orden de registro en la landing.'
                  : 'Suscripción disponible para entrega en toda Colombia.'}
              </div>
              <button
                onClick={() => onSelectServiceForRegistration(selectedService.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#285943] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                <span>RESERVAR EN EL REGISTRO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
