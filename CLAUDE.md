# CORE-PMP — Instrucciones de proyecto

## Contexto
**CORE-PMP** es la plataforma empresarial de gestión de proyectos, trabajo, colaboración, gobierno y mejora continua del ecosistema CORE Tecnología Empresarial. v2.0.

**Especificación oficial (Source of Truth):** [docs/arq.md](docs/arq.md)

## Regla para Claude Code (sección 111 del arq.md)
`docs/arq.md` es la fuente de verdad del dominio y producto. **No debo:**
- inventar entidades ni duplicarlas
- crear metodologías fuera del modelo (Traditional, Kanban, Scrum, Hybrid, y Six Sigma/ISO como frameworks aparte)
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

## Frameworks soportados (no son "metodologías sueltas")
```
Framework
├── Management   → Traditional
├── Delivery     → Scrum, Kanban
├── Improvement  → Six Sigma (DMAIC)
└── Governance   → ISO/IEC 27001
```
Un proyecto puede combinar varios simultáneamente (ej. Traditional + Scrum + Kanban + ISO 27001).

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

## Roadmap (11 fases)
Foundation → Work Engine → Project Planning (WBS/Gantt) → Kanban → Scrum → Collaboration → Ticketing → Control (riesgos/presupuesto) → Governance (ISO 27001) → Improvement (Six Sigma) → Ecosystem (CorePyme, Core Contador, Core Tributario, Core Bancario).

El **MVP comercial** (sección 101) no incluye Governance/Improvement completos: ISO 27001 y Six Sigma parten como estructuras de dominio y evolucionan después.

## Principio de desarrollo
Antes de implementar: 1) definir dominio → 2) modelo de datos → 3) contratos → 4) permisos → 5) eventos → 6) API → 7) UX → 8) documentar → 9) implementar → 10) probar. No partir directo por pantallas.

---

**Para detalles completos:** lee [docs/arq.md](docs/arq.md).
