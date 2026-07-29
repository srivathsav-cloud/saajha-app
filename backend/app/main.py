import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import admin, auth, health, telemetry, volunteer
from app.core.config import settings

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

app = FastAPI(
    title="Saajha API",
    version="0.2.0",
    description="FastAPI backend scaffold for the Saajha Volunteer Parent Outreach App.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api", tags=["health"])
app.include_router(telemetry.router, prefix="/api", tags=["telemetry"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(volunteer.router, prefix="/api/volunteer", tags=["volunteer"])
app.include_router(admin.router, prefix="/api/admin", tags=["admin"])


@app.middleware("http")
async def log_requests(request, call_next):
    logger = logging.getLogger("saajha.http")
    logger.info("request path=%s method=%s", request.url.path, request.method)
    response = await call_next(request)
    logger.info("response path=%s status_code=%s", request.url.path, response.status_code)
    return response


@app.get("/")
def root() -> dict[str, str]:
    return {"service": "Saajha-api", "status": "running"}
