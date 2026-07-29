# EC2 deployment approach for Saajha

## Recommended service split

Deploy the application as two independent services on EC2-backed infrastructure:

1. Backend service
   - Runs the FastAPI app on port 8000.
   - Owns business logic, data access, auth, and API contracts.
   - Exposed through an internal or public load balancer depending on network design.

2. Frontend service
   - Runs the Vite-built static app through Nginx on port 80.
   - Serves the browser application and calls the backend API over a configured base URL.

## Why this is the right split

- Independent scaling: frontend and backend can scale separately.
- Clear responsibility boundaries: UI builds vs API service.
- Easier AWS packaging: the frontend can be attached to S3/CloudFront later, while the backend can stay as a container service.
- Safer deployment rollback: one service can be updated without forcing a full-stack deploy.

## Suggested runtime environment variables

Frontend:

- `VITE_API_BASE_URL=https://api.saajha.example.com/api`
- `VITE_ENABLE_FRONTEND_LOGGING=true`

Backend:

- `APP_ENV=prod`
- `ALLOWED_ORIGINS=https://saajha.example.com`

## Current implementation packaging

The repository now supports a clear split for the EC2 rollout:

- Frontend: a separate build artifact served via Nginx using the `frontend/Dockerfile`
- Backend: a separate FastAPI container service exposed on port 8000

This aligns the deployment model with the frontend's `GET`/`POST` request flow and avoids coupling UI and API releases together.

## Service-to-service interaction

- Frontend sends browser actions to `POST /api/telemetry/events`.
- Frontend reads business data from the backend via the API routes documented in `docs/api-contracts.md`.
- Backend persists operational telemetry in `logs/frontend-events.log` for the current static stage.

## Deployment sequence

1. Package backend as a separate container service.
2. Package frontend as a separate container service.
3. Expose frontend on the public edge and backend through the application API endpoint.
4. Add a reverse proxy or ALB once traffic and SSL requirements are finalized.
