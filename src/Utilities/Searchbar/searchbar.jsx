import React from "react";
import { CgDarkMode } from "react-icons/cg";
import "./searchbar.css";
export const Searchbar = () => {
  return (
    <div className="Searchbar-cont">
      <div className="darkmode">
        <CgDarkMode />
      </div>
      <div className="searchbar-bar">
        <input
          type="text"
          placeholder="🔍 Search"
        />
      </div>
    </div>
  );
};
