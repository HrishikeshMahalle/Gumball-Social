import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="Navbar-cont">
      <div className="Navbar-icon">
        <HiOutlineHome />
      </div>
      <div className="Navbar-icon">
        <HiOutlineHome />
      </div>
      <div className="Navbar-icon">
        <HiOutlineHome />
      </div>
      <div className="Navbar-icon">
        <HiOutlineHome />
      </div>
      <div className="Navbar-icon">
        <HiOutlineHome />
      </div>
      <div className="Navbar-icon">
        <AiOutlineLogin />
      </div>
    </nav>
  );
};
