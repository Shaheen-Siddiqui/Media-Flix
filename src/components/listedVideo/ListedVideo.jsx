import React from "react";
import { ImBin } from "react-icons/im";
import { AiTwotoneFolderOpen } from "react-icons/ai";

import "./ListedVideo.css";
import "../category/Category.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../utils/action-creator";
import { playlistConstant } from "../../store/redux-operation/playlist/playlist-constant";

const ListedVideo = ({ item }) => {
  const { listName, listCase, _id } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { playlistCase } = useSelector((state) => state.playlist);
  const {DELETE_PLAYLIST_CASE}=playlistConstant

  return (
    <figure className="figure-img video-container" id="play-case">
      <div className="disable-span">
        <img
          onClick={() => navigate(`/playlist/${_id}`)}
          id="play-img"
          src="https://img.freepik.com/premium-vector/favourite-playlist-icon-songs-music-player-playlist-logo-vector-ui-icon-neumorphic-ui-ux-white-user-interface-web-button_399089-2894.jpg?w=2000"
        />

        <h2>
          <AiTwotoneFolderOpen size={30} />
        </h2>

        <span>
          <h2>{listCase?.length}</h2>
        </span>
      </div>
      <figcaption className="name-bin-case">
        <h3>{listName} </h3>
        <span
          onClick={() => dispatch(ActionCreator(DELETE_PLAYLIST_CASE, _id))}
        >
          <ImBin size={20} />
        </span>
      </figcaption>
      <span className="side-panel"></span>
    </figure>
  );
};

export default ListedVideo;
