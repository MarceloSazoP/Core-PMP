import { apiFetch } from "@/lib/api";
import type { Project } from "@/lib/projects";
import { METHODOLOGY_LABEL, STATUS_LABEL } from "@/lib/projects";
import { NewProjectForm } from "./NewProjectForm";

async function getProjects(): Promise<Project[]> {
  const res = await apiFetch("/api/projects");
  if (!res.ok) return [];
  const data = await res.json();
  return data.projects;
}

export default async function ProyectosPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-full bg-bg-200 p-8">
      <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
        <h1 className="text-lg font-semibold">Proyectos</h1>

        <section className="bg-bg-100 border border-border rounded-lg overflow-hidden">
          {projects.length === 0 ? (
            <p className="text-sm text-text-200 p-5">Todavía no hay proyectos. Crea el primero abajo.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-text-200 border-b border-border">
                  <th className="px-5 py-2 font-medium">Código</th>
                  <th className="px-5 py-2 font-medium">Nombre</th>
                  <th className="px-5 py-2 font-medium">Metodología</th>
                  <th className="px-5 py-2 font-medium">Estado</th>
                  <th className="px-5 py-2 font-medium">Prioridad</th>
                  <th className="px-5 py-2 font-medium text-right">Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-text-200">{p.code}</td>
                    <td className="px-5 py-3 font-medium">{p.name}</td>
                    <td className="px-5 py-3 text-text-200">{METHODOLOGY_LABEL[p.methodology]}</td>
                    <td className="px-5 py-3 text-text-200">{STATUS_LABEL[p.status]}</td>
                    <td className="px-5 py-3 text-text-200">{p.priority}</td>
                    <td className="px-5 py-3 text-right font-mono">
                      {p.budget ? `$${Number(p.budget).toLocaleString("es-CL")}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        <NewProjectForm />
      </div>
    </div>
  );
}
