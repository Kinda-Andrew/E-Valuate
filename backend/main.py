from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.responses import JSONResponse
from gemini import generateGeminiContent

app = FastAPI()

@app.get("/")
def test():
    return {"name":"henry"}

@app.post("/getPhoto")
async def getPhoto(file: UploadFile = File(...)):
    result = generateGeminiContent(file)
    return JSONResponse(content=result)