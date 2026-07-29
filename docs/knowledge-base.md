# Saajha Knowledge Base

## Project goal

Saajha is a mobile-first volunteer outreach workflow application for parent follow-up and coordination. The current implementation stage is a static UI-first build that is being turned into a backend-usable API contract.

## Current solution architecture

### Frontend
- React + TypeScript + Vite
- Uses React Router for route-level navigation
- Mobile-first, responsive, browser viewport-driven layout
- No phone-frame wrapper
- Current route entry points:
  - `/login`
  - `/volunteer`
  - `/admin`

### Backend
- FastAPI service
- Current public API namespace is `/api`
- Static stage uses health and mock-style endpoints
- Backend should own business logic, validation, and persistence later

### Deployment direction
- Recommended EC2 service split:
  - Frontend service: static SPA served by Nginx
  - Backend service: FastAPI service on port 8000
- This is the preferred microservice-style direction for the current roadmap

## Current implementation status

### Static UI state
- Login page
- Volunteer workspace page
- Admin dashboard page

### Backend scaffolding state
- Health endpoint exists
- Volunteer mock endpoint exists and now mirrors the frontend contract shape
- Admin mock endpoint exists and now mirrors the dashboard contract shape
- Telemetry ingestion endpoint exists for frontend event logging

### Frontend integration state
- Volunteer workspace page calls `GET /api/volunteer/workspace`
- Admin dashboard page calls `GET /api/admin/dashboard` and `GET /api/admin/bigquery-sync/status`
- Login page calls `POST /api/auth/login`
- The UI now uses a shared API client with retry behavior for transient network failures and fallback-to-mock behavior for hard errors

## Observability and telemetry

### Frontend logging
- Frontend emits user interaction events using a centralized action logger.
- Current event types include `ui_click`, `dashboard_loaded`, `dashboard_load_failed`, `workspace_loaded`, `workspace_load_failed`, and `login_submit`.
- The logger sends events to the backend telemetry endpoint.

### Backend logging
- Backend stores frontend interaction events in `logs/frontend-events.log`.
- This is an operational placeholder, not the final analytics store.

## Current API contract priority

The following endpoints represent the active frontend surface for backend development:

1. `GET /api/health`
2. `POST /api/auth/login`
3. `POST /api/auth/google`
4. `GET /api/volunteer/workspace`
5. `POST /api/volunteer/parent-task/{parentId}/release`
6. `POST /api/volunteer/parent-task/{parentId}/outcome`
7. `GET /api/admin/dashboard`
8. `GET /api/admin/bigquery-sync/status`
9. `POST /api/telemetry/events`

## Data contract expectations

### Volunteer workspace response
- Must include volunteer summary fields
- Must include allocated parent task details
- Must include assessment question structure and notes
- Must include outcome follow-up fields

### Admin dashboard response
- Must include KPI summary numbers
- Must include allocation status breakdown
- Must include volunteer performance data
- Must include outcome counts for reporting

### Telemetry event request
- `eventType`: string
- `element`: string
- `route`: string
- `metadata`: optional object

## Codebase conventions

- Feature-first frontend organization under `src/features/`
- Domain-first backend organization under `app/domain/*`
- Use mock data first for UX stabilization
- Keep deployment and infra work separate until API contracts are stable

## Implementation rules for future agents

- Keep frontend and backend responsibilities separated.
- Prefer API contract-first changes before materializing data models.
- Preserve the existing route structure unless the product flow explicitly changes.
- Keep telemetry lightweight and privacy-aware.
- For server-side persistence, avoid coupling to browser-only assumptions.

## Important files to reference first

- [architecture.md](architecture.md)
- [engineering-decisions.md](engineering-decisions.md)
- [api-contracts.md](api-contracts.md)
- [ec2-deployment.md](ec2-deployment.md)
