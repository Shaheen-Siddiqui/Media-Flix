import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

//Internal Imports
import { app } from "../../../utils/firebase-utils";
import { authConstants } from "./auth-constants";
import { ActionCreator } from "../../../utils/action-creator";
//*-----------------------------------------------*//

const db = getDatabase(app);
export const authdb = getAuth(app);
const { CLEAR_INPUT_FIELD, USER_LOGIN } = authConstants;

export const emailPasswordSignup = async (
  email,
  password,
  confirmpassword,
  navigate,
  dispatch,
  
) => {
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters");
  } else if (password !== confirmpassword) {
    toast.error("Password does not match");
  } else {
    try {
      await createUserWithEmailAndPassword(authdb, email, password);
      toast.success(
        "Congratulations! Your account has been successfully created."
      );

      dispatch({ type: CLEAR_INPUT_FIELD });
      navigate(-2);
    } catch (error) {
      console.log(error);
      toast.error("Failed! Email is already in use >_<");
    }
  }
};

export const emailPasswordLogin = async (
  email,
  password,
  navigate,
  dispatch,
  
) => {
  try {
    await signInWithEmailAndPassword(authdb, email, password);
    dispatch(ActionCreator(USER_LOGIN, email));
    toast.success(`Welcome Back ${email}`);
    navigate(-1, );
  } catch (error) {
    toast.error(error.code);
  }
};

export const googleAuthentication = async (e) => {
  const provider = new GoogleAuthProvider();
  e.preventDefault();
  e.stopPropagation();
  try {
    await signInWithPopup(authdb, provider);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};
