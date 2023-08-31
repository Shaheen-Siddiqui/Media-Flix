import React from "react";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";

import "./Video.css";
import "../category/Category.css";

const Video = () => {
  return (
    <figure className="figure-img video-container">
      <img
        className="category-url"
        src="https://media.gettyimages.com/id/1128396650/vector/origami-bird-design.jpg?s=612x612&w=gi&k=20&c=nfXh8wIZP3XX43eqQvjsTHzfb20WXYi7oCfLEpWfW9o="
        alt="Description of the image"
      />
      <figcaption>
        <img
          src="https://www.thesprucecrafts.com/thmb/N1i8ehyYdPkx9xgMkwq61-kaxkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/origami-traditional-crow-00-57e4b75f3df78c690ff8a8a5.jpg"
          alt="origami"
          className="holder-img"
        />
        <span>
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing </h3>
          <p>Origami|| viewers paper craft</p>
        </span>
      </figcaption>
      <span className="stop-watch">
        <BsStopwatch size={35} />
        {/* <BsStopwatchFill size={40}/> */}
      </span>
    </figure>
  );
};

export default Video;
