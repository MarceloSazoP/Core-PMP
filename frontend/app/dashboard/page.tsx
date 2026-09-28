import { kpis, projects, risks, milestones, resourceLoad, statusLabel, statusColor } from "@/lib/mock-dashboard";
import { ProgressBar } from "@/components/ProgressBar";
import { StatusPill } from "@/components/StatusPill";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-bg-200 p-8">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-bg-100 border border-border rounded-lg p-4">
              <p className="text-xs text-text-200 mb-1">{kpi.label}</p>
              <p className={`text-2xl font-semibold ${kpi.mono ? "font-mono" : ""}`}>
                <AnimatedNumber value={kpi.value} format={kpi.format} />
              </p>
            </div>
          ))}
        </section>

        <section className="bg-bg-100 border border-border rounded-lg overflow-hidden">
          <h2 className="text-sm font-semibold px-5 py-3 border-b border-border">Proyectos</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-text-200 border-b border-border">
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
                  <td className="px-5 py-3 font-mono text-xs text-text-200">{p.code}</td>
                  <td className="px-5 py-3 font-medium">{p.name}</td>
                  <td className="px-5 py-3 text-text-200">{p.manager}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 rounded-full bg-bg-300 overflow-hidden">
                        <ProgressBar value={p.progress} color={statusColor[p.status]} />
                      </div>
                      <span className="text-xs text-text-200">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <StatusPill label={statusLabel[p.status]} color={statusColor[p.status]} />
                  </td>
                  <td className="px-5 py-3 text-right font-mono">{p.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-100 border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold mb-3">Riesgos</h2>
            <ul className="flex flex-col gap-2">
              {risks.map((r) => (
                <li key={r.code} className="text-sm flex justify-between gap-2">
                  <span className="text-text-200">{r.description}</span>
                  <span
                    className="text-xs font-medium shrink-0"
                    style={{ color: r.level === "Alto" ? "var(--color-danger)" : "var(--color-warning)" }}
                  >
                    {r.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bg-100 border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold mb-3">Próximos hitos</h2>
            <ul className="flex flex-col gap-2">
              {milestones.map((m) => (
                <li key={m.name} className="text-sm">
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-text-200">{m.project} · {m.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bg-100 border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold mb-3">Carga de equipos</h2>
            <ul className="flex flex-col gap-3">
              {resourceLoad.map((r) => (
                <li key={r.team}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{r.team}</span>
                    <span className="text-text-200">{r.load}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-bg-300 overflow-hidden">
                    <ProgressBar value={r.load} color={r.load > 85 ? "var(--color-danger)" : "var(--color-info)"} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
