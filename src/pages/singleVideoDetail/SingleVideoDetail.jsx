import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { PiPlaylistBold, PiNotepadBold } from "react-icons/pi";

import "./SingleVideoDetail.css";
import NoteModal from "../../components/modalBox/NoteModal";
import PlaylistModal from "../../components/modalBox/PlaylistModal";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const SingleVideoDetail = () => {
  const { videoID } = useParams();
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showPlayListModal, setShowPlayListModal] = useState(false);
  const { ycVideoCase } = useSelector((state) => state.video);

  const selectedVideo = ycVideoCase.find((item) => item?._id == videoID);

  // const {
  //   _id,
  //   title,
  //   views,
  //   thumbnail,
  //   src,
  //   category,
  //   creator,
  //   videoThumbnail,
  // } = selectedVideo;
  return (
    <>
      {showPlayListModal && (
        <PlaylistModal setShowPlayListModal={setShowPlayListModal} />
      )}
      {showNoteModal && <NoteModal setShowNoteModal={setShowNoteModal} />}

      <div className="detail-case">
        <center>
          <img
            height="400"
            title={selectedVideo?.title}
            src={selectedVideo?.videoThumbnail}
          />
        </center>

        <h2>{selectedVideo?.title}</h2>
        <div className="icon-view-case">
          <h3>{selectedVideo?.views} views.</h3>
          <div>
            <span>
              <AiOutlineLike size={20} />
              {/* <AiFillLike size={20}/> */}
            </span>

            <span>
              <PiPlaylistBold
                size={20}
                onClick={() => setShowPlayListModal(true)}
              />
            </span>
            <span>
              <BsStopwatch size={20} />
              {/* <BsStopwatchFill size={40}/> */}
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
            <img src={selectedVideo?.thumbnail} alt="" />
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
