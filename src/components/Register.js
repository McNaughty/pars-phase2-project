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

    const selectedEvent = eventsData.find((event) => event.title === value);
    setFormData((prevData) => ({
      ...prevData,
      facilitator: selectedEvent.facilitator,
      location: selectedEvent.location,
      startDate: selectedEvent.startdate,
      endDate: selectedEvent.enddate,
    }));
  };

  // registration
  const handleRegister = () => {
    if (!registeredEvents.includes(formData.event)) {
      setRegisteredEvents((prevEvents) => [...prevEvents, formData.event]);
    }
  };

  //  de-registration
  const handleDeregister = () => {
    setRegisteredEvents((prevEvents) =>
      prevEvents.filter((event) => event !== formData.event)
    );
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
            readOnly
          />
        </label>

        <label>
          Event:
          <select name="event" value={formData.event} onChange={handleChange}>
            {eventsData.map((event) => (
              <option key={event.id} value={event.title}>
                {`${event.title} `}
                {/* (${event.startdate} - ${event.enddate})
                 */}
              </option>
            ))}
          </select>
        </label>
        {/* facilitator  */}
        <label>
          Facilitator:
          <input
            type="text"
            name="facilitator"
            value={formData.facilitator}
            readOnly
          />
        </label>
        {/* location */}
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            readOnly
          />
        </label>
        {/*start date */}
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            readOnly
          />
        </label>
        {/* end date */}
        <label>
          End Date:
          <input type="date" name="endDate" value={formData.endDate} readOnly />
        </label>
        {/* Buttons for registering and de-registering */}
        <div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <button type="button" onClick={handleDeregister}>
            Cancel event
          </button>
        </div>
      </form>
      {/* events */}
      <div>
        <h2>All Events</h2>
        <ul>
          {eventsData.map((event) => (
            <li key={event.id}>{`${event.title} `}</li>
            // (${event.startdate} - ${event.enddate})
          ))}
        </ul>
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
