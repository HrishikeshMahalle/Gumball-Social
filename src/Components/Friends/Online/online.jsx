import React from "react";
import image from './R.jpg'
import "./online.css";

export const Online = () => {
  return (
    <div className="online-comp">
      <div className="online-img">
        <img src={image} alt="" />
      </div>
      <div className="online-name">
        <span>Hrishikesh Mahalle</span>
      </div>
      <div className="online-signal-on">
      <span></span>
      </div>
      {/* <div className="online-signal-off">
        <p></p>
      </div> */}
    </div>
  );
};
