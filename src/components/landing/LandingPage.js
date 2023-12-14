import React from "react";
import "./LandingPage.css"
import {useNavigate} from "react-router-dom";

function LandingPage(){

    function eventScheduleRoute(){
        navigate("/eventschedule");
    
      }
    
      function calendarRoute(){
        navigate("/calendar");
    
      }

      const navigate = useNavigate();
      
    return (
        <div className="container">
            <div className="header">
                <div className="text"> Task Selection </div>
                <div className="underline"></div>
            </div>
            
            <div className="deregistration">Do you want to deregister an event <span> Click Here! </span></div>
            <div className="submit-container">
                <div className="submit" id="cancelBtn" onClick={eventScheduleRoute}>REGISTER EVENT</div>
                <div className="submit" onClick={calendarRoute}>EVENT CALENDAR</div>
            </div>
        </div>
    )
}

export default LandingPage