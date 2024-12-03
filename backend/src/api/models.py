from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from src.api.database import Base

class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, index=True)
    event_type = Column(String, index=True)
    page_url= Column(String)
    user_agent = Column(String, nullable=True)
    ip_address = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())