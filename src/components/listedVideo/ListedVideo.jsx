import React from "react";
import { ImBin } from "react-icons/im";
import { AiTwotoneFolderOpen } from "react-icons/ai";

import "./ListedVideo.css";
import "../category/Category.css";

const ListedVideo = () => {
  return (
    <div>
      <figure className="figure-img video-container" id="play-case">
        <div className="disable-span">
          <img src="https://img.freepik.com/premium-vector/favourite-playlist-icon-songs-music-player-playlist-logo-vector-ui-icon-neumorphic-ui-ux-white-user-interface-web-button_399089-2894.jpg?w=2000" />

          <h2>
            <AiTwotoneFolderOpen size={30} />
          </h2>
          
          <span>
            <h2>video item length</h2>
          </span>
        </div>
        <figcaption className="name-bin-case">
          <h3>PlayList Name </h3>
          <span>
            <ImBin size={20} />
          </span>
        </figcaption>
        <span className="side-panel"></span>
      </figure>
    </div>
  );
};

export default ListedVideo;
