import httpx
from fastapi import FastAPI, HTTPException

from .models.user import User
from .services.user_data_service import fetch_user_data


app = FastAPI()


@app.get("/user/{user_id}", response_model=User)
async def read_user(user_id: int):
    try:
        user_data = await fetch_user_data(user_id)
        return user_data
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=str(e))
