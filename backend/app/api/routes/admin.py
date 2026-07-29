import logging

from fastapi import APIRouter

from app.services.mock_data import get_admin_dashboard

router = APIRouter()
logger = logging.getLogger("saajha.api.admin")


@router.get("/dashboard")
def admin_dashboard() -> dict:
    logger.info("admin dashboard requested")
    return get_admin_dashboard()


@router.get("/bigquery-sync/status")
def bigquery_sync_status() -> dict[str, str]:
    logger.info("bigquery sync status requested")
    return {
        "status": "success",
        "lastSync": "May 26, 2025 • 6:30 AM",
        "nextSync": "May 27, 2025 • 6:30 AM",
    }
