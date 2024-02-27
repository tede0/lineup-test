import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))


from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_get_user():
    response = client.get("/user/2")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == 2
    assert "email" in data
    assert "first_name" in data
    assert "last_name" in data
    assert "avatar" in data
