import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Beneficios } from './components/Beneficios';
import { ProductoDestacado } from './components/ProductoDestacado';
import { CatalogoProductos } from './components/CatalogoProductos';
import { ExperienciasServicios } from './components/ExperienciasServicios';
import { SobreNosotros } from './components/SobreNosotros';
import { Testimonios } from './components/Testimonios';
import { RegistroEvento } from './components/RegistroEvento';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CanvaSidebarPreviewModal } from './components/CanvaSidebarPreviewModal';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isSidebarModalOpen, setIsSidebarModalOpen] = useState(false);
  const [serviceInterest, setServiceInterest] = useState<string>('');

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToRegistration = () => {
    const el = document.getElementById('registro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('productos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceForRegistration = (serviceName: string) => {
    setServiceInterest(serviceName);
    scrollToRegistration();
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#285943] selection:bg-[#C97852] selection:text-white font-sans antialiased relative">
      {/* Fixed Header */}
      <Navbar
        onOpenRegister={scrollToRegistration}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartTotalCount}
        onOpenSidebarPreview={() => setIsSidebarModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenRegister={scrollToRegistration}
          onScrollToProducts={scrollToProducts}
        />

        {/* 4 Pillars / Benefits */}
        <Beneficios />

        {/* Featured Product: Té Vital */}
        <ProductoDestacado
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setSelectedProductForModal(p)}
        />

        {/* Catalog of 4 Products */}
        <CatalogoProductos
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setSelectedProductForModal(p)}
        />

        {/* Workshops & Experiences */}
        <ExperienciasServicios
          onSelectServiceForRegistration={handleSelectServiceForRegistration}
        />

        {/* Story & Philosophy */}
        <SobreNosotros />

        {/* Testimonials */}
        <Testimonios />

        {/* Conversion Form: Event Registration & Ticket Pass */}
        <RegistroEvento
          initialServiceInterest={serviceInterest}
          onNavigateToShop={scrollToProducts}
        />

        {/* Final CTA */}
        <FinalCTA
          onOpenRegister={scrollToRegistration}
          onScrollToProducts={scrollToProducts}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <MobileStickyBar
        onOpenRegister={scrollToRegistration}
        onScrollToProducts={scrollToProducts}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Detailed Product Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Canva Sidebar Live Preview Modal */}
      <CanvaSidebarPreviewModal
        isOpen={isSidebarModalOpen}
        onClose={() => setIsSidebarModalOpen(false)}
      />
    </div>
  );
}
