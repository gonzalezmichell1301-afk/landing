import React, { useState } from 'react';
import { EVENT_DETAILS } from '../data/nativaData';
import { Calendar, MapPin, Sparkles, CheckCircle2, Ticket, QrCode, Download, Share2, ArrowRight } from 'lucide-react';
import { RegistrationData } from '../types';

interface RegistroEventoProps {
  initialServiceInterest?: string;
  onNavigateToShop: () => void;
}

export const RegistroEvento: React.FC<RegistroEventoProps> = ({
  initialServiceInterest = '',
  onNavigateToShop,
}) => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    modality: 'presencial',
    preferredProduct: 'Té Vital',
    guestsCount: 1,
    receiveUpdates: true,
  });

  const [selectedService, setSelectedService] = useState<string>(initialServiceInterest);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `NAT-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const downloadCalendarEvent = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//NATIVA//Lanzamiento 2026//ES
BEGIN:VEVENT
SUMMARY:Evento de Lanzamiento Oficial NATIVA
DESCRIPTION:Lanzamiento oficial de NATIVA. Descubre nuestra nueva colección de infusiones, granolas y mieles andinas.
LOCATION:Casa Boutique Botánica Quinta Camacho, Cra 10 #70-24, Bogotá
DTSTART:20261114T150000Z
DTEND:20261114T180000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Lanzamiento_Nativa_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Ya tengo mi pase para el Evento de Lanzamiento de NATIVA! Código de entrada: ${ticketId}. Será el 14 de Noviembre.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="registro" className="py-20 md:py-28 bg-[#FAF6EE] relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6F9E73]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C97852]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Event pitch and value highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C97852] uppercase mb-2 font-sans">
              <span>Asegura Tu Entrada Gratuita</span>
              <span aria-hidden="true">·</span>
              <span>Cupos Limitados</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943] tracking-tight font-sans mb-6 leading-tight">
              Regístrate al Evento de Lanzamiento NATIVA
            </h2>

            <p className="text-base text-[#285943]/85 leading-relaxed font-sans mb-8">
              Ven a vivir una mañana dedicada al autocuidado, la botánica andina y los sabores genuinos de la tierra. La entrada es completamente libre con registro previo.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#285943]/15 flex items-center justify-center text-[#285943] shrink-0 shadow-2xs">
                  <Calendar className="w-4 h-4 text-[#C97852]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#285943] font-sans">Fecha y Hora</div>
                  <div className="text-xs text-[#285943]/70">{EVENT_DETAILS.date} · {EVENT_DETAILS.time}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#285943]/15 flex items-center justify-center text-[#285943] shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#6F9E73]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#285943] font-sans">Sede Presencial</div>
                  <div className="text-xs text-[#285943]/70">{EVENT_DETAILS.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#285943]/15 flex items-center justify-center text-[#285943] shrink-0 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#C97852]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#285943] font-sans">Kit de Bienvenida Incluido</div>
                  <div className="text-xs text-[#285943]/70">Degustación de infusiones, muestra de miel y guía botánica física.</div>
                </div>
              </div>
            </div>

            {/* Direct purchase cross-link */}
            <div className="p-4 rounded-2xl bg-white border border-[#285943]/10">
              <div className="text-xs font-bold text-[#285943] mb-1 font-sans">¿Quieres probar los productos de inmediato?</div>
              <p className="text-xs text-[#285943]/70 mb-3">Puedes ordenar hoy mismo y recibirlo en tu puerta antes del evento.</p>
              <button
                onClick={onNavigateToShop}
                className="text-xs font-semibold text-[#C97852] hover:text-[#B2643E] flex items-center gap-1 cursor-pointer transition-colors"
              >
                Explorar catálogo de compra directa <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Form or Ticket Confirmation (7 cols) */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#285943]/15 shadow-xl"
              >
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#285943]/10">
                  <div>
                    <h3 className="text-2xl font-bold text-[#285943] font-sans">
                      Formulario de Registro
                    </h3>
                    <p className="text-xs text-[#285943]/70 mt-0.5">
                      Completa tus datos para emitir tu pase personal.
                    </p>
                  </div>
                  <Ticket className="w-7 h-7 text-[#C97852]" />
                </div>

                <div className="space-y-4">
                  {/* Nombre Completo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1.5 font-sans">
                      Nombre y Apellido <span className="text-[#C97852]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Sofía Valenzuela"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#285943]/20 focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/20 bg-[#FAF6EE]/50 text-sm text-[#285943] placeholder-[#285943]/40 transition-colors outline-none font-sans"
                    />
                  </div>

                  {/* Correo y Teléfono en grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1.5 font-sans">
                        Correo Electrónico <span className="text-[#C97852]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#285943]/20 focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/20 bg-[#FAF6EE]/50 text-sm text-[#285943] placeholder-[#285943]/40 transition-colors outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1.5 font-sans">
                        WhatsApp / Teléfono <span className="text-[#C97852]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+57 300 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#285943]/20 focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/20 bg-[#FAF6EE]/50 text-sm text-[#285943] placeholder-[#285943]/40 transition-colors outline-none font-sans"
                      />
                    </div>
                  </div>

                  {/* Modalidad Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-2 font-sans">
                      Modalidad de Asistencia:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          formData.modality === 'presencial'
                            ? 'border-[#285943] bg-[#285943] text-white shadow-xs'
                            : 'border-[#285943]/15 bg-[#FAF6EE]/50 text-[#285943] hover:border-[#285943]/40'
                        }`}
                      >
                        <div className="font-bold text-xs uppercase tracking-wider font-sans">
                          Presencial (Bogotá)
                        </div>
                        <div className={`text-[11px] mt-0.5 ${formData.modality === 'presencial' ? 'text-white/80' : 'text-[#285943]/70'}`}>
                          Casa Boutique Quinta Camacho · Incluye kit físico
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'virtual' })}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          formData.modality === 'virtual'
                            ? 'border-[#285943] bg-[#285943] text-white shadow-xs'
                            : 'border-[#285943]/15 bg-[#FAF6EE]/50 text-[#285943] hover:border-[#285943]/40'
                        }`}
                      >
                        <div className="font-bold text-xs uppercase tracking-wider font-sans">
                          Virtual en Vivo
                        </div>
                        <div className={`text-[11px] mt-0.5 ${formData.modality === 'virtual' ? 'text-white/80' : 'text-[#285943]/70'}`}>
                          Transmisión simultánea HD + Chat de preguntas
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Producto que más deseas conocer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1.5 font-sans">
                        Creación de mayor interés:
                      </label>
                      <select
                        value={formData.preferredProduct}
                        onChange={(e) => setFormData({ ...formData, preferredProduct: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#285943]/20 bg-[#FAF6EE]/50 text-sm text-[#285943] outline-none font-sans cursor-pointer"
                      >
                        <option value="Té Vital">Té Vital (Hierbas aromáticas)</option>
                        <option value="Granola Nativa">Granola Nativa (Frutos secos)</option>
                        <option value="Miel de Montaña">Miel de Montaña (Producción local)</option>
                        <option value="Infusión Relax">Infusión Relax (Descanso)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1.5 font-sans">
                        Taller preferido:
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#285943]/20 bg-[#FAF6EE]/50 text-sm text-[#285943] outline-none font-sans cursor-pointer"
                      >
                        <option value="">Cata Sensorial & Mezclas Medicinales</option>
                        <option value="Diagnóstico & Rutinas">Diagnóstico & Rutinas Holísticas</option>
                        <option value="Todos los talleres">Participar en todos los talleres</option>
                      </select>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.receiveUpdates}
                        onChange={(e) => setFormData({ ...formData, receiveUpdates: e.target.checked })}
                        className="w-4 h-4 rounded text-[#285943] accent-[#285943] focus:ring-[#285943]"
                      />
                      <span className="text-xs text-[#285943]/80 font-sans">
                        Deseo recibir recordatorio del evento y catálogo digital por WhatsApp.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Primary CTA Submit Button: [ME QUIERO REGISTRAR] */}
                <div className="mt-8 pt-6 border-t border-[#285943]/10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#285943] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] active:scale-98 transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#285943]"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">EMITIENDO TU PASE...</span>
                    ) : (
                      <>
                        <span>ME QUIERO REGISTRAR</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#285943]/60 mt-3 font-sans">
                    Reserva 100% gratuita · Confirmación inmediata
                  </p>
                </div>
              </form>
            ) : (
              /* Digital Pass / Ticket Confirmation */
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#285943]/20 shadow-2xl animate-fade-in relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#285943] via-[#6F9E73] to-[#C97852]" />

                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#285943]/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#6F9E73] uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5 text-[#6F9E73]" />
                    <span>Registro Confirmado Exitosamente</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#C97852] bg-[#C97852]/10 px-2.5 py-1 rounded-md">
                    {ticketId}
                  </span>
                </div>

                {/* Digital Ticket Representation */}
                <div className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#285943]/10 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="mb-2">
                        <img
                          src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                          alt="NATIVA"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <div className="text-[10px] font-bold text-[#6F9E73] uppercase tracking-wider">
                        Pase Oficial NATIVA 2026
                      </div>
                      <h4 className="text-xl font-extrabold text-[#285943] font-sans mt-0.5">
                        {formData.fullName}
                      </h4>
                      <p className="text-xs text-[#285943]/70">{formData.email}</p>
                    </div>

                    <div className="w-16 h-16 bg-white rounded-xl border border-[#285943]/15 flex items-center justify-center p-1.5 shadow-2xs">
                      <QrCode className="w-full h-full text-[#285943]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#285943]/10 text-xs">
                    <div>
                      <div className="text-[10px] text-[#285943]/60 uppercase font-semibold">Modalidad</div>
                      <div className="font-bold text-[#285943] capitalize">{formData.modality}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#285943]/60 uppercase font-semibold">Fecha</div>
                      <div className="font-bold text-[#285943]">14 Nov, 10:00 AM</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#285943]/60 uppercase font-semibold">Degustación</div>
                      <div className="font-bold text-[#285943]">{formData.preferredProduct}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons for Ticket */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={downloadCalendarEvent}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#285943] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Guardar en Calendario</span>
                  </button>

                  <button
                    onClick={shareOnWhatsApp}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#285943] text-[#285943] text-xs font-semibold tracking-wider uppercase hover:bg-[#FAF6EE] transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartir Pase</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#285943]/60 hover:text-[#285943] underline transition-colors cursor-pointer"
                  >
                    Registrar a otra persona
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
