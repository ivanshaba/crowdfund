import React from "react";
import logoImg from "../../assets/img/logo/charity icon.png";
import "./payheader.css";
import avatarImg from "../../assets/img/avatar.png";
import donateImg from "../../assets/img/donategif.gif";
import { Link } from "react-router-dom";
/**
 * @author
 * @function PayHeader
 **/

export const PayHeader = (props) => {
  return (
    <div className="payheader">
      <div className="payheader__btn">
        <Link to={props.type === "xacnhan" ? "/paying" : "/donate"}>
          Quay lại
        </Link>
      </div>
      <div className="payheader__status-bar">
        <span className="txt-thongtin">Thông tin</span>
        <span
          className={
            props.type === "xacnhan" ? "txt-thanhtoan" : "txt-thanhtoan active"
          }
        >
          Thanh toán
        </span>
        <span
          className={
            props.type === "xacnhan" ? "txt-xacnhan active" : "txt-xacnhan "
          }
        >
          Xác nhận
        </span>
      </div>
      <div className="payheader__desc">
        <div className="image">
          <img src={donateImg} alt="donate" />
        </div>
        <span>Tiến hành ủng hộ</span>
      </div>
    </div>
  );
};
