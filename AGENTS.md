# AGENTS.md

## Repository purpose

Saajha is a volunteer outreach and parent follow-up application with a mobile-first React frontend and a FastAPI backend.

## Current product stage

This repository is currently in a static UI-first, contract-definition stage.

The product scope is organized around the following screens and routes:

- `/login`
- `/volunteer`
- `/admin`

## Architecture summary

### Frontend
- React + TypeScript + Vite
- Mobile-first responsive design
- Route-based screen flow
- Feature organization under `src/features/`

### Backend
- FastAPI service
- API namespace under `/api`
- Current role is to expose mock/static endpoints and later support real business logic

### Deployment direction
- Preferred EC2 service split:
  - Frontend service: static SPA served by Nginx
  - Backend service: FastAPI API on port 8000
- Keep the two services independently deployable and independently scalable.

## Telemetry and logging

The frontend now emits interaction events through the backend telemetry endpoint.

Current telemetry event contract:

- `eventType`: string
- `element`: string
- `route`: string
- `metadata`: optional object

Backend persistence is currently a file-based log sink:

- `logs/frontend-events.log`

This is a temporary operational store and should later be replaced by a durable analytics or observability backend.

## API contract priority

The backend should support the frontend surface defined in the docs.

Priority endpoints:

1. `GET /api/health`
2. `POST /api/auth/login`
3. `POST /api/auth/google`
4. `GET /api/volunteer/workspace`
5. `POST /api/volunteer/parent-task/{parentId}/release`
6. `POST /api/volunteer/parent-task/{parentId}/outcome`
7. `GET /api/admin/dashboard`
8. `GET /api/admin/bigquery-sync/status`
9. `POST /api/telemetry/events`

## Working conventions

- Keep frontend and backend responsibilities separate.
- Prefer API contract-first changes over ad hoc data shape changes.
- Do not add AWS deployment work before the UI flow and API contracts stabilize.
- Maintain feature-based folder organization in the frontend.
- Use backend domain folders for future service boundaries.

## Reference docs

Always start with these files when you need context:

- [docs/architecture.md](docs/architecture.md)
- [docs/engineering-decisions.md](docs/engineering-decisions.md)
- [docs/api-contracts.md](docs/api-contracts.md)
- [docs/ec2-deployment.md](docs/ec2-deployment.md)
- [docs/knowledge-base.md](docs/knowledge-base.md)
