import React from "react";
import "./auth.css";
import loginGif from "../../assets/img/component/loginbackground.gif";
import { Link } from "react-router-dom";
import appleImg from "../../assets/img/auth/apple.png";
import facebookImg from "../../assets/img/auth/facebook.png";
import googleImg from "../../assets/img/auth/google.png";
/**
 * @author
 * @function SignUp
 **/

export const SignUp = (props) => {
  const handleLogin = () => {
    localStorage.setItem("mykey", "2");
  };
  return (
    <div>
      <div className="login">
        <div className="login__above">
          <div className="login__gif">
            <img src={loginGif} alt="" />
          </div>
        </div>
        <div className="login__bottom">
          <div className="content__wrapper">
            <div className="content__body signup">
              <h3>Đăng kí thành viên</h3>
              <div className="auth-form signup">
                <div className="signup">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Họ Tên"
                      className="large-custom-input"
                    />
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      className="large-custom-input"
                    />
                  </div>
                  <div className="col">
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
                  </div>
                </div>
                <Link
                  to={
                    localStorage.getItem("loginto") === "dashboard"
                      ? "/dashboard"
                      : "/"
                  }
                  onClick={handleLogin}
                >
                  Đăng kí
                </Link>
                <div className="social-login">
                  <Link
                    to={
                      localStorage.getItem("loginto") === "dashboard"
                        ? "/dashboard"
                        : "/"
                    }
                    onClick={handleLogin}
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
                    onClick={handleLogin}
                    className="session-method"
                  >
                    <img className="fb" src={facebookImg} alt="" />
                    <span>Facebook</span>
                  </Link>
                  {/* <Link to="/au th" className="session-method">
                    <img src={appleImg} alt="" />
                  </Link> */}
                </div>

                <div className="change-auth">
                  <span>Đã có tài khoản? </span>
                  <Link to="/login">Đăng nhập</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
