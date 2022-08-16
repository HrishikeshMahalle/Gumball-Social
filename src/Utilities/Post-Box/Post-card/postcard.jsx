import React from "react";
import "./postcard.css";
import image from "./image.jpg";
import { HiOutlineHome } from "react-icons/hi";
export const Postcard = () => {
  return (
    <div className="postcard-cont">
      <div className="postcard-img">
        <img src={image} alt="postimage" />
      </div>
      <div className="postcard-det">
        <div className="post-caption-head">
          <p>War over God feels</p>
        </div>
        <div className="post-caption-tags">
          <span>#goodgame</span>
          <span>#goodgame</span>
          <span>#goodgame</span>
          <span>#goodgame</span>
          <span>#goodgame</span>
          <span>#goodgame</span>
        </div>
        <div className="post-caption-user">
          <img src={image} alt="" />
          <div className="post-caption-user-name">
            <span>Hrishikesh Mahalle</span>
          </div>
        </div>
        <div className="post-caption-act">
          <div className="post-caption-icons">
            <HiOutlineHome />
          </div>
          <div className="post-caption-icons">
            <HiOutlineHome />
          </div>
          <div className="post-caption-icons">
            <HiOutlineHome />
          </div>
        </div>
      </div>
    </div>
  );
};
