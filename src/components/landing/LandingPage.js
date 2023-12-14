import React from "react";
import "./LandingPage.css"

function LandingPage(){
    
    return (
        <div className="container">
            <div className="header">
                <div className="text"> Task Selection </div>
                <div className="underline"></div>
            </div>
            
            <div className="deregistration">Do you want to deregister an event <span> Click Here! </span></div>
            <div className="submit-container">
                <div className="submit" id="cancelBtn">REGISTER EVENT</div>
                <div className="submit">EVENT CALENDAR</div>
            </div>
        </div>
    )
}

export default LandingPage