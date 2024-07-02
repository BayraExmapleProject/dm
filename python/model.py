from pydantic import BaseModel
# Pydantic model for request data

class RequestItem(BaseModel):
    name:str
   
# Pydantic model for response data


class UpdateRequest(BaseModel):
    newName:str
   