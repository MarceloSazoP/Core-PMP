**# CORE-PMP — Anexo A**



**## Lean e Ingeniería de Mejora**



**\*\*Versión:\*\* 1.0**

**\*\*Estado:\*\* Extensión aprobada del producto**

**\*\*Producto:\*\* CORE-PMP**

**\*\*Dependencia:\*\* CORE-PMP Master Specification v2.0**



**---**



**## 1. Propósito**



**Este anexo incorpora \*\*Lean\*\* como segundo framework de mejora dentro de CORE-PMP, complementando \*\*Six Sigma / DMAIC\*\*.**



**Lean estará orientado a la identificación y eliminación de desperdicios, optimización del flujo de trabajo, reducción de tiempos de espera y mejora continua de procesos.**



**Lean no reemplaza Scrum, Kanban ni la gestión tradicional de proyectos.**



**Se incorpora como \*\*Improvement Framework\*\* que puede aplicarse sobre proyectos, procesos, equipos e iniciativas de mejora.**



**---**



**# 2. Posición dentro de CORE-PMP**



**La arquitectura conceptual queda:**



**```text**

**CORE-PMP**

**│**

**├── Project Engine**

**│**

**├── Delivery Engine**

**│   ├── Traditional**

**│   ├── Scrum**

**│   ├── Kanban**

**│   └── Hybrid**

**│**

**├── Work \& Collaboration Engine**

**│**

**└── Governance \& Improvement Engine**

&#x20;   **│**

&#x20;   **├── Governance**

&#x20;   **│   └── ISO/IEC 27001**

&#x20;   **│**

&#x20;   **└── Improvement**

&#x20;       **├── Six Sigma / DMAIC**

&#x20;       **└── Lean**

**```**



**Lean comparte infraestructura con:**



**\* Projects**

**\* Tasks**

**\* Teams**

**\* Boards**

**\* Kanban**

**\* Metrics**

**\* Documents**

**\* Evidence**

**\* Actions**

**\* Risks**

**\* Issues**

**\* Reports**

**\* Automation**



**---**



**# 3. Definición de Lean en CORE-PMP**



**CORE-PMP utilizará Lean como framework para gestionar iniciativas cuyo objetivo principal sea mejorar el flujo y eliminar desperdicios.**



**Ejemplos:**



**\* reducir tiempos de espera;**

**\* eliminar actividades sin valor;**

**\* reducir handoffs;**

**\* disminuir trabajo en proceso;**

**\* eliminar retrabajo;**

**\* reducir tiempos de ciclo;**

**\* mejorar flujo de trabajo;**

**\* eliminar cuellos de botella;**

**\* mejorar utilización de recursos;**

**\* simplificar procesos.**



**---**



**# 4. Lean como Framework**



**Lean debe utilizar el modelo genérico:**



**```text**

**Framework**

&#x20;   **↓**

**Framework Configuration**

&#x20;   **↓**

**Project**

&#x20;   **↓**

**Improvement Initiative**

&#x20;   **↓**

**Analysis**

&#x20;   **↓**

**Improvement Actions**

&#x20;   **↓**

**Tasks**

&#x20;   **↓**

**Measurements**

&#x20;   **↓**

**Results**

**```**



**No se deben crear entidades paralelas para cada herramienta Lean.**



**Las acciones de mejora deben utilizar el \*\*Work Engine\*\* existente.**



**---**



**# 5. Lean Improvement Project**



**CORE-PMP podrá identificar un proyecto como:**



**```text**

**Project**

**Framework = LEAN**

**```**



**Opcionalmente podrá combinarse con otros frameworks:**



**```text**

**Project**

**├── Management = Traditional**

**├── Delivery = Kanban**

**├── Improvement = Lean**

**└── Governance = ISO 27001**

**```**



**También podrá existir:**



**```text**

**Project**

**├── Management = Hybrid**

**├── Delivery = Scrum**

**├── Improvement = Six Sigma**

**└── Governance = ISO 27001**

**```**



**---**



**# 6. Principios Lean**



**CORE-PMP deberá representar conceptualmente los cinco principios clásicos:**



**1. \*\*Value\*\***

**2. \*\*Value Stream\*\***

**3. \*\*Flow\*\***

**4. \*\*Pull\*\***

**5. \*\*Continuous Improvement\*\***



**Estos principios deben utilizarse como guía del framework y no necesariamente como entidades independientes.**



**---**



**# 7. Lean Value**



**Debe permitir identificar:**



**\* cliente;**

**\* necesidad;**

**\* resultado esperado;**

**\* actividad que genera valor;**

**\* actividad que no genera valor;**

**\* actividad necesaria pero sin valor directo.**



**Una actividad podrá clasificarse como:**



**```text**

**VALUE**

**NON\_VALUE**

**NECESSARY\_NON\_VALUE**

**UNKNOWN**

**```**



**---**



**# 8. Lean Waste**



**CORE-PMP podrá registrar desperdicios identificados durante el análisis de un proceso.**



**Categorías iniciales:**



**```text**

**DEFECTS**

**OVERPRODUCTION**

**WAITING**

**NON\_UTILIZED\_TALENT**

**TRANSPORTATION**

**INVENTORY**

**MOTION**

**OVER\_PROCESSING**

**```**



**El sistema deberá permitir asociar desperdicios a:**



**\* proceso;**

**\* actividad;**

**\* tarea;**

**\* equipo;**

**\* etapa;**

**\* proyecto;**

**\* evidencia;**

**\* métrica.**



**---**



**# 9. Value Stream Mapping**



**CORE-PMP deberá dejar preparada la arquitectura para \*\*Value Stream Mapping (VSM)\*\*.**



**Un Value Stream podrá representar:**



**```text**

**Process**

&#x20;   **↓**

**Step 1**

&#x20;   **↓**

**Step 2**

&#x20;   **↓**

**Step 3**

&#x20;   **↓**

**Step 4**

**```**



**Cada etapa podrá registrar, cuando corresponda:**



**\* tiempo de procesamiento;**

**\* tiempo de espera;**

**\* lead time;**

**\* cycle time;**

**\* WIP;**

**\* recursos;**

**\* defectos;**

**\* porcentaje de valor agregado;**

**\* porcentaje de tiempo sin valor.**



**El VSM podrá generar una comparación:**



**```text**

**CURRENT STATE**

&#x20;       **↓**

**FUTURE STATE**

**```**



**---**



**# 10. Flow**



**Lean deberá permitir analizar el flujo de trabajo.**



**Métricas potenciales:**



**\* Lead Time**

**\* Cycle Time**

**\* Throughput**

**\* WIP**

**\* Waiting Time**

**\* Processing Time**

**\* Flow Efficiency**

**\* Aging Work**



**Estas métricas podrán reutilizar las capacidades existentes de Kanban y Work Engine.**



**---**



**# 11. Kanban y Lean**



**Kanban y Lean están relacionados, pero no deben modelarse como lo mismo.**



**```text**

**Kanban**

**= método de gestión del flujo de trabajo**



**Lean**

**= filosofía/framework de mejora y eliminación de desperdicios**

**```**



**Por lo tanto:**



**```text**

**Lean Project**

&#x20;     **↓**

**Kanban Board**

&#x20;     **↓**

**Work Items**

&#x20;     **↓**

**Flow Metrics**

&#x20;     **↓**

**Lean Analysis**

&#x20;     **↓**

**Improvement Actions**

**```**



**Un proyecto Lean puede utilizar Kanban como mecanismo operativo.**



**---**



**# 12. Kaizen**



**CORE-PMP deberá dejar preparada la posibilidad de registrar iniciativas de \*\*Kaizen\*\*.**



**Una iniciativa podrá contener:**



**\* problema;**

**\* oportunidad;**

**\* propuesta;**

**\* responsable;**

**\* equipo;**

**\* fecha;**

**\* impacto esperado;**

**\* acciones;**

**\* resultado;**

**\* medición antes/después.**



**Kaizen no será inicialmente un framework independiente.**



**Será una \*\*práctica de mejora dentro de Lean\*\*.**



**---**



**# 13. 5S**



**La arquitectura podrá soportar posteriormente evaluaciones 5S:**



**```text**

**SORT**

**SET\_IN\_ORDER**

**SHINE**

**STANDARDIZE**

**SUSTAIN**

**```**



**Su implementación podrá utilizar:**



**\* Checklists**

**\* Tasks**

**\* Assessments**

**\* Evidence**

**\* Measurements**

**\* Corrective Actions**



**No será necesario crear un módulo independiente para 5S en la primera implementación.**



**---**



**# 14. Lean Improvement Actions**



**Toda iniciativa Lean deberá poder generar acciones.**



**Ejemplo:**



**```text**

**Waste identified**

&#x20;       **↓**

**Improvement opportunity**

&#x20;       **↓**

**Improvement Action**

&#x20;       **↓**

**Task**

&#x20;       **↓**

**Team Member**

&#x20;       **↓**

**Execution**

&#x20;       **↓**

**Measurement**

&#x20;       **↓**

**Result**

**```**



**Las acciones deberán utilizar el mismo Work Engine de CORE-PMP.**



**---**



**# 15. Before / After**



**Las mejoras deberán poder compararse mediante mediciones.**



**Ejemplo:**



**```text**

**Metric: Order Processing Time**



**Before: 42 min**

**Target: 25 min**

**After: 21 min**



**Improvement: 50%**

**```**



**La plataforma deberá mantener:**



**\* baseline;**

**\* target;**

**\* actual;**

**\* variance;**

**\* measurement date;**

**\* responsible;**

**\* evidence.**



**---**



**# 16. Lean + Six Sigma**



**CORE-PMP deberá permitir utilizar ambos frameworks sobre una misma iniciativa.**



**Ejemplo:**



**```text**

**LEAN**

**Identifica:**

&#x20;   **↓**

**Waiting**

&#x20;   **↓**

**Waste**

&#x20;   **↓**

**Bottleneck**



**SIX SIGMA**

**Analiza:**

&#x20;   **↓**

**Variation**

&#x20;   **↓**

**Root Cause**

&#x20;   **↓**

**Defect**



**RESULT**

&#x20;   **↓**

**Improvement**

&#x20;   **↓**

**Control**

**```**



**No se debe crear necesariamente un framework independiente denominado `LEAN\_SIX\_SIGMA`.**



**La combinación podrá representarse mediante:**



**```text**

**Project**

**├── Improvement Framework: LEAN**

**└── Improvement Framework: SIX\_SIGMA**

**```**



**---**



**# 17. Integración con Six Sigma**



**Las herramientas podrán complementarse.**



**### Lean puede identificar:**



**\* desperdicio;**

**\* espera;**

**\* WIP;**

**\* cuello de botella;**

**\* flujo deficiente.**



**### Six Sigma puede profundizar:**



**\* variabilidad;**

**\* defectos;**

**\* causas raíz;**

**\* capacidad;**

**\* estabilidad del proceso.**



**Ambos pueden compartir:**



**\* Metrics;**

**\* Measurements;**

**\* Tasks;**

**\* Actions;**

**\* Evidence;**

**\* Teams;**

**\* Reports.**



**---**



**# 18. Lean + ISO/IEC 27001**



**Un proyecto también podrá combinar Lean con gobierno de seguridad.**



**Ejemplo:**



**```text**

**Lean**

**↓**

**Optimización del proceso de gestión de accesos**

**↓**

**ISO/IEC 27001**

**↓**

**Control aplicable**

**↓**

**Risk**

**↓**

**Improvement Action**

**↓**

**Task**

**↓**

**Evidence**

**```**



**Esto permite que la mejora del proceso no quede desconectada de sus obligaciones de seguridad y control.**



**---**



**# 19. Métricas Lean iniciales**



**El modelo deberá soportar inicialmente:**



**| Métrica         | Propósito            |**

**| --------------- | -------------------- |**

**| Lead Time       | Tiempo total         |**

**| Cycle Time      | Tiempo de ejecución  |**

**| WIP             | Trabajo en proceso   |**

**| Throughput      | Trabajo completado   |**

**| Waiting Time    | Tiempo de espera     |**

**| Processing Time | Tiempo efectivo      |**

**| Flow Efficiency | Eficiencia del flujo |**

**| Defect Rate     | Defectos             |**

**| Rework          | Retrabajo            |**



**---**



**# 20. Dashboard Lean**



**El dashboard podrá mostrar:**



**```text**

**LEAN IMPROVEMENT**



**Current State**

**────────────────────────────**



**Lead Time       42 min**

**Cycle Time      18 min**

**WIP             37**

**Throughput      128**

**Waiting         24 min**

**Flow Efficiency 43%**



**Waste**

**────────────────────────────**



**Waiting         32%**

**Rework          18%**

**Overprocessing  12%**



**Improvement**

**────────────────────────────**



**Baseline        42 min**

**Target          25 min**

**Current         21 min**

**```**



**Los indicadores deberán configurarse por proyecto/proceso y no estar rígidamente definidos para todos los casos.**



**---**



**# 21. Modelo de datos**



**Se deberán reutilizar las entidades existentes siempre que sea posible.**



**Entidades nuevas o específicas inicialmente:**



**```text**

**LEAN\_PROJECTS**

**LEAN\_PROCESS\_STEPS**

**LEAN\_WASTE**

**LEAN\_VALUE\_STREAMS**

**LEAN\_IMPROVEMENT\_ACTIONS**

**LEAN\_MEASUREMENTS**

**```**



**Sin embargo, antes de crear estas tablas deberá evaluarse si alguna puede representarse mediante entidades genéricas existentes.**



**Principio:**



**> \*\*No crear una entidad Lean si el Work Engine o el Framework Engine ya puede representar correctamente el concepto.\*\***



**---**



**# 22. Permisos**



**Permisos potenciales:**



**```text**

**LEAN\_VIEW**

**LEAN\_CREATE**

**LEAN\_EDIT**

**LEAN\_MANAGE**

**LEAN\_ANALYZE**

**LEAN\_EXPORT**

**LEAN\_APPROVE**

**```**



**El modelo de permisos seguirá subordinado a:**



**\* Core Enterprise;**

**\* tenant;**

**\* proyecto;**

**\* membresía;**

**\* rol;**

**\* entitlements.**



**---**



**# 23. Entitlement**



**El acceso comercial podrá controlarse mediante:**



**```text**

**pmp.lean**

**```**



**Y eventualmente:**



**```text**

**pmp.six\_sigma**

**pmp.compliance**

**pmp.iso27001**

**```**



**La existencia de un framework en el modelo no implica necesariamente que esté habilitado para todos los clientes.**



**---**



**# 24. UX**



**Lean deberá aparecer únicamente cuando:**



**\* el proyecto tenga Lean habilitado;**

**\* el usuario tenga permisos;**

**\* el tenant tenga el entitlement correspondiente.**



**No se debe agregar complejidad al usuario que no utiliza Lean.**



**Para un usuario común:**



**```text**

**Mi trabajo**

**Tareas**

**Tickets**

**Calendario**

**Chat**

**```**



**Para un responsable Lean:**



**```text**

**Mejora**

**├── Iniciativas**

**├── Value Streams**

**├── Desperdicios**

**├── Métricas**

**├── Acciones**

**└── Resultados**

**```**



**---**



**# 25. Arquitectura futura de Improvement Engine**



**La arquitectura deberá quedar preparada para:**



**```text**

**Improvement Engine**

**│**

**├── Six Sigma**

**│   └── DMAIC**

**│**

**├── Lean**

**│   ├── Value Stream**

**│   ├── Waste**

**│   ├── Flow**

**│   └── Kaizen**

**│**

**├── Lean Six Sigma**

**│**

**├── PDCA**

**│**

**└── Theory of Constraints**

**```**



**Los últimos elementos son \*\*extensiones futuras\*\*, no compromisos de MVP.**



**---**



**# 26. Regla de alcance**



**CORE-PMP no pretende convertirse en una plataforma especializada exclusivamente en Lean.**



**Su función principal continúa siendo:**



**> \*\*Gestionar proyectos, trabajo, colaboración, gobierno y mejora continua.\*\***



**Lean es un framework especializado que permite gestionar determinadas iniciativas de mejora dentro de esa plataforma.**



**---**



**# 27. Roadmap Lean**



**### Fase L1 — Foundation**



**\* Framework Lean**

**\* configuración**

**\* permisos**

**\* entitlement**

**\* integración con Project Engine**

**\* integración con Work Engine.**



**### Fase L2 — Improvement**



**\* desperdicios;**

**\* iniciativas;**

**\* acciones;**

**\* métricas;**

**\* baseline/target/actual.**



**### Fase L3 — Flow**



**\* Value Stream Mapping;**

**\* análisis de flujo;**

**\* WIP;**

**\* lead time;**

**\* cycle time;**

**\* flow efficiency.**



**### Fase L4 — Advanced**



**\* Kaizen;**

**\* 5S;**

**\* Future State;**

**\* comparaciones Before/After;**

**\* automatizaciones.**



**### Fase L5 — Integrated Improvement**



**\* Lean + Six Sigma;**

**\* Lean + Kanban;**

**\* Lean + ISO/IEC 27001;**

**\* dashboards integrados;**

**\* reporting ejecutivo.**



**---**



**# 28. Regla arquitectónica final**



**CORE-PMP deberá tratar Lean como un \*\*framework extensible sobre el núcleo común\*\*, no como un producto separado.**



**La arquitectura final de mejora será:**



**```text**

&#x20;                **IMPROVEMENT ENGINE**

&#x20;                       **│**

&#x20;         **┌─────────────┼─────────────┐**

&#x20;         **│             │             │**

&#x20;      **SIX SIGMA       LEAN        FUTURE**

&#x20;         **│             │**

&#x20;       **DMAIC       FLOW / WASTE**

&#x20;         **│             │**

&#x20;         **└──────┬──────┘**

&#x20;                **│**

&#x20;         **COMMON WORK ENGINE**

&#x20;                **│**

&#x20;     **┌──────────┼──────────┐**

&#x20;     **│          │          │**

&#x20;   **Tasks      Teams      Metrics**

&#x20;     **│          │          │**

&#x20;     **└──────────┼──────────┘**

&#x20;                **│**

&#x20;             **PROJECT**

**```**



**## 29. Decisión**



**\*\*Lean queda oficialmente incorporado al alcance conceptual de CORE-PMP.\*\***



**El alcance actual de frameworks queda:**



**\*\*Management\*\***



**\* Traditional**



**\*\*Delivery\*\***



**\* Scrum**

**\* Kanban**

**\* Hybrid**



**\*\*Improvement\*\***



**\* Six Sigma / DMAIC**

**\* Lean**



**\*\*Governance\*\***



**\* ISO/IEC 27001**



**El resto de frameworks mencionados anteriormente queda como \*\*extensibilidad futura\*\*, sin formar parte del alcance actual comprometido.**



**---**



**## 30. Principio rector**



**> \*\*CORE-PMP no debe acumular metodologías. Debe proporcionar un núcleo común capaz de ejecutar diferentes modelos de gestión, entrega, mejora y gobierno cuando el proyecto realmente los necesite.\*\***



