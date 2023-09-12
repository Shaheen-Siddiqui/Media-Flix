//External imports
import { useSelector } from "react-redux";
import React from "react";

//Internal imports
import "./Explore.css";
import Video from "../../components/video/Video";
import { filterSearchedVideos } from "../../store/redux-operation/video/video-action";
// **----------------------------------------------------------------**


const Explore = () => {
  const { ycVideoCase, search } = useSelector((state) => state.video);
  
  const listFilterVideos = filterSearchedVideos(search, ycVideoCase);

  return (
    <div className="explore-cards">
      {listFilterVideos.map((item, index) => {
        return <Video key={index} item={item} ExploreCaseHeight />;
      })}
    </div>
  );
};

export default Explore;
