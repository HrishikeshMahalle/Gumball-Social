import React from "react";
import { Postbox } from "../../Utilities/Post-Box/postbox";
import { Stories } from "../../Utilities/Stories/stories";
import "./home.css";

export const Home = () => {
  return (
    <div className="home-cont">
      <Stories />
      <Postbox/>
    </div>
  );
};
