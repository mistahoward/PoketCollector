import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
postgres_url = os.environ.get("POSTGRES_URL")
postgres_user = os.environ.get("POSTGRES_USER")
postgres_pw = os.environ.get("POSTGRES_PW")
SQLALCHEMY_DATABASE_URL = f"postgresql://{postgres_user}:{postgres_pw}@{postgres_url}/"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# ! Need to pick up from here
# https://fastapi.tiangolo.com/tutorial/sql-databases/#note
