import React from "react";
import './Home.css'

import Page1 from './Page1';
import Page2 from './Page2';
import {Link} from "react-router-dom";



function Home(){


return(
    <>
      
     
      





<video autoPlay muted loop id="video" height = "100%" width = "101.2%" style={{marginLeft : "-0.6%", marginTop : "-0.6%"}}>
    <source src="/rain2.mp4" type="video/mp4"/>
    </video>

    <div className = "title"> E-VALUATE </div>
    
    <div className = "buttons">
    
    <div className = "button1">
    <Link to="/Page1" style={{ textDecoration: 'none' , color: "white"}}>
    Eco-Vision
    
    </Link>
    </div>

    
    <div className = "button2">
    <Link to="/Page2" style={{ textDecoration: 'none' , color: "white"}}>
    Scout
    </Link>
    </div>

    </div>
    

    <div className = "lowerpart">
       
        <div className = "description">
            <p>THIS IS A DESCRIPTION</p>
        </div>
    
    
        <div className = "leftside">
            <div className = "leftsidetext">
                This is the left side
            </div>
            
            <img src = "./screenshot.png" height = "100%" width = "100%"></img>
        
        </div>

        <div className = "rightside">
            <div className = "rightsidetext">
                This is the right side
            </div>
            
            <img src = "./screenshot.png" height = "100%" width = "100%"></img>
           
        </div>

    </div>

    </>

)


}


export default Home