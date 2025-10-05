from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.responses import JSONResponse
from gemini import generateGeminiContent
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # explicit origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def test():
    return {"name":"henry"}

@app.post("/getPhoto")
async def getPhoto(file: UploadFile = File(...)):
    
    result = await generateGeminiContent(file)
    return result