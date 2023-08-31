import React from "react";
import {ImCross} from 'react-icons/im'

import "../../pages/authentication/Authentication.css";
import "./ModalBox.css";

const PlaylistModal = ({setShowPlayListModal}) => {

const submitHandler=(event)=>{
  event.preventDefault()
}

  return (
    <div>
      <form className="modal-box" onSubmit={submitHandler}>
        <div className="modal-content">
          <div className="checkbox-wrapper-1 " id="face-tofas">
            <div>
              
            <input className="substituted" type="checkbox" id="lowstock" />
            <label htmlFor="lowstock">Daily Morning Habit</label>
            </div>

            <span className="icon-cursor" onClick={()=>setShowPlayListModal(false)}>
              <ImCross/>
            </span>
          </div>
          <div className="password-case playlist-content">
            <input placeholder="Confirm Password" />
          </div>
          <button className="input-box submit-btn" id="playlist-btn">
            Create New Playlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaylistModal;
