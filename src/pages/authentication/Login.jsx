import React, { useState } from "react";
import { FaRegMehRollingEyes } from "react-icons/fa";
import { PiSmileyXEyesBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import "./Authentication.css"

 const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="auth-main-case">
      <div className="logo-text">
        <img
          className="media-flix-authlogo"
          src="https://play-lh.googleusercontent.com/BZlQ2AFMNgtN1Jz4KjuEBPEcEDCB3Tv8YzyNeSqK51jYIsf_NQyC38y4_yoBnaDHE2G_"
          alt="media-flix-logo"
        />
        <h2>Log In</h2>
      </div>

      <div className="input-box-case">
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

        <button className="input-box submit-btn">Use Guest Credentials</button>

        <button className="input-box submit-btn">Log In</button>
        <h3 className="center-text">
          Not a member
          <strong onClick={() => navigate("/signup")}> Signup now</strong>
        </h3>
      </div>
    </div>
  );
};

export {Login as default}