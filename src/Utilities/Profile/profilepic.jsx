import React from "react";
import { BsBell } from "react-icons/bs";
import profilePic from "./R.jpg";
import "./profilepic.css";

export const Profilepic = () => {
  return (
    <div className="Profilepic-cont">
      <div className="notification">
        <span>
          <BsBell />
        </span>
      </div>
      <div className="profile">
        <img src={profilePic} alt="ProfilePic" />
        <div className="name">
          <span>Hrishikesh Mahalle</span>
        </div>
      </div>
    </div>
  );
};
