import React, { useState } from 'react';
import {
  FolderKanban,
  Clock,
  Users2,
  Sparkles,
  Bookmark,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

interface CanvaSidebarProps {
  onSelectOption?: (option: string) => void;
  className?: string;
}

export const CanvaSidebar: React.FC<CanvaSidebarProps> = ({
  onSelectOption,
  className = '',
}) => {
  const [activeItem, setActiveItem] = useState<string>('todos');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const menuItems = [
    {
      id: 'todos',
      label: 'Todos los proyectos',
      icon: FolderKanban,
      badge: '12',
    },
    {
      id: 'recientes',
      label: 'Recientes',
      icon: Clock,
    },
    {
      id: 'compartidos',
      label: 'Compartidos conmigo',
      icon: Users2,
      badge: '3',
    },
    {
      id: 'marca',
      label: 'Kits de Marca Nativa',
      icon: Sparkles,
    },
    {
      id: 'guardados',
      label: 'Guardados & Plantillas',
      icon: Bookmark,
    },
    {
      id: 'papelera',
      label: 'Papelera',
      icon: Trash2,
    },
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    if (onSelectOption) onSelectOption(id);
  };

  return (
    <aside
      className={`bg-white border-r border-[#E5E7EB] h-full flex flex-col justify-between transition-all duration-200 select-none ${
        isCollapsed ? 'w-[68px]' : 'w-[240px]'
      } ${className}`}
      style={{
        padding: '12px 10px',
        gap: '10px',
      }}
    >
      {/* Top Header con Logo */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between min-h-[40px] px-1">
          {!isCollapsed ? (
            <div className="flex items-center gap-2 overflow-hidden">
              <img
                src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                alt="NATIVA"
                className="max-h-[38px] w-auto object-contain transition-transform"
                style={{ maxHeight: '38px' }}
              />
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <img
                src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                alt="NATIVA"
                className="max-h-[32px] w-auto object-contain"
                style={{ maxHeight: '32px' }}
              />
            </div>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-md text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F3F4F6] transition-colors cursor-pointer shrink-0"
            title={isCollapsed ? 'Expandir barra lateral' : 'Contraer barra lateral'}
            aria-label="Alternar barra lateral"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Botón de acción rápida estilo Canva */}
        {!isCollapsed ? (
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#285943] hover:bg-[#1E4332] text-white text-xs font-semibold tracking-wide transition-all shadow-2xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Crear diseño</span>
          </button>
        ) : (
          <button
            type="button"
            className="w-full flex items-center justify-center py-2 rounded-lg bg-[#285943] hover:bg-[#1E4332] text-white transition-all shadow-2xs cursor-pointer"
            title="Crear diseño"
          >
            <Plus className="w-4 h-4" />
          </button>
        )}

        {/* Menú Vertical Compacto */}
        <nav className="flex flex-col gap-1.5 pt-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#EBF6EE] text-[#1B4332] font-semibold'
                    : 'text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827]'
                } ${isCollapsed ? 'justify-center px-0' : 'justify-between'}`}
                title={isCollapsed ? item.label : undefined}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#285943]' : 'text-[#6B7280]'
                    }`}
                  />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </div>

                {!isCollapsed && item.badge && (
                  <span
                    className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-[#285943] text-white'
                        : 'bg-[#F3F4F6] text-[#6B7280]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer del Sidebar con estado de almacenamiento */}
      {!isCollapsed ? (
        <div className="pt-3 border-t border-[#F3F4F6] text-[11px] text-[#6B7280] flex flex-col gap-1.5 px-1">
          <div className="flex items-center justify-between">
            <span>Almacenamiento Nativa</span>
            <span className="font-semibold text-[#1F2937]">2.4 / 5 GB</span>
          </div>
          <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div className="h-full bg-[#52B788] rounded-full w-[48%]" />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center py-2 text-[#9CA3AF]">
          <span className="w-2 h-2 rounded-full bg-[#52B788]" />
        </div>
      )}
    </aside>
  );
};
