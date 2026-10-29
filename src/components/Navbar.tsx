import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ShoppingBag, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onOpenSidebarPreview?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onOpenCart,
  cartCount,
  onOpenSidebarPreview,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tienda', href: '#tienda' },
    { label: 'Té Vital', href: '#destacado' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Nosotros', href: '#historia' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#285943]/10 py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#285943]/5 py-3.5'
        }`}
      >
        {/* Barra superior de anuncios e-commerce: frescura y sostenibilidad */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <div className="flex items-center justify-between text-[11px] font-sans tracking-wide text-[#285943]/80 border-b border-[#285943]/5 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#52B788]" />
              <span className="font-semibold text-[#1B4332]">Tienda Oficial NATIVA</span>
              <span className="text-[#285943]/30">|</span>
              <span>100% Ingredientes Botánicos & Cosecha Sostenible</span>
            </div>
            <div className="flex items-center gap-4 text-[#285943]/70">
              {onOpenSidebarPreview && (
                <button
                  type="button"
                  onClick={onOpenSidebarPreview}
                  className="text-[#40916C] hover:text-[#1B4332] font-semibold underline underline-offset-2 cursor-pointer transition-colors"
                >
                  Sidebar Estilo Canva
                </button>
              )}
              <span className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-[#C97852]" />
                Envío gratuito en Colombia por compras superiores a $80.000 COP
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            {/* Zone 1: Logotipo NATIVA - Productos Naturales y Bienestar (con isotipo de letra 'A' en forma de brote verde sobre fondo claro) */}
            <a
              href="#inicio"
              className="group flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#285943] rounded-xl"
              aria-label="NATIVA - Productos Naturales y Bienestar"
            >
              <Logo
                size="md"
                showSubtitle={true}
                className="transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* Zone 2: 4–5 Enlaces limpios de navegación */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#285943]/85 hover:text-[#1B4332] transition-colors py-1.5 whitespace-nowrap shrink-0 relative group font-sans"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#40916C] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Carrito de Compras elegante, minimalista y visible + CTA */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Ícono de carrito de compras elegante y minimalista */}
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#F4FAF5] border border-[#285943]/20 hover:border-[#285943]/40 text-[#1B4332] transition-all duration-150 shadow-2xs hover:shadow-xs cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#285943]"
                aria-label={`Ver carrito de compras con ${cartCount} productos`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 stroke-[1.8] text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors" />
                  
                  {/* Pequeño indicador numérico de productos agregados */}
                  <span
                    className={`absolute -top-2 -right-2.5 min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold font-mono flex items-center justify-center transition-all duration-200 shadow-xs tabular-nums ${
                      cartCount > 0
                        ? 'bg-[#285943] text-white scale-100 ring-2 ring-white'
                        : 'bg-[#EBF6EE] text-[#40916C] border border-[#D0EBD8]'
                    }`}
                  >
                    {cartCount}
                  </span>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold font-sans uppercase tracking-wider text-[#1B4332] pl-1">
                  Carrito
                </span>
              </button>

              {/* Botón Principal CTA: [ME QUIERO REGISTRAR] */}
              <button
                onClick={onOpenRegister}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#285943] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1B4332] active:scale-98 transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#285943]"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </button>

              {/* Menú Móvil */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#285943] hover:bg-[#FAF6EE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#285943]"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cajón de Navegación Móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#1B4332]/40 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-[#285943]/15 shadow-xl p-6 transition-transform">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-[#1B4332] py-2 border-b border-[#285943]/10 hover:text-[#40916C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3 rounded-full bg-[#285943] text-white text-xs font-bold tracking-wider uppercase text-center cursor-pointer hover:bg-[#1B4332] transition-colors"
                >
                  ME QUIERO REGISTRAR
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full py-3 rounded-full border border-[#285943] text-[#285943] text-xs font-bold tracking-wider uppercase text-center hover:bg-[#F4FAF5] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>VER CARRITO ({cartCount})</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
