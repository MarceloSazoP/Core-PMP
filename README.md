# CORE-PMP

**Enterprise Project, Work, Governance & Improvement Platform** — CORE Tecnología Empresarial SpA.

> Planifica. Ejecuta. Colabora. Controla. Mejora.

## Qué es

CORE-PMP es la plataforma empresarial para gestionar proyectos, trabajo, equipos, colaboración, gobierno y mejora continua. Permite crear y administrar proyectos combinando metodologías **tradicional, Kanban, Scrum o híbridas**, e incorpora **Six Sigma (DMAIC)** y **Lean** como frameworks de mejora e **ISO/IEC 27001** como framework de gobierno y compliance — configurados por el Jefe de Proyecto (JP) según cada proyecto.

No es solo un gestor de tareas, una herramienta Kanban/Scrum o un sistema de tickets: es la capa empresarial de ejecución, colaboración, control y mejora del ecosistema CORE. Puede operar de forma **independiente** del resto del ecosistema.

## Principio arquitectónico central

Un **Work Engine** común: la metodología nunca duplica entidades (`scrum_tasks`, `kanban_tasks`, etc.), siempre existe una única `TASK` que se organiza y visualiza distinto según el framework activo.

## Los 4 motores

```
CORE-PMP
├── 1. Project Engine                — Portfolios, Programs, Projects, WBS, Gantt, baseline
├── 2. Delivery Engine                — Traditional, Kanban, Scrum, Hybrid
├── 3. Work & Collaboration Engine    — Tasks, Tickets, Teams, Chat, Calendar, Documents
└── 4. Governance & Improvement Engine — Risk, ISO/IEC 27001, Audits, Six Sigma/DMAIC, Lean, KPIs
```

## Frameworks (alcance oficial)

```
Management   → Traditional
Delivery     → Scrum, Kanban, Hybrid
Improvement  → Six Sigma (DMAIC), Lean
Governance   → ISO/IEC 27001
```

Un proyecto puede combinar varios a la vez. Todo lo demás (Lean Six Sigma, PDCA, Theory of Constraints) queda como extensibilidad futura.

## Jerarquía de datos

```
Enterprise Tenant (Core Enterprise)
  └── Core-PMP
       └── Portfolio → Program → Project
```

Toda entidad de Core-PMP pertenece a un `tenant_id`.

## Ecosistema CORE

Core-PMP funciona de forma independiente, y se integra vía **tenant** cuando corresponde:

- **Core Enterprise** — identidad, tenants, usuarios, contratos, entitlements
- **CorePyme** — referencias de empresa, sucursal, cliente, proveedor
- **Core Contador** — costos, centros de costo, presupuesto (la contabilidad oficial vive ahí)
- **Core Tributario / Core Bancario** — integraciones de fases posteriores

## Stack técnico

- **Frontend:** Next.js, TypeScript, React
- **Backend:** TypeScript (desacoplado, portable a .NET si el crecimiento lo justifica)
- **Base de datos:** PostgreSQL / Supabase
- **Auth:** Core Enterprise (tenant, identity, RBAC)
- **Realtime:** obligatorio para chat, Kanban, Scrum board, notificaciones y presencia

## Entorno local

```bash
cd backend && npm run dev    # http://localhost:3011
cd frontend && npm run dev   # http://localhost:3010
```

En desarrollo, el backend autentica automáticamente al usuario admin del tenant (sin login manual). Nunca se activa en producción.

## Documentación

- Especificación completa (Source of Truth): [docs/arq.md](docs/arq.md)
- Anexo A — Lean e Ingeniería de Mejora: [docs/anexo1.md](docs/anexo1.md)
- Instrucciones de proyecto para Claude Code: [CLAUDE.md](CLAUDE.md)
