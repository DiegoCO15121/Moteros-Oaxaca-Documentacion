"use client";

import { getIconForSlug } from "@/lib/getIconForSlug";
import {
  faChevronDown,
  faBagShopping,
  faChevronUp, faHouse
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLink from "./SidebarLink";

interface DocsAsideProps {
  otherSlugs: string[];
  ecommerceSlugs: string[];
}

export default function DocsAside({
  otherSlugs,
  ecommerceSlugs,
}: DocsAsideProps) {
  const [ecommerceExpanded, setEcommerceExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r px-4 py-6 overflow-y-auto scrollbar-hide bg-black/90">
      <div className="max-w-46 mx-auto">
        <img className="w-full h-full" src="/images/moteros.webp" />
      </div>

      <h2 className="font-semibold my-5 text-red-500 uppercase text-center text-xl">
        Manual de Usuario
      </h2>

      <div className="space-y-2 mb-2">
        <Link href="/docs">
          <div
            className={`flex items-center text-[0.9rem] p-2 rounded hover:bg-slate-500/60 text-white cursor-pointer ${
              pathname === "/docs" ? "bg-slate-500/60" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="mr-2 text-red-500"
              size={"xl"}
              
            />
            <span>Inicio</span>
          </div>
        </Link>
        {otherSlugs.map((slug) => {
          const Icon = getIconForSlug(slug);
          const isActive = pathname === `/docs/${slug}`;
          return (
            <div key={slug}>
              <SidebarLink slug={slug} isActive={isActive} Icon={Icon} />
            </div>
          );
        })}
      </div>

      <div className="">
        {ecommerceSlugs.length > 0 && (
          <button
            onClick={() => setEcommerceExpanded(!ecommerceExpanded)}
            className="flex items-center justify-between text-[0.9rem] p-2 rounded 
          hover:bg-slate-500/60 text-white w-full "
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="mr-2 text-red-500"
                size={"xl"}
              />
              <span>Ecommerce</span>
            </div>

            {ecommerceExpanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        )}
        {ecommerceExpanded && ecommerceSlugs.length > 0 && (
          <div className="ml-4 mt-2 space-y-1">
            {ecommerceSlugs.map((slug) => {
              const isActive = pathname === `/docs/${slug}`;
              return (
                <div key={slug} className="ml-5">
                  <SidebarLink slug={slug} isActive={isActive} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
