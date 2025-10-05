from google import genai
from dotenv import load_dotenv
import os
import base64
import requests
import json
import re
from PIL import Image
from io import BytesIO
from fastapi import File, UploadFile
from fastapi.responses import StreamingResponse

load_dotenv()


gemini_key = os.getenv("GEMINI_KEY")

client = genai.Client(api_key=gemini_key)

async def generateGeminiContent(file: UploadFile = File(...)):

    bytes = await file.read()

    response = client.models.generate_content(
        model="gemini-2.5-flash",
         contents=[{
            "role": "user",
            "parts": [
                {"text": "Please find areas on this image where you can add ev charging, bike racks, trees. Please give me pixel coordinates of where to add icons (bike, charging, trees) in json format. Multiple coordinates of each icon if possible. Reasonsing for all these additions. please follow this JSON FORMAT: {'ev_charging': [{'x': 380, 'y': 500, 'reasoning': 'Located in a prime parking spot directly adjacent to the accessible parking, offering convenient access for customers close to the bank entrance. This spot is easily convertible with access to power from the building.'}, {'x': 650, 'y': 400, 'reasoning': 'Placed at the end of a visible parking row further down the lot. This location allows for a dedicated charging space without occupying a primary front-row spot, suitable for longer stays and less frequent turnover.'}, {'x': 800, 'y': 350, 'reasoning': 'Utilizes another existing parking space towards the far end of the lot. This increases the total charging capacity, provides options for more vehicles, and can be integrated into future parking lot upgrades.'}], 'bike_racks': [{'x': 250, 'y': 410, 'reasoning': 'Positioned on the sidewalk near the left bank entrance column. This provides high visibility for security, convenient access for cyclists visiting the bank, and keeps the racks out of vehicle traffic and the main accessible path.'}, {'x': 450, 'y': 380, 'reasoning': 'Located on the sidewalk to the right of the main entrance. This offers an alternative and equally convenient spot for bike parking, visible from the building, and encourages eco-friendly transportation.'}], 'trees': [{'x': 600, 'y': 600, 'reasoning': Introduces a new landscape island in the middle of the large, open asphalt area. This provides significant shade for parked vehicles, reduces the urban heat island effect, and breaks up the monotony of the parking lot's surface.}, {'x': 900, 'y': 300, 'reasoning': 'Adds a tree at the far end of a parking row, potentially as part of a redesigned end island. This enhances the aesthetics of the remote parts of the lot, offers additional shade, and helps define parking boundaries.'}, {'x': 950, 'y': 200, 'reasoning': 'Placed along the right perimeter of the parking lot, extending the existing green infrastructure. This contributes to better air quality, provides a natural screen, and improves the overall environmental performance of the site.'}, {'x': 150, 'y': 700, 'reasoning': 'Converts a portion of the expansive, unused asphalt in the foreground into a new green space. This significantly enhances the visual appeal upon entry, offers shade for nearby vehicles, and promotes biodiversity.'}]}. And STRICTLY return in JSON FORMAT so it is ready to be processed.  "},
                {
                    "inline_data": {
                        "mime_type": "image/jpeg",
                        "data": base64.b64encode(bytes).decode("utf-8")
                    }
                }
            ]
        }]
    )

    print(response)


    # clean up data from gemini which contains coordinates and reasoning for each point
    rawText = response.text
    clean = re.sub(r"^```json|```$", "", rawText, flags=re.MULTILINE).strip()
    data = json.loads(clean)
    

    # Overlay icons based on gemini response

    base = Image.open(BytesIO(bytes)).convert("RGBA")
    width, height = base.size

    #Filter out invalid data points
    def is_valid(point):
        return point["y"]>height/2
    

    data["trees"] = list(filter(is_valid,data["trees"]))
    data["ev_charging"] = list(filter(is_valid,data["ev_charging"]))
    data["bike_racks"] = list(filter(is_valid,data["bike_racks"]))





    
    #tree incons

    for tree in data["trees"]:
        base.alpha_composite(Image.open("icons/tree.png").convert("RGBA").resize((75, 75)),dest=(tree["x"],tree["y"]))
    
    #  #ev charging incons
    for charger in data["ev_charging"]:
        base.alpha_composite(Image.open("icons/charging-station.png").convert("RGBA").resize((75, 75)),dest=(charger["x"],charger["y"]))
    
    #  #bike rack incons
    for bike in data["bike_racks"]:
        base.alpha_composite(Image.open("icons/bicycle.png").convert("RGBA").resize((75, 75)),dest=(bike["x"],bike["y"]))
    

    # Save Image
    img_io = BytesIO()
    base.save(img_io, format="PNG")
    img_io.seek(0)

    return StreamingResponse(
        img_io,
        media_type="image/png",
        headers={"X-Coordinates": json.dumps(data)}  # optional: pass coordinates as header or in a separate endpoint
    )




    









