import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { setAuthData } from "../../../Utilities/AuthUtil/authutil";
import { useAuth } from "../../../Context/AuthContext/authcontext";
import "./login.css";

export const Login = () => {
  const { dispatch } = useAuth();
  const [gotu, setGoto] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const sendReq = async (data) => {
    try {
      const res = await axios.post("/api/auth/login", data);
      console.log(res);
      setAuthData(res.data.encodedToken);
      return res.data.encodedToken;
    } catch (err) {
      if (err.response.status === 404) {
        console.log("NOt working");
      }
      if (err.response.status === 401) {
        console.log("NOt working");
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendReq({
      username,
      password,
    }).then((res) => {
      dispatch({
        type: "LOGGED_IN",
        payload: res === undefined ? null : res,
      });
      setGoto(res === undefined ? false : true);
      console.log("logged in successfully", gotu, res === undefined);
    });
  };

  if (gotu) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-comp">
      <div className="auth">
        <div className="auth-container">
          <form onSubmit={(e) => submitHandler(e)}>
            <h3>Login to Gumball Social🎈</h3>
            <div className="email">
              <label className="label" htmlFor="email">
                UserName
              </label>
              <input
                className="inputbox"
                type="text"
                placeholder="Add Your mail"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="password">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="inputbox"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <button className="btn-container" type="submit">
                  Submit
                </button>
                <button className="btn-container">Login with dummy user</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
