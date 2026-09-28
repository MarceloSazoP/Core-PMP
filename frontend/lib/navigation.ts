import {
  Home,
  ListChecks,
  Briefcase,
  FolderKanban,
  LayoutGrid,
  ListTodo,
  Ticket,
  MessageSquare,
  Calendar,
  BarChart3,
  ShieldCheck,
  Settings,
} from "lucide-react";
import type { NavigationItem } from "@core-tecnologias-empresariales/core-shell";

// arq.md §105 — navegación principal de CORE-PMP. La visibilidad por rol/entitlement
// (§106) se resuelve pasando `hasPermission` al Sidebar de core-shell cuando exista RBAC real.
export const NAV_ITEMS: NavigationItem[] = [
  { id: "home", label: "Inicio", href: "/dashboard", icon: Home },
  { id: "my-work", label: "Mi trabajo", href: "/mi-trabajo", icon: ListChecks },
  { id: "portfolios", label: "Portafolios", href: "/portafolios", icon: Briefcase },
  { id: "projects", label: "Proyectos", href: "/proyectos", icon: FolderKanban },
  { id: "boards", label: "Tableros", href: "/tableros", icon: LayoutGrid },
  { id: "backlog", label: "Backlog", href: "/backlog", icon: ListTodo },
  { id: "tickets", label: "Tickets", href: "/tickets", icon: Ticket },
  { id: "chat", label: "Chat", href: "/chat", icon: MessageSquare },
  { id: "calendar", label: "Calendario", href: "/calendario", icon: Calendar },
  { id: "reports", label: "Reportes", href: "/reportes", icon: BarChart3 },
  { id: "governance", label: "Gobierno", href: "/gobierno", icon: ShieldCheck },
  { id: "admin", label: "Administración", href: "/administracion", icon: Settings },
];
