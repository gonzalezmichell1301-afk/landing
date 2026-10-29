import React, { useState } from 'react';
import { NATIVA_PRODUCTS } from '../data/nativaData';
import { ProductVisual } from './ProductIllustrations';
import { Product } from '../types';
import { Plus, Eye, Check, ShieldCheck, Truck, RefreshCw, Leaf } from 'lucide-react';

interface CatalogoProductosProps {
  onAddToCart: (product: Product) => void;
  onOpenProductModal: (product: Product) => void;
}

export const CatalogoProductos: React.FC<CatalogoProductosProps> = ({
  onAddToCart,
  onOpenProductModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'infusion' | 'alimento' | 'miel'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = NATIVA_PRODUCTS.filter((product) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'infusion') return product.category === 'infusion';
    if (activeCategory === 'alimento') return product.category === 'alimento';
    if (activeCategory === 'miel') return product.category === 'miel';
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceCOP - b.priceCOP;
    if (sortBy === 'price-desc') return b.priceCOP - a.priceCOP;
    return (b.highlighted ? 1 : 0) - (a.highlighted ? 1 : 0);
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="tienda" className="py-20 md:py-28 bg-[#FAF9F6] relative border-t border-[#285943]/10">
      <div id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#40916C] uppercase mb-2 font-sans">
              <Leaf className="w-3.5 h-3.5 text-[#52B788]" />
              <span>Tienda Botánica Oficial</span>
              <span aria-hidden="true">·</span>
              <span>Cosecha Andina Sostenible</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B4332] tracking-tight font-sans">
              Catálogo de Bienestar Natural
            </h2>
            <p className="mt-2.5 text-base text-[#285943]/80 max-w-xl font-sans">
              Fórmulas puras elaboradas artesanalmente con plantas medicinales, semillas y miel pura de abejas.
            </p>
          </div>

          {/* Interactive Category Filter & Sort */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center p-1 bg-white rounded-full shrink-0 border border-[#285943]/15 shadow-2xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#285943]/70 hover:text-[#1B4332]'
                }`}
              >
                Todos ({NATIVA_PRODUCTS.length})
              </button>
              <button
                onClick={() => setActiveCategory('infusion')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'infusion'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#285943]/70 hover:text-[#1B4332]'
                }`}
              >
                Infusiones
              </button>
              <button
                onClick={() => setActiveCategory('alimento')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'alimento'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#285943]/70 hover:text-[#1B4332]'
                }`}
              >
                Granolas
              </button>
              <button
                onClick={() => setActiveCategory('miel')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'miel'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#285943]/70 hover:text-[#1B4332]'
                }`}
              >
                Miel de Montaña
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-white border border-[#285943]/15 text-xs text-[#1B4332] font-semibold outline-none cursor-pointer shadow-2xs"
              aria-label="Ordenar productos"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* 4 Product Cards Grid (Clean white backdrop, generous whitespace, organic green tones) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-[#285943]/12 hover:border-[#40916C]/40 transition-all duration-200 shadow-2xs hover:shadow-lg flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative w-full h-60 bg-[#FAF6EE] overflow-hidden border-b border-[#285943]/8">
                  <ProductVisual
                    productId={product.id}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Clean unboxed tag */}
                  {product.badgeText && (
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#1B4332] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#285943]/10 shadow-2xs">
                      {product.badgeText}
                    </div>
                  )}

                  {/* Quick view button */}
                  <button
                    onClick={() => onOpenProductModal(product)}
                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white text-[#1B4332] hover:bg-[#F4FAF5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs cursor-pointer focus-visible:opacity-100"
                    title="Ver ficha técnica"
                    aria-label={`Ver detalles de ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#40916C] uppercase tracking-wider mb-1 font-sans">
                      <span>
                        {product.category === 'infusion'
                          ? 'Infusión Botánica'
                          : product.category === 'miel'
                          ? 'Miel Cruda de Montaña'
                          : 'Cereal Artesanal'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#285943]/60">{product.weight}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1B4332] font-sans group-hover:text-[#40916C] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#285943]/75 leading-relaxed line-clamp-2 font-sans">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and CTA row */}
                  <div className="mt-6 pt-4 border-t border-[#285943]/10 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-lg font-bold font-mono text-[#1B4332] tabular-nums">
                        ${product.priceCOP.toLocaleString('es-CO')}
                      </div>
                      <div className="text-[10px] text-[#40916C] font-semibold font-mono tabular-nums">
                        ≈ ${product.priceUSD.toFixed(2)} USD
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenProductModal(product)}
                        className="px-2.5 py-2 rounded-xl text-[#285943]/80 hover:text-[#1B4332] hover:bg-[#FAF6EE] text-xs font-semibold transition-colors cursor-pointer"
                        title="Ver detalles"
                      >
                        Detalles
                      </button>

                      <button
                        onClick={() => handleAdd(product)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                          isAdded
                            ? 'bg-[#52B788] text-white shadow-xs'
                            : 'bg-[#1B4332] text-white hover:bg-[#2D6A4F] shadow-xs hover:shadow-md'
                        }`}
                        aria-label={`Añadir ${product.name} al carrito`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Listo</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Añadir</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* E-Commerce Trust Badges Strip */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-5 border border-[#285943]/10 flex items-center gap-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#2D6A4F] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B4332] font-sans">Envíos Rápidos & Seguros</h4>
              <p className="text-xs text-[#285943]/70">Entrega de 24 a 48 horas en Bogotá, Medellín, Cali y todo el país.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#285943]/10 flex items-center gap-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#2D6A4F] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B4332] font-sans">100% Garantía de Pureza</h4>
              <p className="text-xs text-[#285943]/70">Sin conservantes sintéticos, colorantes ni azúcares industriales.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#285943]/10 flex items-center gap-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#2D6A4F] shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B4332] font-sans">Sostenibilidad & Reciclaje</h4>
              <p className="text-xs text-[#285943]/70">Frascos de vidrio retornables con descuento en tu siguiente compra.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
