from sqlalchemy import Column, Integer, String, DateTime

# from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    _tablename = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    salt = Column(String)
    createdAt = Column(DateTime, server_default=func.now())  # noqa: F821
    updatedAt = Column(
        DateTime, server_default=func.now(), onupdate=func.now()  # noqa: F821
    )
