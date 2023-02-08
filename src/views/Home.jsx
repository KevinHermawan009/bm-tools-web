import React from "react";
import { Link } from "react-router-dom";
import "../styles/GlobalStyles.css";

export function Home() {
  
  return (
    <div className="content-container">
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <div className="login-container">
        <div className="login-content">
          <div className="image-container">
            <img
              className="octo-image"
              alt="logo"
              src={require("../images/icon-new-temp.png")}
            />
          </div>
          <div className="input-container">
            <div className="input-content">
              <a href=" "className="default-text">Input Username</a>
              <input className="username-input"></input>
            </div>
            <div className="input-content">
              <a href=" " className="default-text">Input Password</a>
              <input className="username-input"></input>
            </div>
          </div>
          <div>
            <button id="button-login" className="button-login">
              <Link to={"/Sidebar/Dashboard"}>
              <a href=" " className="button-text-access"> Login</a>
              </Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
