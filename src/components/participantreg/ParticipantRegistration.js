import React, { useState } from "react";
import "./ParticipantRegistration.css";
import { useLocation } from "react-router-dom";

import calendar from "../../assets/calendar.svg";
import location from "../../assets/location.svg";

import SuccessModal from "./SuccessModal";

function ParticipantRegistration({ eventDets, closeModal }) {
  // closeModal();
  const location = useLocation();
  const { state } = location;

  // Access state properties
  const { eTitle, eStart, eEnd } = state || {};

  // State to manage the selected radio button
  const [selectedOption, setSelectedOption] = useState("onsite");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});

  // Onchange function to update the selected radio button
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formState, setFormState] = useState({
    eTitle: "",
    unitLab: "",
    teamLead: "",
    activityType: "",
    startDate: "",
    endDate: "",
    location: "onsite",
    email: "",
    participantname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear validation error when the user starts typing
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  // function for validating the form fields
  const validateForm = () => {
    const errors = {};

    // Perform validation logic here
    if (!formState.unitLab.trim()) {
      errors.unitLab = "Unit/Lab is required";
    }

    if (!formState.teamLead.trim()) {
      errors.teamLead = "Team Lead is required";
    }

    if (!formState.activityType.trim()) {
      errors.activityType = "Activity Type is required";
    }

    if (!formState.participantname.trim()) {
      errors.participantname = "Participant Name is required";
    }

    if (!formState.email.trim()) {
      errors.email = "Email is required";
    }

    setValidationErrors(errors);
    return {
      isValid: Object.keys(errors).length === 0, // Return true if no errors
      errorFields: Object.keys(errors),
    };
  };

  const handleSubmit = () => {
    // setIsModalOpen(true);

    const validationResult = validateForm();

    if (validationResult.isValid) {
      setIsModalOpen(true);
    } else {
      // Create a message with the list of fields that are not filled
      const errorFieldsList = validationResult.errorFields.join(", ");
      alert(`Please fill in the following fields: ${errorFieldsList}`);
    }
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    // closeModal();
  };

  return (
    <div className="accontainer">
      <div className="header">
        <div className="text"> Participant Registration </div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {/* Grouping the first two fields together */}
        <div className="input-group">
          <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Activity" value={eTitle} readOnly />
          </div>

          <div className="input">
            <img src="" alt="" />
            <input
              type="text"
              placeholder="Unit/Lab"
              name="unitLab"
              value={formState.unitLab}
              onChange={handleChange}
            />

            {validationErrors.unitLab && (
              <div className="validation-error">{validationErrors.unitLab}</div>
            )}
          </div>

          <div className="input">
            <img src="" alt="" />
            <input
              type="text"
              placeholder="Team Lead"
              name="teamLead"
              value={formState.teamLead}
              onChange={handleChange}
            />

            {validationErrors.teamLead && (
              <div className="validation-error">
                {validationErrors.teamLead}
              </div>
            )}
          </div>
        </div>

        <div className="input-group">
          <div className="input">
            <img src="" alt="" />
            <input
              type="text"
              placeholder="Activity Type"
              name="activityType"
              value={formState.activityType}
              onChange={handleChange}
            />
            {validationErrors.activityType && (
              <div className="validation-error">
                {validationErrors.activityType}
              </div>
            )}
          </div>

          <div className="input">
            <img src={calendar} alt="" />
            <input
              type="text"
              placeholder="Start Date"
              value={eStart}
              readOnly
            />
          </div>

          <div className="input">
            <img src={calendar} alt="" />
            <input type="text" placeholder="End Date" value={eEnd} readOnly />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="place">Activity Location:</label>
          <label className="radioBtns">
            Onsite
            <input
              type="radio"
              value="onsite"
              checked={selectedOption === "onsite"}
              onChange={handleRadioChange}
              name="location"
            />
            <span className="checkmark"></span>
          </label>
          <label className="radioBtns">
            Offsite
            <input
              type="radio"
              value="offsite"
              checked={selectedOption === "offsite"}
              onChange={handleRadioChange}
              name="location"
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="input">
          <img src="" alt="" />
          <input
            type="pname"
            placeholder="Participant Name"
            name="participantname"
            value={formState.participantname}
            onChange={handleChange}
          />
          {validationErrors.participantname && (
            <div className="validation-error">
              {validationErrors.participantname}
            </div>
          )}
        </div>

        <div className="input">
          <img src="" alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          {validationErrors.email && (
            <div className="validation-error">{validationErrors.email}</div>
          )}
        </div>
      </div>
      {/* </div> */}
      <div className="deregistration">
        Do you want to deregister an event <span> Click Here! </span>
      </div>
      <div className="submit-container">
        <div className="submit" id="cancelBtn" onClick={closeModal}>
          Cancel
        </div>
        <div className="submit" onClick={handleSubmit}>
          Register
        </div>
      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onRequestClose={closeModalHandler}
        message="Your registration has successfully been submitted!"
      />
    </div>
  );
}

export default ParticipantRegistration;
