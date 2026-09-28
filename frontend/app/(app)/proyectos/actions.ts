"use server";

import { revalidatePath } from "next/cache";
import { apiFetch } from "@/lib/api";

export async function createProject(formData: FormData) {
  const payload = {
    code: formData.get("code"),
    name: formData.get("name"),
    description: formData.get("description") || undefined,
    methodology: formData.get("methodology"),
    priority: formData.get("priority"),
    budget: formData.get("budget") ? Number(formData.get("budget")) : undefined,
  };

  const res = await apiFetch("/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return { error: data.error ?? "No se pudo crear el proyecto" };
  }

  revalidatePath("/proyectos");
  return { error: null };
}
