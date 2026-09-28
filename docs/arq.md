# CORE-PMP

## Enterprise Project, Work, Governance & Improvement Platform

**Empresa:** CORE Tecnología Empresarial SpA
**Producto:** CORE-PMP
**Versión:** 2.0
**Estado:** Especificación Maestra
**Dependencia:** CORE Enterprise
**Mercado inicial:** Chile
**Modelo:** SaaS B2B / Enterprise

---

# 1. DEFINICIÓN DEL PRODUCTO

**CORE-PMP es la plataforma empresarial de gestión de proyectos, trabajo, colaboración, gobierno y mejora continua del ecosistema CORE.**

Core-PMP permite a una organización:

* crear y administrar proyectos;
* seleccionar y combinar metodologías;
* planificar trabajo;
* ejecutar mediante Scrum, Kanban, modelos tradicionales o híbridos;
* administrar equipos, grupos y perfiles;
* gestionar tareas, tickets e incidencias;
* comunicarse mediante chat interno;
* controlar recursos, tiempos y presupuesto;
* administrar riesgos;
* gestionar documentación y evidencias;
* ejecutar iniciativas Six Sigma;
* gestionar procesos asociados a ISO/IEC 27001;
* realizar auditorías;
* administrar acciones correctivas;
* medir KPIs;
* generar reportes ejecutivos y operacionales.

La plataforma no obliga a una única metodología.

El **JP (Jefe de Proyecto)** configura el modelo de trabajo apropiado para cada proyecto.

---

# 2. POSICIONAMIENTO

## Nombre

**CORE-PMP**

## Descriptor

**Plataforma empresarial de gestión de proyectos, trabajo y mejora continua.**

## Propuesta de valor

> **Planifica. Ejecuta. Colabora. Controla. Mejora.**

## Posicionamiento

Core-PMP no debe posicionarse únicamente como:

* gestor de tareas;
* herramienta Kanban;
* herramienta Scrum;
* software de Gantt;
* sistema de tickets.

Su posicionamiento es superior:

> **Una plataforma empresarial para ejecutar proyectos, coordinar equipos, controlar operaciones de trabajo y gestionar iniciativas de mejora y gobierno.**

---

# 3. PRINCIPIO ARQUITECTÓNICO CENTRAL

Core-PMP utiliza un **Work Engine común**.

Las metodologías no deben duplicar las entidades.

No existirán:

```text
scrum_tasks
kanban_tasks
traditional_tasks
```

Debe existir:

```text
TASK
```

Una misma tarea puede aparecer como:

* actividad de una WBS;
* tarjeta Kanban;
* elemento de Sprint;
* tarea de un ticket;
* acción correctiva;
* acción Six Sigma;
* actividad de un proyecto.

La metodología determina:

**cómo se organiza, ejecuta y visualiza el trabajo.**

---

# 4. LOS CUATRO MOTORES

Core-PMP se estructura en cuatro grandes motores.

```text
CORE-PMP
│
├── 1. PROJECT ENGINE
│
├── 2. DELIVERY ENGINE
│
├── 3. WORK & COLLABORATION ENGINE
│
└── 4. GOVERNANCE & IMPROVEMENT ENGINE
```

---

# 5. PROJECT ENGINE

Responsable de la estructura formal de proyectos.

Incluye:

* Portfolios
* Programs
* Projects
* WBS
* fases
* actividades
* hitos
* dependencias
* baseline
* cronograma
* Gantt
* presupuesto
* alcance
* entregables

---

# 6. DELIVERY ENGINE

Determina cómo se ejecuta el trabajo.

Frameworks iniciales:

```text
Traditional
Kanban
Scrum
Hybrid
```

Posteriormente:

```text
Six Sigma / DMAIC
```

Six Sigma tiene una naturaleza diferente y se integra además con el motor de mejora.

---

# 7. WORK & COLLABORATION ENGINE

Gestiona el trabajo cotidiano.

Incluye:

* Tasks
* Subtasks
* Tickets
* Teams
* Groups
* Profiles
* Chat
* Channels
* Comments
* Mentions
* Meetings
* Calendar
* Documents
* Notifications
* Activity Feed
* Timesheets

---

# 8. GOVERNANCE & IMPROVEMENT ENGINE

Gestiona gobierno, riesgos, compliance y mejora.

Incluye:

* Risk Management
* Issues
* ISO/IEC 27001
* controles
* SoA
* evidencias
* auditorías
* hallazgos
* no conformidades
* acciones correctivas
* Six Sigma
* DMAIC
* KPIs
* planes de mejora

---

# 9. CORE ENTERPRISE

CORE Enterprise es la capa corporativa.

Es responsable de:

* identidad;
* autenticación;
* usuarios;
* empresas;
* tenants;
* memberships;
* contratos;
* suscripciones;
* entitlements;
* seguridad transversal;
* auditoría corporativa.

Core-PMP no debe duplicar estas funciones.

---

# 10. RESPONSABILIDAD DE CORE-PMP

Core-PMP es propietario de:

* portfolios;
* programs;
* projects;
* project roles;
* project teams;
* project groups;
* methodologies;
* workflows;
* tasks;
* boards;
* sprints;
* tickets;
* risks;
* issues;
* budgets;
* costs;
* resources;
* timesheets;
* documents;
* meetings;
* channels;
* messages;
* audits de su dominio;
* frameworks de gobierno y mejora.

---

# 11. MODELO MULTI-TENANT

Todos los datos de Core-PMP deben pertenecer a un:

```text
tenant_id
```

El Tenant es proporcionado por CORE Enterprise.

Las entidades PMP nunca deben utilizar únicamente `user_id` para determinar propiedad.

La jerarquía conceptual:

```text
Enterprise Tenant
        │
        ├── Users
        │
        └── Core-PMP
             │
             ├── Portfolios
             ├── Programs
             └── Projects
```

---

# 12. PORTFOLIO

Un Portfolio agrupa proyectos relacionados.

Ejemplo:

```text
Portfolio
└── Transformación Digital 2027
    ├── Proyecto ERP
    ├── Proyecto CRM
    ├── Proyecto BI
    └── Proyecto Seguridad
```

Datos:

```text
id
tenant_id
code
name
description
owner_id
status
budget
currency
start_date
end_date
created_at
updated_at
```

---

# 13. PROGRAM

Un Program agrupa proyectos relacionados por un objetivo común.

```text
Program
│
├── Project A
├── Project B
└── Project C
```

No es obligatorio que todos los clientes utilicen Programs.

---

# 14. PROJECT

Entidad central.

```text
Project
├── identity
├── objective
├── scope
├── methodology
├── governance
├── schedule
├── budget
├── team
└── work
```

Datos principales:

```text
id
tenant_id
portfolio_id
program_id

code
name
description

objective
scope
deliverables

methodology
status
priority

project_manager_id
sponsor_id

planned_start
planned_end

actual_start
actual_end

budget
currency

progress

created_by
created_at
updated_at
```

---

# 15. ESTADOS DEL PROYECTO

```text
DRAFT
PLANNED
ACTIVE
PAUSED
AT_RISK
COMPLETED
CANCELLED
```

---

# 16. CONFIGURACIÓN DEL PROYECTO

Cada proyecto tiene:

```text
ProjectConfiguration
```

Configurará:

* metodología;
* workflows;
* estados;
* prioridades;
* roles;
* permisos;
* tableros;
* WIP;
* estimaciones;
* calendario;
* notificaciones;
* reglas;
* campos personalizados;
* frameworks aplicables.

---

# 17. FRAMEWORKS

La plataforma distingue entre distintos tipos de framework.

```text
Framework
│
├── Management
├── Delivery
├── Improvement
└── Governance
```

Ejemplo:

```text
Management
└── Traditional

Delivery
├── Scrum
└── Kanban

Improvement
└── Six Sigma

Governance
└── ISO 27001
```

---

# 18. PROYECTOS HÍBRIDOS

Un proyecto puede utilizar varios frameworks simultáneamente.

Ejemplo:

```text
Proyecto ERP
│
├── Management
│   └── Traditional
│
├── Delivery
│   └── Scrum
│
├── Operations
│   └── Kanban
│
└── Governance
    └── ISO 27001
```

Esto debe ser soportado nativamente.

---

# 19. JP — JEFE DE PROYECTO

El JP administra la configuración operativa del proyecto.

Puede:

* configurar metodología;
* crear equipos;
* asignar roles;
* configurar workflow;
* crear tableros;
* administrar tareas;
* controlar hitos;
* gestionar riesgos;
* administrar presupuesto según permisos;
* administrar tickets;
* revisar métricas;
* gestionar cambios;
* generar reportes.

El JP no sustituye los permisos de Enterprise.

---

# 20. PERFILES

## Plataforma

```text
PMP_ADMIN
PMP_MANAGER
PMP_USER
PMP_VIEWER
```

## Proyecto

```text
PROJECT_MANAGER
PRODUCT_OWNER
SCRUM_MASTER
TEAM_MEMBER
BUSINESS_ANALYST
STAKEHOLDER
SPONSOR
CLIENT
OBSERVER
```

Los roles son contextuales.

Un usuario puede ser:

```text
Proyecto A → PROJECT_MANAGER
Proyecto B → TEAM_MEMBER
Proyecto C → STAKEHOLDER
```

---

# 21. GRUPOS

Los grupos permiten agrupar usuarios.

Ejemplo:

```text
Desarrollo
├── Backend
├── Frontend
└── QA
```

Los grupos pueden participar en varios proyectos.

---

# 22. EQUIPOS

Un Team es una unidad de ejecución.

```text
Equipo Desarrollo
├── Product Owner
├── Scrum Master
├── Backend
├── Frontend
└── QA
```

Un proyecto puede tener múltiples equipos.

---

# 23. WORK ENGINE

El Work Engine utiliza:

```text
Task
Subtask
Checklist
Assignment
Dependency
Comment
Attachment
Label
Priority
Status
```

---

# 24. TASK

Entidad transversal.

```text
Task
├── project
├── parent
├── phase
├── sprint
├── board
├── ticket
├── assignees
├── dependencies
├── dates
├── estimate
└── status
```

---

# 25. WBS

Para proyectos tradicionales:

```text
Project
│
├── Phase
│   ├── Work Package
│   │   ├── Task
│   │   └── Task
│   └── Deliverable
│
└── Milestone
```

---

# 26. GANTT

Debe mostrar:

* tareas;
* fases;
* hitos;
* dependencias;
* duración;
* progreso;
* baseline;
* fechas reales.

---

# 27. KANBAN

Kanban es un módulo oficial.

Un proyecto puede tener múltiples boards.

```text
Board
├── Columns
├── Swimlanes
├── WIP Limits
└── Cards
```

---

# 28. KANBAN BOARD

Ejemplo:

```text
BACKLOG
   ↓
READY
   ↓
IN PROGRESS
   ↓
REVIEW
   ↓
DONE
```

Las columnas son configurables.

---

# 29. KANBAN

Características:

* drag & drop;
* WIP limits;
* swimlanes;
* filtros;
* etiquetas;
* prioridades;
* responsables;
* bloqueos;
* métricas;
* cycle time;
* lead time;
* throughput.

---

# 30. SCRUM

Core-PMP implementará Scrum como framework de Delivery.

Componentes:

* Product Backlog;
* Epics;
* Features;
* User Stories;
* Tasks;
* Bugs;
* Sprints;
* Sprint Backlog;
* Sprint Goal;
* Story Points;
* Definition of Done;
* Acceptance Criteria.

---

# 31. PRODUCT BACKLOG

Jerarquía:

```text
Epic
│
├── Feature
│   ├── Story
│   │   ├── Task
│   │   └── Bug
│   └── Story
└── Feature
```

---

# 32. SPRINT

```text
Sprint
├── name
├── goal
├── start_date
├── end_date
├── capacity
├── status
└── items
```

Estados:

```text
PLANNED
ACTIVE
COMPLETED
CANCELLED
```

---

# 33. SCRUM BOARD

```text
TO DO
   ↓
IN PROGRESS
   ↓
REVIEW
   ↓
DONE
```

El workflow puede ser personalizado.

---

# 34. SCRUM CEREMONIES

Core-PMP permite registrar:

### Sprint Planning

* participantes;
* capacidad;
* sprint goal;
* items seleccionados.

### Daily

* yesterday;
* today;
* blockers.

### Sprint Review

* resultado;
* entregables;
* feedback.

### Retrospective

* worked well;
* problems;
* improvements;
* actions.

---

# 35. MÉTRICAS SCRUM

* velocity;
* burndown;
* burnup;
* commitment;
* completed;
* carry-over;
* sprint predictability.

---

# 36. SIX SIGMA

Six Sigma se integra como:

**Improvement Framework.**

No debe tratarse como una simple etiqueta.

El proyecto puede adoptar:

```text
DMAIC
```

---

# 37. DMAIC

```text
DEFINE
   ↓
MEASURE
   ↓
ANALYZE
   ↓
IMPROVE
   ↓
CONTROL
```

---

# 38. DEFINE

Incluye:

* Problem Statement;
* Business Case;
* Goal Statement;
* Project Charter;
* Scope;
* Customer;
* Team.

---

# 39. MEASURE

Incluye:

* baseline;
* métricas;
* datos;
* muestreo;
* proceso actual;
* capacidad.

---

# 40. ANALYZE

Herramientas soportadas progresivamente:

* Pareto;
* Ishikawa;
* 5 Why;
* SIPOC;
* Process Map;
* Histogram;
* Scatter Plot;
* análisis estadístico.

---

# 41. IMPROVE

Incluye:

* soluciones;
* experimentos;
* acciones;
* pruebas;
* comparación;
* decisión.

Una mejora puede crear automáticamente Tasks.

---

# 42. CONTROL

Incluye:

* KPIs;
* límites;
* monitoreo;
* procedimiento;
* responsable;
* plan de reacción.

---

# 43. ISO/IEC 27001

ISO/IEC 27001 no se modelará como una metodología de proyecto.

Se modelará como:

**Governance & Compliance Framework.**

Su función es permitir gestionar dentro de Core-PMP los procesos relacionados con un SGSI.

---

# 44. ISO 27001 — DOMINIO

```text
Compliance
│
├── Context
├── Scope
├── Assets
├── Risks
├── Controls
├── SoA
├── Policies
├── Evidence
├── Audits
├── Findings
├── Non-Conformities
└── Corrective Actions
```

---

# 45. ASSETS

Ejemplos:

* servidores;
* bases de datos;
* APIs;
* repositorios;
* notebooks;
* certificados;
* documentación;
* servicios cloud.

Entidad:

```text
Asset
├── owner
├── custodian
├── classification
├── location
├── criticality
└── risks
```

---

# 46. RISK MANAGEMENT

El riesgo:

```text
Risk
├── Asset
├── Threat
├── Vulnerability
├── Probability
├── Impact
├── Inherent Risk
├── Treatment
├── Control
└── Residual Risk
```

---

# 47. CONTROLS

Core-PMP debe permitir gestionar catálogos de controles.

```text
Control
├── code
├── description
├── applicability
├── owner
├── implementation
├── status
└── evidence
```

Los catálogos normativos deben poder configurarse y versionarse.

---

# 48. STATEMENT OF APPLICABILITY

Debe existir:

```text
StatementOfApplicability
```

Con:

* control;
* aplicabilidad;
* justificación;
* estado;
* responsable;
* evidencia.

---

# 49. AUDITORÍAS

```text
Audit
├── scope
├── criteria
├── auditors
├── findings
├── evidence
└── conclusion
```

Tipos:

```text
INTERNAL
EXTERNAL
SUPPLIER
COMPLIANCE
```

---

# 50. HALLAZGOS

```text
AuditFinding
├── description
├── severity
├── requirement
├── evidence
├── responsible
└── corrective_action
```

---

# 51. NO CONFORMIDADES

```text
NonConformity
├── requirement
├── finding
├── root_cause
├── impact
├── corrective_action
├── responsible
├── due_date
└── verification
```

---

# 52. EVIDENCIAS

Las evidencias pueden estar relacionadas con:

* documentos;
* tareas;
* tickets;
* auditorías;
* controles;
* riesgos;
* incidentes;
* registros.

Trazabilidad:

```text
Requirement
   ↓
Control
   ↓
Risk
   ↓
Task
   ↓
Evidence
   ↓
Audit
```

---

# 53. TICKETS

Core-PMP tendrá Ticket Management.

Tipos:

```text
INCIDENT
REQUEST
BUG
CHANGE
QUESTION
TASK
```

---

# 54. TICKET WORKFLOW

```text
OPEN
ASSIGNED
IN_PROGRESS
WAITING
RESOLVED
CLOSED
CANCELLED
```

Soporta:

* SLA;
* colas;
* grupos;
* responsables;
* prioridad;
* archivos;
* comentarios;
* relaciones.

---

# 55. RELACIÓN TICKET-TASK

```text
Ticket
   ↓
Task
   ↓
Sprint
   ↓
Project
```

Un ticket puede crear una o varias tareas.

---

# 56. CHAT INTERNO

Core-PMP incluye colaboración nativa.

```text
Chat
├── Direct Messages
├── Group Chats
├── Project Channels
├── Team Channels
└── General Channels
```

---

# 57. CHAT

Funciones:

* mensajes;
* threads;
* menciones;
* respuestas;
* archivos;
* enlaces;
* reacciones;
* mensajes fijados;
* búsqueda;
* no leídos;
* notificaciones.

---

# 58. ACTIVITY FEED

Debe registrar actividad funcional:

```text
Marcelo completó TASK-001
Ana comentó BUG-002
Sprint 04 comenzó
Riesgo R-002 creado
Presupuesto actualizado
```

No reemplaza el Audit Log.

---

# 59. NOTIFICACIONES

Eventos:

* tarea asignada;
* mención;
* ticket asignado;
* SLA;
* sprint;
* bloqueo;
* riesgo;
* vencimiento;
* comentario;
* aprobación.

Canales:

* in-app;
* email;
* posteriormente push.

---

# 60. CALENDARIO

Debe integrar:

* tareas;
* reuniones;
* sprints;
* hitos;
* tickets;
* vencimientos;
* eventos.

---

# 61. MEETINGS

```text
Meeting
├── title
├── project
├── date
├── participants
├── agenda
├── decisions
├── actions
└── documents
```

Las acciones pueden convertirse en Tasks.

---

# 62. DOCUMENT MANAGEMENT

```text
Project
├── Contracts
├── Requirements
├── Designs
├── Reports
├── Deliverables
└── Evidence
```

Soporta:

* versiones;
* permisos;
* etiquetas;
* comentarios;
* asociación con entidades.

---

# 63. RECURSOS

Recursos:

* personas;
* equipos;
* externos;
* proveedores;
* infraestructura;
* recursos técnicos.

Control:

* capacidad;
* disponibilidad;
* carga;
* asignación.

---

# 64. TIMESHEETS

```text
TimeEntry
├── user
├── project
├── task
├── date
├── hours
├── description
└── status
```

Estados:

```text
DRAFT
SUBMITTED
APPROVED
REJECTED
```

---

# 65. PRESUPUESTO

Core-PMP administra control de proyecto, no contabilidad general.

```text
Budget
├── Personnel
├── Suppliers
├── Licenses
├── Infrastructure
├── Equipment
└── Other
```

Indicadores:

```text
Budget
Committed
Actual
Available
```

---

# 66. CORE CONTADOR

La contabilidad oficial pertenece a **Core Contador**.

Core-PMP puede enviar o consultar:

* costos;
* horas;
* centros de costo;
* presupuesto;
* ejecución.

---

# 67. CHANGE MANAGEMENT

Entidad:

```text
ChangeRequest
```

Estados:

```text
DRAFT
SUBMITTED
UNDER_REVIEW
APPROVED
REJECTED
IMPLEMENTED
CANCELLED
```

Puede afectar:

* alcance;
* presupuesto;
* fechas;
* recursos;
* riesgos.

---

# 68. BASELINE

Permite comparar:

```text
Baseline
      ↓
Current Plan
      ↓
Variance
```

Aplicable a:

* fechas;
* presupuesto;
* alcance;
* avance.

---

# 69. CALIDAD

Debe existir una capa transversal de Quality Management.

Incluye:

* quality criteria;
* acceptance criteria;
* Definition of Done;
* checklists;
* inspecciones;
* findings;
* corrective actions.

---

# 70. KPIs

Entidad:

```text
Metric
```

Puede asociarse a:

* proyecto;
* equipo;
* proceso;
* Sprint;
* Kanban;
* Six Sigma;
* compliance.

---

# 71. DASHBOARD EJECUTIVO

Debe mostrar:

```text
Projects
Progress
Budget
Risks
Issues
Milestones
Tickets
Resource Load
```

---

# 72. DASHBOARD JP

```text
My Projects
Tasks
Milestones
Risks
Issues
Tickets
Teams
Budget
Calendar
```

---

# 73. DASHBOARD SCRUM

```text
Sprint
Velocity
Burndown
Burnup
Commitment
Blockers
Carry-over
```

---

# 74. DASHBOARD KANBAN

```text
WIP
Throughput
Cycle Time
Lead Time
Blocked
Aging Work
```

---

# 75. DASHBOARD SIX SIGMA

```text
DMAIC Phase
Baseline
Current Metric
Target
Gap
Improvement
Control Status
```

---

# 76. DASHBOARD GOVERNANCE

```text
Controls
Risks
Audits
Findings
Non-Conformities
Corrective Actions
Evidence
```

---

# 77. REPORTES

## Project

* status report;
* schedule;
* budget;
* risks;
* issues;
* milestones.

## Agile

* velocity;
* burndown;
* burnup;
* cycle time;
* throughput;
* WIP.

## Governance

* control status;
* audit status;
* findings;
* corrective actions;
* evidence coverage.

## Improvement

* DMAIC;
* baseline;
* KPI;
* improvement;
* control.

---

# 78. MI TRABAJO

Vista transversal del usuario:

```text
MY WORK
│
├── My Tasks
├── My Tickets
├── My Sprints
├── My Meetings
├── My Approvals
├── My Messages
├── My Mentions
├── My Risks
└── My Calendar
```

---

# 79. USUARIO

La identidad viene de Enterprise.

Core-PMP almacena información propia del dominio:

```text
PMP User Profile
├── skills
├── availability
├── preferences
├── project memberships
├── teams
└── groups
```

---

# 80. PERMISOS

RBAC + permisos por objeto.

Ejemplos:

```text
PROJECT_VIEW
PROJECT_CREATE
PROJECT_EDIT
PROJECT_DELETE

TASK_VIEW
TASK_CREATE
TASK_EDIT
TASK_ASSIGN

BOARD_VIEW
BOARD_MANAGE

SPRINT_VIEW
SPRINT_MANAGE

TICKET_CREATE
TICKET_ASSIGN

BUDGET_VIEW
BUDGET_EDIT

REPORT_VIEW
REPORT_EXPORT

CHAT_USE
CHANNEL_MANAGE

COMPLIANCE_MANAGE
AUDIT_MANAGE
CONTROL_MANAGE
```

---

# 81. AUDITORÍA

Debe existir Audit Log separado de Activity.

```text
AuditLog
├── tenant_id
├── actor_id
├── entity
├── entity_id
├── action
├── before
├── after
├── timestamp
├── ip
└── source
```

Especialmente para:

* permisos;
* presupuesto;
* metodología;
* configuración;
* controles;
* auditorías;
* estados.

---

# 82. CAMBIO DE METODOLOGÍA

Un proyecto puede cambiar de metodología.

Nunca debe destruir información histórica.

Ejemplo:

```text
SCRUM
   ↓
HYBRID
```

Los Sprints permanecen.

Las tareas permanecen.

Los tickets permanecen.

El historial permanece.

Se registra:

```text
METHODOLOGY_CHANGED
```

---

# 83. EVENT BUS

Eventos principales:

```text
project.created
project.started
project.completed

task.created
task.updated
task.completed
task.blocked

sprint.started
sprint.completed

ticket.created
ticket.assigned
ticket.resolved

risk.created
issue.created

audit.created
finding.created
action.created

message.sent
mention.created

budget.updated
budget.threshold_reached
```

---

# 84. AUTOMATION ENGINE

Permite:

```text
WHEN
condition

THEN
action
```

Ejemplo:

```text
Ticket SLA < 24h
→ Notify responsible
```

```text
Task blocked
→ Notify Project Manager
```

```text
Budget > 90%
→ Notify authorized users
```

```text
Sprint completed
→ Create Review
```

---

# 85. PLANTILLAS

Core-PMP debe permitir crear Templates.

```text
Template
├── methodology
├── phases
├── tasks
├── roles
├── workflow
├── board
├── sprints
├── documents
└── automation
```

Plantillas iniciales:

* Desarrollo de software;
* Implementación ERP;
* Proyecto TI;
* Consultoría;
* Marketing;
* Soporte;
* Mejora de procesos;
* Six Sigma.

---

# 86. INTEGRACIÓN COREPYME

Core-PMP puede recibir referencias:

```text
company_id
branch_id
customer_id
supplier_id
```

Ejemplo:

```text
CorePyme
   ↓
Empresa
   ↓
Proyecto de implementación
   ↓
Core-PMP
```

---

# 87. INTEGRACIÓN CORE TRIBUTARIO

Puede existir referencia a:

* integración;
* implementación;
* incidentes;
* proyectos;
* tickets.

Core-PMP no reemplaza Core Tributario.

---

# 88. INTEGRACIÓN CORE CONTADOR

Puede utilizar:

* centro de costo;
* costos;
* horas;
* presupuesto;
* ejecución.

La contabilidad permanece en Core Contador.

---

# 89. INTEGRACIONES EXTERNAS

Arquitectura preparada para:

* GitHub;
* GitLab;
* Azure DevOps;
* Slack;
* Microsoft Teams;
* correo;
* calendarios;
* herramientas externas.

Estas serán fases posteriores.

---

# 90. API

API versionada:

```text
/api/v1/portfolios
/api/v1/programs
/api/v1/projects

/api/v1/tasks
/api/v1/milestones
/api/v1/dependencies

/api/v1/boards
/api/v1/sprints
/api/v1/backlog

/api/v1/tickets
/api/v1/risks
/api/v1/issues
/api/v1/changes

/api/v1/teams
/api/v1/groups

/api/v1/chat
/api/v1/channels
/api/v1/messages

/api/v1/documents
/api/v1/meetings
/api/v1/calendar

/api/v1/resources
/api/v1/timesheets

/api/v1/budgets
/api/v1/costs

/api/v1/compliance
/api/v1/controls
/api/v1/audits
/api/v1/evidence

/api/v1/improvement
/api/v1/dmaic

/api/v1/reports
/api/v1/integrations
```

---

# 91. REALTIME

Realtime obligatorio para:

* chat;
* Kanban;
* Scrum Board;
* comentarios;
* notificaciones;
* presencia;
* asignaciones;
* actividad.

---

# 92. ARQUITECTURA TÉCNICA

Stack inicial:

```text
Frontend
Next.js
TypeScript
React

Backend
TypeScript

Database
PostgreSQL / Supabase

Realtime
WebSocket / Realtime layer

Storage
Object Storage

Authentication
Core Enterprise

Jobs
Background Workers

Events
CORE Event Bus
```

Debe mantenerse desacoplado para permitir posteriormente mover el backend a .NET si el crecimiento lo justifica.

---

# 93. ARQUITECTURA DE DOMINIO

```text
core-pmp/
│
├── identity
├── portfolio
├── program
├── project
├── methodology
├── work
├── board
├── scrum
├── kanban
├── ticket
├── team
├── group
├── collaboration
├── calendar
├── document
├── resource
├── timesheet
├── budget
├── risk
├── issue
├── quality
├── compliance
├── audit
├── improvement
├── metric
├── notification
├── automation
├── reporting
└── integration
```

---

# 94. MODELO DE DATOS PRINCIPAL

```text
TENANT
│
├── PORTFOLIO
│   └── PROGRAM
│       └── PROJECT
│
├── PROJECT_MEMBERS
├── PROJECT_ROLES
├── GROUPS
├── TEAMS
│
├── TASKS
├── SUBTASKS
├── DEPENDENCIES
├── MILESTONES
├── PHASES
├── WBS_ITEMS
│
├── BOARDS
├── BOARD_COLUMNS
├── BOARD_ITEMS
├── SWIMLANES
│
├── EPICS
├── FEATURES
├── USER_STORIES
├── SPRINTS
├── SPRINT_ITEMS
│
├── TICKETS
├── RISKS
├── ISSUES
├── CHANGE_REQUESTS
│
├── RESOURCES
├── TIME_ENTRIES
├── BUDGETS
├── COSTS
│
├── DOCUMENTS
├── MEETINGS
├── CHANNELS
├── MESSAGES
├── COMMENTS
├── ACTIVITIES
│
├── FRAMEWORKS
├── PROJECT_FRAMEWORKS
├── FRAMEWORK_CONFIGURATIONS
│
├── ASSETS
├── CONTROLS
├── CONTROL_ASSESSMENTS
├── SOA
├── AUDITS
├── AUDIT_FINDINGS
├── NON_CONFORMITIES
├── CORRECTIVE_ACTIONS
├── EVIDENCE
│
├── DMAIC_PROJECTS
├── DMAIC_PHASES
├── METRICS
├── MEASUREMENTS
├── IMPROVEMENT_ACTIONS
└── CONTROL_PLANS
```

---

# 95. REGLA DE INTEGRIDAD

Todas las entidades deben:

* pertenecer a un tenant;
* tener timestamps;
* mantener trazabilidad;
* respetar autorización;
* utilizar IDs estables;
* evitar duplicación de entidades;
* soportar soft delete cuando corresponda;
* registrar cambios importantes.

---

# 96. SEGURIDAD

La plataforma debe diseñarse siguiendo principios de:

* least privilege;
* defense in depth;
* secure by default;
* tenant isolation;
* encryption;
* auditability;
* secrets management;
* session security;
* API authorization;
* rate limiting;
* input validation.

ISO/IEC 27001 será un framework de gobierno/compliance soportado por la plataforma; no debe confundirse con una certificación automática del producto.

---

# 97. PRODUCTO Y CERTIFICACIÓN

Core-PMP podrá facilitar la gestión de un SGSI, pero:

**utilizar Core-PMP no significa que una empresa esté certificada ISO/IEC 27001.**

La certificación depende de la implementación real del SGSI, su alcance y el proceso de auditoría correspondiente.

---

# 98. SIX SIGMA Y CORE-PMP

Six Sigma se utilizará como framework de mejora.

La plataforma debe facilitar:

```text
Problema
↓
Define
↓
Measure
↓
Analyze
↓
Improve
↓
Control
↓
Resultado
```

Las métricas deben permanecer vinculadas a los procesos y proyectos.

---

# 99. CALIDAD

Quality Management será transversal.

Puede utilizarse en:

* Scrum;
* Kanban;
* proyectos tradicionales;
* Six Sigma;
* compliance;
* tickets.

---

# 100. ROADMAP

## Fase 1 — Foundation

* Core Enterprise integration;
* Tenant;
* Auth;
* Users;
* Profiles;
* Groups;
* Teams;
* RBAC;
* Projects.

## Fase 2 — Work Engine

* Tasks;
* Subtasks;
* Comments;
* Attachments;
* Dependencies;
* Activity;
* Notifications.

## Fase 3 — Project Planning

* WBS;
* Gantt;
* Timeline;
* Milestones;
* Baseline.

## Fase 4 — Kanban

* Boards;
* Columns;
* Cards;
* Swimlanes;
* WIP;
* Metrics.

## Fase 5 — Scrum

* Backlog;
* Epics;
* Stories;
* Sprints;
* Sprint Board;
* Planning;
* Review;
* Retrospective;
* Metrics.

## Fase 6 — Collaboration

* Chat;
* Channels;
* Mentions;
* Meetings;
* Calendar;
* Documents.

## Fase 7 — Ticketing

* Tickets;
* Queues;
* SLA;
* Workflows;
* Relations.

## Fase 8 — Control

* Risks;
* Issues;
* Resources;
* Timesheets;
* Budget;
* Costs;
* Quality.

## Fase 9 — Governance

* Compliance;
* Assets;
* Controls;
* SoA;
* Audits;
* Findings;
* Non-Conformities;
* Evidence;
* Corrective Actions.

## Fase 10 — Improvement

* Six Sigma;
* DMAIC;
* Metrics;
* Statistical tools;
* Control Plans.

## Fase 11 — Ecosystem

* CorePyme;
* Core Contador;
* Core Tributario;
* Core Bancario;
* external integrations;
* webhooks;
* SDK.

---

# 101. MVP COMERCIAL

El MVP comercial debe demostrar la propuesta principal.

Incluye:

```text
CORE-PMP MVP
│
├── Enterprise Integration
├── Projects
├── Users
├── Groups
├── Teams
├── Profiles
├── Tasks
├── WBS
├── Gantt
├── Kanban
├── Scrum
├── Backlog
├── Sprints
├── Tickets
├── Chat
├── Comments
├── Notifications
├── Calendar
├── Documents
├── Risks
├── Dashboard
├── Reports
└── Audit
```

ISO 27001 y Six Sigma pueden iniciar como estructuras de dominio y evolucionar posteriormente hacia módulos completos.

---

# 102. PLAN DE LICENCIAMIENTO

Core-PMP debe ser SaaS.

La estructura comercial puede basarse en:

```text
Plan
├── usuarios
├── proyectos
├── módulos
├── almacenamiento
├── automatizaciones
└── integraciones
```

Posibles niveles:

```text
CORE-PMP
├── Team
├── Business
├── Professional
├── Enterprise
└── Enterprise Plus
```

Los nombres y precios se definirán posteriormente mediante estrategia comercial.

---

# 103. ENTITLEMENTS

CORE Enterprise determinará qué funcionalidades están contratadas.

Ejemplo:

```text
pmp.projects
pmp.kanban
pmp.scrum
pmp.chat
pmp.ticketing
pmp.timesheets
pmp.budget
pmp.compliance
pmp.six_sigma
pmp.integrations
pmp.analytics
```

---

# 104. PRINCIPIO DE MODULARIDAD

Un cliente pequeño puede utilizar:

```text
Projects
Tasks
Kanban
Chat
```

Una empresa mayor:

```text
Projects
Scrum
Kanban
Tickets
Resources
Budget
Reports
```

Una organización Enterprise:

```text
Todo
+
Governance
+
ISO
+
Six Sigma
+
Integrations
+
Advanced Analytics
```

---

# 105. EXPERIENCIA DEL USUARIO

Navegación principal:

```text
CORE-PMP

Inicio
Mi trabajo
Portafolios
Proyectos
Tableros
Backlog
Tickets
Chat
Calendario
Reportes
Gobierno
Administración
```

Dentro del proyecto:

```text
Resumen
Plan
Board
Backlog
Sprints
Tareas
Tickets
Equipo
Calendario
Presupuesto
Riesgos
Documentos
Chat
Actividad
Gobierno
Mejora
Reportes
Configuración
```

Los módulos visibles dependen de:

1. metodología;
2. framework;
3. permisos;
4. entitlements.

---

# 106. PRINCIPIO DE UX

La interfaz debe evitar mostrar toda la complejidad a todos los usuarios.

Un:

**Team Member**

no necesita ver:

* configuración ISO;
* presupuesto global;
* administración de permisos;
* configuración Enterprise.

Un:

**Project Manager**

sí necesita ver:

* planificación;
* presupuesto;
* riesgos;
* recursos;
* equipo;
* reportes.

Un:

**Compliance Manager**

necesita:

* controles;
* riesgos;
* auditorías;
* evidencias;
* no conformidades.

---

# 107. "MI TRABAJO" COMO EXPERIENCIA PRINCIPAL

El usuario debe entrar y encontrar inmediatamente:

```text
Hoy
│
├── Tareas vencidas
├── Tareas de hoy
├── Tickets
├── Reuniones
├── Mensajes
├── Menciones
├── Aprobaciones
└── Bloqueos
```

La aplicación no debe obligarlo a navegar proyecto por proyecto para descubrir qué tiene pendiente.

---

# 108. ESCALABILIDAD

La arquitectura debe permitir:

```text
1 empresa
     ↓
10 usuarios
     ↓
100 usuarios
     ↓
1.000 usuarios
     ↓
10.000+ usuarios
```

Sin cambiar el modelo conceptual.

---

# 109. OBSERVABILIDAD

Debe integrarse con la arquitectura CORE para:

* logs;
* métricas;
* traces;
* errores;
* performance;
* auditoría.

Especial atención a:

* realtime;
* chat;
* jobs;
* notificaciones;
* automatizaciones;
* integraciones.

---

# 110. PRINCIPIOS DE DESARROLLO

Antes de implementar:

1. definir dominio;
2. definir modelo de datos;
3. definir contratos;
4. definir permisos;
5. definir eventos;
6. definir API;
7. definir UX;
8. documentar;
9. implementar;
10. probar.

No comenzar directamente creando pantallas.

---

# 111. REGLA PARA CLAUDE CODE

Claude Code deberá tratar este documento como:

**Product & Domain Source of Truth.**

No debe:

* inventar entidades;
* duplicar entidades;
* crear metodologías fuera del modelo;
* introducir dependencias arquitectónicas sin justificación;
* modificar contratos silenciosamente;
* implementar módulos fuera del alcance sin registrarlo.

Cualquier desviación debe quedar documentada.

---

# 112. DEFINICIÓN FINAL

> **CORE-PMP es la plataforma empresarial del ecosistema CORE para gestionar proyectos, trabajo, equipos, colaboración, gobierno y mejora continua.**
>
> Su arquitectura está basada en cuatro motores: **Project Engine, Delivery Engine, Work & Collaboration Engine y Governance & Improvement Engine**.
>
> Cada proyecto puede utilizar metodologías tradicionales, Kanban, Scrum o modelos híbridos, mientras que Six Sigma se integra como framework de mejora y los procesos asociados a ISO/IEC 27001 como framework de gobierno y compliance.
>
> Todas las metodologías utilizan un Work Engine común, evitando duplicación de tareas, usuarios, proyectos y demás entidades.
>
> Core Enterprise proporciona identidad, tenants, usuarios, contratos, entitlements y seguridad transversal. Core-PMP mantiene el dominio de proyectos, trabajo, colaboración, gobierno y mejora.
>
> La plataforma está diseñada para integrarse posteriormente con CorePyme, Core Contador, Core Tributario, Core Bancario y aplicaciones externas mediante APIs, eventos, webhooks y SDKs.
>
> **CORE-PMP no es simplemente un gestor de proyectos. Es la capa empresarial de ejecución, colaboración, control y mejora del ecosistema CORE.**

puede ser indepediente del core ecosistma tambien. 

Estilo moday.com

Fuente Ibm pplex, ibm mono para $ valores

