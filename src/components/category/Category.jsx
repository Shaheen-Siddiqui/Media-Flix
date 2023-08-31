import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <figure className="figure-img">
      <img
        className="category-url"
        src="https://media.gettyimages.com/id/1128396650/vector/origami-bird-design.jpg?s=612x612&w=gi&k=20&c=nfXh8wIZP3XX43eqQvjsTHzfb20WXYi7oCfLEpWfW9o="
        alt="Description of the image"
      />
      <figcaption>
        <h2>Origami</h2>
      </figcaption>
    </figure>
  );
};

export default Category;
