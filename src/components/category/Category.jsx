import React from "react";
import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../utils/action-creator";
import { videoConstant } from "../../store/redux-operation/video/video-constants";
import { useNavigate } from "react-router";

const Category = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { SELECTED_CATEGORY } = videoConstant;
  const { _id, thumbnail, category } = item;
  return (
    <figure className="figure-img">
      <img
      loading="lazy"
        onClick={() => {
          dispatch(ActionCreator(SELECTED_CATEGORY, item));
          navigate(`/category/${category}`);
        }}
        className="category-url"
        src={thumbnail}
        alt={category}
      />
      <figcaption>
        <h1>{category}</h1>
      </figcaption>
    </figure>
  );
};

export default Category;
