from fastapi import FastAPI, Body, Request, status
from pydantic import BaseModel, Field

app = FastAPI()

@app.get("/api/v1/list")
def root():
    return {"Hello":"SMS"}

class Message(BaseModel):
    message: str

@app.post("/api/v1/SMSRecive")
async def getInput(msg: Message):
  print(msg)
  return msg
