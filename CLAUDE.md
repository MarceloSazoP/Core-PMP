# CORE-PMP — Instrucciones de proyecto

## Contexto
**CORE-PMP** es la plataforma empresarial de gestión de proyectos, trabajo, colaboración, gobierno y mejora continua del ecosistema CORE Tecnología Empresarial. v2.0.

**Especificación oficial (Source of Truth):**
- [docs/arq.md](docs/arq.md) — Master Specification v2.0
- [docs/anexo1.md](docs/anexo1.md) — Anexo A: Lean e Ingeniería de Mejora v1.0 (extensión aprobada)

## Regla para Claude Code (sección 111 del arq.md)
`docs/arq.md` y sus anexos son la fuente de verdad del dominio y producto. **No debo:**
- inventar entidades ni duplicarlas
- crear metodologías fuera del modelo (Traditional, Kanban, Scrum, Hybrid, Six Sigma, Lean, ISO 27001 — ver "Frameworks soportados")
- introducir dependencias arquitectónicas sin justificación
- modificar contratos (API, schema) silenciosamente
- implementar módulos fuera de alcance sin registrarlo

Cualquier desviación debe quedar documentada explícitamente.

## Principio arquitectónico central
Un **Work Engine** común: nunca `scrum_tasks`/`kanban_tasks`/`traditional_tasks`, siempre una entidad `TASK` que se visualiza distinto según el framework activo.

## Los 4 motores
```
CORE-PMP
├── 1. Project Engine        — Portfolios, Programs, Projects, WBS, Gantt, baseline
├── 2. Delivery Engine       — Traditional, Kanban, Scrum, Hybrid, (luego Six Sigma/DMAIC)
├── 3. Work & Collaboration  — Tasks, Tickets, Teams, Chat, Calendar, Documents
└── 4. Governance & Improvement — Risk, ISO/IEC 27001, Audits, Six Sigma/DMAIC, KPIs
```

## Jerarquía de datos
```
Enterprise Tenant (Core Enterprise)
  └── Core-PMP
       ├── Portfolio
       │    └── Program
       │         └── Project
       └── ... (Tasks, Boards, Sprints, Tickets, Risks, Compliance, etc.)
```
Toda entidad de PMP pertenece a un `tenant_id` (nunca solo a un `user_id`).

## Frameworks soportados (no son "metodologías sueltas") — alcance oficial
```
Framework
├── Management   → Traditional
├── Delivery     → Scrum, Kanban, Hybrid
├── Improvement  → Six Sigma (DMAIC), Lean
└── Governance   → ISO/IEC 27001
```
Un proyecto puede combinar varios simultáneamente (ej. Traditional + Scrum + Kanban + ISO 27001 + Lean).

Todo lo demás mencionado en los documentos (Lean Six Sigma, PDCA, Theory of Constraints, Kaizen/5S como módulos independientes) es **extensibilidad futura**, no alcance comprometido. Kaizen es una práctica dentro de Lean, no un framework aparte.

**Principio rector (anexo1.md §30):** no acumular metodologías — proveer un núcleo común capaz de ejecutar distintos modelos de gestión, entrega, mejora y gobierno solo cuando el proyecto los necesite. Antes de crear una entidad Lean/Six Sigma, evaluar si el Work Engine o el Framework Engine ya la representa.

## Roles
- **Plataforma:** PMP_ADMIN, PMP_MANAGER, PMP_USER, PMP_VIEWER
- **Proyecto:** PROJECT_MANAGER, PRODUCT_OWNER, SCRUM_MASTER, TEAM_MEMBER, BUSINESS_ANALYST, STAKEHOLDER, SPONSOR, CLIENT, OBSERVER (contextuales, distintos por proyecto)

## Integración con ecosistema CORE
Core-PMP **puede ser independiente del ecosistema CORE** (funciona solo), pero se integra vía `tenant_id` cuando corresponde:
- **Core Enterprise:** identidad, tenants, usuarios, contratos, entitlements, seguridad transversal (Core-PMP no duplica esto)
- **CorePyme:** referencias `company_id`, `branch_id`, `customer_id`, `supplier_id`
- **Core Contador:** costos, centros de costo, presupuesto (contabilidad oficial queda en Core Contador)
- **Core Tributario / Core Bancario:** referencias de integración, implementación, incidentes (fases posteriores)

## Estilo visual
- **Referencia:** [monday.com](https://monday.com) — tableros y datos densos con espaciado limpio, color con propósito
- **Tipografía:** IBM Plex (texto general), **IBM Plex Mono** para valores monetarios ($)

## Stack técnico
- **Frontend:** Next.js, TypeScript, React
- **Backend:** TypeScript (desacoplado — pensado para poder migrar a .NET si el crecimiento lo justifica)
- **DB:** PostgreSQL / Supabase
- **Auth:** Core Enterprise (tenant, identity, RBAC)
- **Realtime:** obligatorio para chat, Kanban, Scrum board, comentarios, notificaciones, presencia
- **Events:** CORE Event Bus

## Regla: usar siempre los paquetes @core-tecnologias-empresariales (`D:\Dev\core-npm`)
Antes de escribir UI, auth, permisos, logging, i18n, etc. desde cero, **revisar si ya existe un paquete en `D:\Dev\core-npm\packages\`** y usarlo. No reimplementar lo que el monorepo compartido ya resuelve.

Paquetes relevantes ya identificados:
- **core-ui** — design tokens, 11 temas oficiales, componentes base (usa Radix + Tailwind preset)
- **core-shell** — AppShell, Header, Sidebar, Breadcrumb, PageHeader (compone core-ui, filtra navegación con core-permissions)
- **core-auth** — autenticación
- **core-permissions** — RBAC / filtrado de navegación por permiso
- **core-http, core-logging, core-i18n, core-events, core-notifications, core-config, core-utils, core-time, core-formatter, core-telemetry, core-security, core-jobs, core-mail, core-export, core-billing, core-audit, core-feature-flags, core-sdk-dte** — resto del monorepo, revisar antes de duplicar funcionalidad

Si un paquete de `core-npm` no cubre completamente la necesidad, extenderlo o pedir que se extienda ahí — no bifurcar la lógica dentro de `core-pmp-10-2026`.

## Entorno local

- **DB:** PostgreSQL local (`postgres@localhost`) — bases `core-pmp`, `core_enterprise`, `core_contador`, `corepyme`
- **Frontend:** carpeta `frontend/`, puerto **3010**
- **Backend:** carpeta `backend/`, puerto **3011**

### Levantar el entorno

```bash
cd backend && npm run dev    # http://localhost:3011
cd frontend && npm run dev   # http://localhost:3010
```

En desarrollo (`NODE_ENV !== production`) el backend hace **auto-login**: si no hay cookie de sesión, autentica automáticamente como `admincorepmp@coretecnologias.cl` (usuario owner del tenant Core-PMP) sin pedir credenciales. El `proxy.ts` del frontend reenvía esa cookie al navegador. Nunca se activa si `NODE_ENV=production`.

### Rutina: crear/eliminar empresa (tenant) en Core Enterprise

Script: [backend/src/scripts/tenant.ts](backend/src/scripts/tenant.ts) (credenciales de BD vía `backend/.env`, ver `.env.example`)

```bash
cd backend

# Crear empresa
npm run tenant -- create --tax-id 7240020-8 --legal-name "Core-PMP" --trade-name "Core-PMP (TI)" --email admincorepmp@coretecnologias.cl

# Eliminar empresa
npm run tenant -- delete --tax-id 7240020-8
```

`create` inserta el tenant, el usuario owner (si no existe) y la vinculación con la app `core-pmp`. `delete` limpia tenant, memberships y tenant_applications asociados. Ambas operaciones corren en una transacción sobre `core_enterprise`.

## Estado de Foundation (Fase 1)

Implementado en `core-pmp` (BD PostgreSQL):
- **`pmp_user_profiles`** — dominio propio de PMP (arq.md §79), separado de la identidad de Enterprise. Se auto-provisiona en el primer acceso (`backend/src/auth.ts` → `getOrCreateProfile`)
- **`projects`** — entidad central (arq.md §14). `portfolio_id`/`program_id` nullable — esos niveles no existen aún
- **`project_members`** — roles de proyecto (arq.md §20), contextuales por usuario

Migración: [backend/migrations/001_foundation.sql](backend/migrations/001_foundation.sql)

API: `GET/POST /api/projects`, `GET /api/projects/:id`, `GET/POST /api/projects/:id/members` (`backend/src/routes/projects.ts`), protegida por `requireSession` (cookie JWT de `/api/auth/session`). Agregar miembro busca el email en Core Enterprise dentro del tenant actual — falla si el usuario no pertenece al tenant.

Frontend: [/proyectos](frontend/app/(app)/proyectos/page.tsx) — listado + formulario de creación (Server Action), y [/proyectos/[id]](frontend/app/(app)/proyectos/[id]/page.tsx) — detalle con KPIs y equipo (agregar miembro por email + rol). El layout con sidebar vive en `frontend/app/(app)/layout.tsx` (route group compartido; toda pantalla nueva con navegación va dentro de `(app)/`).

**Convención: breadcrumbs en toda página.** Usar `Breadcrumb` de `@core-tecnologias-empresariales/core-shell` (nunca uno propio), `items={[{label, href?}]}` sin `href` en el último elemento (la página actual). Patrón: `Inicio → Sección → (Detalle)`. Ver `dashboard/page.tsx`, `proyectos/page.tsx`, `proyectos/[id]/page.tsx`.

**Pendiente de Foundation:** RBAC real (hoy todo auto-provisiona como `PMP_ADMIN`, sin UI de invitación/roles — ver comentario `ponytail` en `auth.ts`), Groups, Teams, Portfolios, Programs.

## Roadmap (11 fases)
Foundation → Work Engine → Project Planning (WBS/Gantt) → Kanban → Scrum → Collaboration → Ticketing → Control (riesgos/presupuesto) → Governance (ISO 27001) → Improvement (Six Sigma + Lean) → Ecosystem (CorePyme, Core Contador, Core Tributario, Core Bancario).

Roadmap Lean específico (anexo1.md §27): L1 Foundation → L2 Improvement (waste, iniciativas, acciones) → L3 Flow (VSM, lead/cycle time) → L4 Advanced (Kaizen, 5S, Before/After) → L5 Integrated (Lean + Six Sigma + Kanban + ISO 27001).

El **MVP comercial** (sección 101) no incluye Governance/Improvement completos: ISO 27001, Six Sigma y Lean parten como estructuras de dominio y evolucionan después.

## Principio de desarrollo
Antes de implementar: 1) definir dominio → 2) modelo de datos → 3) contratos → 4) permisos → 5) eventos → 6) API → 7) UX → 8) documentar → 9) implementar → 10) probar. No partir directo por pantallas.

---

**Para detalles completos:** lee [docs/arq.md](docs/arq.md).
