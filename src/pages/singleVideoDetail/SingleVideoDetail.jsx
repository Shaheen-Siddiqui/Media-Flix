import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";
import { PiPlaylistBold, PiNotepadBold } from "react-icons/pi";

import "./SingleVideoDetail.css";
import NoteModal from "../../components/modalBox/NoteModal";
import PlaylistModal from "../../components/modalBox/PlaylistModal";
import {
  isWatchLaterImage,
  isLiked,
} from "../../store/redux-operation/video/video-action";
import { ActionCreator } from "../../utils/action-creator";
import { videoConstant } from "../../store/redux-operation/video/video-constants";

const SingleVideoDetail = () => {
  const { videoID } = useParams();
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showPlayListModal, setShowPlayListModal] = useState(false);
  const { ycVideoCase, selectedCategory, watchlaterCase } = useSelector(
    (state) => state.video
  );

  const selectedVideo = ycVideoCase.find((item) => item?._id == videoID);
  const checkisWatchLaterImage = isWatchLaterImage(
    selectedVideo?._id,
    watchlaterCase
  );

  const checkIsLiked = isLiked(ycVideoCase, selectedVideo?._id);
  const dispatch = useDispatch();
  const { WATCHLATER_ITEMS, LIKED_VIDEO } = videoConstant;

  return (
    <>
      {showPlayListModal && (
        <PlaylistModal setShowPlayListModal={setShowPlayListModal} />
      )}
      {showNoteModal && <NoteModal setShowNoteModal={setShowNoteModal} />}

      <div className="detail-case">
        <center>
          <img
            className="single-video-img"
            height="400"
            title={selectedVideo?.title}
            src={selectedVideo?.videoThumbnail}
          />
        </center>

        <h2>{selectedVideo?.title}</h2>
        <div className="icon-view-case">
          <h3>{selectedVideo?.views} views.</h3>
          <div>
            <span
              onClick={() =>
                dispatch(ActionCreator(LIKED_VIDEO, selectedVideo?._id))
              }
            >
              {checkIsLiked.liked ? (
                <AiOutlineLike size={20} />
              ) : (
                <AiFillLike size={20} />
              )}
            </span>

            <span>
              <PiPlaylistBold
                size={20}
                onClick={() => setShowPlayListModal(true)}
              />
            </span>

            <span
              onClick={() =>
                dispatch(ActionCreator(WATCHLATER_ITEMS, selectedVideo))
              }
            >
              {checkisWatchLaterImage ? (
                <BsStopwatchFill size={20} />
              ) : (
                <BsStopwatch size={20} />
              )}
            </span>

            <span onClick={() => setShowNoteModal(true)}>
              <PiNotepadBold size={20} />
            </span>
          </div>
        </div>
        <hr />
        <div className="comment-space">
          <h3 className="comment-space-text">Comment Section</h3>
          <div>
            <img src={selectedVideo?.thumbnail} alt={selectedVideo?.title} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              ipsum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideoDetail;
