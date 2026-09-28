import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-lg flex-col gap-4 rounded-xl border border-black/10 bg-white p-10 dark:border-white/10 dark:bg-zinc-950">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">Core-PMP</h1>
        {session ? (
          <div className="flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <p>Sesión activa (auto-login dev): <strong>{session.email}</strong></p>
            <p>Empresa: <strong>{session.tenantName}</strong></p>
          </div>
        ) : (
          <p className="text-sm text-red-600">No se pudo iniciar sesión con el backend ({process.env.NEXT_PUBLIC_BACKEND_URL}).</p>
        )}
      </main>
    </div>
  );
}
