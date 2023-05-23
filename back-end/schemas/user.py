import datetime
from pydantic import BaseModel


class UserBase(BaseModel):
    id: int
    username: str
    email: str


class UserCreate(UserBase):
    password: str
    salt: str
    createdAt: datetime
    updatedAt: datetime


class User(UserBase):
    pass

    class Config:
        orm_mode = True
