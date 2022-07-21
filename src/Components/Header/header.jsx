import React from "react";
import { Navbar } from "../../Utilities/Navbar/navbar";
import { Profilepic } from "../../Utilities/Profile/profilepic";
import { Searchbar } from "../../Utilities/Searchbar/searchbar";
import "./header.css";
export const Header = () => {
  return (
    <div className="Header-cont">
      <Searchbar />
      <Navbar />
      <Profilepic />
    </div>
  );
};
