"use client";

import { getIconForSlug } from "@/lib/getIconForSlug";
import {
  faChevronDown,
  faChevronRight,
  faBagShopping,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <aside className="w-72 border-r p-4 overflow-y-auto bg-zinc-800!">
      <h2 className="font-bold my-5 text-red-500! uppercase text-center text-xl">
        Manual de Usuario
      </h2>

      <div className="space-y-2 mb-2">
        {otherSlugs.map((slug) => {
          const Icon = getIconForSlug(slug);
          return (
            <div key={slug}>
              <a
                href={`/docs/${slug}`}
                className="flex items-center text-md font-bold p-2 rounded hover:bg-slate-500/60 text-white"
              >
                <FontAwesomeIcon icon={Icon} className="mr-2 text-red-500" size={'xl'} />
                {slug.replaceAll("_", " ")}
              </a>
            </div>
          );
        })}
      </div>

      <div className="">
        <button
          onClick={() => setEcommerceExpanded(!ecommerceExpanded)}
          className="flex items-center justify-between text-md font-semibold p-2 rounded hover:bg-slate-500/60 text-white w-full "
        >
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="mr-2 text-red-500"
              size={'xl'}
            />
            <span>Ecommerce</span>
          </div>

          {ecommerceExpanded ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        {ecommerceExpanded && (
          <div className="ml-4 mt-2">
            {ecommerceSlugs.map((slug) => {
              /*    const Icon = getIconForSlug(slug); */
              return (
                <div key={slug} className="ml-5">
                  <a
                    href={`/docs/${slug}`}
                    className="flex items-center font-semibold text-md p-2 rounded 
                    hover:bg-slate-500/60 text-white"
                  >
                    {/* <FontAwesomeIcon icon={Icon} className="mr-2" /> */}
                    {slug.replaceAll("_", " ").replaceAll("Ecommerce", "")}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
