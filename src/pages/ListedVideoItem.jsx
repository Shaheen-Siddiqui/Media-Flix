import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Video from "../components/video/Video";
import "./playlist/PlayList.css";

const ListedVideoItem = () => {
  const { playlistName } = useParams();
  const { playlistCase } = useSelector((state) => state.playlist);
  const navigate = useNavigate();

  const selectedPlaylist = playlistCase.find(
    (item) => item._id === playlistName
  );
  return (
    <>
    <center>

      <button onClick={() => navigate(-1)} className="navigate-back-btn">
        &larr; back
      </button>
    </center>
      <div>
        {selectedPlaylist?.listCase.map((item) => {
          return <Video key={item._id} item={item} ExploreCaseHeight />;
        })}
      </div>
    </>
  );
};

export default ListedVideoItem;
