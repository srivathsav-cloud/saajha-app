# Saajha — Volunteer Parent Outreach App

This is the **refactored base layer** for the Saajha responsive web application.

The app is intentionally structured as a real deployable web app, not a phone-frame mockup.

## Current implementation stage

**Step 1: Static responsive UI + professional project architecture**

Included:

- React + TypeScript + Vite frontend
- PWA-ready setup
- Responsive web UI for mobile, tablet, and desktop
- Static data screens:
  - Login
  - Volunteer Workspace
  - Admin Dashboard
- FastAPI backend scaffold
- Mock API endpoints
- AWS infrastructure placeholder
- Docker Compose for local development
- CI skeleton

## Important architecture decision

The old scaffold rendered screens inside an artificial phone frame.

This version removes that.

The app now renders as a real web application:

| Device | Behavior |
|---|---|
| Mobile browser | Full-width mobile PWA layout |
| Desktop browser | Desktop layout with sidebar and dashboard grid |
| Tablet | Adaptive layout |
| Client demo phone frame | Use browser device mode, simulator, or a separate design tool. Do not put phone chrome in production UI. |

## Local setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```txt
http://localhost:5173
```

To test from a phone on the same Wi-Fi, start the frontend normally and open:

```txt
http://<your-laptop-ip>:5173
```

The frontend dev server listens on the local network and proxies `/api` requests to the FastAPI backend. Keep `VITE_API_BASE_URL` unset, or set it to `/api`, for phone testing. Do not use `http://localhost:8000/api` from a phone because `localhost` points to the phone, not your laptop.

### Backend

```bash
cd backend
python -m venv .venv
```

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --reload
```

macOS/Linux:

```bash
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:

```txt
http://localhost:8000/docs
```

## App routes

| Route | Purpose |
|---|---|
| `/` | Redirects to `/login` |
| `/login` | Login screen |
| `/volunteer` | Volunteer workspace |
| `/admin` | Admin dashboard |

## Frontend architecture

```txt
frontend/src
  app/
    router/              App routing
    providers/           App-level providers
  components/
    layout/              Page shells and layouts
    navigation/          Sidebar and mobile navigation
    ui/                  Reusable UI primitives
  features/
    auth/                Login feature
    volunteer/           Volunteer workflow feature
    admin/               Admin dashboard feature
  data/                  Static mock data
  lib/                   API client and utilities
  styles/                Global styles and design tokens
```

## Backend architecture

```txt
backend/app
  api/routes/            HTTP routes
  core/                  Config and app-level settings
  domain/                Domain-oriented modules
  integrations/          Exotel, Turn.io, BigQuery placeholders
  models/                Shared schemas
  services/              Mock services for static stage
```

## Development roadmap

1. Static responsive UI
2. API contract definition
3. Connect UI to FastAPI mock endpoints
4. Add real auth and RBAC
5. Add database models
6. Add parent allocation and locking
7. Add Exotel click-to-call
8. Add Turn.io WhatsApp updates
9. Add BigQuery daily sync
10. Deploy to AWS
