# Core-PMP — Instrucciones de proyecto

## Contexto
**Core-PMP** es una plataforma empresarial de gestión de proyectos, trabajo y colaboración para CORE Tecnología Empresarial.

**Especificación oficial:** [docs/arq.md](docs/arq.md)

### Principio fundamental
Un **motor común de trabajo** con una sola entidad `Task` que se visualiza en:
- WBS / Gantt (proyectos tradicionales)
- Kanban (tableros)
- Scrum (sprints, backlog, stories)
- Híbrida (combinaciones)

La metodología solo configura **cómo se organizan y visualizan** las entidades, no crea productos distintos.

## Módulos principales (20)
Dashboard, Portfolios, Projects, Planning, Agile, Work Management, Teams, Tickets, Collaboration, Resources, Timesheets, Financial Control, Risks, Issues, Documents, Calendar, Notifications, Reports, Integrations, Administration.

## Stack técnico
- **Frontend:** Next.js, TypeScript, React
- **Backend:** Next.js API / Microservicios
- **DB:** PostgreSQL
- **Auth:** Core Enterprise (tenant, identity, RBAC)
- **Realtime:** WebSocket / Supabase Realtime
- **Storage:** Object Storage

## Roles principales
- **PMP\_ADMIN** (plataforma)
- **PROJECT\_MANAGER** (en proyecto)
- **PRODUCT\_OWNER**, **SCRUM\_MASTER**, **TEAM\_MEMBER** (agile)

Un usuario puede tener roles distintos en diferentes proyectos.

## Integración con ecosistema
- **Core Enterprise:** proporciona identidad, tenant, usuarios, membresías, entitlements
- **CorePyme:** vinculación con empresas
- **Core Contador:** costos, centros de costo, presupuesto oficial
- **Core Platform:** APIs, eventos, webhooks

## Arquitectura de datos
Toda entidad queda bajo `TENANT → PORTFOLIO → PROJECT`, con configuración, roles, equipos, grupos y permisos asociados al proyecto.

## Estilo visual
- **Referencia:** [monday.com](https://monday.com) — tableros y datos densos con espaciado limpio, color con propósito (estados/prioridades)
- **Tipografía:** IBM Plex (texto general), **IBM Plex Mono** para valores monetarios ($)

## MVP real
Foundation (auth, tenant, RBAC) → Work Engine (tareas) → Planning (WBS, Gantt) → Kanban → Scrum → Collaboration (chat) → Ticketing → Control (riesgos, presupuesto, reportes).

---

**Para detalles completos:** lee [docs/arq.md](docs/arq.md).
