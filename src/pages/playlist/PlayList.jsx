import React from "react";

import "./PlayList.css";
import ListedVideo from "../../components/listedVideo/ListedVideo";
import EmptyCaseMessages from "../../components/emptyCaseMessages/EmptyCaseMessages";
import { useSelector } from "react-redux";

const PlayList = () => {
  const { playlistCase } = useSelector((state) => state.playlist);
  return (
    <>
      {!playlistCase.length ? (
        <EmptyCaseMessages
          message="Created any Playlist"
          buttonMessage="Start Creating Now"
          navigateTo="/explore"
        />
      ) : (
        <>
          <div className="top-nav">
            <h2>MY Playlist ()</h2>
            <button>Create New Playlist</button>
          </div>

          <div className="explore-cards">
            {playlistCase.map((item) => {
             
              return <ListedVideo key={item._id} item={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default PlayList;
