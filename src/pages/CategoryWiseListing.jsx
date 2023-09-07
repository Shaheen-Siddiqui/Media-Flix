import React from "react";
import { Video } from "../components/video/Video";
import { useSelector } from "react-redux";
import { categoryWiseFilter } from "../store/redux-operation/video/video-action";

const CategoryWiseListing = () => {
  const { ycVideoCase, selectedCategory } = useSelector((state) => state.video);

  const categoryFilter = categoryWiseFilter(ycVideoCase, selectedCategory);
  return (
    <>
      <center>
        <b>
          <u style={{ color: "white" }}>
            <h1>{selectedCategory.category}</h1>
          </u>
        </b>
      </center>
      <div>
        {categoryFilter.map((item) => {
          return <Video item={item} key={item._id} ExploreCaseHeight />;
        })}
      </div>
    </>
  );
};

export default CategoryWiseListing;
