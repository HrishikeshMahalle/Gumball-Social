import React from "react";
import "./post.css";
import image from "./img.png";
export const Post = () => {
  return (
    <div className="Post-cont">
      <div className="upload-btn">+</div>
      <div className="show-post">
        <div className="show-post-img">
          <img src={image} alt="post-user" />
        </div>
        <div className="show-post-comments">comments</div>
        <div className="show-post-interactions">
          <span>🥰</span>
          <span>😂</span>
          <span>😎</span>
          <span>➕</span>
        </div>
      </div>
    </div>
  );
};
