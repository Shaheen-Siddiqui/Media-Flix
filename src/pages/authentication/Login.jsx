import React, { useEffect, useState } from "react";
import { FaRegMehRollingEyes } from "react-icons/fa";
import { PiSmileyXEyesBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import {
  emailPasswordLogin,
  authdb,
} from "../../store/redux-operation/auth/auth-action";
import "./Authentication.css";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const { isLogIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password } = loginCredentials;
  const navigate = useNavigate();


  const loginHandler = (event) => {
    emailPasswordLogin(email, password, navigate, dispatch);
    event.preventDefault();
    event.stopPropagation();
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setLoginCredentials((loginCredentials) => ({
      ...loginCredentials,
      [name]: value,
    }));
  };

  const guestCredentials = () => {
    setLoginCredentials((loginCredentials) => ({
      ...loginCredentials,
      email: "ShaheenCoder1@gmail.com",
      password: "Coder@123",
    }));
  };

  return (
    <form onSubmit={loginHandler}>
      <div className="auth-main-case">
        <div className="logo-text">
          <img
          loading="lazy"
            className="media-flix-authlogo"
            src="https://play-lh.googleusercontent.com/BZlQ2AFMNgtN1Jz4KjuEBPEcEDCB3Tv8YzyNeSqK51jYIsf_NQyC38y4_yoBnaDHE2G_"
            alt="media-flix-logo"
          />
          <h2>Log In</h2>
        </div>

        <div className="input-box-case">
          <input
            onChange={inputHandler}
            name="email"
            value={loginCredentials?.email}
            className="input-box"
            type="text"
            placeholder="Email"
          />

          <div className="password-case">
            <input
              onChange={inputHandler}
              name="password"
              value={loginCredentials?.password}
              type={`${showPassword ? `text` : `password`}`}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FaRegMehRollingEyes size={20} />
              ) : (
                <PiSmileyXEyesBold size={20} />
              )}
            </span>
          </div>

          <button
            className="input-box submit-btn"
            type="button"
            onClick={guestCredentials}
          >
            Use Guest Credentials
          </button>

          <button className="input-box submit-btn">Log In</button>
          <h3 className="center-text">
            Not a member
            <strong onClick={() => navigate("/signup")}> Signup now</strong>
          </h3>
        </div>
      </div>
    </form>
  );
};

export { Login as default };
