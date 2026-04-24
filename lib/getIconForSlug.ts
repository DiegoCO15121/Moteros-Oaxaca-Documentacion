import {
  faShoppingCart,
  faUsers,
  faFileAlt,
  faBox,
  faTruck,
  faCreditCard,
  faComments,
  faStar,
  faChartLine,
  faClipboardList,
  faUserGear,
  faCashRegister,
  faBoxArchive,
  faUserGroup,
  faFileInvoiceDollar,
  faBuilding,
  faRightLeft,
  faTag,
  faStore,
  faTableCellsLarge,
  faBan,
  faMotorcycle,
  faCartShopping,
  faFileLines, faBriefcase,
  faBarcode,
  faBank, faShoppingBag,
  faArrowsRotate,
  faBoxesStacked,
  faBoxOpen,
  faSwatchbook,
  faPercent,
  faShapes,
  faUsersGear,
  faLock,
  faGear,
  faQrcode,
  faCalendarDays,
  faBook
} from "@fortawesome/free-solid-svg-icons";

export const getIconForSlug = (slug: string) => {
  const lowerSlug = slug.toLowerCase();

  if (lowerSlug.includes("centro") && lowerSlug.includes("capital"))
    return faBriefcase;
  if (lowerSlug.includes("bitacora") && lowerSlug.includes("tienda")) return faBook;

  if (lowerSlug.includes("ecommerce") || lowerSlug.includes("tienda"))
    return faShoppingCart;
  if (lowerSlug.includes("cliente") || lowerSlug.includes("admin")) return faUserGroup;
  if (lowerSlug.includes("productos")) {
    if (lowerSlug.includes("negados")) {
      return faBan;
    }
    if (lowerSlug.includes("exhibicion")) {
      return faShoppingBag;
    }

    if (lowerSlug.includes("actualizar")) {
      return faArrowsRotate;
    }

    if(lowerSlug.includes("tipo")) {
      return faSwatchbook
    }
    return faTableCellsLarge;
  }
  if (lowerSlug.includes("producto") || lowerSlug.includes("solicitud"))
    return faBox;
  if (lowerSlug.includes("traspaso")) return faRightLeft;
  if (lowerSlug.includes("rol")) return faLock;
  if (lowerSlug.includes("general")) return faGear;
  if (lowerSlug.includes("equipo")) return faUsersGear;
  if (lowerSlug.includes("capital") && lowerSlug.includes("humano")) return faShapes;
  if (lowerSlug.includes("devolucion")) return faTruck;
  if (lowerSlug.includes("cupon")) return faCreditCard;
  if (lowerSlug.includes("pregunta") || lowerSlug.includes("reseña"))
    return faComments;
  if (lowerSlug.includes("tendencia") || lowerSlug.includes("reporte"))
    return faChartLine;
  if (lowerSlug.includes("banner") || lowerSlug.includes("anuncio"))
    return faStar;
  if (lowerSlug.includes("sucursal")) return faBuilding;
  if (lowerSlug.includes("tipos") && lowerSlug.includes("productos"))
    return faBarcode;
  if (lowerSlug.includes("marca")) return faSwatchbook;
  if (lowerSlug.includes("compra")) return faShoppingBag;
  if (lowerSlug.includes("reloj")) return faQrcode;

  if (lowerSlug.includes("horario") && lowerSlug.includes("mensual")) return faCalendarDays;
  if (lowerSlug.includes("cuentas") && lowerSlug.includes("banco"))
    return faBank;
  /* if (lowerSlug.includes("configuracion") && lowerSlug.includes("razon"))
    return faGear; */
  if (lowerSlug.includes("kardex")) return faBoxesStacked;
  if (lowerSlug.includes("auditoria") && lowerSlug.includes("inventario"))
    return faBoxOpen;

  if (lowerSlug.includes("proveedores")) return faUsers;
  if (lowerSlug.includes("usuarios")) return faUserGear;
  if (lowerSlug.includes("facturas")) return faFileLines;
  if (lowerSlug.includes("manual") || lowerSlug.includes("modulo"))
    return faClipboardList;
  if (lowerSlug.includes("caja") || lowerSlug.includes("apertura"))
    return faCashRegister;
  if (lowerSlug.includes("categorias")) return faBoxArchive;
  if (lowerSlug.includes("motocicletas")) return faMotorcycle;
  if (lowerSlug.includes("reabastecimiento")) return faCartShopping;
  if (lowerSlug.includes("descuentos")) return faPercent;
  if (lowerSlug.includes("ventas")) {
    if(lowerSlug.includes('credito')) {
      return faCreditCard
    }
    return faTag
  }

  if (lowerSlug.includes("cotizaciones")) {
    if (lowerSlug.includes("linea")) {
      return faStore;
    }
    return faFileInvoiceDollar;
  }

  return faFileAlt;
};
