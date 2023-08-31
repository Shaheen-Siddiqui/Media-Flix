import React from "react";

import "./PlayList.css";
import ListedVideo from "../../components/listedVideo/ListedVideo";
import EmptyCaseMessages from "../../components/emptyCaseMessages/EmptyCaseMessages";


const PlayList = () => {
  return (
    <div>
      <div className="top-nav">
        <h2>MY Playlist ()</h2>
        <button>Create New Playlist</button>

      </div>
      <ListedVideo />
      {/* <EmptyCaseMessages message="Created any Playlist" buttonMessage="Start Creating Now"/> */}

    </div>
  );
};

export default PlayList;
