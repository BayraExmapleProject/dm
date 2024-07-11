from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import  Session
from fastapi.middleware.cors import CORSMiddleware
from database import Base, DataBaseTable, engine, get_db
from model import RequestItem, UpdateRequest


# FastAPI app instance
app = FastAPI()
 #allow to connect to frontend
app.add_middleware(
 CORSMiddleware,
 allow_origins=["http://localhost:3000", "https://dm-r6lp.vercel.app/"], # Add your frontend origin here
 allow_credentials=True,
 allow_methods=["*"],
 allow_headers=["*"],
 )

# Create Database 
Base.metadata.create_all(bind=engine)


@app.post("/items")
async def posts(item: RequestItem, Db: Session = Depends(get_db)):
    db_item = DataBaseTable(name=item.name)
    Db.add(db_item)
    Db.commit()
    Db.refresh(db_item)
    return Db
@app.get("/items/{id}")
async def get(id: int, db:Session=Depends(get_db)):
    user = db.query(DataBaseTable).filter(DataBaseTable.id == id).first()
    if user:
        return user
    else: 
        raise HTTPException(status_code=404, detail=f'no data with {id}') 
    
@app.get("/items")
async def gets(db:Session=Depends(get_db)):
    user = db.query(DataBaseTable).all()
    return user

@app.delete("/items/{id}")
async def delete(id: int, db:Session = Depends(get_db)):
    dbuser= db.query(DataBaseTable).get(id)
    if dbuser:
       db.delete(dbuser)
       db.commit()
    else:
        raise HTTPException(status_code=404, detail=f"no name with {id}")
    return None


@app.put("/items/{id}")
async def update(id:int,item:UpdateRequest, db:Session = Depends(get_db)):
    uuser = db.query(DataBaseTable).filter(DataBaseTable.id == id)
    if uuser:
       uuser.update({"name":item.newName})
       db.commit()
    else: raise HTTPException(status_code=404, detail=f'not found')
    return None
  
   
        
    