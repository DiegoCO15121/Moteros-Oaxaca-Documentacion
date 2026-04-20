"use client";

import { getIconForSlug } from "@/lib/getIconForSlug";
import {
  faChevronDown,
  faChevronUp, faHouse
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import { SidebarSection } from "@/data/sidebarConfig";

interface DocsAsideProps {
  sections: SidebarSection[];
}

export default function DocsAside({
  sections,
}: DocsAsideProps) {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
  const pathname = usePathname();

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          {section.title && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-3">
              {section.title}
            </h3>
          )}
          
          {section.collapsible ? (
            <div>
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="flex items-center justify-between text-[0.9rem] p-2 rounded 
                hover:bg-slate-500/60 text-white w-full"
              >
                <span>{section.title}</span>
                {expandedSections[sectionIndex] ? (
                  <FontAwesomeIcon icon={faChevronUp} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} size="sm" />
                )}
              </button>

              {expandedSections[sectionIndex] && (
                <div className="ml-4 mt-2 space-y-1">
                  {section.items.map((item) => {
                    const Icon = getIconForSlug(item.slug);
                    const isActive = pathname === `/docs/${item.slug}`;
                    return (
                      <div key={item.slug} className="ml-2">
                        <SidebarLink slug={item.slug} isActive={isActive} Icon={Icon} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = getIconForSlug(item.slug);
                const isActive = pathname === `/docs/${item.slug}`;
                
                return (
                  <div key={item.slug}>
                    <SidebarLink slug={item.slug} isActive={isActive} Icon={Icon} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
