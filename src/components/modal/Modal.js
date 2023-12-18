import React,{useState} from "react";
import "./Modal.css";
import ParticipantRegistration from "../participantreg/ParticipantRegistration";



function Modal({selectedEvent, closeModal, register}){


    return <>
    {/* {console.log(selectedEvent)} */}
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <button onClick={closeModal}> X </button>
        </div>
        <div className="title">
          <h1>{selectedEvent.event}</h1>
          </div>
          <div className="body">
            <p> Event Start Date : {selectedEvent.startdate} </p>
            <p> Event Start Date : {selectedEvent.enddate} </p>
            <p> Location : {selectedEvent.location} </p>
            <p> Organizer :{selectedEvent.organizer} </p>
            <p> Facilitator : {selectedEvent.facilitator} </p>
            </div>
            <div className="footer">
              <button onClick={closeModal} id="cancelBtn">Cancel</button>
              <button onClick={register}>
                Register</button>
        </div>
      </div>
    </div>
    {/* {registration ? ( <ActivityRegistration eventDets={selectedEvent} closeModal={closeModal} /> ) : (null)} */}
    </>
  }


  export default Modal;