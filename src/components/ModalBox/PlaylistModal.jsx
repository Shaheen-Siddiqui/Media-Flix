import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

//External Imports:-
import "../../pages/authentication/Authentication.css";
import "./ModalBox.css";
("KG ");
import { ActionCreator } from "../../utils/action-creator";
import { playlistConstant } from "../../store/redux-operation/playlist/playlist-constant";
import toast from "react-hot-toast";

const PlaylistModal = ({ setShowPlayListModal, selectedVideo }) => {
  const {
    ADD_CONTAINER,
    CREATE_NEW_PLAYLIST,
    TOGGLE_CHECKBOX,
    DELETE_PLAYLIST,
  } = playlistConstant;
  const { listContainer, playlistCase } = useSelector(
    (state) => state.playlist
  );

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(ActionCreator(CREATE_NEW_PLAYLIST));
    toast.success(`Playlist Created`)
  };

  return (
    <form className="modal-box" onSubmit={submitHandler}>
      <div className="modal-content">
        <div className="checkbox-wrapper-1 " id="face-tofas">
          <div>
            {playlistCase.map((item, index) => {
              const { listName, listCase, _id } = item;
              return (
                <div key={index} className="check-padding">
                  <input
                    checked={listCase.some((findItem)=>findItem._id==selectedVideo._id)}
                    onChange={(event) =>
                      event.target.checked === true
                        ? dispatch(
                            ActionCreator(TOGGLE_CHECKBOX, {
                              toggleId: _id,
                              ItemToAdd: selectedVideo,
                              listName
                            })
                          )
                        : dispatch(
                            ActionCreator(DELETE_PLAYLIST, {
                              listedItemId: selectedVideo._id,
                              _id,
                              listName
                            })
                          )
                    }
                    
                    className="substituted"
                    name="checkplaylist"
                    type="checkbox"
                    id={_id}
                  />
                  <label htmlFor={_id}>{listName}</label>
                </div>
              );
            })}
          </div>

          <span
            className="icon-cursor"
            onClick={() => setShowPlayListModal(false)}
          >
            <ImCross />
          </span>
        </div>
        <div className="password-case playlist-content">
          <input
            required
            autoFocus
            placeholder="Playlist Name"
            value={listContainer.listName}
            onChange={(event) =>
              dispatch(ActionCreator(ADD_CONTAINER, event.target.value))
            }
          />
        </div>
        <button
          className="input-box submit-btn"
          id="playlist-btn"
          type="submit"
        >
          Create New Playlist
        </button>
      </div>
    </form>
  );
};

export default PlaylistModal;
