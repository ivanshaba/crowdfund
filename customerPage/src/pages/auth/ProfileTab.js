import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/img/avatar.png";
/**
 * @author
 * @function ProfileTab
 **/

export const ProfileTab = (props) => {
  return (
    <div>
      <div className="list">
        <img src={Img} alt="" />
        <div className="user-name">Lâm Hồng</div>
        <div className="list-tab">
          <Link to="/profile">
            <div className={props.tab === "account" ? "item active" : "item"}>
              <i class="fas fa-user-alt"></i>
              Tài khoản
            </div>
          </Link>
          <Link to="/profile/password">
            <div className={props.tab === "password" ? "item active" : "item "}>
              <i class="fas fa-unlock-alt"></i>
              Mật khẩu
            </div>
          </Link>
          <Link to="/profile/donate">
            <div className={props.tab === "donate" ? "item active" : "item"}>
              <i class="fas fa-hand-holding-heart"></i>
              Đã đóng góp
            </div>
          </Link>
          <Link to="/profile/volunteer">
            <div className={props.tab === "volunteer" ? "item active" : "item"}>
              <i class="far fa-envelope"></i>
              Tình nguyện viên
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
