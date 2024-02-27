import httpx

from app.models.user import User


async def fetch_user_data(user_id: int) -> User:
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://reqres.in/api/users/{user_id}")
        response.raise_for_status()  # This will raise an exception for 4XX/5XX responses
        data = response.json()
        return User(**data)
