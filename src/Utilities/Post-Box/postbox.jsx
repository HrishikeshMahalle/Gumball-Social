import React from "react";
import { Postcard } from "./Post-card/postcard";
import "./postbox.css";
export const Postbox = () => {
  return (
    <div className="postbox-cont">
      <Postcard />
      <Postcard />
      <Postcard />

    </div>
  );
};
