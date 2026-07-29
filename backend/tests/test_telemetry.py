from pathlib import Path

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_frontend_action_event_is_accepted_and_logged() -> None:
    response = client.post(
        "/api/telemetry/events",
        json={
            "eventType": "button_click",
            "element": "Sign In",
            "route": "/login",
            "metadata": {"source": "frontend"},
        },
    )

    assert response.status_code == 200
    assert response.json() == {"status": "accepted"}

    log_file = Path("logs/frontend-events.log")
    assert log_file.exists()
    content = log_file.read_text(encoding="utf-8")
    assert "button_click" in content
