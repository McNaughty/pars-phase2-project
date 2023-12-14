import React from "react";
import './ActivityRegistration.css'
import {useLocation} from "react-router-dom";

import calendar from '../../assets/calendar.svg'
import location from '../../assets/location.svg'

function ActivityRegistration({eventDets, closeModal}){
    // closeModal();
    const location = useLocation();
    const {state} = location;

    // Access state properties
    const { eTitle, eStart, eEnd } = state || {};

    return (
        <div className="container">
            <div className="header">
                <div className="text"> Activity Registration </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder="Activity" value={eTitle}/>
                </div>

                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder="Unit/Lab" />
                </div>

                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder="Team Lead" />
                </div>

                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder="Activity Type" />
                </div>

                <div className="input">
                    <img src={calendar}  alt="" />
                    <input type="text" placeholder="Start Date" value={eStart}/>
                </div>

                <div className="input">
                    <img src={calendar}  alt="" />
                    <input type="text" placeholder="End Date" value={eEnd}/>
                </div>

                <label for="place">Activity Location:</label>
                {/* <div className="radioBtns"> */}
                    <label className="radioBtns">Onsite
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                    </label>
                    <label className="radioBtns">Offsite
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                    </label>
                {/* </div> */}

                <div className="input">
                    <img src={calendar} alt="" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <img src={location} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="deregistration">Do you want to deregister an event <span> Click Here! </span></div>
            <div className="submit-container">
                <div className="submit" id="cancelBtn">Cancel</div>
                <div className="submit">Register</div>
            </div>
        </div>
    )
}

export default ActivityRegistration