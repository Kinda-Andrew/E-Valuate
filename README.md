#E-Valuate
E-valuate’s main purpose is to provide eco-friendly evaluations for a variety of users. It breaks down into 2 components, Eco-Vision and Scout. 

Eco-vision is oriented towards individual or small-scale use, it allows a user to upload an image of an outdoor space and receive key recommendations for making it more sustainable and environmentally friendly. 

Scout is oriented to be an enterprise grade tool for expanding solar infrastructure. It allows a user to highlight a region on its map and receive information on how many solar panels could fit in the region based on the approximate roof space and it gives an estimate for how much energy the infrastructure would provide in a year. 


—----------------------------------------------------------------------------------------------------------------------------

#Setting up E-Valuate 

Scout 
Scout’s setup requires that you have a Maps Platform API key with the Maps Javascript API enabled


Open the Scout.html file in Visual Studio Code or a working IDE of your choice

At line 83 replace replace “_MAPS_JS_API_KEY_” with your Maps JavaScript API key 



Eco-Vision 
Eco-Vision requires you have a gemini api key

Create a .env file in the backend following this format:
GEMINI_KEY = YOUR_KEY_HERE

Using the terminal cd to the backend directory and run the following command:
	pip install google-genai python-dotenv Pillow requests fastapi uvicorn


—----------------------------------------------------------------------------------------------------------------------------

#Running E-Valuate
To start the server cd to the backend directory and run this command in the terminal: uvicorn main:app --reload 
Next open a new terminal and cd to the frontend directory and run this command in the terminal:
 npm run dev   

—----------------------------------------------------------------------------------------------------------------------------

#Mit Licence

—----------------------------------------------------------------------------------------------------------------------------

#Credits 

Brandon Tran - Helped assist with frontend and design of the website pages. Implemented effects.

Augus Li - Worked on frontend, layout, and design of website. Additionally helped perform the statistical regression on Solar API data.

Andrew Ukken - Built the Scout feature and performed the statistical regression on Google Solar data to get the approximations used by Scout. Made early designs and plans for the site and its features.

Brett - Set up that backend server and handled implementation for the Ecovision feature. This involved meshing the Gemini API and the Python Pillow library, in order to successfully edit the user-uploaded photos and receive reasoning for each added icon's coordinates. Additionally, I created a POST request endpoint that involves receiving the user’s uploaded image and returning the new eco-friendly version of the image, along with the reasoning behind each icon. Finally, I handled the image submission logic and connected the Post request endpoint in the frontend.

—----------------------------------------------------------------------------------------------------------------------------
