import React from "react";
import { Link } from "react-router-dom";
import "./dashboardtab.css";

/**
 * @author
 * @function DashBoardTab
 **/

export const DashBoardTab = (props) => {
  return (
    <div className="dashboardtab__wrapper">
      <div className="dashboardtab">
        <Link to="/">
          {" "}
          <div className="logo-name">Charity Support</div>
        </Link>
        <div className="tab-list">
          <Link to="/dashboard">
            <div
              className={
                props.link === "dashboard" ? "tab-item active" : "tab-item"
              }
            >
              <i class="bx bxs-dashboard"></i>
              Tổng quan
            </div>
          </Link>

          <Link to="/dashboard/donator">
            <div
              className={props.link === "user" ? "tab-item active" : "tab-item"}
            >
              <i class="fas fa-user-alt"></i>
              Người đóng góp
            </div>
          </Link>
          <Link to="/dashboard/chuongtrinh">
            <div
              className={
                props.link === "chuongtrinh" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fab fa-accessible-icon"></i>
              Chương trình
            </div>
          </Link>

          <Link to="/dashboard/monthly">
            <div
              className={
                props.link === "monthly" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-hand-holding-medical"></i>
              Hàng tháng
            </div>
          </Link>

          <Link to="/dashboard/volunteer">
            <div
              className={
                props.link === "volunteer" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-people-carry"></i>
              Tình nguyện viên
            </div>
          </Link>
        </div>
        <div
          className={
            localStorage.getItem("mykey") === "2"
              ? "tab-list admin"
              : "tab-list hide admin"
          }
        >
          <Link to="/dashboard/checkuser">
            <div
              className={
                props.link === "checkuser" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-users"></i>
              Duyệt <span className="admin">admin</span>
            </div>
          </Link>

          <Link to="/dashboard/postadmin">
            <div
              className={
                props.link === "postadmin" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-donate"></i>
              Chương trình<span className="admin">admin</span>
            </div>
          </Link>

          <Link to="/createpost">
            <div
              className={
                props.link === "postadminx" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-plus"></i>
              Tạo mới <span className="admin">admin</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="btn-return-homex">
        <Link to="/" className="btn-return-home">
          {" "}
          <i class="bx bx-home-heart"></i>Về trang chủ
        </Link>
      </div>
    </div>
  );
};
