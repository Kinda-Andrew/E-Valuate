import React from "react";
import './Page1.css'
import { useState } from "react";



 

function Page1(){
     const[inputFile,setInputFile] = useState(null);
     const[ouputFile,setOutputFile] = useState(null);

     async function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", inputFile);

    
    const res = await fetch(`${process.env.VITE_API_URL}/getPhoto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,});

    console.log(res);

}
    

    return(
        
        
        <>




        {/* This is the bottom part */}
      <div className = "bottompart"> 

        <div className = "transformed">

            {/* This is a sample image of a transformed photo */}

            <img src = "./scout.png" width = "95%" height = "100%"></img>


        </div>

        {/* This part contains information about the photo */}
        <div className = "info">
            Lorus Ipusum or something i dont even know anymore
        </div>


      </div>



        </>

    );


   
        <h1>{inputFile.name}</h1>




}


export default Page1;