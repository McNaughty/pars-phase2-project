import React, { useState, useEffect } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    organizer: "",
    event: "",
    facilitator: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const [eventsData, setEventsData] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    fetch("https://pars-project.onrender.com/db")
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        setEventsData(data);

        if (data.events.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            organizer: data.events[0].organizer,
            event: data.events[0].title,
            facilitator: data.events[0].facilitator,
            location: data.events[0].location,
            startDate: data.events[0].startdate,
            endDate: data.events[0].enddate,
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error.message);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = () => {
    fetch("https://pars-project.onrender.com/db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to register for the event");
        }
        return response.json();
      })
      .then(() => {
        if (!registeredEvents.includes(formData.event)) {
          setRegisteredEvents((prevEvents) => [...prevEvents, formData.event]);
        }
      })
      .catch((error) => {
        console.error("Error registering for the event:", error.message);
      });
  };

  const handleDeregister = () => {
    console.log(`De-registered from event: ${formData.event}`);
  };

  const handleNewEvent = () => {
    fetch("https://pars-project.onrender.com/db", {
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
        setEventsData((prevEvents) => [...prevEvents, formData]);
        setFormData({
          organizer: "",
          event: "",
          facilitator: "",
          location: "",
          startDate: "",
          endDate: "",
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
          Event:
          </select>

            <select
            className="input"
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            { eventsData.events && eventsData.events.map((event) => (
              <option key={event.id} value={event.title}>
                {`${event.title} `}
                
           

              </option>
            ))}
          </select>
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
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        {/* end date */}
        <label>
          End Date:
          <input
            className="input"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        {/* Buttons for registering, de-registering, adding new event, and deleting event */}
        <div className="submit-container">
          <button className="submit"  type="button" onClick={handleRegister}>
            Register
          </button>
          <button 
            className="submit"
            id="cancelBtn"
            type="button" onClick={handleDeregister}>
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
        <label>
  Event:
  {/* type a new event or select an existing one */}
  <input
    type="text"
    name="event"
    value={formData.event}
    onChange={handleChange}
    list="eventsList"
  />
  {/* existing events */}
  <datalist id="eventsList">
    // {eventsData.map((event) => (
    //   <option key={event.id} value={event.title} />
    // ))}

    {eventsData.events &&
            eventsData.events.map((event) => (
              <option key={event.id}>{`${event.title} `} />
            ))}
  </datalist>
</label>
      </div>
      {/* registered events */}
      <div>
        <h2>Registered Events</h2>
        <ul>
          {registeredEvents.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Register;
