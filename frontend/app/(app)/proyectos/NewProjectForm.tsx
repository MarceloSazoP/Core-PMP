"use client";

import { useActionState } from "react";
import { createProject } from "./actions";

const initialState = { error: null as string | null };

export function NewProjectForm() {
  const [state, formAction, pending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    return createProject(formData);
  }, initialState);

  return (
    <form action={formAction} className="bg-bg-100 border border-border rounded-lg p-5 flex flex-col gap-3">
      <h2 className="text-sm font-semibold">Nuevo proyecto</h2>
      <div className="grid grid-cols-2 gap-3">
        <input name="code" placeholder="Código (PRJ-002)" required className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100" />
        <input name="name" placeholder="Nombre" required className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100" />
        <select name="methodology" defaultValue="TRADITIONAL" className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100">
          <option value="TRADITIONAL">Tradicional</option>
          <option value="KANBAN">Kanban</option>
          <option value="SCRUM">Scrum</option>
          <option value="HYBRID">Híbrida</option>
        </select>
        <select name="priority" defaultValue="MEDIUM" className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100">
          <option value="LOW">Baja</option>
          <option value="MEDIUM">Media</option>
          <option value="HIGH">Alta</option>
          <option value="CRITICAL">Crítica</option>
        </select>
        <input name="budget" type="number" placeholder="Presupuesto" className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100" />
      </div>
      <textarea name="description" placeholder="Descripción (opcional)" className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100" rows={2} />
      {state.error && <p className="text-sm" style={{ color: "var(--color-danger)" }}>{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="self-start bg-primary-100 text-bg-100 text-sm font-medium px-4 py-2 rounded-md disabled:opacity-50"
      >
        {pending ? "Creando…" : "Crear proyecto"}
      </button>
    </form>
  );
}
