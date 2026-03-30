import { getAllSlugs } from "@/lib/mdx";
import DocsAside from "./DocsAside";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slugs = getAllSlugs();
  const ecommerceSlugs = slugs.filter(slug => slug.toLowerCase().includes("ecommerce"));
  const otherSlugs = slugs.filter(slug => !slug.toLowerCase().includes("ecommerce"));

  return (
    <div className="flex h-screen">
      <DocsAside otherSlugs={otherSlugs} ecommerceSlugs={ecommerceSlugs} />

      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
}