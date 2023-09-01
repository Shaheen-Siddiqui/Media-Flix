//External Imports
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Internal Imports

import SingleVideoDetail from "../singleVideoDetail/SingleVideoDetail";
import Category from "../../components/category/Category";
import { onAuthStateChanged } from "firebase/auth";
import { authdb } from "../../store/redux-operation/auth/auth-action";
import { ActionCreator } from "../../utils/action-creator";

const Home = () => {
  const { isLogIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(isLogIn);
  useEffect(() => {
    onAuthStateChanged(authdb, (user) => {
      if (user) {
        dispatch(ActionCreator("USER_LOGIN", user));
      }
    });
  }, []);
  return (
    <div>
      <Category />
      {/* <SingleVideoDetail/> */}
    </div>
  );
};

export default Home;
