import React from "react";
import { Header } from "../Header/header";
import { Friends } from "../Friends/friends";
import { Home } from "../Home/home";
import { Post } from "../Post/post";
import "./Mastercomp.css";

export const Mastercomp = () => {
  return (
    <>
      <div className="App-header">
        <Header />
      </div>
      <div className="App">
        <Friends />
        <Home />
        <Post />
      </div>
    </>
  );
};
