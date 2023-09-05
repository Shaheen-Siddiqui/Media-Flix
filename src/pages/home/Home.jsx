//External Imports
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Internal Imports

import SingleVideoDetail from "../singleVideoDetail/SingleVideoDetail";
import Category from "../../components/category/Category";

const Home = () => {
  const { ycCategoryCase } = useSelector((state) => state.video);

  return (
    <div>
      {ycCategoryCase.map((item, index) => {
        return <Category key={index} item={item} />;
      })}

      {/* <SingleVideoDetail/> */}
    </div>
  );
};

export default Home;
