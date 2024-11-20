from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    docs_url="/fastapi/docs", openapi_url="/fastapi/openapi.json"
)

class HelloPostRequest(BaseModel):
    name: str

@app.get("/hello")
def hello_handler():
    try:
        # TODO: Update logic
        return {"items": [1, 2, 3]}
    except Exception as exc:
        return {"error": f"A problem occurred: {exc}"}

@app.post("/hellopost")
def hellopost_handler(request: HelloPostRequest):
    try:
        # TODO: Update logic
        return {"message": f"Hello, {request.name}!"}
    except Exception as exc:
        return {"error": f"A problem occurred: {exc}"}