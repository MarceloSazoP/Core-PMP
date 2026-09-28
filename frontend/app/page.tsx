import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-200">
      <main className="flex w-full max-w-lg flex-col gap-4 rounded-xl border border-border bg-bg-100 p-10">
        <h1 className="text-2xl font-semibold">CORE-PMP</h1>
        <p className="text-sm" style={{ color: "var(--color-danger)" }}>
          No se pudo iniciar sesión con el backend ({process.env.NEXT_PUBLIC_BACKEND_URL}).
        </p>
      </main>
    </div>
  );
}
