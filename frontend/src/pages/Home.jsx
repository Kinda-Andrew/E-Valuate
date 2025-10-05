import React from "react";
import './Home.css'

import Page1 from './Page1';
import Page2 from './Page2';
import {Link} from "react-router-dom";


function Home(){


return(
    <>
      
      
      


<div className = "thewholesite">


<video autoPlay muted loop id="video" height = "100%" width = "101.2%" style={{marginLeft : "-0.6%", marginTop : "-0.6%"}}>
    <source src="/rain2.mp4" type="video/mp4"/>
    </video>

    <div className = "title"> Evaluate </div>
    
    
    <div className = "buttons">
    
    <div className = "button1">
    <Link to="/Page1" style={{ textDecoration: 'none' , color: "black"}}>
    Eco-Vision
    
    </Link>
    </div>

    
    <div className = "button2">
    <Link to="/Page2" style={{ textDecoration: 'none' , color: "black"}}>
    Scout
    </Link>
    </div>

    </div>

    

    <div className = "lowerpart">

    
        <div className = "leftside">
            This is the left side

        <img src = "./screenshot.png" height = "100%" width = "100%"></img>
        

        </div>

        <div className = "rightside">
            This is the right side
            <img src = "./screenshot.png" height = "100%" width = "100%"></img>
           
        
        </div>

    </div>

    </div>


    </>

)


}


export default Home