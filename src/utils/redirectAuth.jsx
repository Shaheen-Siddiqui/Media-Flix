import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RedirectAuth = ({ children }) => {
  const { isLogIn } = useSelector((state) => state.auth);

  if (!isLogIn) {
    return <Navigate to="/login"  />;
  } else {
    return children;
  }
};