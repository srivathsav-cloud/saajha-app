#!/usr/bin/env bash
set -e

echo "Backend:"
echo "cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && uvicorn app.main:app --reload"

echo "Frontend:"
echo "cd frontend && npm install && npm run dev"
