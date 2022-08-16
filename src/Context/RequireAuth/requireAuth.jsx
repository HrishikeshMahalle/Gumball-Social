import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext/authcontext";

export const RequireAuth = ({ children }) => {
  const { isUser } = useAuth();
  const location = useLocation();
  console.log("Hi there", isUser);
  if (!isUser) {
    return <Navigate link="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
