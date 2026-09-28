export type ProjectStatus = "ON_TRACK" | "AT_RISK" | "BLOCKED" | "COMPLETED";

export const statusLabel: Record<ProjectStatus, string> = {
  ON_TRACK: "En curso",
  AT_RISK: "En riesgo",
  BLOCKED: "Bloqueado",
  COMPLETED: "Completado",
};

export const statusColor: Record<ProjectStatus, string> = {
  ON_TRACK: "var(--color-success)",
  AT_RISK: "var(--color-warning)",
  BLOCKED: "var(--color-danger)",
  COMPLETED: "var(--color-info)",
};

export type KpiFormat = "int" | "percent" | "currencyM";

export const kpis: { label: string; value: number; format: KpiFormat; mono?: boolean }[] = [
  { label: "Proyectos activos", value: 12, format: "int" },
  { label: "Avance promedio", value: 68, format: "percent" },
  { label: "Presupuesto ejecutado", value: 482.5, format: "currencyM", mono: true },
  { label: "Tickets abiertos", value: 23, format: "int" },
];

export const projects: { code: string; name: string; manager: string; progress: number; status: ProjectStatus; budget: string }[] = [
  { code: "PRJ-001", name: "Implementación ERP", manager: "M. Sazo", progress: 72, status: "ON_TRACK", budget: "$120.0M" },
  { code: "PRJ-002", name: "Migración Core Contador", manager: "A. Rivas", progress: 45, status: "AT_RISK", budget: "$85.4M" },
  { code: "PRJ-003", name: "Portal CorePyme v2", manager: "F. Muñoz", progress: 18, status: "BLOCKED", budget: "$60.0M" },
  { code: "PRJ-004", name: "Auditoría ISO 27001", manager: "C. Vera", progress: 91, status: "ON_TRACK", budget: "$32.1M" },
  { code: "PRJ-005", name: "Iniciativa Lean — Onboarding", manager: "P. Soto", progress: 100, status: "COMPLETED", budget: "$8.5M" },
];

export const risks = [
  { code: "R-014", description: "Retraso en entrega de proveedor externo", level: "Alto" },
  { code: "R-021", description: "Rotación de equipo backend", level: "Medio" },
  { code: "R-009", description: "Dependencia de API Core Contador sin SLA", level: "Alto" },
];

export const milestones = [
  { name: "Cierre Sprint 14", project: "Implementación ERP", date: "2026-10-02" },
  { name: "Entrega MVP Compliance", project: "Auditoría ISO 27001", date: "2026-10-05" },
  { name: "Go-live piloto", project: "Portal CorePyme v2", date: "2026-10-14" },
];

export const resourceLoad = [
  { team: "Backend", load: 92 },
  { team: "Frontend", load: 78 },
  { team: "QA", load: 55 },
  { team: "Diseño", load: 40 },
];
