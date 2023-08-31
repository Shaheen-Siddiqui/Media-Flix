import React,{useState} from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { PiPlaylistBold, PiNotepadBold } from "react-icons/pi";

import "./SingleVideoDetail.css";
import NoteModal from "../../components/ModalBox/NoteModal";
import PlaylistModal from "../../components/ModalBox/PlaylistModal";

const SingleVideoDetail = () => {
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showPlayListModal, setShowPlayListModal]=useState(false)

  return (
    <>
    {
      showPlayListModal &&
    <PlaylistModal setShowPlayListModal={setShowPlayListModal}/>
    }
      {showNoteModal && <NoteModal setShowNoteModal={setShowNoteModal} />}

      <div className="detail-case">
        <iframe
          height="460"
          title="Embedded content from Example Website"
          src="https://www.youtube.com/embed/eos4g-kRtXo?start=22"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,{" "}
        </h2>
        <div className="icon-view-case">
          <h3>120k views.</h3>
          <div>
            <span>
              <AiOutlineLike size={20} />
              {/* <AiFillLike/> */}
            </span>

            <span>
              <PiPlaylistBold size={20} onClick={()=>setShowPlayListModal(true)}/>
            </span>
            <span>
              <BsStopwatch size={20} />
              {/* <BsStopwatchFill size={40}/> */}
            </span>
            <span onClick={()=>setShowNoteModal(true)}>
              <PiNotepadBold size={20}  />
            </span>
          </div>
        </div>
        <hr />
        <div className="comment-space">
          <h3 className="comment-space-text">Comment Section</h3>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              alt=""
            />
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
