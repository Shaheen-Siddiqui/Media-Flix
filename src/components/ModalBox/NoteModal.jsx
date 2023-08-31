import React from "react";
import { ImCross } from "react-icons/im";

import "./ModalBox.css";
import "../../pages/authentication/Authentication.css";

const NoteModal = ({ setShowNoteModal }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    setShowNoteModal(false);
  };
  return (
    <div>
      <form className="modal-box" onSubmit={submitHandler}>
        <div className="modal-content">
          <div className="password-case note-content">
            <input placeholder="Confirm Password" />
            <button className="input-box submit-btn">Add Note</button>
          </div>

          <span className="icon-cursor absolute-cross" onClick={() => setShowNoteModal(false)}>
            <ImCross size={15} />
          </span>
        </div>
      </form>
    </div>
  );
};

export default NoteModal;
