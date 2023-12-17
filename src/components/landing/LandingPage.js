import React from "react";
import "./LandingPage.css"
import {useNavigate} from "react-router-dom";
// import "../app/App.css";

function LandingPage(){

    function eventScheduleRoute(){
        navigate("/eventschedule");
    
      }
    
      function calendarRoute(){
        navigate("/calendar");
    
      }

      const navigate = useNavigate();
      
    return (
        <div className="lcontainer">
            <div className="lheader">
                <div className="text"> Task Selection </div>
                <div className="underline"></div>
            </div>
            
            
            <div className="submit-container">
                <div className="submit" id="cancelBtn" onClick={eventScheduleRoute}>REGISTER EVENT</div>
                <div className="submit" onClick={calendarRoute}>EVENT CALENDAR</div>
            </div>

            <div className="lsub-heading">
                <div className="ltext"> Data Processing T&C </div>
                <div className="underline"></div>
            </div>
            <div className="lpolicy">
                <p>1.0 In order to fulfil our obligations to you in relation to the Event, we may share relevant personal data with presenters, Event Venue management, the Online Event Platform, trainers, organisers, print houses, finance partners, connected communities, faculties, committees, Event service providers and external delivery partners. 
                </p>We may also share personal data in accordance with our privacy notice, including with Event Sponsors who may be based in any territory.

                <p>2.0 Registration Details of Participants will be added to our official Participant networking tool, which enables Participants to contact each other and to view the list of Participants at an Event. 
                If you do not want your Registration Details to be included in the relevant networking tool, please email the event contact listed in the Event Confirmation at least two Business Days before the start of the Event.
                </p>
                </div>
            </div>
    )
}

export default LandingPage
