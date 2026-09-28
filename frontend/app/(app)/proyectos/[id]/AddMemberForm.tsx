"use client";

import { useActionState } from "react";
import { addMember } from "./actions";

const ROLES = [
  "PROJECT_MANAGER", "PRODUCT_OWNER", "SCRUM_MASTER", "TEAM_MEMBER",
  "BUSINESS_ANALYST", "STAKEHOLDER", "SPONSOR", "CLIENT", "OBSERVER",
];

const initialState = { error: null as string | null };

export function AddMemberForm({ projectId }: { projectId: string }) {
  const action = addMember.bind(null, projectId);
  const [state, formAction, pending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    return action(formData);
  }, initialState);

  return (
    <form action={formAction} className="flex flex-wrap items-end gap-2 mt-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-200">Email (Core Enterprise)</label>
        <input name="email" type="email" required placeholder="usuario@empresa.cl" className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100 w-56" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-200">Rol</label>
        <select name="role" defaultValue="TEAM_MEMBER" className="border border-border rounded-md px-3 py-2 text-sm bg-bg-100">
          {ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-primary-100 text-bg-100 text-sm font-medium px-4 py-2 rounded-md disabled:opacity-50"
      >
        {pending ? "Agregando…" : "Agregar"}
      </button>
      {state.error && <p className="text-sm w-full" style={{ color: "var(--color-danger)" }}>{state.error}</p>}
    </form>
  );
}
