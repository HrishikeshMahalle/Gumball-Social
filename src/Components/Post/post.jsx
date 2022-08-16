import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuthData } from "../../Utilities/AuthUtil/authutil";
import axios from "axios";
import image from "./img.png";
import "./post.css";
export const Post = () => {
  const location = useLocation();
  const userName = "Hrishi";

  const [postData, setPostData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };
  const { content } = postData;
  const authToken = getAuthData();

  const sendReq = async (data) => {
    console.log("this is data", data);
    try {
      const res = axios.post(
        "/api/posts",
        { data },
        { headers: { authorization: authToken } }
      );
      return res;
    } catch (err) {
      console.log("Error in  posting Data", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendReq({
      postData,
    }).then((res) => {
      console.log("waiting for response", res);
    });
  };

  if (location.pathname === "/post") {
    return (
      <div className="Post-cont-form">
        <form className="post-form" onSubmit={(e) => handleSubmit(e)}>
          <h4>Hi {userName}, Lets Socialise😋</h4>
          <input
            type="text"
            className="postbox"
            name="content"
            placeholder="Please Add Your Content Here"
            value={content}
            onChange={(e) => handleChange(e)}
          />
          <button className="btn-container" type="submit">
            Upload
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="Post-cont">
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
