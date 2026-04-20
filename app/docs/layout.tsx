import { getSidebarConfig } from "@/data/sidebarConfig";
import DocsAside from "../../components/DocsAside";
import { UserRole } from "@/data/sidebarConfig";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userRole: UserRole = 'admin';

  const sidebarSections = getSidebarConfig(userRole);

  return (
    <div className="flex h-screen bg-neutral-100">
      <DocsAside sections={sidebarSections} />

      <main className="flex-1 overflow-y-auto ">
        {children}
      </main>
    </div>
  );
}