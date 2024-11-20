from fastapi import FastAPI

app = FastAPI(
    docs_url="/fastapi/docs", openapi_url="/fastapi/openapi.json"
)


@app.get("/hello")
def hello_handler():
    try:
        # TODO: Update logic
        return {"items": [1, 2, 3]}
    except Exception as exc:
        return {"error": f"A problem occurred: {exc}"}
