from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()


@app.get("/user/{user_id}")
async def read_user(user_id: int):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"https://reqres.in/api/users/{user_id}")
        if resp.status_code != 200:
            raise HTTPException(status_code=404, detail="User not found")
        data = resp.json()
        return data
