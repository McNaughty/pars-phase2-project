// import "./App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "../modal/Modal";
import eventsData from "../../Events.json";
import ParticipantRegistration from "../participantreg/ParticipantRegistration";
import {useNavigate} from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


function CalendarDash() {
  // Extract the events data array from the imported JSON data
  const { events } = eventsData;

  const [selected, setSelected] = useState(null);

  // captures the open / close state of the modal
  const [isOpen, setIsOpen] = useState(false);
  // const [showCalender, setShowCalender] = useState(true);

  const navigate = useNavigate();

  const handleSelected = (event) => {
    // console.log("Selected Event:", event);
    setSelected(event);
    setIsOpen(true);
    // console.info('[handleSelected - event]', event);
    const eventDetails = event;
    // console.log(eventDetails);

  };


  const closeModal = () => {
    setIsOpen(false);
  };

  // const registrationRoute = (event) => {
  //   const eTitle = event.title;
  //   // navigate("/activityregistration", {state: {title:selected.title}});

  //   console.log(eTitle);
  //   console.log(selected)
  // };

  function regRoute(){
    const eTitle = selected.title;
    const eStart = selected.startdate;
    const eEnd = selected.enddate;
    // navigate("/activityregistration"{ state: { eTitle, eStart, eEnd }});
    navigate("/activityregistration", { state: { eTitle, eStart, eEnd } });

    // console.log(selected);
    // console.log(eTitle)
  }

  
  const [registration, setRegistration] = useState(false)
  const handleRegistration = (selected) => {
    setRegistration(true);
    closeModal();
    // , startdate:selected.startdate, enddate:selected.enddate
    regRoute(selected);


  };

 

  return (
    <div className="App">
      <div className="header">
                <div className="text"> Events Calendar </div>
                <div className="underline"></div>
            </div>
      <Calendar
        // selected={events.title}
        onSelectEvent={handleSelected}
        localizer={localizer}
        events={events}
        startAccessor="startdate"
        endAccessor="enddate"
        style={{ height: 750, margin: "50px" }}
        // onClick={console.log("test")}
      />
      
      {/* // checks if the state of the modal is true for open and whether and event is selected before proceeding */}
      {isOpen && selected && (
        //pass as props details of the selected event and also the close modal function
        <Modal selectedEvent={selected} closeModal={closeModal} register={handleRegistration} />
      )}

      {registration ? ( <ParticipantRegistration eventDets={selected} closeModal={closeModal} /> ) : (null)}
     
    </div>
  );
}

export default CalendarDash;
