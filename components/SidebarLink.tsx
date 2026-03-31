import { displayNames } from "@/data/displayNames";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type SidebarLinkProps = {
  slug: string;
  isActive: boolean;
  Icon?: IconDefinition;
};

export default function SidebarLink({
  slug,
  isActive,
  Icon,
}: SidebarLinkProps) {
  return (
    <Link
      href={`/docs/${slug}`}
      className={`flex items-center text-[0.9rem] p-2 rounded hover:bg-slate-500/60 text-white ${
        isActive ? "bg-slate-500/60" : ""
      }`}
    >
      {Icon && (
        <FontAwesomeIcon
          icon={Icon}
          className="mr-2 text-red-500"
          size={"xl"}
        />
      )}
      {displayNames[slug] ||
        slug.replaceAll("_", " ")}
    </Link>
  );
}
