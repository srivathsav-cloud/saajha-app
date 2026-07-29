# Saajha Architecture

## Frontend

The frontend is a React PWA-ready app built with Vite and TypeScript.

It is mobile-first and responsive.

It does not render inside a phone frame. The browser viewport controls the layout.

The current frontend route surface is organized around three primary experiences:

- `/login`
- `/volunteer`
- `/admin`

## Backend

FastAPI is used as the backend API layer.

The backend now exposes the main frontend contract for authentication, volunteer workspace, admin dashboard, and telemetry ingestion. The data source remains mock-backed for the current phase, but the API shape is now aligned with the frontend experience and can be replaced with real services later.

## Current service split

For the EC2 deployment target, the preferred direction is to deploy this as two services:

- Frontend service: React SPA served by Nginx
- Backend service: FastAPI API served on port 8000

This keeps the UI and API concerns independently owned and deployable.

## Telemetry strategy

The frontend now sends user interaction events to the backend through an ingestion endpoint. This is the current observability path while the UI transitions from mock-based rendering to live backend-driven rendering.

The backend stores these events in a local log file for now and can later stream them into a central logging or analytics service. Requests and responses are also logged at the HTTP layer to make troubleshooting easier.

## Future AWS target

Recommended MVP deployment:

- Frontend: S3 + CloudFront + ACM certificate, or an EC2-hosted frontend service for the current phase
- Backend: ECS Fargate behind ALB, or container-based EC2 service for the current phase
- Database: Aurora PostgreSQL or PostgreSQL on RDS
- Locking: PostgreSQL row locks, DynamoDB conditional writes, or Redis depending on scale
- Logs: CloudWatch or centralized application logging
- Secrets: AWS Secrets Manager

## Integration placeholders

- Exotel: click-to-call and call status
- Turn.io: WhatsApp outcome updates
- BigQuery: daily reporting sync
