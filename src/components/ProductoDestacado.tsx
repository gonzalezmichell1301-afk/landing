import React, { useState } from 'react';
import { NATIVA_PRODUCTS } from '../data/nativaData';
import { TeVitalIllustration } from './ProductIllustrations';
import { Clock, Thermometer, Sparkles, Check, ShoppingBag, MessageCircle, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductoDestacadoProps {
  onAddToCart: (product: Product) => void;
  onOpenProductModal: (product: Product) => void;
}

export const ProductoDestacado: React.FC<ProductoDestacadoProps> = ({
  onAddToCart,
  onOpenProductModal,
}) => {
  const product = NATIVA_PRODUCTS.find((p) => p.id === 'te-vital') || NATIVA_PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState<'100g' | '250g' | 'kit'>('100g');
  const [addedNotice, setAddedNotice] = useState(false);

  const priceMap = {
    '100g': { cop: 28000, usd: 7.5, label: '100g (35 tazas)' },
    '250g': { cop: 62000, usd: 16.5, label: '250g Familiar (90 tazas) - Ahorro 12%' },
    kit: { cop: 75000, usd: 19.5, label: 'Kit Ritual (Té 100g + Miel 300g + Infusor)' }
  };

  const handleAdd = () => {
    onAddToCart(product);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola Nativa! Me interesa pedir el producto destacado *Té Vital* (${selectedSize}). ¿Me pueden brindar más información?`
    );
    window.open(`https://wa.me/573001234567?text=${text}`, '_blank');
  };

  return (
    <section id="destacado" className="py-20 md:py-28 bg-[#F3EBDD]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#285943]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C97852] uppercase mb-1 font-sans">
              <span>Creación Insignia NATIVA</span>
              <span aria-hidden="true">·</span>
              <span>Edición Cosecha Fresca</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#285943] tracking-tight font-sans">
              Producto Destacado: Té Vital
            </h2>
          </div>
          <div className="font-serif italic text-base sm:text-lg text-[#285943]/80 max-w-md text-right hidden md:block">
            &ldquo;Una mezcla natural para comenzar el día con energía y bienestar.&rdquo;
          </div>
        </div>

        {/* Feature showcase card */}
        <div className="bg-white rounded-3xl border border-[#285943]/15 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FAF6EE] to-[#EAE0D0]/50 p-8 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#285943]/10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#285943] font-sans">
                Fórmula Original
              </span>
              <span className="text-xs font-medium text-[#6F9E73]">
                100% Cosecha a Mano
              </span>
            </div>

            <div className="my-6 w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xs">
              <TeVitalIllustration className="w-full h-full" />
            </div>

            {/* Botanical Composition pill-free metadata */}
            <div className="pt-4 border-t border-[#285943]/10">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#285943]/60 mb-2 font-sans">
                Ingredientes Activos
              </div>
              <div className="text-xs text-[#285943] leading-relaxed font-sans">
                Té verde andino · Hierbabuena silvestre · Cedrón · Jengibre · Cáscara de naranja dulce
              </div>
            </div>
          </div>

          {/* Product Details & Actions (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#285943] font-sans">
                  Té Vital Nativa
                </h3>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#285943] font-mono tabular-nums">
                    ${priceMap[selectedSize].cop.toLocaleString('es-CO')} <span className="text-xs font-sans font-normal text-[#285943]/70">COP</span>
                  </div>
                  <div className="text-xs text-[#6F9E73] font-medium font-mono tabular-nums">
                    ≈ ${priceMap[selectedSize].usd} USD
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#285943]/80 leading-relaxed mb-6 font-sans">
                {product.longDescription}
              </p>

              {/* Ritual & Preparation Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 bg-[#FAF6EE] p-4 rounded-2xl border border-[#285943]/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#285943] shadow-2xs">
                    <Clock className="w-4 h-4 text-[#C97852]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#285943]/60 font-semibold font-sans">Tiempo</div>
                    <div className="text-xs font-bold text-[#285943]">4 - 5 minutos</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#285943] shadow-2xs">
                    <Thermometer className="w-4 h-4 text-[#C97852]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#285943]/60 font-semibold font-sans">Temperatura</div>
                    <div className="text-xs font-bold text-[#285943]">85°C (no hervir)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#285943] shadow-2xs">
                    <Sparkles className="w-4 h-4 text-[#C97852]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#285943]/60 font-semibold font-sans">Efecto</div>
                    <div className="text-xs font-bold text-[#285943]">Claridad & Energía</div>
                  </div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-2 font-sans">
                  Selecciona la Presentación:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['100g', '250g', 'kit'] as const).map((sizeKey) => (
                    <button
                      key={sizeKey}
                      type="button"
                      onClick={() => setSelectedSize(sizeKey)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        selectedSize === sizeKey
                          ? 'border-[#285943] bg-[#285943] text-white shadow-sm'
                          : 'border-[#285943]/15 bg-white text-[#285943] hover:border-[#285943]/40'
                      }`}
                    >
                      <div className="font-bold text-sm capitalize">{sizeKey === 'kit' ? 'Kit Ritual Completo' : sizeKey}</div>
                      <div className={`text-[11px] mt-0.5 ${selectedSize === sizeKey ? 'text-white/80' : 'text-[#285943]/60'}`}>
                        {priceMap[sizeKey].label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-2 mb-8">
                {product.benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#285943]/85 font-sans">
                    <span className="w-4 h-4 rounded-full bg-[#6F9E73]/20 flex items-center justify-center text-[#285943] shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#285943]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#285943] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] active:scale-98 transition-all cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#285943]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedNotice ? '¡AÑADIDO AL PEDIDO!' : 'AÑADIR AL PEDIDO'}</span>
              </button>

              <button
                onClick={() => onOpenProductModal(product)}
                className="inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-full border border-[#285943] text-[#285943] text-xs font-semibold tracking-wider uppercase hover:bg-[#285943]/5 active:scale-98 transition-all cursor-pointer"
              >
                <span>DESCUBRIR TÉ VITAL</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1b3d2e] text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
                title="Consultar por WhatsApp"
                aria-label="Consultar por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                <span className="sm:hidden">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
