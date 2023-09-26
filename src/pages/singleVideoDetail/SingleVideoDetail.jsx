//External Imports
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";
import { PiPlaylistBold, PiNotepadBold } from "react-icons/pi";
import { ImBin } from "react-icons/im";
import { GrEdit } from "react-icons/gr";

//Internal Imports
import "./SingleVideoDetail.css";
import { NoteModal } from "../../components/modalBox/NoteModal";
import { PlaylistModal } from "../../components/modalBox/PlaylistModal";
import { isWatchLaterImage } from "../../store/redux-operation/video/video-action";
import { ActionCreator } from "../../utils/action-creator";
import { videoConstant } from "../../store/redux-operation/video/video-constants";

const SingleVideoDetail = () => {
  const { videoID } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [editCommentId, setEditCommentId] = useState(0);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showPlayListModal, setShowPlayListModal] = useState(false);
  const { ycVideoCase, watchlaterCase } = useSelector((state) => state.video);
  const { isLogIn } = useSelector((state) => state.auth);
  const selectedVideo = ycVideoCase.find((item) => item?._id == videoID);

  const checkisWatchLaterImage = isWatchLaterImage(
    selectedVideo?._id,
    watchlaterCase
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkIsLiked = ycVideoCase.find((item) => item === selectedVideo);

  const { WATCHLATER_ITEMS, LIKED_VIDEO, DELETE_NOTE, GET_EDIT_COMMENT } =
    videoConstant;

  const editComment = (text, textIndex) => {
    setShowNoteModal(true);
    setIsEdit(true);
    dispatch(ActionCreator(GET_EDIT_COMMENT, text));
    setEditCommentId(textIndex);
  };

  const playlistHandler = () =>
    isLogIn ? setShowPlayListModal(true) : navigate("/login");

  return (
    <>
      {showPlayListModal && (
        <PlaylistModal
          setShowPlayListModal={setShowPlayListModal}
          selectedVideo={selectedVideo}
        />
      )}
      {showNoteModal && (
        <NoteModal
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          editCommentId={editCommentId}
          setShowNoteModal={setShowNoteModal}
          selectedVideo={selectedVideo}
        />
      )}

      <div className="detail-case">
        <center>
          <img
            loading="lazy"
            className="single-video-img"
            height="400"
            title={selectedVideo?.title}
            src={selectedVideo?.videoThumbnail}
          />
        </center>
        <div className="comment-space">
          <div>
            <img
              loading="lazy"
              style={{ borderRadius: "2rem" }}
              src={selectedVideo?.thumbnail}
              alt={selectedVideo?.title}
            />
          </div>
        </div>
        <h2>{selectedVideo?.title}</h2>
        <div className="icon-view-case">
          <h3>{selectedVideo?.views} views.</h3>
          <div>
            <span
              onClick={() =>
                isLogIn
                  ? dispatch(ActionCreator(LIKED_VIDEO, selectedVideo?._id))
                  : navigate("/login")
              }
            >
              {checkIsLiked?.liked ? (
                <AiOutlineLike size={20} />
              ) : (
                <AiFillLike size={20} />
              )}
            </span>

            <span onClick={playlistHandler}>
              <PiPlaylistBold size={20} />
            </span>

            <span
              onClick={() =>
                isLogIn
                  ? dispatch(ActionCreator(WATCHLATER_ITEMS, selectedVideo))
                  : navigate("/login")
              }
            >
              {checkisWatchLaterImage ? (
                <BsStopwatchFill size={20} />
              ) : (
                <BsStopwatch size={20} />
              )}
            </span>

            <span
              onClick={() =>
                isLogIn ? setShowNoteModal(true) : navigate("/login")
              }
            >
              <PiNotepadBold size={20} />
            </span>
          </div>
        </div>
        <hr />
        <div className="comment-space">
          <h3 className="comment-space-text">Comment Section</h3>

          {selectedVideo?.comments?.map((text, textIndex) => {
            return (
              <div key={textIndex}>
                <div>
                  <img
                    loading="lazy"
                    style={{ borderRadius: "2rem" }}
                    src="/user.png"
                    alt={selectedVideo?.title}
                  />
                  <p>{text}</p>
                </div>
                <div className="bin-edit">
                  <button
                    onClick={() => {
                      toast.error("Comment Deleted");
                      dispatch(
                        ActionCreator(DELETE_NOTE, { selectedVideo, textIndex })
                      );
                    }}
                  >
                    <ImBin size={20} />
                  </button>
                  <button>
                    <GrEdit
                      size={20}
                      onClick={() => editComment(text, textIndex)}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleVideoDetail;
