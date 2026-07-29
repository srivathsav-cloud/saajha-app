Write-Host "Backend:"
Write-Host "cd backend; python -m venv .venv; .\.venv\Scripts\Activate.ps1; pip install -r requirements.txt; uvicorn app.main:app --host 127.0.0.1 --reload"

Write-Host "Frontend:"
Write-Host "cd frontend; npm install; npm run dev"
