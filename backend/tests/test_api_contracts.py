from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_login_endpoint_returns_backend_response() -> None:
    response = client.post(
        "/api/auth/login",
        json={"email": "volunteer@example.com", "password": "password123"},
    )

    assert response.status_code == 200
    payload = response.json()
    assert payload["success"] is True
    assert payload["role"] in {"volunteer", "admin"}


def test_admin_dashboard_endpoint_returns_dashboard_payload() -> None:
    response = client.get("/api/admin/dashboard")

    assert response.status_code == 200
    payload = response.json()
    assert "summary" in payload
    assert "allocationStatus" in payload
    assert "volunteerPerformance" in payload
