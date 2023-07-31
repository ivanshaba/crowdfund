import React from "react";
import "./auth.css";
import loginGif from "../../assets/img/component/loginbackground.gif";
import { Link } from "react-router-dom";
import appleImg from "../../assets/img/auth/apple.png";
import facebookImg from "../../assets/img/auth/facebook.png";
import googleImg from "../../assets/img/auth/google.png";
/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
  const handleLogin = () => {
    localStorage.setItem("mykey", "2");
  };
  return (
    <div className="login">
      <div className="login__above">
        <div className="login__gif">
          <img src={loginGif} alt="" />
        </div>
      </div>
      <div className="login__bottom">
        <div className="content__wrapper">
          <div className="content__body">
            <h3>Chào mừng trở lại</h3>
            <div className="auth-form">
              <input
                type="text"
                placeholder="Nhập email"
                className="large-custom-input"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="large-custom-input"
              />
              <div className="option-login">
                <div className="remember-me__wrapper">
                  <span>
                    {" "}
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="custom-checkbox-ciclex"
                    />
                  </span>
                  <span>Ghi nhớ tôi</span>
                </div>
                <Link to="/forgetpassword">Quên mật khẩu?</Link>
              </div>

              <Link
                to={
                  localStorage.getItem("loginto") === "dashboard"
                    ? "/dashboard"
                    : "/"
                }
                onClick={handleLogin}
              >
                Đăng nhập
              </Link>
              <div className="social-login">
                <Link
                  to={
                    localStorage.getItem("loginto") === "dashboard"
                      ? "/dashboard"
                      : "/"
                  }
                  className="session-method"
                >
                  <img src={googleImg} alt="" />
                  <span>Google</span>
                </Link>
                <Link
                  to={
                    localStorage.getItem("loginto") === "dashboard"
                      ? "/dashboard"
                      : "/"
                  }
                  className="session-method"
                >
                  <img className="fb" src={facebookImg} alt="" />
                  <span>Facebook</span>
                </Link>
                {/* <Link to="/auth" className="session-method">
                  <img src={appleImg} alt="" />
                </Link> */}
              </div>

              <div className="change-auth">
                <span>Chưa có tài khoản? </span>
                <Link to="/signup">Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
