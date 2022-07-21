import React from "react";
import "./storyprofile.css";
import logo from './logo.png'

export const Storyprofile = () => {
  return (
    <div className="storyprofile-cont">
        <div className="stories-item">
          <img
            src={logo}
            alt="logo"
          />
        </div>
    </div>
  );
};
