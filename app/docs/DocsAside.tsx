"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DocsAsideProps {
  otherSlugs: string[];
  ecommerceSlugs: string[];
}

export default function DocsAside({
  otherSlugs,
  ecommerceSlugs,
}: DocsAsideProps) {
  const [ecommerceExpanded, setEcommerceExpanded] = useState(false);

  return (
    <aside className="w-72 border-r p-4 overflow-y-auto bg-black!">
      <h2 className="font-bold mb-4 text-red-500! uppercase text-center text-xl">
        Manual de Usuario
      </h2>

      {otherSlugs.map((slug) => (
        <div key={slug}>
          <a
            href={`/docs/${slug}`}
            className="block text-md font-bold py-1 px-2 rounded hover:bg-slate-500/60 text-white"
          >
            {slug.replaceAll("_", " ")}
          </a>
        </div>
      ))}

      <div className="mt-4">
        <button
          onClick={() => setEcommerceExpanded(!ecommerceExpanded)}
          className="flex items-center text-md font-bold py-1 px-2 rounded hover:bg-slate-500/60 text-white w-full text-left "
        >
          Ecommerce {ecommerceExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        {ecommerceExpanded && (
          <div className="ml-4 mt-2">
            {ecommerceSlugs.map((slug) => (
              <div key={slug}>
                <a
                  href={`/docs/${slug}`}
                  className="block text-sm py-1 px-2 rounded hover:bg-slate-500/60 text-white"
                >
                  {slug.replaceAll("_", " ")}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
