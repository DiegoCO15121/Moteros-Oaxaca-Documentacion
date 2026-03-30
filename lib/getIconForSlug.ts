import {
    faShoppingCart,
    faUsers, faFileAlt,
    faBox,
    faTruck,
    faCreditCard,
    faComments,
    faStar,
    faChartLine, faClipboardList, faUserGear,
    faCashRegister,
    faBoxArchive,
    faUserGroup,
    faFileInvoiceDollar,
    faBuilding,
    faRightLeft,
    faTag
} from "@fortawesome/free-solid-svg-icons";

export const getIconForSlug = (slug: string) => {
  const lowerSlug = slug.toLowerCase();
  if (lowerSlug.includes("ecommerce") || lowerSlug.includes("tienda"))
    return faShoppingCart;
  if (lowerSlug.includes("cliente")) return faUserGroup;
  if (lowerSlug.includes("venta")) return faTag;
  if (lowerSlug.includes("producto") || lowerSlug.includes("solicitud"))
    return faBox;
  if (lowerSlug.includes("traspaso")) return faRightLeft;

  if (lowerSlug.includes("devolucion")) return faTruck;
  if (lowerSlug.includes("cupon") || lowerSlug.includes("factura"))
    return faCreditCard;
  if (lowerSlug.includes("pregunta") || lowerSlug.includes("reseña"))
    return faComments;
  if (lowerSlug.includes("tendencia") || lowerSlug.includes("reporte"))
    return faChartLine;
  if (lowerSlug.includes("banner") || lowerSlug.includes("anuncio"))
    return faStar;
  if (lowerSlug.includes("sucursal")) return faBuilding;

  if (lowerSlug.includes("proveedores")) return faUsers;
  if (
    lowerSlug.includes("usuario") ||
    lowerSlug.includes("alta") ||
    lowerSlug.includes("edicion")
  )
    return faUserGear;
  if (lowerSlug.includes("manual") || lowerSlug.includes("modulo"))
    return faClipboardList;
  if (lowerSlug.includes("caja") || lowerSlug.includes("apertura"))
    return faCashRegister;
  if (lowerSlug.includes("categorias")) return faBoxArchive;

  if (lowerSlug.includes("cotizaciones") && lowerSlug.includes("línea"))
    return faFileInvoiceDollar;
  return faFileAlt;
};
