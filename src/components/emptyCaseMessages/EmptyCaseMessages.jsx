import React from "react";
import "./EmptyCaseMessages.css";
import { useNavigate } from "react-router-dom";

const EmptyCaseMessages = ({ message, buttonMessage, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <center className="message-container">
      <h1>Looks like you haven't {message} yet </h1>
      <button onClick={() => navigate(navigateTo)}>{buttonMessage}</button>
    </center>
  );
};

export default EmptyCaseMessages;
