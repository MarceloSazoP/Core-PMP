export type ProjectMethodology = "TRADITIONAL" | "KANBAN" | "SCRUM" | "HYBRID";
export type ProjectStatus = "DRAFT" | "PLANNED" | "ACTIVE" | "PAUSED" | "AT_RISK" | "COMPLETED" | "CANCELLED";

export interface Project {
  id: string;
  code: string;
  name: string;
  methodology: ProjectMethodology;
  status: ProjectStatus;
  priority: string;
  progress: number;
  budget: string | null;
  currency: string;
  planned_start: string | null;
  planned_end: string | null;
}

export const METHODOLOGY_LABEL: Record<ProjectMethodology, string> = {
  TRADITIONAL: "Tradicional",
  KANBAN: "Kanban",
  SCRUM: "Scrum",
  HYBRID: "Híbrida",
};

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  DRAFT: "Borrador",
  PLANNED: "Planificado",
  ACTIVE: "Activo",
  PAUSED: "Pausado",
  AT_RISK: "En riesgo",
  COMPLETED: "Completado",
  CANCELLED: "Cancelado",
};
