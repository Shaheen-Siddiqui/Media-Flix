import React from "react";
import { ImCross } from "react-icons/im";

import "./ModalBox.css";
// import "../../pages/authentication/Authentication.css";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../utils/action-creator";
import { videoConstant } from "../../store/redux-operation/video/video-constants";

export const NoteModal = ({ setShowNoteModal, isEdit, setIsEdit, editCommentId, selectedVideo }) => {
  const { commentText } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const { SET_COMMENTED_TEXT, GET_COMMENTED_TEXT, EDIT, EMPTY_CMMENT_SPACE } =
    videoConstant;

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (isEdit) {
      dispatch(ActionCreator(EDIT, { editCommentId, commentText, selectedVideo }));
      setIsEdit(false);
    } else {
      dispatch(ActionCreator(GET_COMMENTED_TEXT, selectedVideo));
    }

    setShowNoteModal(false);
    dispatch(ActionCreator(EMPTY_CMMENT_SPACE));
  };

  return (
      <form className="modal-box" onSubmit={submitHandler}>
        <div className="modal-content">
          <div className="password-case note-content">
            <input
              required
              autoFocus
              value={commentText}
              placeholder="Add Comments"
              onChange={(event) =>
                dispatch(ActionCreator(SET_COMMENTED_TEXT, event.target.value))
              }
            />
            <button className="input-box submit-btn" button='submit'>Add Note</button>
          </div>

          <span
            className="icon-cursor absolute-cross"
            onClick={() => setShowNoteModal(false)}
          >
            <ImCross size={15} />
           
          </span>
        </div>
      </form>
  );
};

