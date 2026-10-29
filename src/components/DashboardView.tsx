import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Ticket,
  Sprout,
  Settings,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Users,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Filter,
  Download,
  Eye,
  Store
} from 'lucide-react';
import { NATIVA_PRODUCTS } from '../data/nativaData';

interface DashboardViewProps {
  onBackToStore: () => void;
  onOpenCart?: () => void;
  cartCount?: number;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onBackToStore }) => {
  const [activeTab, setActiveTab] = useState<'resumen' | 'catalogo' | 'pedidos' | 'asistentes' | 'marca'>('resumen');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample real-time dashboard data for Nativa
  const [productsStock, setProductsStock] = useState([
    { id: 'te-vital', name: 'Té Vital', category: 'Infusión', stock: 142, price: 28000, batch: 'L-2026-08', status: 'Optimo' },
    { id: 'granola-nativa', name: 'Granola Nativa', category: 'Alimento', stock: 86, price: 34000, batch: 'L-2026-09', status: 'Optimo' },
    { id: 'miel-de-montana', name: 'Miel de Montaña', category: 'Miel Pura', stock: 34, price: 32000, batch: 'L-2026-05', status: 'Bajo stock' },
    { id: 'infusion-relax', name: 'Infusión Relax', category: 'Infusión', stock: 95, price: 28000, batch: 'L-2026-08', status: 'Optimo' },
  ]);

  const recentOrders = [
    { id: 'ORD-8921', client: 'Camila Montoya', product: '2x Té Vital + 1x Miel', total: 88000, channel: 'WhatsApp', status: 'Despachado', time: 'Hace 25 min' },
    { id: 'ORD-8920', client: 'Andrés Gómez', product: '1x Granola Nativa', total: 34000, channel: 'Tienda Web', status: 'Preparando', time: 'Hace 1 hora' },
    { id: 'ORD-8919', client: 'Mariana Silva', product: '1x Kit Ritual Té Vital', total: 75000, channel: 'WhatsApp', status: 'Pagado', time: 'Hace 3 horas' },
    { id: 'ORD-8918', client: 'Carlos Pardo', product: '2x Infusión Relax', total: 56000, channel: 'Tienda Web', status: 'Despachado', time: 'Ayer' },
  ];

  const attendeesList = [
    { id: 'NAT-94821', name: 'Sofía Valenzuela', email: 'sofia.v@gmail.com', modality: 'Presencial (Bogotá)', tasting: 'Té Vital', date: 'Hoy 09:14' },
    { id: 'NAT-63910', name: 'Felipe Sandoval', email: 'felipe.sando@out.com', modality: 'Presencial (Bogotá)', tasting: 'Granola Nativa', date: 'Ayer 18:32' },
    { id: 'NAT-81920', name: 'Lucía Benavides', email: 'lucia.b@eco.co', modality: 'Virtual en Vivo', tasting: 'Infusión Relax', date: 'Ayer 14:15' },
    { id: 'NAT-71044', name: 'Daniela Restrepo', email: 'dani.res@gmail.com', modality: 'Presencial (Bogotá)', tasting: 'Miel de Montaña', date: '20 Oct' },
    { id: 'NAT-55102', name: 'Mateo Cárdenas', email: 'mateo@cardenas.org', modality: 'Virtual en Vivo', tasting: 'Té Vital', date: '19 Oct' },
  ];

  const sidebarMenuItems = [
    { id: 'resumen', label: 'Resumen General', icon: LayoutDashboard },
    { id: 'catalogo', label: 'Catálogo & Stock', icon: Package, badge: '4' },
    { id: 'pedidos', label: 'Pedidos & Ventas', icon: ShoppingBag, badge: 'Reciente' },
    { id: 'asistentes', label: 'Asistentes Lanzamiento', icon: Ticket, badge: '14 cupos' },
    { id: 'marca', label: 'Identidad de Marca', icon: Sprout },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans flex flex-col md:flex-row antialiased selection:bg-[#40916C] selection:text-white">
      {/* 
        PANEL LATERAL IZQUIERDO ULTRA COMPACTO Y MODERNO (Estilo Canva / Software Profesional)
      */}
      <aside className="w-full md:w-60 lg:w-64 bg-white border-r border-[#E9ECEF] flex flex-col justify-between shrink-0 z-30 select-none">
        <div>
          {/* Esquina superior izquierda: Logo transparente escalado en tamaño pequeño, claro y nítido */}
          <div className="p-4 border-b border-[#F1F3F5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-auto max-w-[170px] overflow-hidden flex items-center">
                <img
                  src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                  alt="NATIVA - Productos Naturales y Bienestar"
                  className="h-8 w-auto object-contain"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <span className="hidden lg:inline-flex text-[9px] font-bold font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#EBF6EE] text-[#2D6A4F] border border-[#D0EBD8]">
              v2.4
            </span>
          </div>

          {/* Selector rápido: Volver a la Tienda / Landing */}
          <div className="px-3 pt-3 pb-1">
            <button
              onClick={onBackToStore}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#FAF9F6] hover:bg-[#EBF6EE] text-[#1B4332] text-xs font-semibold transition-all border border-[#285943]/10 hover:border-[#40916C]/40 group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-[#40916C]" />
                <span>Ver Tienda Pública</span>
              </div>
              <ArrowUpRight className="w-3 h-3 text-[#285943]/50 group-hover:text-[#1B4332] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Menú lateral vertical con íconos sencillos y poco espacio entre filas */}
          <div className="p-2.5">
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8] px-2.5 py-1.5">
              Plataforma
            </div>

            <nav className="space-y-0.5">
              {sidebarMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#1B4332] text-white shadow-xs font-semibold'
                        : 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#52B788]' : 'text-[#64748B]'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md font-bold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#F1F5F9] text-[#64748B]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-3 border-t border-[#F1F3F5]">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8] px-2.5 py-1">
                Herramientas
              </div>
              <div className="space-y-0.5 mt-1">
                <button
                  onClick={() => setActiveTab('marca')}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                >
                  <Sprout className="w-4 h-4 text-[#64748B]" />
                  <span>Kits & Recursos de Marca</span>
                </button>
                <button
                  onClick={() => alert('Módulo de ajustes del sistema')}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                >
                  <Settings className="w-4 h-4 text-[#64748B]" />
                  <span>Configuración de Envíos</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pie del menú lateral: Usuario autenticado estilo Canva */}
        <div className="p-3 border-t border-[#F1F3F5] bg-[#FCFCFD]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                VR
              </div>
              <div className="min-w-0 leading-tight">
                <div className="text-xs font-semibold text-[#0F172A] truncate">Valentina R.</div>
                <div className="text-[10px] text-[#64748B] truncate">Herbalista & Admin</div>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#52B788]" title="Sistema en línea" />
          </div>
        </div>
      </aside>

      {/* 
        CONTENIDO PRINCIPAL DEL DASHBOARD (Lienzo tipo Software Profesional / Canva)
      */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Barra de cabecera superior del Dashboard */}
        <header className="h-16 bg-white border-b border-[#E9ECEF] px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-20">
          {/* Breadcrumb / Título contextual */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider font-sans">
              NATIVA Dashboard
            </span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-sm font-bold text-[#0F172A] capitalize">
              {activeTab === 'resumen'
                ? 'Panel de Control Principal'
                : activeTab === 'catalogo'
                ? 'Inventario & Lotes Botánicos'
                : activeTab === 'pedidos'
                ? 'Gestión de Pedidos'
                : activeTab === 'asistentes'
                ? 'Registro de Asistentes al Evento'
                : 'Identidad Gráfica & Logotipos'}
            </span>
          </div>

          {/* Barra de búsqueda y acciones */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar pedido, cliente, producto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:border-[#1B4332] outline-none w-64 transition-all"
              />
            </div>

            <button
              onClick={() => alert('Notificaciones: 3 nuevos registros al lanzamiento')}
              className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] relative cursor-pointer"
              title="Notificaciones"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C97852]" />
            </button>

            <button
              onClick={onBackToStore}
              className="px-3.5 py-1.5 rounded-lg bg-[#1B4332] text-white text-xs font-semibold hover:bg-[#2D6A4F] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <span>Ir a la Tienda</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </header>

        {/* Área de trabajo del Dashboard */}
        <div className="p-4 sm:p-8 space-y-6 max-w-7xl">
          {/* TAB: RESUMEN GENERAL */}
          {activeTab === 'resumen' && (
            <>
              {/* Tarjetas KPI compactas con diseño sobrio y números tabulares */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E9ECEF] shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-medium">
                    <span>Ventas del Mes (COP)</span>
                    <span className="text-[#52B788] flex items-center gap-0.5 text-[11px] font-semibold">
                      <TrendingUp className="w-3 h-3" /> +18.4%
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#0F172A] tabular-nums">
                    $4.820.000
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">118 pedidos procesados</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E9ECEF] shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-medium">
                    <span>Inscritos al Lanzamiento</span>
                    <span className="text-[#C97852] font-semibold text-[11px]">82.5% Lleno</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#0F172A] tabular-nums">
                    66 <span className="text-sm font-normal text-[#64748B]">/ 80</span>
                  </div>
                  <div className="text-[11px] text-[#52B788] mt-1 font-medium">14 cupos presenciales libres</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E9ECEF] shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-medium">
                    <span>Té Vital (Producto Estrella)</span>
                    <span className="text-[#40916C] font-semibold text-[11px]">Alta Demanda</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#0F172A] tabular-nums">
                    142 <span className="text-sm font-normal text-[#64748B]">unidades</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">Lote L-2026-08 listo</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E9ECEF] shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-medium">
                    <span>Canales de Contacto</span>
                    <span className="text-[#25D366] font-semibold text-[11px]">WhatsApp 74%</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#0F172A] tabular-nums">
                    4.9 / 5.0
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">Satisfacción de compra</div>
                </div>
              </div>

              {/* 2 Columnas de información operativa */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Pedidos Recientes */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E9ECEF] p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F3F5]">
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">Pedidos Recientes</h3>
                      <p className="text-xs text-[#64748B]">Órdenes directas por WhatsApp y tienda</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('pedidos')}
                      className="text-xs font-semibold text-[#1B4332] hover:text-[#40916C] transition-colors"
                    >
                      Ver todos &rarr;
                    </button>
                  </div>

                  <div className="divide-y divide-[#F1F3F5]">
                    {recentOrders.map((ord) => (
                      <div key={ord.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#0F172A]">{ord.id}</span>
                            <span className="font-semibold text-[#334155] truncate">{ord.client}</span>
                          </div>
                          <div className="text-[11px] text-[#64748B] truncate mt-0.5">{ord.product}</div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="font-mono font-bold text-[#0F172A] tabular-nums">
                            ${ord.total.toLocaleString('es-CO')}
                          </div>
                          <div className="flex items-center justify-end gap-1.5 mt-0.5">
                            <span className="text-[10px] text-[#94A3B8]">{ord.channel}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evento de Lanzamiento: Asistentes Confirmados */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E9ECEF] p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F3F5]">
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">Lanzamiento NATIVA 2026</h3>
                      <p className="text-xs text-[#64748B]">Últimos registros de asistencia</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('asistentes')}
                      className="text-xs font-semibold text-[#1B4332] hover:text-[#40916C] transition-colors"
                    >
                      Lista (66) &rarr;
                    </button>
                  </div>

                  <div className="space-y-3">
                    {attendeesList.slice(0, 4).map((att) => (
                      <div key={att.id} className="p-3 rounded-xl bg-[#FAF9F6] border border-[#285943]/10 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-[#0F172A]">{att.name}</div>
                          <div className="text-[11px] text-[#64748B] flex items-center gap-1.5 mt-0.5">
                            <span>{att.modality}</span>
                            <span>·</span>
                            <span className="text-[#C97852] font-medium">{att.tasting}</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] bg-white px-2 py-1 rounded border border-[#E2E8F0] text-[#475569]">
                          {att.id}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB: CATÁLOGO & INVENTARIO */}
          {activeTab === 'catalogo' && (
            <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F1F3F5]">
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">Inventario de Productos & Lotes</h3>
                  <p className="text-xs text-[#64748B]">Control de existencias de la línea artesanal NATIVA</p>
                </div>
                <button
                  onClick={() => alert('Función: Crear nuevo lote de producción')}
                  className="px-4 py-2 rounded-lg bg-[#1B4332] text-white text-xs font-semibold hover:bg-[#2D6A4F] transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Nuevo Lote de Cosecha</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#64748B] font-semibold uppercase text-[11px]">
                      <th className="py-3 px-3">Producto</th>
                      <th className="py-3 px-3">Categoría</th>
                      <th className="py-3 px-3">Lote Activo</th>
                      <th className="py-3 px-3 text-right">Precio (COP)</th>
                      <th className="py-3 px-3 text-right">Stock Disponible</th>
                      <th className="py-3 px-3 text-center">Estado</th>
                      <th className="py-3 px-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F3F5]">
                    {productsStock.map((prod) => (
                      <tr key={prod.id} className="hover:bg-[#F8FAFC] transition-colors">
                        <td className="py-3 px-3 font-bold text-[#0F172A]">{prod.name}</td>
                        <td className="py-3 px-3 text-[#64748B]">{prod.category}</td>
                        <td className="py-3 px-3 font-mono text-[#475569]">{prod.batch}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold tabular-nums">
                          ${prod.price.toLocaleString('es-CO')}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-[#1B4332] tabular-nums">
                          {prod.stock} unids.
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            prod.status === 'Optimo'
                              ? 'bg-[#EBF6EE] text-[#2D6A4F]'
                              : 'bg-amber-50 text-amber-700'
                          }`}>
                            {prod.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => alert(`Ajustando stock de ${prod.name}`)}
                            className="text-xs font-semibold text-[#1B4332] hover:underline cursor-pointer"
                          >
                            Modificar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: PEDIDOS */}
          {activeTab === 'pedidos' && (
            <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F1F3F5]">
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">Registro de Pedidos</h3>
                  <p className="text-xs text-[#64748B]">Órdenes directas sincronizadas con WhatsApp y tienda web</p>
                </div>
                <button
                  onClick={() => alert('Exportando pedidos a Excel/CSV')}
                  className="px-3.5 py-1.5 rounded-lg border border-[#E2E8F0] hover:bg-[#F8FAFC] text-xs font-semibold text-[#334155] flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar CSV</span>
                </button>
              </div>

              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 rounded-xl border border-[#E9ECEF] hover:border-[#1B4332]/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-[#0F172A]">{order.id}</span>
                        <span className="text-[11px] font-semibold text-[#64748B]">· {order.channel}</span>
                        <span className="text-[10px] text-[#94A3B8]">{order.time}</span>
                      </div>
                      <div className="font-bold text-[#1B4332] text-sm">{order.client}</div>
                      <div className="text-xs text-[#64748B]">{order.product}</div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                      <div className="font-mono text-base font-bold text-[#0F172A] tabular-nums">
                        ${order.total.toLocaleString('es-CO')} COP
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF6EE] text-[#2D6A4F]">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ASISTENTES AL EVENTO */}
          {activeTab === 'asistentes' && (
            <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F1F3F5]">
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">Asistentes Registrados al Lanzamiento</h3>
                  <p className="text-xs text-[#64748B]">Sábado 14 de Noviembre · Casa Boutique Quinta Camacho</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#C97852] bg-[#FAF6EE] px-3 py-1.5 rounded-lg border border-[#C97852]/20">
                    14 cupos presenciales restantes
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#F1F3F5]">
                {attendeesList.map((att) => (
                  <div key={att.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0F172A]">{att.name}</span>
                        <span className="font-mono text-[10px] text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded">
                          {att.id}
                        </span>
                      </div>
                      <div className="text-xs text-[#64748B] mt-0.5">{att.email}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#334155] font-medium">{att.modality}</span>
                      <span className="text-[11px] font-semibold text-[#52B788] bg-[#EBF6EE] px-2.5 py-0.5 rounded-full">
                        Degustará: {att.tasting}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: IDENTIDAD DE MARCA */}
          {activeTab === 'marca' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 shadow-2xs">
                <h3 className="text-base font-bold text-[#0F172A] mb-1">Identidad Gráfica Oficial</h3>
                <p className="text-xs text-[#64748B] mb-6">Especificaciones de isotipo, colores corporativos y logotipo transparente</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-[#285943]/10 flex flex-col items-center justify-center text-center">
                    <img
                      src="/assets/aistudio/logotipo-removebg-preview_1eba05d6.png"
                      alt="NATIVA"
                      className="max-h-48 w-auto object-contain"
                    />
                    <div className="mt-4 text-xs font-bold text-[#1B4332]">
                      Logotipo Completo Oficial
                    </div>
                    <div className="text-[11px] text-[#64748B]">Isotipo 'A' con brote de hojas verdes</div>
                  </div>

                  <div className="space-y-4 text-xs text-[#334155]">
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Paleta Cromática:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="p-2.5 rounded-xl bg-[#285943] text-white text-[11px] font-bold">
                          #285943<br/><span className="font-normal opacity-80 text-[10px]">Verde Bosque</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#6F9E73] text-white text-[11px] font-bold">
                          #6F9E73<br/><span className="font-normal opacity-80 text-[10px]">Verde Natural</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#F3EBDD] text-[#285943] text-[11px] font-bold border border-[#E2D7C5]">
                          #F3EBDD<br/><span className="font-normal opacity-80 text-[10px]">Beige</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#C97852] text-white text-[11px] font-bold">
                          #C97852<br/><span className="font-normal opacity-80 text-[10px]">Terracota</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="font-bold text-[#0F172A] mb-1">Tipografías Autorizadas:</div>
                      <p className="text-[11px] text-[#64748B]">
                        • <strong>Montserrat:</strong> Títulos, subtítulos, botones e interfaz de usuario.<br/>
                        • <strong>Lora:</strong> Citas emocionales, frases destacadas y testimonios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
