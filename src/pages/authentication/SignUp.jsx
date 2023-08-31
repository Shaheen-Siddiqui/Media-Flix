import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegMehRollingEyes } from "react-icons/fa";
import { PiSmileyXEyesBold } from "react-icons/pi";

import "./Authentication.css";

 const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  return (
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
        <input className="input-box" type="text" placeholder="Name" />
        <input className="input-box" type="text" placeholder="Last Name" />
        <input className="input-box" type="text" placeholder="Email" />

        <div className="password-case">
          <input
            type={`${showPassword ? `text` : `password`}`}
            placeholder="Password"
          />
          <span onClick={()=>setShowPassword(!showPassword)}> 
            {showPassword ? (
              <FaRegMehRollingEyes size={20} />
            ) : (
              <PiSmileyXEyesBold size={20} />
            )}
          </span>
        </div>

        <div className="password-case">
          <input
            type={`${showConfirmPassword ? `text` : `password`}`}
            placeholder="Confirm Password"
          />
          <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? (
              <FaRegMehRollingEyes size={20} />
            ) : (
              <PiSmileyXEyesBold size={20} />
            )}
          </span>
        </div>

        <button className="input-box submit-btn">Sign Up</button>
        <h3 className="center-text" onClick={() => navigate("/login")}>
          Alreay have an account <strong>Log In here</strong>
        </h3>
      </div>
    </div>
  );
};

export {SignUp as default}
