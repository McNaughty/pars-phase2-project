import React, { useState, useEffect } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    organizer: "",
    title: "",
    facilitator: "",
    location: "",
    startdate: "",
    enddate: "",
  });

  const [eventsData, setEventsData] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    fetch("https://pars-project.onrender.com/events")
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        setEventsData(data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error.message);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleDeregister = () => {
    console.log(`De-registered from event: ${formData.event}`);
  };

  const handleNewEvent = () => {
    fetch("https://pars-project.onrender.com/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to add a new event");
        }
        return response.json();
      })
      .then(() => {
        console.log("New event added successfully");
        setEventsData((prevEvents) => [...prevEvents, formData]);
        setFormData({
          organizer: "",
          title: "",
          facilitator: "",
          location: "",
          startdate: "",
          enddate: "",
        });
      })
      .catch((error) => {
        console.error("Error adding a new event:", error.message);
      });
  };

  return (
    <div className="econtainer">
      <div className="header">
        <h1 className="text">Event Registration</h1>
        <div className="underline"></div>
      </div>
      <form>
        {/* organizer */}
        <label>
          Organizer:
          <input
            className="input"
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
          />
        </label>

        <label>
          Event Title:
           <input
            className="input"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        {/* facilitator */}
        <label>
          Facilitator:
          <input
            className="input"
            type="text"
            name="facilitator"
            value={formData.facilitator}
            onChange={handleChange}
          />
        </label>
        {/* location */}
        <label>
          Location:
          <input
            className="input"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        {/* start date */}
        <label>
          Start Date:
          <input
            className="input"
            type="date"
            name="startdate"
            value={formData.startdate}
            onChange={handleChange}
          />
        </label>
        {/* end date */}
        <label>
          End Date:
          <input
            className="input"
            type="date"
            name="enddate"
            value={formData.enddate}
            onChange={handleChange}
          />
        </label>
        {/* Buttons for registering, de-registering, adding new event, and deleting event */}
        <div className="submit-container">
          <button
            className="submit"
            id="cancelBtn"
            type="button"
            onClick={handleDeregister}
          >
            De-register
          </button>
          <button className="submit" type="button" onClick={handleNewEvent}>
            Add New Event
          </button>
        </div>
      </form>
      {/* events */}
      <div>
        <h2>All Events</h2>
        <ul>
          {eventsData.map((event) => (
            <li key={event.id}>{`${event.title} `}</li>

            ))}
        </ul>
      </div>
    </div>
  );
}

export default Register;