# Lineup task

Run instructions(Docker Version below)

1. Clone this repository

```bash
git clone https://github.com/tede0/lineup-test
```

2. CD into it, create and activate virtual environment

```bash
cd lineup-test/backend
python3 -m venv venv
source venv/bin/activate
```

3. Install the dependencies

```bash
pip install -r requirements_dev.txt
```

4. Run the backend

```bash
uvicorn app.main:app
```

5. Run the frontend in separate terminal

```bash
cd lineup-test/frontend
npm i
npm run dev
```

6. Go to "http://localhost:5173"

# Docker version

1. You need to be inside "lineup-test" folder and Docker should be running

```bash
docker-compose up --build
```

2. Go to "http://localhost:5100"

# P.S

Even though I've tried to add tests to frontend as well, I haven't done it because I encoutered a problem with mocking url parameters using both jest and vitest and it was taking way to long to resolve, but of course in real world app I would do UI tests that would check the validity of html output.

# Thanks for your time!
