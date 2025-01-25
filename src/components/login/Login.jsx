import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Login = ({ handleLoginClose }) => {
  const [loginField,setLoginField] = useState({ "username": "", "password": "" });
  const handleOnChangeinput = (e,field)=>{
    setLoginField({...loginField, [field]: e.target.value });
    // console.log(loginField)
  }
  return (
    <div className="Login">
      <div className="loginCard">
        <div className="login_titlecard">
          <YouTubeIcon
            sx={{ fontSize: "54px", color: "red" }}
            className="login_ytImage"
          />
          <span>Login</span>
        </div>

        <div className="loginCredential">
          <div className="login_userName">
            <input
              value={loginField.username}
              onChange={(e)=>handleOnChangeinput(e, 'username')}
              className="userName_InputField"
              placeholder="Enter Username"
              type="text"
            />
          </div>
          <div className="login_userName">
            <input
              value={loginField.password}
              onChange={(e)=>handleOnChangeinput(e, 'password')}
              className="userName_InputField"
              placeholder="Enter Password"
              type="password"
            />
          </div>
        </div>
        <div className="login_btn">
          <div className="login_btn_submit">Login</div>
          <Link
            to={"/signup"}
            onClick={() => handleLoginClose()}
            className="login_btn_submit"
          >
            Signup
          </Link>
          <div onClick={() => handleLoginClose()} className="login_btn_submit">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
