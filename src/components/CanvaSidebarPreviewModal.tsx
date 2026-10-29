import React, { useState } from 'react';
import { CanvaSidebar } from './CanvaSidebar';
import { X, Copy, Check, Code2, Eye } from 'lucide-react';

interface CanvaSidebarPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CanvaSidebarPreviewModal: React.FC<CanvaSidebarPreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const rawHtmlCss = `<!-- BARRA LATERAL (SIDEBAR) ESTILO CANVA - NATIVA -->
<aside class="canva-sidebar">
  <!-- Cabecera con Logotipo -->
  <div class="sidebar-top">
    <div class="logo-wrapper">
      <img
        src="logotipo-removebg-preview.png"
        alt="NATIVA - Productos Naturales y Bienestar"
        class="sidebar-logo"
      />
    </div>

    <!-- Botón de Acción Rápida -->
    <button type="button" class="btn-create">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <span>Crear diseño</span>
    </button>

    <!-- Menú Vertical Compacto -->
    <nav class="sidebar-nav">
      <a href="#proyectos" class="nav-item active">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
        </svg>
        <span>Todos los proyectos</span>
        <span class="badge">12</span>
      </a>

      <a href="#recientes" class="nav-item">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Recientes</span>
      </a>

      <a href="#compartidos" class="nav-item">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span>Compartidos conmigo</span>
        <span class="badge">3</span>
      </a>
    </nav>
  </div>

  <!-- Pie de la barra lateral -->
  <div class="sidebar-footer">
    <div class="storage-info">
      <span>Almacenamiento</span>
      <strong>2.4 / 5 GB</strong>
    </div>
    <div class="storage-bar">
      <div class="storage-progress" style="width: 48%;"></div>
    </div>
  </div>
</aside>

<style>
/* ESTILOS CSS LIMPIOS Y COMPACTOS ESTILO CANVA */
.canva-sidebar {
  width: 240px;
  height: 100vh;
  background-color: #FFFFFF;
  border-right: 1px solid #EAECEF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 10px;
  gap: 10px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.sidebar-top {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  padding: 2px 4px;
  min-height: 40px;
}

/* Regla requerida: max-height de 35px a 40px */
.sidebar-logo {
  max-height: 38px;
  width: auto;
  object-fit: contain;
  display: block;
}

.btn-create {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 9px 12px;
  background-color: #285943;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn-create:hover {
  background-color: #1E4332;
}

.btn-create .icon {
  width: 16px;
  height: 16px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  color: #4B5563;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.nav-item:hover {
  background-color: #F8F9FA;
  color: #111827;
}

.nav-item.active {
  background-color: #EBF6EE;
  color: #1B4332;
  font-weight: 600;
}

.nav-icon {
  width: 17px;
  height: 17px;
  color: #6B7280;
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.nav-item:hover .nav-icon {
  color: #1F2937;
}

.nav-item.active .nav-icon {
  color: #285943;
}

.badge {
  margin-left: auto;
  font-size: 11px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 10px;
  background-color: #F3F4F6;
  color: #6B7280;
}

.nav-item.active .badge {
  background-color: #285943;
  color: #FFFFFF;
}

.sidebar-footer {
  padding: 10px 4px 4px 4px;
  border-top: 1px solid #F3F4F6;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
  color: #6B7280;
}

.storage-info {
  display: flex;
  justify-content: space-between;
}

.storage-bar {
  width: 100%;
  height: 5px;
  background-color: #F3F4F6;
  border-radius: 4px;
  overflow: hidden;
}

.storage-progress {
  height: 100%;
  background-color: #52B788;
  border-radius: 4px;
}
</style>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawHtmlCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1B4332]/50 backdrop-blur-sm transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-4xl w-full border border-[#285943]/20 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-[#E5E7EB] flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#285943]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1B4332] font-sans">
                Barra Lateral (Sidebar) Estilo Canva
              </h3>
              <p className="text-xs text-[#285943]/70">
                Diseño compacto y limpio con el logo NATIVA (max-height: 38px)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white p-1 rounded-xl border border-[#E5E7EB] text-xs">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-[#285943] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111827]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Previa</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  activeTab === 'code'
                    ? 'bg-[#285943] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111827]'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Código HTML & CSS</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#6B7280] hover:text-[#111827] hover:bg-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#F8F9FA]">
          {activeTab === 'preview' ? (
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-center">
              {/* Sidebar en Vivo */}
              <div className="shadow-lg rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white h-[480px]">
                <CanvaSidebar />
              </div>

              {/* Panel explicativo */}
              <div className="flex-1 max-w-sm space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-2xs space-y-2.5">
                  <h4 className="text-sm font-bold text-[#1B4332] font-sans">
                    Características del Diseño Canva:
                  </h4>
                  <ul className="text-xs text-[#4B5563] space-y-1.5 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                      <strong>Logotipo:</strong> Ajustado a 38px con fondo transparente.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                      <strong>Espaciado:</strong> Padding compacto (12px 10px) y gap de 10px.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                      <strong>Opciones de Menú:</strong> Todos los proyectos, Recientes y Compartidos conmigo.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                      <strong>Interactividad:</strong> Botón para contraer/expandir la barra.
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleCopy}
                  className="w-full py-3 px-4 rounded-xl bg-[#285943] hover:bg-[#1E4332] text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#52B788]" />
                      <span>¡Código Copiado al Portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Código HTML + CSS</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 py-1.5 px-3 rounded-lg bg-[#285943] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1E4332] transition-colors z-10 cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
              <pre className="p-5 rounded-2xl bg-[#1E293B] text-[#E2E8F0] text-xs font-mono overflow-x-auto leading-relaxed max-h-[500px]">
                <code>{rawHtmlCss}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
