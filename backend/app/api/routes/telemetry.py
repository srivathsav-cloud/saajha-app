from fastapi import APIRouter

from app.models.schemas import TelemetryEvent
from app.services.telemetry_logger import append_frontend_event

router = APIRouter()


@router.post("/telemetry/events")
def accept_frontend_event(event: TelemetryEvent) -> dict[str, str]:
    append_frontend_event(event.model_dump())
    return {"status": "accepted"}
