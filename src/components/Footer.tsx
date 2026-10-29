import React from 'react';
import { Logo } from './Logo';
import { Instagram, MessageCircle, MapPin, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b3d2e] text-[#FAF6EE] pt-16 pb-12 border-t border-[#285943]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" className="h-9" showSubtitle={true} />
            <p className="text-xs text-[#FAF6EE]/80 leading-relaxed max-w-sm font-sans pt-2">
              Elaboramos y comercializamos productos naturales y de bienestar de forma artesanal en Colombia.
              Inspirados en la pureza de las montañas andinas y el comercio directo con familias campesinas.
            </p>
            <div className="font-serif italic text-xs text-[#C97852] pt-1">
              &ldquo;Lo natural también puede transformar tu día.&rdquo;
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97852] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram NATIVA"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp NATIVA"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-sans">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF6EE]/80 font-sans">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
              </li>
              <li>
                <a href="#destacado" className="hover:text-white transition-colors">Té Vital</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Nuestra Línea</a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-white transition-colors">Experiencias</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">Sobre NATIVA</a>
              </li>
            </ul>
          </div>

          {/* Products List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-sans">
              Creaciones
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF6EE]/80 font-sans">
              <li>
                <a href="#destacado" className="hover:text-white transition-colors">Té Vital (Insignia)</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Granola Nativa</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Miel de Montaña</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Infusión Relax</a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-white transition-colors">Talleres de Botánica</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-sans">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-xs text-[#FAF6EE]/80 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C97852] shrink-0 mt-0.5" />
                <span>Casa Boutique Botánica, Quinta Camacho, Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6F9E73] shrink-0" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6F9E73] shrink-0" />
                <span>hola@nativanatural.co</span>
              </div>
              <div className="pt-2 text-[11px] text-[#FAF6EE]/60">
                Atención: Lunes a Sábado, 8:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EE]/60 font-sans">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} NATIVA. Todos los derechos reservados.</span>
            <span>·</span>
            <span>Elaboración Artesanal Colombiana</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Cultivado con</span>
            <Heart className="w-3.5 h-3.5 text-[#C97852] fill-current" />
            <span>en los Andes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
