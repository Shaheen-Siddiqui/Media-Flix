//External Imports
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Internal Imports

import SingleVideoDetail from "../singleVideoDetail/SingleVideoDetail";
import Category from "../../components/category/Category";
import PageNotFound from "../../components/pageNotFound/PageNotFound";

const Home = () => {
  const { ycCategoryCase } = useSelector((state) => state.video);

  return (
    <div className="explore-cards">
      {ycCategoryCase.map((item, index) => {
        return <Category key={index} item={item} />;
      })}

      {/* <SingleVideoDetail/> */}
    </div>
    
  );
};

export default Home;
