import React from "react";
import "./friends.css";
import { Online } from "./Online/online";
export const Friends = () => {
  return( <div className="Friend-cont">
    <div className="friend-groups">
    <p className="group-title">Groups</p>
      <Online/> 
    </div>
    <div className="friend-online">
    <p className="friend-online-title">Online Friends</p>
      <Online/>
      <Online/>
      <Online/>
      <Online/>
    </div>
  </div>);
};
