# Engineering Decisions

## Decision 1: Feature-first frontend organization

Each major business area is grouped under `features/`.

This keeps future development maintainable as workflows grow.

## Decision 2: Backend domain modules

The backend has placeholder domain folders for auth, parents, volunteers, and admin.

This prevents one large routes/services folder from becoming unmaintainable.

## Decision 3: Static data first

The first development milestone uses static data so the team can finalize UX and scope before building backend complexity.


Use this order:

Static UI first — complete all screens with mock data.
Create API contracts — define request/response models for parent allocation, locking, assessment, outcome, callback, dashboard.
Connect FastAPI mock endpoints to React.
Add real database.
Add locking logic.
Add Exotel and Turn.io integrations.
Add BigQuery sync.
Deploy to AWS.

Do not start AWS infra deeply until the UI flow and API contracts are stable. That will save you rework.