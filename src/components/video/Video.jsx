import React from "react";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

//Internal Import
import "./Video.css";
import "../category/Category.css";
import { ActionCreator } from "../../utils/action-creator";
import { videoConstant } from "../../store/redux-operation/video/video-constants";
import { isWatchLaterImage } from "../../store/redux-operation/video/video-action";
import { useNavigate } from "react-router";
// *****************************************************//

export const Video = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { WATCHLATER_ITEMS } = videoConstant;
  const { watchlaterCase } = useSelector((state) => state.video);

  const { item, ExploreCaseHeight } = props;
  const {
    _id,
    title,
    views,
    thumbnail,
    src,
    category,
    creator,
    videoThumbnail,
  } = item;

  const checkisWatchLaterImage = isWatchLaterImage(_id, watchlaterCase);

  return (
    <figure
      className="figure-img video-container"
      id={`${ExploreCaseHeight && "auto-height"}`}
    >
      <img
        className="category-url"
        src={videoThumbnail}
        alt={title}
        onClick={() => navigate(`/video-detail/${_id}`)}
      />

      <figcaption id={`${ExploreCaseHeight && "auto-height-caption"}`}>
        <img src={thumbnail} alt="origami" className="holder-img" />
        <span>
          <h3>{title} </h3>
          <p>
            {category} || {views}
          </p>
        </span>
      </figcaption>
      <span
        className="stop-watch"
        onClick={() => dispatch(ActionCreator(WATCHLATER_ITEMS, item))}
      >
        {checkisWatchLaterImage ? (
          <BsStopwatchFill size={30} />
        ) : (
          <BsStopwatch size={30} />
        )}
      </span>
    </figure>
  );
};

export default Video;
