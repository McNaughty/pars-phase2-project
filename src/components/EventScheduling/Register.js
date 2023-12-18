import React, { useState, useEffect } from "react";

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
    fetch("http://localhost:3000/events")
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        setEventsData(data);

        if (data.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            organizer: data[0].organizer,
            event: data[0].title,
            facilitator: data[0].facilitator,
            location: data[0].location,
            startDate: data[0].startdate,
            endDate: data[0].enddate,
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
    fetch("http://localhost:3000/events", {
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
    fetch("http://localhost:3000/events", {
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
    <div className="register">
      <h1>Event Registration</h1>
      <form>
        {/* organizer */}
        <label>
          Organizer:
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
          />
        </label>

        <label>
          Event:
          <select name="event" value={formData.event} onChange={handleChange}>
            {eventsData.map((event) => (
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
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        {/* Buttons for registering, de-registering, adding new event, and deleting event */}
        <div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <button type="button" onClick={handleDeregister}>
            De-register
          </button>
          <button type="button" onClick={handleNewEvent}>
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
    {eventsData.map((event) => (
      <option key={event.id} value={event.title} />
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
