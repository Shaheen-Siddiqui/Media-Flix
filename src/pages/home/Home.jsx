//External Imports
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Internal Imports

import SingleVideoDetail from "../singleVideoDetail/SingleVideoDetail";
import Category from "../../components/category/Category";

const Home = () => {

  return (
    <div>
      <Category />
      {/* <SingleVideoDetail/> */}
    </div>
  );
};

export default Home;
