import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { setAuthData } from "../../../Utilities/AuthUtil/authutil";
import { useAuth } from "../../../Context/AuthContext/authcontext";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [goto, setGoto] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const { dispatch } = useAuth();
  const { username, firstname, lastname, password, confirmPassword } =
    credentials;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const sendReq = async (data) => {
    console.log("Iam the data", data);

    try {
      const res = await axios.post("/api/auth/signup", data);
      console.log("----hehe Response----", res);
      setAuthData(res.data.encodedToken);
      return res;
    } catch (err) {
      if (err.response.status === 422) {
        console.log("User Already Exist");
      }
    }
  };

  const handleSubmit = (e) => {
    console.log("Im clicked");
    e.preventDefault();
    if (password === confirmPassword) {
      sendReq({
        username,
        firstname,
        lastname,
        password,
      }).then((res) => {
        dispatch({
          type: "SIGNED_UP",
          payload: res === undefined ? false : true,
        });
        setGoto(res === undefined ? false : true);
      });
    } else {
      console.log("Wrong Password");
      setCredentials({ ...credentials, password: "", confirmPassword: "" });
    }
  };

  if (goto) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="signup-comp">
        <div className="auth">
          <div className="auth-container">
            <form onSubmit={handleSubmit}>
              <h2>Welcome To GumBall Social🎈</h2>
              <div className="username">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Enter username..."
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="email">
                <label className="label" htmlFor="email">
                  FirstName
                </label>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Enter Firstname..."
                  name="firstname"
                  value={firstname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="email">
                <label className="label" htmlFor="email">
                  LastName
                </label>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Enter Lastname..."
                  name="lastname"
                  value={lastname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="password">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  className="inputbox"
                  type="password"
                  placeholder="Enter password..."
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="confirm-password">
                <label className="label" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  className="inputbox"
                  type="password"
                  placeholder="Enter password again..."
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <button type="submit" className="register-button">
                Register
              </button>
              <div className="already-text">
                <span>Already have an account,</span>
                <Link to="/login">login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
