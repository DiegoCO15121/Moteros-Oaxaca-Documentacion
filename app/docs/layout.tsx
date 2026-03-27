import Link from "next/link";
import { getAllSlugs } from "@/lib/mdx";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slugs = getAllSlugs();

  return (
    <div className="flex h-screen">
      <aside className="w-72 border-r p-4 overflow-y-auto bg-black!">
        <h2 className="font-bold mb-4 text-red-500! uppercase text-center text-xl">Manual de Usuario</h2>

        {slugs.map((slug) => (
          <div key={slug}>
            <a
              href={`/docs/${slug}`}
              className="block text-sm font-bold py-1 px-2 rounded hover:bg-slate-500/60 text-white"
            >
              {slug.replaceAll("_", " ")}
            </a>
          </div>
        ))}
      </aside>

      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
}