import React from "react";
import './Home.css'
 

function Home(){


return(
    <>
   <div className = "video"> 
        <video autoPlay muted loop id = "video">
        <source src = "/rain.mp4" type = "video/mp4"/>
        </video>
    </div>
    


    <div className = "titlecontainer">
      

    

    <div className = "title"> Evaluate </div>
      
    </div>

    <div className = "lowerpart">

    
        <div className = "leftside">
            This is the left side

        
        

        </div>

        <div className = "rightside">
            This is the right side
            
        
        </div>

    </div>



    </>

)


}


export default Home