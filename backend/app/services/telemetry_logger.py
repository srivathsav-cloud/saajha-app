from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

LOG_DIR = Path("logs")
LOG_FILE = LOG_DIR / "frontend-events.log"


def _ensure_log_file() -> None:
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    LOG_FILE.touch(exist_ok=True)


def append_frontend_event(event_payload: dict[str, Any]) -> None:
    _ensure_log_file()

    timestamp = datetime.now(timezone.utc).isoformat()
    log_entry = {
        "timestamp": timestamp,
        "event": event_payload,
    }

    with LOG_FILE.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(log_entry, ensure_ascii=False) + "\n")
