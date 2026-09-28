\# CORE-PMP



\## Plataforma Empresarial de Gestión de Proyectos, Trabajo y Colaboración



\*\*Empresa:\*\* CORE Tecnología Empresarial SpA

\*\*Producto:\*\* Core-PMP

\*\*PMP:\*\* Project Management Platform

\*\*Versión:\*\* 1.0 — Especificación Maestra

\*\*Clasificación:\*\* Producto Enterprise SaaS

\*\*Dependencia corporativa:\*\* Core Enterprise



\---



\# 1. Definición oficial



\*\*Core-PMP es la plataforma empresarial de gestión de proyectos, equipos, trabajo y colaboración de CORE Tecnología Empresarial.\*\*



Permite crear y administrar proyectos bajo distintas metodologías —tradicional, Kanban, Scrum o híbrida—, seleccionadas por el \*\*JP (Jefe de Proyecto)\*\* según las necesidades de cada proyecto.



Core-PMP integra en una única plataforma:



\* proyectos

\* portafolios

\* planificación

\* WBS

\* Gantt

\* Kanban

\* Scrum

\* backlog

\* sprints

\* tareas

\* tickets

\* equipos

\* grupos

\* perfiles

\* recursos

\* timesheets

\* presupuesto

\* costos

\* riesgos

\* incidencias

\* documentación

\* chat interno

\* comentarios

\* notificaciones

\* calendario

\* reportes

\* auditoría

\* integraciones



El objetivo es que Core-PMP pueda utilizarse tanto para un proyecto tradicional de implementación como para un equipo de desarrollo de software trabajando con Scrum, un equipo operativo utilizando Kanban o una organización utilizando un modelo híbrido.



\---



\# 2. Principio fundamental



Core-PMP tendrá un \*\*motor común de trabajo\*\*.



La metodología no crea productos distintos.



```text

&#x20;                         CORE-PMP

&#x20;                            │

&#x20;                    Project Work Engine

&#x20;                            │

&#x20;       ┌────────────────────┼────────────────────┐

&#x20;       │                    │                    │

&#x20;  Tradicional             Kanban              Scrum

&#x20;       │                    │                    │

&#x20;       └────────────────────┼────────────────────┘

&#x20;                            │

&#x20;                          Híbrido

```



Todos utilizan las mismas entidades centrales:



```text

Proyecto

Tarea

Usuario

Equipo

Grupo

Responsable

Estado

Prioridad

Comentario

Documento

Ticket

```



La metodología determina \*\*cómo se organizan y visualizan esas entidades\*\*.



\---



\# 3. Elección de metodología por el JP



Al crear un proyecto, el JP debe seleccionar:



```text

Metodología

├── Tradicional

├── Kanban

├── Scrum

└── Híbrida

```



Esta decisión configura automáticamente las herramientas disponibles.



Por ejemplo:



\### Tradicional



Core-PMP activa:



\* WBS

\* fases

\* actividades

\* hitos

\* dependencias

\* Gantt

\* baseline

\* presupuesto

\* control de avance



\### Kanban



Activa:



\* tablero

\* columnas

\* tarjetas

\* WIP limits

\* swimlanes

\* políticas de flujo

\* lead time

\* cycle time

\* throughput



\### Scrum



Activa:



\* Product Backlog

\* Epics

\* User Stories

\* Tasks

\* Sprints

\* Sprint Backlog

\* Planning

\* Daily

\* Review

\* Retrospective

\* Story Points

\* Velocity

\* Burndown

\* Burnup



\### Híbrida



Permite combinar:



```text

WBS + Gantt

&#x20;      +

Kanban

&#x20;      +

Sprints

&#x20;      +

Presupuesto

```



\---



\# 4. El JP como configurador del proyecto



El JP no solamente administra tareas.



Es el responsable de configurar el modelo de trabajo.



Puede establecer:



\* metodología

\* estructura del proyecto

\* permisos

\* perfiles

\* equipos

\* grupos

\* estados

\* prioridades

\* categorías

\* tablero

\* reglas

\* WIP

\* sprints

\* estimaciones

\* calendario

\* presupuesto

\* notificaciones

\* visibilidad



La configuración debe quedar asociada al proyecto.



```text

Proyecto

│

├── Metodología

├── Configuración

├── Roles

├── Grupos

├── Equipos

├── Flujo de trabajo

├── Permisos

└── Reglas

```



\---



\# 5. Arquitectura general



```text

&#x20;                   CORE TECNOLOGÍA EMPRESARIAL

&#x20;                              │

&#x20;                              ▼

&#x20;                    ┌────────────────────┐

&#x20;                    │   CORE ENTERPRISE  │

&#x20;                    │                    │

&#x20;                    │ Identity           │

&#x20;                    │ Tenants            │

&#x20;                    │ Users              │

&#x20;                    │ Memberships        │

&#x20;                    │ Contracts          │

&#x20;                    │ Entitlements       │

&#x20;                    │ Global Audit       │

&#x20;                    └──────────┬─────────┘

&#x20;                               │

&#x20;                               │ Identity / Tenant

&#x20;                               ▼

&#x20;                    ┌────────────────────┐

&#x20;                    │      CORE-PMP      │

&#x20;                    │                    │

&#x20;                    │ Project Engine     │

&#x20;                    │ Planning           │

&#x20;                    │ Agile              │

&#x20;                    │ Kanban             │

&#x20;                    │ Scrum              │

&#x20;                    │ Work Management    │

&#x20;                    │ Teams              │

&#x20;                    │ Tickets            │

&#x20;                    │ Chat               │

&#x20;                    │ Resources          │

&#x20;                    │ Finance Control    │

&#x20;                    │ Reports            │

&#x20;                    └──────┬─────┬───────┘

&#x20;                           │     │

&#x20;                ┌──────────┘     └──────────┐

&#x20;                ▼                           ▼

&#x20;            Core-PyME                  Core Contador

&#x20;                │                           │

&#x20;                └────────────┬──────────────┘

&#x20;                             ▼

&#x20;                      CORE Platform

```



\---



\# 6. Core Enterprise vs Core-PMP



\## Core Enterprise es propietario de:



\* identidad

\* autenticación

\* tenants

\* empresas

\* usuarios

\* membresías

\* suscripciones

\* contratos

\* entitlements

\* seguridad corporativa

\* identidad global

\* auditoría transversal



\## Core-PMP es propietario de:



\* proyectos

\* portafolios

\* metodologías

\* equipos de proyecto

\* grupos

\* perfiles PMP

\* tareas

\* tickets

\* backlog

\* sprints

\* tableros

\* riesgos

\* presupuesto de proyecto

\* recursos

\* timesheets

\* colaboración

\* chat

\* métricas de proyecto



\---



\# 7. Módulos oficiales



La plataforma queda dividida en:



```text

CORE-PMP

│

├── 01 Dashboard

├── 02 Portfolios

├── 03 Projects

│

├── 04 Planning

│   ├── WBS

│   ├── Gantt

│   ├── Timeline

│   ├── Milestones

│   └── Dependencies

│

├── 05 Agile

│   ├── Backlog

│   ├── Scrum

│   ├── Sprints

│   ├── Kanban

│   └── Hybrid

│

├── 06 Work Management

│   ├── Tasks

│   ├── Subtasks

│   ├── Checklists

│   └── Templates

│

├── 07 Teams

│   ├── Users

│   ├── Groups

│   ├── Teams

│   └── Profiles

│

├── 08 Tickets

│

├── 09 Collaboration

│   ├── Chat

│   ├── Comments

│   ├── Mentions

│   └── Activity

│

├── 10 Resources

│

├── 11 Timesheets

│

├── 12 Financial Control

│

├── 13 Risks

│

├── 14 Issues

│

├── 15 Documents

│

├── 16 Calendar

│

├── 17 Notifications

│

├── 18 Reports

│

├── 19 Integrations

│

└── 20 Administration

```



\---



\# 8. Portafolios



Permiten administrar múltiples proyectos.



```text

Portafolio

│

├── Proyecto A

├── Proyecto B

├── Proyecto C

└── Proyecto D

```



Información:



\* código

\* nombre

\* descripción

\* responsable

\* sponsor

\* estado

\* presupuesto total

\* avance global

\* proyectos asociados



\---



\# 9. Proyecto



Entidad principal:



```text

Project

```



Datos:



```text

id

tenant\_id

portfolio\_id

code

name

description

objective



methodology



status

priority



project\_manager\_id

sponsor\_id



planned\_start

planned\_end



actual\_start

actual\_end



budget

currency



progress



created\_at

updated\_at

created\_by

updated\_by

```



\---



\# 10. Estados del proyecto



```text

DRAFT

PLANNED

ACTIVE

PAUSED

AT\_RISK

COMPLETED

CANCELLED

```



`AT\_RISK` es un estado empresarial del proyecto, no solamente una etiqueta.



\---



\# 11. Perfiles



Core-PMP debe diferenciar \*\*perfil global\*\* de \*\*rol dentro del proyecto\*\*.



\## Perfiles de plataforma



```text

PMP\_ADMIN

PMP\_MANAGER

PMP\_USER

PMP\_VIEWER

```



\## Roles de proyecto



```text

PROJECT\_MANAGER

PRODUCT\_OWNER

SCRUM\_MASTER

TEAM\_MEMBER

BUSINESS\_ANALYST

STAKEHOLDER

SPONSOR

CLIENT

OBSERVER

```



Un usuario puede tener diferentes roles en distintos proyectos.



```text

Marcelo

│

├── Proyecto A → PROJECT\_MANAGER

├── Proyecto B → STAKEHOLDER

└── Proyecto C → VIEWER

```



\---



\# 12. Grupos



Los grupos permiten organizar usuarios independientemente de los proyectos.



Ejemplo:



```text

Grupo Desarrollo

├── Backend

├── Frontend

└── QA

```



Otro:



```text

Grupo Comercial

├── Ventas

├── Marketing

└── Preventa

```



Un grupo puede participar en múltiples proyectos.



\---



\# 13. Equipos



El equipo representa la unidad de ejecución del proyecto.



```text

Proyecto

│

└── Equipo

&#x20;   ├── Product Owner

&#x20;   ├── Scrum Master

&#x20;   ├── Backend

&#x20;   ├── Frontend

&#x20;   └── QA

```



Un proyecto puede tener múltiples equipos.



\---



\# 14. Planning tradicional



Para proyectos tradicionales:



\### WBS



```text

Proyecto

│

├── Fase 1

│   ├── Actividad

│   ├── Actividad

│   └── Entregable

│

├── Fase 2

│   ├── Actividad

│   └── Entregable

│

└── Fase 3

```



\### Gantt



```text

&#x20;         SEP      OCT      NOV

Diseño    ███████

Backend       ███████████

Frontend         █████████

QA                    ██████

Deploy                      ██

```



\---



\# 15. Kanban



Kanban es un \*\*módulo oficial de Core-PMP\*\*.



Cada proyecto Kanban puede tener uno o varios tableros.



\## Tablero



```text

┌───────────┬───────────┬──────────┬────────────┐

│ BACKLOG   │ EN CURSO  │ BLOQUEADO│ COMPLETADO │

├───────────┼───────────┼──────────┼────────────┤

│ Ticket 01 │ Task 04   │ Task 08  │ Task 09    │

│ Task 02   │ Task 05   │          │ Task 10    │

│ Task 03   │ Task 06   │          │ Task 11    │

└───────────┴───────────┴──────────┴────────────┘

```



Características:



\* columnas configurables

\* drag \& drop

\* WIP limits

\* swimlanes

\* filtros

\* etiquetas

\* colores por prioridad

\* responsables

\* SLA

\* estados

\* métricas



\---



\# 16. Kanban avanzado



El tablero debe soportar:



\### WIP



```text

EN CURSO

Máximo: 5

```



Si llega una sexta tarjeta:



> El límite WIP ha sido alcanzado.



\### Swimlanes



Por:



\* equipo

\* prioridad

\* responsable

\* cliente

\* tipo

\* ticket



\### Métricas



\* throughput

\* cycle time

\* lead time

\* tiempo bloqueado

\* trabajo pendiente



\---



\# 17. Scrum



Scrum será un módulo completo, no una etiqueta.



\## Backlog



```text

EPIC

│

├── USER STORY

│    ├── TASK

│    ├── TASK

│    └── BUG

│

└── USER STORY

```



\---



\# 18. Elementos Scrum



Core-PMP debe soportar:



\* Product Backlog

\* Epics

\* Features

\* User Stories

\* Tasks

\* Bugs

\* Sprints

\* Sprint Backlog

\* Sprint Goal

\* Story Points

\* prioridades

\* estimaciones

\* Definition of Done

\* Acceptance Criteria



\---



\# 19. Sprint



```text

Sprint

├── nombre

├── objetivo

├── inicio

├── término

├── capacidad

├── backlog

├── velocidad

└── estado

```



Estados:



```text

PLANNED

ACTIVE

COMPLETED

CANCELLED

```



\---



\# 20. Scrum Board



```text

┌──────────┬────────────┬───────────┬────────────┐

│ TO DO    │ IN PROGRESS│ REVIEW    │ DONE       │

├──────────┼────────────┼───────────┼────────────┤

│ Story 01 │ Story 03   │ Story 05  │ Story 06   │

│ Story 02 │ Story 04   │           │ Story 07   │

└──────────┴────────────┴───────────┴────────────┘

```



\---



\# 21. Ceremonias Scrum



Core-PMP debe permitir registrar:



\### Sprint Planning



\* fecha

\* participantes

\* sprint goal

\* capacidad

\* historias seleccionadas



\### Daily



No es necesario convertirlo en una videoconferencia.



Puede registrar:



\* qué hice

\* qué haré

\* bloqueos



\### Sprint Review



\* objetivo

\* entregables

\* resultado

\* comentarios

\* aprobación



\### Retrospective



\* qué salió bien

\* qué salió mal

\* acciones de mejora

\* responsable

\* fecha



\---



\# 22. Métricas Scrum



Dashboard:



```text

Sprint

────────────────────────



Story Points

32 / 40



Velocity

36



Completed

80%



Remaining

20%



Burndown

████████████

████████

████

██

```



También:



\* velocity

\* burndown

\* burnup

\* commitment

\* carry-over

\* sprint predictability



\---



\# 23. Metodología híbrida



La modalidad híbrida es importante para empresas reales.



Ejemplo:



```text

Proyecto

│

├── Gantt corporativo

│

├── Presupuesto

│

├── Hitos contractuales

│

└── Equipo desarrollo

&#x20;       │

&#x20;       └── Scrum

&#x20;            ├── Backlog

&#x20;            ├── Sprints

&#x20;            └── Scrum Board

```



Así un proyecto empresarial puede utilizar:



\*\*Gantt para dirección + Scrum para ejecución.\*\*



\---



\# 24. Tareas



Entidad transversal.



Una tarea puede aparecer en:



\* WBS

\* lista

\* Kanban

\* Scrum

\* Gantt

\* calendario

\* dashboard



Sin duplicarse.



```text

Task

│

├── Project

├── Phase

├── Sprint

├── Board

├── Parent Task

├── Assignees

├── Dependencies

├── Comments

├── Attachments

└── Tickets

```



\---



\# 25. Tickets



Core-PMP tendrá un módulo formal de \*\*Ticket Management\*\*.



Un ticket puede representar:



\* incidencia

\* solicitud

\* requerimiento

\* soporte

\* bug

\* consulta

\* cambio

\* tarea operativa



\---



\# 26. Ticket



```text

TICKET-000123

────────────────────────────

Título

Prioridad

Tipo

Estado

Solicitante

Asignado

Grupo

Proyecto

SLA

Fecha límite

```



Tipos:



```text

INCIDENT

REQUEST

BUG

CHANGE

QUESTION

TASK

```



Estados:



```text

OPEN

ASSIGNED

IN\_PROGRESS

WAITING

RESOLVED

CLOSED

CANCELLED

```



\---



\# 27. Ticketing avanzado



Debe soportar:



\* colas

\* grupos

\* responsables

\* prioridad

\* SLA

\* vencimiento

\* comentarios

\* archivos

\* historial

\* etiquetas

\* relaciones

\* enlaces a tareas

\* enlaces a sprints

\* enlaces a proyectos



Ejemplo:



```text

Ticket

&#x20;  ↓

Relacionado con

&#x20;  ↓

Task

&#x20;  ↓

Sprint

&#x20;  ↓

Proyecto

```



\---



\# 28. Chat interno



Core-PMP tendrá \*\*comunicación interna\*\*, separada del sistema de comentarios.



\## Chat



```text

Chat

│

├── Conversaciones directas

│

├── Grupos

│

├── Canales de proyecto

│

├── Canales de equipo

│

└── Canales generales

```



\---



\# 29. Funciones del chat



\* mensajes directos

\* grupos

\* canales

\* menciones

\* respuestas

\* threads

\* archivos

\* enlaces

\* emojis/reacciones

\* mensajes fijados

\* búsqueda

\* notificaciones

\* mensajes no leídos

\* estado online

\* historial



\---



\# 30. Canales



Ejemplo:



```text

\# proyecto-erp

\# backend

\# frontend

\# qa

\# direccion

```



Los permisos dependerán del contexto.



\---



\# 31. Integración Chat ↔ Proyecto



Desde un proyecto:



```text

Proyecto

├── General

├── Desarrollo

├── QA

└── Dirección

```



Desde un mensaje se puede enlazar:



```text

PROJECT-001

TASK-0042

TICKET-0021

SPRINT-08

```



\---



\# 32. Activity Feed



Cada proyecto tendrá actividad:



```text

Hoy



09:42 Marcelo completó TASK-0082

09:35 Ana comentó en BUG-004

09:20 Sprint 12 iniciado

09:12 Presupuesto actualizado

08:54 Nuevo riesgo registrado

```



Esto es diferente de auditoría.



\---



\# 33. Notificaciones



Centro de notificaciones:



```text

Notificaciones

─────────────────────────



@Marcelo te mencionó



Tarea asignada



Ticket SLA próximo a vencer



Sprint comienza mañana



Proyecto entra en AT RISK

```



Canales:



\* aplicación

\* email

\* posteriormente push



\---



\# 34. Calendario



Vista:



```text

Mes

Semana

Día

```



Debe mostrar:



\* tareas

\* hitos

\* sprints

\* reuniones

\* vencimientos

\* tickets

\* eventos



Cada usuario tendrá su calendario de trabajo.



\---



\# 35. Reuniones



Módulo simple:



```text

Meeting

├── título

├── fecha

├── participantes

├── proyecto

├── agenda

├── acuerdos

├── acciones

└── documentos

```



Una reunión puede generar tareas.



\---



\# 36. Documentos



Documentación centralizada:



```text

Proyecto

│

├── Contratos

├── Requerimientos

├── Diseño

├── Informes

├── Entregables

└── Evidencias

```



Permitir:



\* versiones

\* etiquetas

\* comentarios

\* permisos

\* asociación con entidades



\---



\# 37. Riesgos



Modelo:



```text

Riesgo

├── descripción

├── probabilidad

├── impacto

├── nivel

├── responsable

├── mitigación

├── contingencia

├── fecha

└── estado

```



\---



\# 38. Issues



Una incidencia es diferente a un riesgo.



```text

Riesgo

= puede ocurrir



Issue

= ya ocurrió

```



Un issue puede generar:



```text

Issue

&#x20;  ↓

Ticket

&#x20;  ↓

Task

&#x20;  ↓

Sprint

```



\---



\# 39. Recursos



Recursos:



\* usuarios

\* equipos

\* externos

\* proveedores

\* recursos técnicos



Control:



\* disponibilidad

\* asignación

\* capacidad

\* carga

\* fechas



\---



\# 40. Timesheets



Registro:



```text

Usuario

Proyecto

Tarea

Fecha

Horas

Descripción

Estado

```



Estados:



```text

DRAFT

SUBMITTED

APPROVED

REJECTED

```



\---



\# 41. Presupuesto y costos



Core-PMP controla el proyecto.



No sustituye Core Contador.



```text

Presupuesto

│

├── Personal

├── Proveedores

├── Licencias

├── Infraestructura

├── Equipamiento

└── Otros

```



Control:



```text

Presupuestado

Comprometido

Ejecutado

Disponible

```



\---



\# 42. Baseline



Para proyectos tradicionales y contratos:



```text

Baseline inicial

&#x20;       ↓

Plan actual

&#x20;       ↓

Variación

```



Permite comparar:



\* fecha planificada inicial

\* fecha actual

\* avance

\* presupuesto

\* alcance



\---



\# 43. Change Management



Un proyecto empresarial necesita control de cambios.



Entidad:



```text

Change Request

```



Estados:



```text

DRAFT

SUBMITTED

UNDER\_REVIEW

APPROVED

REJECTED

IMPLEMENTED

CANCELLED

```



Un cambio puede afectar:



\* alcance

\* presupuesto

\* fechas

\* recursos

\* riesgos



\---



\# 44. Scope



Core-PMP debe soportar:



\* objetivos

\* entregables

\* requisitos

\* acceptance criteria

\* alcance incluido

\* alcance excluido



En Scrum:



```text

Epic → Story → Acceptance Criteria

```



En tradicional:



```text

WBS → Entregable → Actividad

```



\---



\# 45. Plantillas



Una de las funciones clave para comercialización.



Permitir:



```text

Nueva plantilla

│

├── Metodología

├── fases

├── tareas

├── roles

├── workflow

├── tablero

├── sprints

└── documentos

```



Ejemplos:



\* Implementación ERP

\* Desarrollo de software

\* Proyecto TI

\* Consultoría

\* Marketing

\* Construcción

\* Proyecto interno



\---



\# 46. Dashboard ejecutivo



Debe cambiar según el usuario.



\### Dirección



```text

Proyectos

Riesgos

Presupuesto

Avance

Desviaciones

```



\### JP



```text

Tareas

Hitos

Riesgos

Tickets

Recursos

Calendario

```



\### Scrum Master



```text

Sprint

Velocity

Burndown

Bloqueos

WIP

```



\### Team Member



```text

Mis tareas

Mis tickets

Mi sprint

Mi calendario

Mis mensajes

```



\---



\# 47. Dashboard Kanban



```text

WIP

12



Throughput

38



Cycle Time

2,8 días



Bloqueadas

4

```



\---



\# 48. Dashboard Scrum



```text

Sprint 14



Commitment    42 SP

Completed     34 SP

Velocity      37



Burndown

Burnup

Sprint Health

Blockers

```



\---



\# 49. Dashboard de proyecto



```text

Proyecto

────────────────────────────



Avance             72%

Presupuesto        68%

Tareas             82/107

Tickets            8

Riesgos            3

Hitos próximos     2

Bloqueos           4



Metodología

Híbrida



Estado

EN CURSO

```



\---



\# 50. Reportes



\## Proyecto



\* Project Status Report

\* avance

\* presupuesto

\* riesgos

\* issues

\* hitos



\## Agile



\* velocity

\* burndown

\* burnup

\* cycle time

\* throughput

\* WIP



\## Equipo



\* utilización

\* carga

\* horas

\* capacidad



\## Portafolio



\* avance global

\* presupuesto

\* proyectos en riesgo

\* distribución por estado



\---



\# 51. Modelo de datos principal



```text

TENANT

│

├── PORTFOLIO

│    └── PROJECT

│         │

│         ├── PROJECT\_CONFIGURATION

│         ├── PROJECT\_MEMBERS

│         ├── PROJECT\_ROLES

│         ├── GROUPS

│         ├── TEAMS

│         │

│         ├── PHASES

│         ├── TASKS

│         ├── SUBTASKS

│         ├── DEPENDENCIES

│         ├── MILESTONES

│         │

│         ├── BOARDS

│         │    ├── COLUMNS

│         │    └── SWIMLANES

│         │

│         ├── EPICS

│         ├── FEATURES

│         ├── USER\_STORIES

│         ├── SPRINTS

│         ├── SPRINT\_ITEMS

│         │

│         ├── TICKETS

│         ├── RISKS

│         ├── ISSUES

│         ├── CHANGE\_REQUESTS

│         │

│         ├── BUDGETS

│         ├── COSTS

│         ├── RESOURCES

│         ├── TIME\_ENTRIES

│         │

│         ├── MEETINGS

│         ├── DOCUMENTS

│         ├── COMMENTS

│         ├── ACTIVITIES

│         │

│         ├── CHANNELS

│         └── MESSAGES

│

├── USERS

├── GROUPS

├── TEAMS

└── AUDIT

```



\---



\# 52. Entidades de metodología



No se debe hacer:



```text

scrum\_tasks

kanban\_tasks

traditional\_tasks

```



Debe existir una entidad común:



```text

TASK

```



Y entidades especializadas:



```text

SPRINT\_ITEM

BOARD\_ITEM

WBS\_ITEM

```



Así una misma tarea puede aparecer en diferentes vistas.



\---



\# 53. Estado universal



Una tarea debe tener un estado común:



```text

TODO

IN\_PROGRESS

BLOCKED

REVIEW

DONE

CANCELLED

```



Pero cada proyecto puede configurar su workflow:



```text

Backlog

↓

Análisis

↓

Desarrollo

↓

QA

↓

Producción

↓

Done

```



Kanban puede mostrar esos estados como columnas.



Scrum puede utilizar otro flujo.



\---



\# 54. API



```text

/api/v1/portfolios

/api/v1/projects

/api/v1/projects/{id}

/api/v1/projects/{id}/members

/api/v1/projects/{id}/teams

/api/v1/projects/{id}/groups



/api/v1/projects/{id}/tasks

/api/v1/projects/{id}/phases

/api/v1/projects/{id}/milestones



/api/v1/projects/{id}/boards

/api/v1/projects/{id}/kanban



/api/v1/projects/{id}/backlog

/api/v1/projects/{id}/sprints

/api/v1/projects/{id}/scrum



/api/v1/projects/{id}/tickets

/api/v1/projects/{id}/risks

/api/v1/projects/{id}/issues

/api/v1/projects/{id}/changes



/api/v1/projects/{id}/budget

/api/v1/projects/{id}/costs

/api/v1/projects/{id}/timesheets



/api/v1/projects/{id}/documents

/api/v1/projects/{id}/meetings

/api/v1/projects/{id}/calendar



/api/v1/chat

/api/v1/channels

/api/v1/messages



/api/v1/reports

/api/v1/integrations

```



\---



\# 55. Integración con Core Enterprise



Core-PMP consume:



```text

tenant\_id

user\_id

organization

memberships

roles

entitlements

session

```



Enterprise determina:



> ¿Quién es el usuario y a qué empresa pertenece?



PMP determina:



> ¿Qué puede hacer dentro de cada proyecto?



\---



\# 56. Integración con CorePyme



Ejemplo:



```text

CorePyme

Empresa

&#x20;  ↓

Referencia externa

&#x20;  ↓

Core-PMP

Proyecto de implementación

```



También puede relacionarse:



\* sucursal

\* cliente

\* proveedor

\* implementación

\* operación



\---



\# 57. Integración Core Contador



PMP envía/consulta información relacionada con:



\* costo de proyecto

\* centro de costo

\* horas

\* presupuesto

\* ejecución



La contabilidad oficial sigue perteneciendo a Core Contador.



\---



\# 58. Sistema de eventos



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



budget.updated

budget.exceeded



message.sent

mention.created

```



\---



\# 59. Notificaciones y automatización



Las reglas pueden disparar:



```text

Si ticket vence mañana

&#x20;       ↓

Notificar responsable

```



```text

Si tarea se bloquea

&#x20;       ↓

Notificar JP

```



```text

Si presupuesto supera 90%

&#x20;       ↓

Alertar dirección

```



```text

Si sprint termina

&#x20;       ↓

Crear Sprint Review

```



\---



\# 60. Permisos



Debe existir RBAC y permisos sobre objetos.



Ejemplo:



```text

PROJECT\_VIEW

PROJECT\_EDIT

PROJECT\_DELETE



TASK\_VIEW

TASK\_CREATE

TASK\_EDIT

TASK\_ASSIGN



SPRINT\_MANAGE

BOARD\_MANAGE



TICKET\_CREATE

TICKET\_ASSIGN



BUDGET\_VIEW

BUDGET\_EDIT



REPORT\_VIEW

REPORT\_EXPORT



CHAT\_USE

CHANNEL\_MANAGE

```



\---



\# 61. Arquitectura técnica



Stack inicial:



```text

Frontend

Next.js

TypeScript

React



UI

Core UI / Tailwind o sistema propio



Backend

Next.js API inicialmente



Database

PostgreSQL / Supabase



Storage

Object Storage



Auth

Core Enterprise



Realtime

WebSocket / Supabase Realtime



Jobs

Background workers



Events

Event Bus del ecosistema CORE

```



El chat y los tableros necesitan tiempo real desde el diseño.



\---



\# 62. Realtime



Deben ser eventos en tiempo real:



\* mensajes

\* menciones

\* cambios Kanban

\* asignaciones

\* tickets

\* presencia

\* comentarios

\* actualizaciones de sprint



Ejemplo:



```text

Usuario A mueve TASK-001

&#x20;       ↓

Evento realtime

&#x20;       ↓

Todos los usuarios autorizados

ven inmediatamente el cambio

```



\---



\# 63. Auditoría



Registrar:



```text

actor

tenant

entity

entity\_id

action

before

after

timestamp

ip

source

```



Especialmente para:



\* permisos

\* presupuesto

\* estado

\* asignaciones

\* tickets

\* configuración

\* cambios metodológicos



\---



\# 64. Cambio de metodología



El JP puede cambiar la metodología, pero esto debe estar controlado.



Ejemplo:



```text

Scrum

&#x20;  ↓

Híbrido

```



No se deben eliminar datos existentes.



Los Sprints quedan históricos.



El backlog se conserva.



El proyecto puede comenzar a utilizar otro mecanismo de planificación.



El cambio debe generar:



```text

METHODOLOGY\_CHANGED

```



en auditoría.



\---



\# 65. Cambio de metodología con protección



Una vez que un proyecto está activo:



```text

Metodología actual: SCRUM

```



el cambio debe requerir confirmación y permisos elevados.



El sistema debe advertir:



> El cambio de metodología modificará las herramientas de planificación disponibles, pero no eliminará las tareas, tickets, sprints ni registros existentes.



\---



\# 66. UX general



La interfaz debe funcionar como una plataforma empresarial.



Navegación:



```text

CORE-PMP

│

├── Inicio

├── Mi trabajo

├── Portafolios

├── Proyectos

├── Tableros

├── Tickets

├── Chat

├── Calendario

├── Reportes

└── Administración

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

Reportes

Configuración

```



Los módulos visibles dependen de la metodología y los permisos.



\---



\# 67. "Mi trabajo"



Debe existir una vista transversal:



```text

MI TRABAJO



Mis tareas

Mis tickets

Mis sprints

Mis reuniones

Mis aprobaciones

Mis mensajes

Mis menciones

Mis riesgos

```



Esta pantalla es especialmente importante para el usuario común.



\---



\# 68. Perfil del usuario



El usuario tendrá:



```text

Perfil

├── información personal

├── grupos

├── equipos

├── proyectos

├── roles

├── habilidades

├── disponibilidad

└── preferencias

```



No duplica la identidad de Enterprise; mantiene la información propia de PMP.



\---



\# 69. Centro de trabajo del JP



El JP tendrá:



```text

MI PORTAFOLIO



Proyectos activos

Proyectos atrasados

Riesgos

Issues

Tickets

Presupuesto

Hitos

Carga de equipos

```



\---



\# 70. Marketplace de plantillas



Posteriormente:



```text

Plantillas CORE

├── Scrum Software

├── Kanban Soporte

├── Implementación ERP

├── Proyecto TI

├── Consultoría

├── Marketing

└── Construcción

```



Es una oportunidad comercial posterior.



\---



\# 71. MVP real



A diferencia de la especificación anterior, el MVP correcto debe incluir:



```text

CORE-PMP MVP

│

├── Enterprise Integration

├── Authentication

├── Tenant

├── RBAC

│

├── Users

├── Profiles

├── Groups

├── Teams

│

├── Portfolios

├── Projects

├── Project Configuration

│

├── Traditional Planning

│   ├── WBS

│   ├── Tasks

│   ├── Milestones

│   └── Gantt básico

│

├── Kanban

│   ├── Boards

│   ├── Columns

│   ├── Cards

│   └── WIP

│

├── Scrum

│   ├── Backlog

│   ├── Stories

│   ├── Sprints

│   └── Scrum Board

│

├── Tickets

│

├── Internal Chat

│

├── Comments

├── Activity

├── Notifications

│

├── Risks

├── Issues

│

├── Calendar

├── Documents

│

├── Timesheets

│

├── Budget

├── Costs

│

├── Dashboard

├── Reports

│

├── Audit

└── External References

```



Eso ya constituye un \*\*producto de gestión empresarial completo\*\*.



\---



\# 72. Fases de desarrollo



\## Fase 1 — Foundation



Enterprise:



\* auth

\* tenant

\* usuarios

\* permisos

\* contratos

\* entitlements



PMP:



\* proyecto

\* perfiles

\* grupos

\* equipos



\---



\## Fase 2 — Work Engine



\* tareas

\* subtareas

\* estados

\* prioridades

\* comentarios

\* archivos

\* asignaciones



\---



\## Fase 3 — Planning



\* WBS

\* Gantt

\* timeline

\* dependencias

\* hitos

\* baseline



\---



\## Fase 4 — Kanban



\* boards

\* columns

\* swimlanes

\* WIP

\* drag \& drop

\* métricas



\---



\## Fase 5 — Scrum



\* backlog

\* epic

\* story

\* task

\* sprint

\* planning

\* review

\* retrospective

\* burndown

\* velocity



\---



\## Fase 6 — Collaboration



\* chat

\* canales

\* grupos

\* menciones

\* notificaciones

\* actividad

\* reuniones



\---



\## Fase 7 — Ticketing



\* tickets

\* queues

\* SLA

\* assignments

\* workflows

\* relaciones



\---



\## Fase 8 — Control



\* riesgos

\* issues

\* presupuesto

\* costos

\* timesheets

\* recursos

\* reportes



\---



\## Fase 9 — Ecosistema CORE



\* CorePyme

\* Core Contador

\* Core Platform

\* eventos

\* webhooks

\* integraciones externas



\---



\# 73. Posicionamiento comercial



\## Nombre



\*\*Core-PMP\*\*



\## Descriptor



\*\*Plataforma empresarial de gestión de proyectos y trabajo\*\*



\## Claim



> \*\*Planifica. Ejecuta. Colabora. Controla.\*\*



\## Propuesta



> \*\*Core-PMP reúne proyectos, equipos, tareas, metodologías ágiles, planificación, tickets, comunicación y control empresarial en una sola plataforma.\*\*



\## Diferenciación



No se vende solamente como:



> "software para administrar tareas".



Se posiciona como:



> \*\*La capa de ejecución y colaboración de los proyectos empresariales.\*\*



\---



\# 74. Arquitectura del ecosistema CORE



```text

&#x20;                   CORE TECHNOLOGÍA EMPRESARIAL

&#x20;                               │

&#x20;                        CORE ENTERPRISE

&#x20;                               │

&#x20;       ┌───────────────┬───────┼────────┬────────────────┐

&#x20;       │               │       │        │                │

&#x20;   CorePyme        Core-PMP   CC       CT          Core Bancario

&#x20;       │               │       │        │                │

&#x20;       │               │       │        │                │

&#x20;       └───────────────┴───────┴────────┴────────────────┘

&#x20;                               │

&#x20;                      CORE PLATFORM / APIs

```



La lógica queda:



\*\*Enterprise gobierna → Core-PMP ejecuta proyectos → otros productos aportan sus dominios especializados.\*\*



\---



\# 75. Definición final del producto



> \*\*Core-PMP es una plataforma empresarial integral para gestionar proyectos, equipos y trabajo, adaptable a metodologías tradicionales, Kanban, Scrum e híbridas. El JP configura el modelo de trabajo de cada proyecto y Core-PMP proporciona las herramientas correspondientes para planificar, ejecutar, colaborar, controlar y medir resultados.\*\*

>

> \*\*La plataforma incorpora planificación tradicional, tableros Kanban, gestión Scrum, tareas, backlog, sprints, tickets, perfiles, grupos, equipos, chat interno, reuniones, documentos, riesgos, incidencias, presupuesto, recursos, timesheets, reportes y auditoría.\*\*

>

> \*\*Core Enterprise proporciona la identidad, el Tenant, los usuarios, contratos y entitlements; Core-PMP mantiene la propiedad de su dominio de proyectos y se integra con CorePyme, Core Contador y el resto del ecosistema CORE mediante APIs, eventos y referencias externas.\*\*



Estilo moday.com

Fuente Ibm pplex, ibm mono para $ valores

