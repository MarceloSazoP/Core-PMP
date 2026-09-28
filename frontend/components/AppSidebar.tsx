"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Header, Sidebar } from "@core-tecnologias-empresariales/core-shell";
import { Button } from "@core-tecnologias-empresariales/core-ui/components";
import { NAV_ITEMS } from "@/lib/navigation";

// AppShell de core-shell no expone collapse en runtime (por diseño — ver sidebar.tsx del
// paquete), así que componemos Header + Sidebar directamente para el toggle que pidió el producto.
export function AppSidebar({
  children,
  userLabel,
}: {
  children: React.ReactNode;
  userLabel?: string;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col">
      <Header
        brand={
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-100 text-sm font-semibold text-bg-100">
              C
            </div>
            <span className="font-semibold text-sm text-text-100">CORE-PMP</span>
          </div>
        }
        actions={
          <div className="flex items-center gap-3">
            {userLabel && <span className="text-xs text-text-200">{userLabel}</span>}
            <Button
              variant="ghost"
              size="icon"
              aria-label={collapsed ? "Expandir navegación" : "Colapsar navegación"}
              onClick={() => setCollapsed((c) => !c)}
            >
              {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            </Button>
          </div>
        }
        className="bg-bg-100 px-5"
      />
      <div className="flex min-h-0 flex-1">
        <aside
          className="shrink-0 border-r border-border bg-bg-100 transition-[width] duration-150"
          style={{ width: collapsed ? 60 : 224 }}
        >
          <Sidebar items={NAV_ITEMS} currentPath={pathname} collapsed={collapsed} className="p-3" />
        </aside>
        <main className="min-w-0 flex-1 overflow-y-auto bg-bg-200">{children}</main>
      </div>
    </div>
  );
}
