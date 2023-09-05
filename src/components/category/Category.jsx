import React from "react";
import "./Category.css";
import { useSelector } from "react-redux";

const Category = ({item}) => {
  const {_id, thumbnail, category}=item
  return (
    <figure className="figure-img">
      <img
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
