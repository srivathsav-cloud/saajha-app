Frontend:

cd frontend
npm install
npm run dev -- --host

# only for deployment
npm run build

Backend:

cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload

## Current behavior

- The frontend now loads the admin dashboard and volunteer workspace from backend endpoints when available.
- The login page posts credentials to the auth endpoint and navigates based on the returned role.
- Retry logic is applied for transient network failures, while non-recoverable errors fall back to the existing mock data.
- Backend request/response logging is emitted for easier troubleshooting.

## Useful verification steps

- Visit the frontend and confirm the login, volunteer, and admin routes render.
- Check backend logs in the console for request and response entries.
- If you want deeper diagnostics, inspect the telemetry log file at backend/logs/frontend-events.log.

