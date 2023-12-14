import React,{useState} from "react";
import "./Modal.css";
import ActivityRegistration from "../activityreg/ActivityRegistration";



function Modal({selectedEvent, closeModal, register}){

  // const [registration, setRegistration] = useState(false)

  // const handleRegistration = () => {
  //   setRegistration(true);
  //   // closeModal();

  // };

    return <>
    {/* {console.log(selectedEvent)} */}
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <button onClick={closeModal}> X </button>
        </div>
        <div className="title">
          <h1>{selectedEvent.title}</h1>
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