import { getAllSlugs } from "@/lib/mdx";
import DocsAside from "../../components/DocsAside";

type userRoleType = 'seller'  | 'admin'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slugs = getAllSlugs();

  const sharedSlugs = ['Clientes', 'Cotizaciones', 'Cotizaciones_en_Linea', 'Facturas', 'Productos_Negados'];
  const sellerOnlySlugs = ['Apertura_de_Caja', 'Devoluciones', 'Solicitud_Producto', 'Traspasos', 'Productos'];
  const adminOnlySlugs = slugs.filter(slug => !sharedSlugs.includes(slug) && !sellerOnlySlugs.includes(slug));

  let userRole = 'admin'; 

  let filteredOtherSlugs: string[];
  let filteredEcommerceSlugs: string[];

  if (userRole !== 'seller') {
    filteredOtherSlugs = [...sharedSlugs, ...adminOnlySlugs].filter(slug => !slug.toLowerCase().includes("ecommerce"));
    filteredEcommerceSlugs = slugs.filter(slug => slug.toLowerCase().includes("ecommerce"));
  } else{
    filteredOtherSlugs = [...sharedSlugs, ...sellerOnlySlugs].filter(slug => !slug.toLowerCase().includes("ecommerce"));
    filteredEcommerceSlugs = [];
  } 

  return (
    <div className="flex h-screen bg-neutral-100">
      <DocsAside otherSlugs={filteredOtherSlugs} ecommerceSlugs={filteredEcommerceSlugs} />

      <main className="flex-1 overflow-y-auto ">
        {children}
      </main>
    </div>
  );
}