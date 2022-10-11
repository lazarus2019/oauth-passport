import React from "react";
import Google from "@/img/google.png";
import Github from "@/img/github.png";
import Facebook from "@/img/facebook.png";

import "./login.scss";

function Login(props) {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  return (
    <div className="login">
      <h1 className="login-title">Choose a Login method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-btn google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="login-btn facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="login-btn github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
