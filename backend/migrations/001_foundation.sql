-- Fase 1 — Foundation (arq.md §100, §14, §20, §79)
-- Ejecutar contra la base `core-pmp`.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE project_status AS ENUM ('DRAFT','PLANNED','ACTIVE','PAUSED','AT_RISK','COMPLETED','CANCELLED');
CREATE TYPE project_methodology AS ENUM ('TRADITIONAL','KANBAN','SCRUM','HYBRID');
CREATE TYPE platform_profile AS ENUM ('PMP_ADMIN','PMP_MANAGER','PMP_USER','PMP_VIEWER');
CREATE TYPE project_role AS ENUM ('PROJECT_MANAGER','PRODUCT_OWNER','SCRUM_MASTER','TEAM_MEMBER','BUSINESS_ANALYST','STAKEHOLDER','SPONSOR','CLIENT','OBSERVER');

-- arq.md §79: identidad viene de Enterprise; esto es SOLO el dominio propio de PMP.
CREATE TABLE pmp_user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL,
  enterprise_user_id UUID NOT NULL,
  platform_profile platform_profile NOT NULL DEFAULT 'PMP_USER',
  skills TEXT[] NOT NULL DEFAULT '{}',
  availability TEXT,
  preferences JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (tenant_id, enterprise_user_id)
);

-- arq.md §14: entidad central. portfolio_id/program_id nullable — esos niveles se construyen después.
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL,
  portfolio_id UUID,
  program_id UUID,
  code VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  objective TEXT,
  scope TEXT,
  methodology project_methodology NOT NULL DEFAULT 'TRADITIONAL',
  status project_status NOT NULL DEFAULT 'DRAFT',
  priority VARCHAR(20) NOT NULL DEFAULT 'MEDIUM',
  project_manager_id UUID REFERENCES pmp_user_profiles(id),
  sponsor_id UUID REFERENCES pmp_user_profiles(id),
  planned_start DATE,
  planned_end DATE,
  actual_start DATE,
  actual_end DATE,
  budget NUMERIC(18,2),
  currency VARCHAR(3) NOT NULL DEFAULT 'CLP',
  progress SMALLINT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  created_by UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (tenant_id, code)
);

-- arq.md §20: roles de proyecto, contextuales por usuario.
CREATE TABLE project_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_profile_id UUID NOT NULL REFERENCES pmp_user_profiles(id) ON DELETE CASCADE,
  role project_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (project_id, user_profile_id, role)
);

CREATE INDEX idx_projects_tenant ON projects(tenant_id);
CREATE INDEX idx_project_members_project ON project_members(project_id);
CREATE INDEX idx_pmp_user_profiles_tenant ON pmp_user_profiles(tenant_id);
