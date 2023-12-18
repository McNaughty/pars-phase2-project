import React from "react";
import ReactModal from "react-modal";
import "./SuccessModal.css";

const SuccessModal = ({ isOpen, onRequestClose, message }) => {
  return (
    <ReactModal className="smodalBackground"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Success Modal"
    >
      <div className="smodalContainer">
          <p>{message}</p>
          <div className="titleCloseBtn">
            <button id="close" onClick={onRequestClose}>Close</button>
          </div>
        </div>
      {/* </div> */}
    </ReactModal>
  );
};

export default SuccessModal;
