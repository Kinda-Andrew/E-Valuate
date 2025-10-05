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
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={(event)=>{setInputFile(event.target.files[0]);}}></input>
            <button type="submit">Submit</button>
        </form>

        </>

    );


   
        <h1>{inputFile.name}</h1>




}


export default Page1;