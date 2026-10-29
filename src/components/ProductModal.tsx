import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShoppingBag, Clock, Thermometer, Sparkles, MessageCircle } from 'lucide-react';
import { ProductVisual } from './ProductIllustrations';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `¡Hola Nativa! Quisiera consultar detalles sobre *${product.name}* ($${product.priceCOP.toLocaleString('es-CO')} COP). ¿Tienen stock disponible?`
    );
    window.open(`https://wa.me/573001234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#285943]/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full border border-[#285943]/15 shadow-2xl overflow-hidden z-10 animate-fade-in my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#285943] hover:bg-white shadow-xs transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12">
          {/* Visual Column */}
          <div className="sm:col-span-5 bg-[#FAF6EE] p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#285943]/10">
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <ProductVisual productId={product.id} className="w-full h-full" />
            </div>

            <div className="mt-4 pt-3 border-t border-[#285943]/10 text-xs text-[#285943]/70 font-sans">
              <div className="font-semibold text-[#285943]">Presentación</div>
              <div>{product.weight}</div>
            </div>
          </div>

          {/* Details Column */}
          <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-semibold text-[#6F9E73] uppercase tracking-wider mb-1 font-sans">
                {product.category === 'infusion' ? 'Infusión Botánica Andina' : product.category === 'miel' ? 'Cosecha Apícola Sostenible' : 'Alimento Nutritivo Artesanal'}
              </div>

              <h3 className="text-2xl font-bold text-[#285943] font-sans">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-2 mt-2 mb-4">
                <span className="text-2xl font-extrabold font-mono text-[#285943] tabular-nums">
                  ${product.priceCOP.toLocaleString('es-CO')}
                </span>
                <span className="text-xs text-[#285943]/60 font-sans">COP</span>
                <span className="text-xs text-[#6F9E73] font-mono tabular-nums">
                  (≈ ${product.priceUSD.toFixed(2)} USD)
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#285943]/80 leading-relaxed font-sans mb-5">
                {product.longDescription}
              </p>

              {/* Ritual info if exists */}
              {product.preparation && (
                <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#285943]/10 grid grid-cols-2 gap-2 text-xs mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C97852]" />
                    <span className="text-[#285943]/80">{product.preparation.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-3.5 h-3.5 text-[#C97852]" />
                    <span className="text-[#285943]/80">{product.preparation.temperature}</span>
                  </div>
                </div>
              )}

              {/* Ingredients list */}
              <div className="mb-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#285943] mb-1.5 font-sans">
                  Ingredientes Puros:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#285943]/80">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="bg-[#FAF6EE] px-2 py-0.5 rounded text-[11px] border border-[#285943]/10">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-1.5 mb-6">
                {product.benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#285943]/80">
                    <Check className="w-3.5 h-3.5 text-[#6F9E73] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#285943]/10 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={handleAdd}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#285943] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Agregado a la Canasta!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Añadir al Carrito</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto p-3 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1b3d2e] transition-colors cursor-pointer flex items-center justify-center gap-2 text-xs font-semibold uppercase"
                title="Consultar por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                <span className="sm:hidden">Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
