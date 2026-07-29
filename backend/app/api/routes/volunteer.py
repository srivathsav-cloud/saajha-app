import logging

from fastapi import APIRouter

from app.services.mock_data import get_volunteer_workspace

router = APIRouter()
logger = logging.getLogger("saajha.api.volunteer")


@router.get("/workspace")
def volunteer_workspace() -> dict:
    logger.info("volunteer workspace requested")
    return get_volunteer_workspace()


@router.post("/parent-task/{parent_id}/release")
def release_parent_task(parent_id: str) -> dict[str, str]:
    logger.info("release request received for parent_id=%s", parent_id)
    return {"parentId": parent_id, "status": "released"}


@router.post("/parent-task/{parent_id}/outcome")
def submit_outcome(parent_id: str) -> dict[str, str]:
    logger.info("outcome submission request received for parent_id=%s", parent_id)
    return {"parentId": parent_id, "status": "outcome_saved"}
