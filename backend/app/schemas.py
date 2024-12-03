from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class EventCreate(BaseModel):
    event_type: str
    page_url: str
    user_agent: Optional[str] = None
    ip_address: Optional[str] = None

class EventResponse(BaseModel):
    id: int
    event_type: str
    page_url: str
    created_at: datetime

    class Config:
        from_attributes = True