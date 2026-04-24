export type UserRole = "admin" | "seller";

export interface SidebarItem {
  slug: string;
  icon?: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
  visibleTo: UserRole[];
  collapsible?: boolean;
}

export const sidebarConfig: Record<UserRole, SidebarSection[]> = {
  admin: [
    {
      title: "Capital Humano",
      visibleTo: ["admin"],
      collapsible: true,
      items: [
        { slug: "Capital_Humano_Reporte_General" },
        { slug: "Capital_Humano_Horarios_Sucursal" },
        { slug: "Capital_Humano_Calendario_General" },
        { slug: "Capital_Humano_Puestos" },
        { slug: "Capital_Humano_Puestos_Sucursal" },
        { slug: "Capital_Humano_Reporte_Chequeo" },
        { slug: "Capital_Humano_Permisos" },
        { slug: "Capital_Humano_Temporadas_Bloqueadas" },
        { slug: "Capital_Humano_Cumpleanos" },
        { slug: "Capital_Humano_Tipo_Documento" },
        { slug: "Capital_Humano_Expediente" },
        { slug: "Capital_Humano_Vacaciones" },
        { slug: "Capital_Humano_Incidencias" },
      ],
    },
    {
      title: "TIENDA",
      visibleTo: ["admin"],
      items: [
        { slug: "Actualizar_Productos" },
        { slug: "Kardex" },
        { slug: "Auditoria_Inventario" },
        { slug: "Traspasos" },
        { slug: "Productos" },
        { slug: "Productos_Negados" },
        { slug: "Productos_Exhibicion" },
        { slug: "Categorias" },
        { slug: "Motocicletas" },
        { slug: "Proveedores" },
        { slug: "Compras" },
        { slug: "Reabastecimiento" },
        { slug: "Clientes" },
        { slug: "Tipos_Productos" },
        { slug: "Marcas" },
        { slug: "Sucursales" },
        { slug: "Cuentas_Banco" },
        { slug: "Cotizaciones" },
        { slug: "Cotizaciones_en_Linea" },
        { slug: "Ventas" },
        { slug: "Ventas_Credito" },
        { slug: "Configuracion_Razon_Social" },
        { slug: "Facturas" },
        { slug: "Cajas" },
        { slug: "Descuentos_dias_especiales" },
      ],
    },
    {
      title: "Ecommerce",
      visibleTo: ["admin"],
      collapsible: true,
      items: [
        { slug: "Ecommerce_Banner" },
        { slug: "Ecommerce_Anuncios" },
        { slug: "Ecommerce_Tendencia" },
        { slug: "Ecommerce_Tienda" },
        { slug: "Ecommerce_Resenas" },
        { slug: "Ecommerce_Aliados" },
        { slug: "Ecommerce_Preguntas_Frecuentes" },
        { slug: "Ecommerce_Redes_Sociales" },
        { slug: "Ecommerce_Cupones" },
        { slug: "Ecommerce_Grupos_Categorias" },
      ],
    },
    {
      title: "Reportes",
      visibleTo: ["admin"],
      collapsible: true,
      items: [
        { slug: "Reportes_General" },
        { slug: "Reportes_Resumen_Sucursal" },
        { slug: "Reportes_Ventas_Utilidades" },
        { slug: "Reportes_Ventas_Rango_Fecha" },
        { slug: "Reportes_Performance_Empleados" },
        { slug: "Reporte_Inventario" },
        { slug: "Reportes_Productos_sin_Ventas" },
        { slug: "Reportes_Detallado" },
        { slug: "Reportes_Clientes" },
      ],
    },
    {
      title: "CONFIGURACIÓN",
      visibleTo: ["admin"],
      items: [
        { slug: "Administradores" },
        { slug: "Equipo" },
        { slug: "Roles" },
        { slug: "Usuarios" },
        { slug: "General" },
      ],
    },
  ],
  seller: [
    {
      title: "TIENDA",
      visibleTo: ["seller"],
      items: [
        { slug: "Productos" },
        { slug: "Traspasos" },
        { slug: "Apertura_de_Caja" },
        { slug: "Devoluciones" },
        { slug: "Solicitud_Producto" },
      ],
    },
    {
      title: "",
      visibleTo: ["seller"],
      items: [
        { slug: "Clientes" },
        { slug: "Cotizaciones" },
        { slug: "Cotizaciones_en_Linea" },
        { slug: "Facturas" },
        { slug: "Productos_Negados" },
      ],
    },
  ],
};

export function getSidebarConfig(role: UserRole) {
  return sidebarConfig[role];
}
