# Core-PMP

Plataforma empresarial de gestión de proyectos, trabajo y colaboración de **CORE Tecnología Empresarial**.

> Planifica. Ejecuta. Colabora. Controla.

## Qué es

Core-PMP reúne proyectos, equipos, tareas, metodologías ágiles, planificación, tickets, comunicación y control empresarial en una sola plataforma. Permite administrar proyectos bajo metodología **tradicional, Kanban, Scrum o híbrida**, seleccionada por el Jefe de Proyecto (JP) según las necesidades de cada proyecto.

## Principio fundamental

Un **motor común de trabajo**: la metodología no crea productos distintos, solo configura cómo se organizan y visualizan las mismas entidades centrales (Proyecto, Tarea, Usuario, Equipo, Ticket, etc.).

```
                    CORE-PMP
                       │
               Project Work Engine
                       │
      Tradicional · Kanban · Scrum
                       │
                    Híbrido
```

## Módulos principales

Dashboard, Portafolios, Proyectos, Planning (WBS/Gantt), Agile (Backlog/Sprints/Kanban), Work Management, Equipos, Tickets, Colaboración (Chat), Recursos, Timesheets, Control Financiero, Riesgos, Issues, Documentos, Calendario, Notificaciones, Reportes, Integraciones, Administración.

## Ecosistema CORE

Core-PMP se integra con el resto del ecosistema a través del **tenant** (identidad y contrato administrados por Core Enterprise), manteniendo independencia funcional:

- **Core Enterprise** — identidad, tenant, usuarios, entitlements
- **CorePyme** — vinculación con empresas
- **Core Contador** — costos y presupuesto oficial
- **Core Platform** — APIs, eventos, webhooks

## Stack técnico

- **Frontend:** Next.js, TypeScript, React
- **Backend:** Next.js API / microservicios
- **Base de datos:** PostgreSQL
- **Auth:** Core Enterprise (tenant, identity, RBAC)
- **Realtime:** WebSocket / Supabase Realtime

## Documentación

Especificación completa de arquitectura: [docs/arq.md](docs/arq.md)

Instrucciones de proyecto para Claude Code: [CLAUDE.md](CLAUDE.md)
