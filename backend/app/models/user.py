from pydantic import BaseModel, HttpUrl


class Support(BaseModel):
    url: HttpUrl
    text: str


class UserData(BaseModel):
    id: int
    email: str
    first_name: str
    last_name: str
    avatar: HttpUrl


class User(BaseModel):
    data: UserData
    support: Support
