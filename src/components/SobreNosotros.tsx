import React from 'react';
import { Mountain, Sprout, Heart, ShieldCheck } from 'lucide-react';

export const SobreNosotros: React.FC = () => {
  return (
    <section id="historia" className="py-20 md:py-28 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6F9E73] uppercase mb-2 font-sans">
              <span>Nuestra Historia</span>
              <span aria-hidden="true">·</span>
              <span>Origen Colombiano</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943] tracking-tight font-sans mb-6 leading-tight">
              De los campos andinos a tu mesa, con respeto y amor por la tierra
            </h2>

            <div className="font-serif italic text-lg sm:text-xl text-[#C97852] mb-6 leading-relaxed">
              &ldquo;Creemos que la salud no se fabrica en un laboratorio, sino que se cultiva día a día en equilibrio con la naturaleza.&rdquo;
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#285943]/85 leading-relaxed font-sans mb-8">
              <p>
                NATIVA nació en pequeñas parcelas campesinas de las montañas colombianas. Comenzamos como una iniciativa familiar que preparaba infusiones medicinales y tostaba granolas artesanales para amigos cercanos y vecinos que buscaban alternativas limpias a los productos industriales ultraprocesados.
              </p>
              <p>
                Hoy, cada frasco de miel cruda y cada bolsa de té conserva el mismo espíritu cercano y artesanal del primer día: lotes reducidos, secado a la sombra, sin aditivos artificiales y con un comercio directo y justo que dignifica el trabajo de nuestros campesinos y apicultores locales.
              </p>
            </div>

            {/* Credibility & Impact Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#285943]/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#285943] tabular-nums">
                  100%
                </div>
                <div className="text-xs text-[#285943]/70 font-sans mt-0.5">Ingredientes botánicos puros</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#285943] tabular-nums">
                  18+
                </div>
                <div className="text-xs text-[#285943]/70 font-sans mt-0.5">Familias campesinas aliadas</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#285943] tabular-nums">
                  0%
                </div>
                <div className="text-xs text-[#285943]/70 font-sans mt-0.5">Conservantes o químicos</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C97852] tabular-nums">
                  4.9/5
                </div>
                <div className="text-xs text-[#285943]/70 font-sans mt-0.5">Calificación de la comunidad</div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Craftsmanship Manifesto */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tarjeta de Logotipo Oficial en Gran Formato */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#285943]/15 shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-xs flex justify-center mb-3">
                <img
                  src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                  alt="Logotipo Oficial NATIVA - Gran Formato"
                  className="w-full max-h-48 object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#40916C]">
                Isotipo de Brote Botánico & Tipografía Oficial
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#285943]/15 shadow-lg relative">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg bg-[#285943] text-white flex items-center justify-center font-bold text-sm">
                  N
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#285943] font-sans">
                  Manifiesto Artesanal NATIVA
                </span>
              </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#285943] shrink-0">
                  <Mountain className="w-5 h-5 text-[#285943]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#285943] font-sans">Tierras Altas de los Andes</h4>
                  <p className="text-xs text-[#285943]/75 mt-1 leading-relaxed">
                    Nuestras plantas crecen sobre los 2.000 metros de altitud, donde el aire puro y la radiación solar concentran aceites esenciales de máxima potencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#285943] shrink-0">
                  <Sprout className="w-5 h-5 text-[#6F9E73]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#285943] font-sans">Cosecha Manual Respetuosa</h4>
                  <p className="text-xs text-[#285943]/75 mt-1 leading-relaxed">
                    Respetamos las fases de la luna y las épocas de floración para recolectar solo las hojas y brotes en su punto cúspide de frescura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#285943] shrink-0">
                  <Heart className="w-5 h-5 text-[#C97852]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#285943] font-sans">Cercanía y Calidez Humana</h4>
                  <p className="text-xs text-[#285943]/75 mt-1 leading-relaxed">
                    Atendemos cada pedido como si fuera para nuestra propia mesa. Conversamos con cada persona que nos escribe por redes o WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#285943] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#285943]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#285943] font-sans">Empaques Responsables</h4>
                  <p className="text-xs text-[#285943]/75 mt-1 leading-relaxed">
                    Vidrio reciclable, tapas metálicas y bolsas de papel kraft con barrera vegetal compostable para minimizar nuestra huella en el planeta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
