"use server";

import { revalidatePath } from "next/cache";
import { apiFetch } from "@/lib/api";

export async function addMember(projectId: string, formData: FormData) {
  const payload = {
    email: formData.get("email"),
    role: formData.get("role"),
  };

  const res = await apiFetch(`/api/projects/${projectId}/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return { error: data.error ?? "No se pudo agregar el miembro" };
  }

  revalidatePath(`/proyectos/${projectId}`);
  return { error: null };
}
