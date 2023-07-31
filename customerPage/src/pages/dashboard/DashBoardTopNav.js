import React from "react";
import { Link } from "react-router-dom";
import "./dashboardtopnav.css";
import logoChildrenImg from "../../assets/img/logochildren.png";
/**
 * @author
 * @function DashBoardTopNav
 **/

export const DashBoardTopNav = (props) => {
  return (
    <React.Fragment>
      <div
        className={
          localStorage.getItem("mykey") === "2"
            ? "header__account-login hide dashboard flex-align"
            : "header__account-login dashboard flex-align"
        }
      >
        {/* <div className="header__question">
          <i class="far fa-question-circle"></i>
        </div> */}

        <div className="header__user-login flex-align">
          <Link
            to="/login"
            onClick={() => {
              localStorage.setItem("loginto", "dashboard");
            }}
            className="btn-auth login"
          >
            Đăng nhập
          </Link>
          <Link
            onClick={() => {
              localStorage.setItem("loginto", "dashboard");
            }}
            to="/signup"
            className="btn-auth signup"
          >
            Đăng ký
          </Link>
        </div>
      </div>
      <div
        className={
          localStorage.getItem("mykey") === "2"
            ? "header__account-login  dashboard flex-align"
            : "header__account-login hide dashboard flex-align"
        }
      >
        <div className="header__user-login flex-align">
          <div className="orgnization">
            <div className="image">
              <img src={logoChildrenImg} alt="" />
            </div>
            <div className="name-location">
              <div className="name">Hội Trẻ Em Việt Nam</div>
              <div className="location">Đà Nẵng</div>
            </div>
            <i
              class="fas fa-sign-out-alt"
              onClick={() => {
                localStorage.removeItem("mykey");
                window.location.reload();
              }}
            ></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
