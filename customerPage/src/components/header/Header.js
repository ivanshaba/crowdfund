import React, { useRef } from "react";
import logoImg from "../../assets/img/logo/charity icon.png";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import avatarImg from "../../assets/img/avatar.png";
import chinhphuImg from "../../assets/img/chinhphu.png";

import userMenu from "../../assets/JsonData/user_menus.json";
/**
 * @author
 * @function Header
 **/
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useClickOutSide from "../../hooks/useClickOutSide";

export const Header = (props) => {
  const ref = useRef(null);
  var lastScrollTop = 0;
  // window.addEventListener("scroll", function () {
  //   if (ref.current != null) {
  //     var scrollTop =
  //       window.pageXOffset || this.document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //       ref.current.style.top = "-100px";
  //     } else {
  //       ref.current.style.top = "0";
  //     }
  //     lastScrollTop = scrollTop;
  //   }
  // });

  const handleExpand = (e) => {
    setShow(true);
  };

  const { nodeRef, show, setShow } = useClickOutSide();

  const { pathname } = useLocation();
  console.log("🚀 ~ file: Header.js ~ line 42 ~ Header ~ pathname", pathname);

  return (
    <div>
      <div ref={ref} className="header__wrapper ">
        {/* <img
          className="chinhphu"
          title="Tổ chức được hỗ trợ bởi chính phủ"
          src={chinhphuImg}
          alt=""
        />{" "} */}
        <Link
          to="/"
          className={
            props.type === "analysic" || props.type === "createpost"
              ? "header__logo hide"
              : "header__logo"
          }
        >
          <img src={logoImg} alt="" />
          <span>Charity Support</span>
        </Link>
        <div
          className={
            props.type === "analysic" || props.type === "createpost"
              ? "header__navbar hide"
              : "header__navbar"
          }
        >
          <ul>
            <li className={props.link === "list" ? "active" : ""}>
              <Link to="/listpost/all">Ủng Hộ</Link>
            </li>
            <li className={props.link === "volunteer" ? "active" : ""}>
              <Link to="/volunteer"> Tình nguyện viên</Link>
            </li>
            <li className={props.link === "faq" ? "active" : ""}>
              <Link to="/faq">Trợ giúp</Link>
            </li>
            <li className={props.link === "aboutus" ? "active" : ""}>
              <Link to="/dashboard">Thống kê</Link>
            </li>
          </ul>
        </div>
        <div
          className={
            props.type === "analysic" || props.type === "createpost"
              ? "header__navbar"
              : "header__navbar hide"
          }
        >
          <h1 className="title">
            {props.type === "analysic"
              ? "báo cáo thông tin"
              : "Tạo chương trình thiện nguyện"}
          </h1>
        </div>
        <div
          className={
            localStorage.getItem("mykey") === "2"
              ? "header__account flex-align"
              : "header__account hide flex-align"
          }
        >
          {/* <div className="header__question">
            <i class="far fa-question-circle"></i>
          </div> */}
          <div className="header__notify">
            <i class="fas fa-bell"></i>
            <div className="notify-badge"></div>
          </div>

          <div className="header__user flex-align">
            <div className="avatar">
              <img src={avatarImg} alt="avatar" />
            </div>
            <div className="username">Lam Hong</div>
            <div className="toggle-down">
              <i class="fas fa-sort-down"></i>
            </div>
            <div className="drop-down">
              {userMenu.map((item, index) => (
                <Link to={item.link} key={index}>
                  <div
                    className="notification-item"
                    onClick={
                      item.link === "/"
                        ? () => {
                            localStorage.removeItem("mykey");
                            window.location.reload();
                          }
                        : ""
                    }
                  >
                    <i className={item.icon}></i>
                    <span>{item.content}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="expand-icon" onClick={handleExpand}>
          <i class="fa-solid fa-bars" ref={nodeRef}></i>
          {show && (
            <div className="modal-expand">
              <div className="overlay"></div>
              <div
                className="modal-expand__content"
                onClick={(e) => e.stopPropagation()}
              >
                {localStorage.getItem("mykey") !== "2" ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => {
                        localStorage.setItem("loginto", "home");
                      }}
                      className="btn-auth login"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to="signup"
                      onClick={() => {
                        localStorage.setItem("loginto", "home");
                      }}
                      className="btn-auth signup"
                    >
                      Đăng ký
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => {
                      localStorage.removeItem("mykey");
                    }}
                    className="btn-auth login"
                  >
                    Đăng xuất
                  </Link>
                )}

                <ul className="list-nav">
                  <li className={pathname === "/" ? "active" : ""}>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className={pathname === "/listpost/all" ? "active" : ""}>
                    <Link to="/listpost/all">Ủng Hộ</Link>
                  </li>
                  <li className={props.link === "volunteer" ? "active" : ""}>
                    <Link to="/volunteer"> Tình nguyện viên</Link>
                  </li>
                  <li className={props.link === "faq" ? "active" : ""}>
                    <Link to="/faq">Trợ giúp</Link>
                  </li>
                  <li className={props.link === "dashboard" ? "active" : ""}>
                    <Link to="/dashboard">Thống kê</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div
          className={
            localStorage.getItem("mykey") !== "2"
              ? "header__account-login  flex-align"
              : "header__account-login hide  flex-align"
          }
        >
          <div className="header__question">
            <i class="far fa-question-circle"></i>
          </div>

          <div className="header__user-login flex-align">
            <Link
              to="/login"
              onClick={() => {
                localStorage.setItem("loginto", "home");
              }}
              className="btn-auth login"
            >
              Đăng nhập
            </Link>
            <Link
              to="signup"
              onClick={() => {
                localStorage.setItem("loginto", "home");
              }}
              className="btn-auth signup"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
