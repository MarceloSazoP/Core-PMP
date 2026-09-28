import { getSession } from "@/lib/session";
import { kpis, projects, risks, milestones, resourceLoad, statusLabel, statusColor } from "@/lib/mock-dashboard";

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface px-8 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">CORE-PMP</h1>
        {session && (
          <div className="text-sm text-muted">
            {session.tenantName} · {session.email}
          </div>
        )}
      </header>

      <main className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-surface border border-border rounded-lg p-4">
              <p className="text-xs text-muted mb-1">{kpi.label}</p>
              <p className={`text-2xl font-semibold ${kpi.mono ? "font-mono" : ""}`}>{kpi.value}</p>
            </div>
          ))}
        </section>

        <section className="bg-surface border border-border rounded-lg overflow-hidden">
          <h2 className="text-sm font-semibold px-5 py-3 border-b border-border">Proyectos</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted border-b border-border">
                <th className="px-5 py-2 font-medium">Código</th>
                <th className="px-5 py-2 font-medium">Proyecto</th>
                <th className="px-5 py-2 font-medium">JP</th>
                <th className="px-5 py-2 font-medium">Avance</th>
                <th className="px-5 py-2 font-medium">Estado</th>
                <th className="px-5 py-2 font-medium text-right">Presupuesto</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.code} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-mono text-xs text-muted">{p.code}</td>
                  <td className="px-5 py-3 font-medium">{p.name}</td>
                  <td className="px-5 py-3 text-muted">{p.manager}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${p.progress}%`, background: statusColor[p.status] }}
                        />
                      </div>
                      <span className="text-xs text-muted">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ color: statusColor[p.status], backgroundColor: `${statusColor[p.status]}1a` }}
                    >
                      {statusLabel[p.status]}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right font-mono">{p.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold mb-3">Riesgos</h2>
            <ul className="flex flex-col gap-2">
              {risks.map((r) => (
                <li key={r.code} className="text-sm flex justify-between gap-2">
                  <span className="text-muted">{r.description}</span>
                  <span
                    className="text-xs font-medium shrink-0"
                    style={{ color: r.level === "Alto" ? "var(--status-blocked)" : "var(--status-atrisk)" }}
                  >
                    {r.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold mb-3">Próximos hitos</h2>
            <ul className="flex flex-col gap-2">
              {milestones.map((m) => (
                <li key={m.name} className="text-sm">
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-muted">{m.project} · {m.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold mb-3">Carga de equipos</h2>
            <ul className="flex flex-col gap-3">
              {resourceLoad.map((r) => (
                <li key={r.team}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{r.team}</span>
                    <span className="text-muted">{r.load}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${r.load}%`, background: r.load > 85 ? "var(--status-blocked)" : "var(--status-info)" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
