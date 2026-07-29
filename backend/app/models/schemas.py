from typing import Any

from pydantic import BaseModel


class TelemetryEvent(BaseModel):
    eventType: str
    element: str
    route: str
    metadata: dict[str, Any] | None = None


class ParentTask(BaseModel):
    parent_id: str
    parent_name: str
    phone_masked: str
    child_name: str
    child_level: str
    locked: bool


class VolunteerStats(BaseModel):
    calls: int
    completed_assessments: int
    pending_follow_ups: int


class AdminDashboardStats(BaseModel):
    eligible_parents: int
    locked: int
    calls_today: int
    callbacks_pending: int
    active_volunteers: int
