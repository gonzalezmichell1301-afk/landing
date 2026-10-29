import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProductVisual } from './ProductIllustrations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('Bogotá');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const totalCOP = items.reduce((acc, item) => acc + item.product.priceCOP * item.quantity, 0);
  const totalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const freeShippingThreshold = 80000;
  const qualifiesForFreeShipping = totalCOP >= freeShippingThreshold;

  const handleWhatsAppCheckout = () => {
    let orderSummary = `*¡Hola Nativa! Quiero realizar un pedido desde la web:*\n\n`;
    items.forEach((item) => {
      orderSummary += `• ${item.quantity}x ${item.product.name} ($${(item.product.priceCOP * item.quantity).toLocaleString('es-CO')} COP)\n`;
    });
    orderSummary += `\n*Total:* $${totalCOP.toLocaleString('es-CO')} COP`;
    if (customerName) {
      orderSummary += `\n*Cliente:* ${customerName}`;
      orderSummary += `\n*Ciudad/Dirección:* ${customerCity} - ${customerAddress}`;
    }
    orderSummary += `\n\n¿Me indican el método de pago? Gracias.`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/573001234567?text=${encoded}`, '_blank');
  };

  const handleOnlineCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#285943]/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EE] shadow-2xl flex flex-col justify-between border-l border-[#285943]/15">
          {/* Header */}
          <div className="p-5 bg-white border-b border-[#285943]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                alt="NATIVA"
                className="h-8 w-auto object-contain"
              />
              <span className="text-[#285943]/30">|</span>
              <h3 className="font-bold text-sm text-[#285943] font-sans">
                {checkoutStep === 'cart' ? 'Canasta de Compra' : checkoutStep === 'details' ? 'Datos de Entrega' : '¡Pedido Confirmado!'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#285943]/60 hover:text-[#285943] hover:bg-[#FAF6EE] transition-colors cursor-pointer"
              aria-label="Cerrar canasta"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutStep === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border border-[#285943]/15 flex items-center justify-center text-[#285943]/40">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-[#285943] text-base mb-1">Tu canasta está vacía</h4>
                    <p className="text-xs text-[#285943]/60 max-w-xs mx-auto mb-6">
                      Descubre nuestra línea botánica de infusiones, granolas y miel pura.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-[#285943] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1b3d2e] transition-colors cursor-pointer"
                    >
                      Ver Productos
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Free shipping bar */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#285943]/10 text-xs">
                      {qualifiesForFreeShipping ? (
                        <div className="text-[#6F9E73] font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>¡Tienes envío nacional gratuito!</span>
                        </div>
                      ) : (
                        <div className="text-[#285943]/80">
                          Agrega ${(freeShippingThreshold - totalCOP).toLocaleString('es-CO')} COP más para tener <strong className="text-[#C97852]">envío gratis</strong>.
                        </div>
                      )}
                    </div>

                    {/* Items List */}
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="bg-white rounded-2xl p-4 border border-[#285943]/10 flex gap-3 items-center"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FAF6EE] shrink-0 border border-[#285943]/5">
                          <ProductVisual productId={item.product.id} className="w-full h-full" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-[#285943] truncate font-sans">
                            {item.product.name}
                          </h4>
                          <div className="text-xs font-mono font-bold text-[#285943] tabular-nums mt-0.5">
                            ${(item.product.priceCOP * item.quantity).toLocaleString('es-CO')} COP
                          </div>

                          {/* Quantity control */}
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center border border-[#285943]/20 rounded-lg bg-[#FAF6EE]">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 hover:text-[#C97852] transition-colors cursor-pointer"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2 text-xs font-mono font-bold tabular-nums">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 hover:text-[#285943] transition-colors cursor-pointer"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-xs text-red-500 hover:text-red-700 p-1 cursor-pointer"
                              title="Eliminar producto"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'details' && (
              <form id="checkout-form" onSubmit={handleOnlineCheckout} className="space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-[#285943]/10 mb-4">
                  <div className="text-xs text-[#285943]/70 font-sans mb-1">Resumen a pagar</div>
                  <div className="text-2xl font-bold font-mono text-[#285943] tabular-nums">
                    ${totalCOP.toLocaleString('es-CO')} COP
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1 font-sans">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#285943]/20 bg-white text-xs text-[#285943] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1 font-sans">
                    Ciudad de Entrega
                  </label>
                  <select
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#285943]/20 bg-white text-xs text-[#285943] outline-none"
                  >
                    <option value="Bogotá">Bogotá D.C. (Entrega 24h)</option>
                    <option value="Medellín">Medellín (Entrega 48h)</option>
                    <option value="Cali">Cali (Entrega 48h)</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Otra ciudad">Otra ciudad de Colombia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#285943] mb-1 font-sans">
                    Dirección y Barrio
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Calle, número, conjunto o apto"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#285943]/20 bg-white text-xs text-[#285943] outline-none"
                  />
                </div>

                <div className="p-3 bg-[#FAF6EE] rounded-xl text-xs text-[#285943]/70">
                  <p>Aceptamos transferencia Nequi, Daviplata, Bancolombia, PSE y pago contraentrega en Bogotá.</p>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#6F9E73]/20 flex items-center justify-center text-[#285943]">
                  <CheckCircle2 className="w-8 h-8 text-[#6F9E73]" />
                </div>
                <h4 className="text-xl font-bold text-[#285943] font-sans mb-1">¡Gracias por tu compra!</h4>
                <p className="text-xs text-[#285943]/75 max-w-xs mx-auto mb-6">
                  Hemos recibido tu solicitud de pedido artesanal. Nuestro equipo se pondrá en contacto contigo para coordinar el despacho.
                </p>
                <div className="bg-white p-4 rounded-2xl border border-[#285943]/10 text-xs text-left mb-6 space-y-1">
                  <div><strong>Destinatario:</strong> {customerName || 'Cliente Nativa'}</div>
                  <div><strong>Ciudad:</strong> {customerCity}</div>
                  <div><strong>Total:</strong> ${totalCOP.toLocaleString('es-CO')} COP</div>
                </div>
                <button
                  onClick={() => {
                    onClearCart();
                    setCheckoutStep('cart');
                    onClose();
                  }}
                  className="w-full py-3 rounded-full bg-[#285943] text-white text-xs font-semibold tracking-wider uppercase cursor-pointer"
                >
                  Seguir Explorando
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && checkoutStep !== 'success' && (
            <div className="p-6 bg-white border-t border-[#285943]/10 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#285943]/70 font-sans">
                  Total Estimado:
                </span>
                <div className="text-right">
                  <div className="text-2xl font-bold font-mono text-[#285943] tabular-nums">
                    ${totalCOP.toLocaleString('es-CO')} COP
                  </div>
                  <div className="text-[11px] text-[#6F9E73] font-mono tabular-nums">
                    ≈ ${totalUSD.toFixed(2)} USD
                  </div>
                </div>
              </div>

              {checkoutStep === 'cart' ? (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full py-3.5 px-4 rounded-full bg-[#25D366] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#20ba5a] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>COMPRAR POR WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => setCheckoutStep('details')}
                    className="w-full py-3 px-4 rounded-full border border-[#285943] text-[#285943] text-xs font-bold tracking-wider uppercase hover:bg-[#FAF6EE] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Finalizar Pedido en Línea</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setCheckoutStep('cart')}
                    className="px-4 py-3 rounded-full border border-[#285943]/30 text-xs font-semibold uppercase text-[#285943]"
                  >
                    Volver
                  </button>
                  <button
                    form="checkout-form"
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-full bg-[#285943] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1b3d2e] cursor-pointer"
                  >
                    Confirmar Pedido
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
