import { notFound } from "next/navigation";
import { Breadcrumb } from "@core-tecnologias-empresariales/core-shell";
import { apiFetch } from "@/lib/api";
import { METHODOLOGY_LABEL, STATUS_LABEL, type Project } from "@/lib/projects";
import { AddMemberForm } from "./AddMemberForm";

interface Member {
  id: string;
  role: string;
  platformProfile: string;
  email: string;
}

async function getProject(id: string): Promise<Project | null> {
  const res = await apiFetch(`/api/projects/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.project;
}

async function getMembers(id: string): Promise<Member[]> {
  const res = await apiFetch(`/api/projects/${id}/members`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.members;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  const members = await getMembers(id);

  return (
    <div className="min-h-full bg-bg-200 p-8">
      <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/dashboard" },
            { label: "Proyectos", href: "/proyectos" },
            { label: project.name },
          ]}
        />
        <div>
          <p className="text-xl font-mono font-semibold text-text-100">{project.code}</p>
          <h1 className="text-lg font-semibold">{project.name}</h1>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-bg-100 border border-border rounded-lg p-4">
            <p className="text-xs text-text-200 mb-1">Metodología</p>
            <p className="text-lg font-semibold">{METHODOLOGY_LABEL[project.methodology]}</p>
          </div>
          <div className="bg-bg-100 border border-border rounded-lg p-4">
            <p className="text-xs text-text-200 mb-1">Estado</p>
            <p className="text-lg font-semibold">{STATUS_LABEL[project.status]}</p>
          </div>
          <div className="bg-bg-100 border border-border rounded-lg p-4">
            <p className="text-xs text-text-200 mb-1">Avance</p>
            <p className="text-lg font-semibold">{project.progress}%</p>
          </div>
          <div className="bg-bg-100 border border-border rounded-lg p-4">
            <p className="text-xs text-text-200 mb-1">Presupuesto</p>
            <p className="text-lg font-semibold font-mono">
              {project.budget ? `$${Number(project.budget).toLocaleString("es-CL")}` : "—"}
            </p>
          </div>
        </section>

        <section className="bg-bg-100 border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold mb-3">Equipo</h2>
          {members.length === 0 ? (
            <p className="text-sm text-text-200">Sin miembros todavía.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-text-200 border-b border-border">
                  <th className="py-2 font-medium">Usuario</th>
                  <th className="py-2 font-medium">Rol en el proyecto</th>
                  <th className="py-2 font-medium">Perfil de plataforma</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.id} className="border-b border-border last:border-0">
                    <td className="py-2">{m.email}</td>
                    <td className="py-2 text-text-200">{m.role}</td>
                    <td className="py-2 text-text-200">{m.platformProfile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <AddMemberForm projectId={id} />
        </section>
      </div>
    </div>
  );
}
