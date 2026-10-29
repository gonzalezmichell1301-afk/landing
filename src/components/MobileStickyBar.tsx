import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenRegister: () => void;
  onScrollToProducts: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenRegister,
  onScrollToProducts,
  cartCount,
  onOpenCart,
}) => {
  return (
    <aside aria-label="Acciones de compra y registro" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#285943]/15 px-4 py-2.5 shadow-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Cart Quick Button */}
        <button
          onClick={onOpenCart}
          className="relative p-2.5 rounded-full bg-white border border-[#285943]/20 text-[#285943] shrink-0"
          aria-label={`Abrir carrito con ${cartCount} productos`}
        >
          <ShoppingBag className="w-4 h-4" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C97852] text-white text-[9px] font-bold flex items-center justify-center font-mono">
              {cartCount}
            </span>
          )}
        </button>

        {/* Secondary CTA: COMPRAR */}
        <button
          onClick={onScrollToProducts}
          className="flex-1 py-2 px-3 rounded-full border border-[#285943] text-[#285943] text-[11px] font-bold tracking-wider uppercase text-center truncate"
        >
          COMPRAR
        </button>

        {/* Primary CTA: ME QUIERO REGISTRAR */}
        <button
          onClick={onOpenRegister}
          className="flex-1 py-2 px-3 rounded-full bg-[#285943] text-white text-[11px] font-bold tracking-wider uppercase text-center flex items-center justify-center gap-1 shadow-xs truncate"
        >
          <span>REGISTRARME</span>
          <ArrowRight className="w-3 h-3 shrink-0" />
        </button>
      </div>
    </aside>
  );
};
