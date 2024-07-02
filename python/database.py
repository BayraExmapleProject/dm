from sqlalchemy import Column, String, Integer, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Create connection
engine = create_engine("sqlite:///./db/Students.db")
session_Local = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
# db model
class DataBaseTable(Base):
    __tablename__="student"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    
# Dependency to get the database session

def get_db():
    y=session_Local()
    try:
        yield y
    finally: 
        y.close()