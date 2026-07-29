import logging

from fastapi import APIRouter

from app.services.mock_data import get_login_response

router = APIRouter()
logger = logging.getLogger("saajha.api.auth")


@router.post("/login")
def login(payload: dict[str, str]) -> dict[str, object]:
    email = payload.get("email", "")
    password = payload.get("password", "")

    if not email or not password:
        logger.warning("login rejected because email or password was missing")
        return {
            "success": False,
            "message": "Email and password are required.",
            "role": "guest",
            "redirectTo": "/login",
        }

    response = get_login_response(email=email, password=password)
    logger.info("login succeeded for email=%s role=%s", email, response["role"])
    return response


@router.post("/google")
def google_login(payload: dict[str, str]) -> dict[str, object]:
    email = payload.get("email", "")
    response = get_login_response(email=email, password="google")
    logger.info("google login succeeded for email=%s role=%s", email, response["role"])
    return response
