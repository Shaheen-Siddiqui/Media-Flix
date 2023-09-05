import React from "react";
import Video from "../components/video/Video";
import EmptyCaseMessages from "../components/emptyCaseMessages/EmptyCaseMessages";
import { useSelector } from "react-redux";

const WatchLater = () => {
  const { watchlaterCase } = useSelector((state) => state.video);
  return (
    <div>
      {watchlaterCase.map((item) => {
        return <Video key={item._id} item={item} ExploreCaseHeight/>;
      })}
      {/* <EmptyCaseMessages
        message="Marked any video into Watchlater"
        buttonMessage="Mark Now"
      /> */}
    </div>
  );
};

export default WatchLater;
