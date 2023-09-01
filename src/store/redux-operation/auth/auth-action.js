import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//Internal Imports
import { app } from "../../../utils/firebase-utils";
//*-----------------------------------------------*//

const db = getDatabase(app);
export const authdb = getAuth(app);

export const emailPasswordSignup = async (
  email,
  password,
  confirmpassword,
  
  navigate
) => {
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters");
  } else if (password !== confirmpassword) {
    toast.error("password do not matched");
  } else {
    try {
      await createUserWithEmailAndPassword(
        authdb,
        email,
        password,
        
      );
      toast.success(
        "Congratulations! Your account has been successfully created."
      );
      navigate("/");
    } catch (error) {
      console.log(error.code);
      toast.error("failed! email-already-in-use >_<");
    }
  }
};

export const emailPasswordLogin = async (
  email,
  password,
  isLogIn,
  navigate
) => {
  try {
    await signInWithEmailAndPassword(authdb, email, password);
    toast.success(`Welcome Back ${loggedIn?.displayName}`);
    navigate("/");
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
