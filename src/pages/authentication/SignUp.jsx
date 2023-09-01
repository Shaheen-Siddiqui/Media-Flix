//External Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegMehRollingEyes } from "react-icons/fa";
import { PiSmileyXEyesBold } from "react-icons/pi";

//Internals
import "./Authentication.css";
import { ActionCreator } from "../../utils/action-creator";
import {
  emailPasswordSignup,
  googleAuthentication,
} from "../../store/redux-operation/auth/auth-action";
import { authConstants } from "../../store/redux-operation/auth/auth-constants";
// *---------------------------------------------------------------------------*

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    userInputDetails,
    userInputDetails: { name, email, lastname, password, confirmpassword },
  } = useSelector((state) => state.auth);
  const { SAVE_USER_INPUT_DETAILS } = authConstants;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupHandler = (event) => {
    event.preventDefault();
    emailPasswordSignup(email, password, confirmpassword, navigate);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(ActionCreator(SAVE_USER_INPUT_DETAILS, { name, value }));
  };

  return (
    <form onSubmit={signupHandler}>
      <div className="auth-main-case">
        <div className="logo-text">
          <img
            className="media-flix-authlogo"
            src="https://play-lh.googleusercontent.com/BZlQ2AFMNgtN1Jz4KjuEBPEcEDCB3Tv8YzyNeSqK51jYIsf_NQyC38y4_yoBnaDHE2G_"
            alt="media-flix-logo"
          />
          <h2>Sign Up</h2>
        </div>

        <div className="input-box-case">
          <input
            required
            name="name"
            value={name}
            onChange={inputHandler}
            className="input-box"
            type="text"
            placeholder="Name"
          />
          <input
            required
            name="lastname"
            value={lastname}
            onChange={inputHandler}
            className="input-box"
            type="text"
            placeholder="Last Name"
          />
          <input
            required
            name="email"
            value={email}
            onChange={inputHandler}
            className="input-box"
            type="text"
            placeholder="Email"
          />

          <div className="password-case">
            <input
              required
              name="password"
              value={password}
              onChange={inputHandler}
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

          <div className="password-case">
            <input
              required
              name="confirmpassword"
              value={confirmpassword}
              onChange={inputHandler}
              type={`${showConfirmPassword ? `text` : `password`}`}
              placeholder="Confirm Password"
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? (
                <FaRegMehRollingEyes size={20} />
              ) : (
                <PiSmileyXEyesBold size={20} />
              )}
            </span>
          </div>

          <button
            className="input-box submit-btn"
            type="button"
            onClick={(e) => googleAuthentication(e)}
          >
            Sign with Google
          </button>
          <button className="input-box submit-btn">Sign Up</button>

          <h3 className="center-text" onClick={() => navigate("/login")}>
            Alreay have an account <strong>Log In here</strong>
          </h3>
        </div>
      </div>
    </form>
  );
};

export { SignUp as default };
