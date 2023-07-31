import React from "react";
import { Header } from "../../components/header/Header";
import "./profile.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProfileTab } from "./ProfileTab";
/**
 * @author
 * @function Profile
 **/

export const Profile = (props) => {
  // toast
  // toast
  const notifyx = () => {
    if (true) {
      toast.success("🎄 Đã tải bản sao kê về máy", {
        position: "top-right",
        autoClose: 5222,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        width: "500px",
      });
    } else {
      toast.error("Vui lòng chọn tháng và năm!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="profile-page">
        <div className="profile-tab">
          <ProfileTab tab="account" />
        </div>
        <div className="content">
          {" "}
          <h1 className="title">Cài đặt tài khoản</h1>
          <div className="account-info">
            <div className="session-input">
              <div className="title">Họ Tên</div>
              <input type="text" defaultValue="Lâm Hồng" />
            </div>
            <div className="session-input">
              <div className="title">Email</div>
              <input type="text" defaultValue="vanhongvn@gmail.com" />
            </div>
            <div className="session-input">
              <div className="title">Số điện thoại</div>
              <input type="text" defaultValue="0396432444" />
            </div>
            <div className="session-input">
              <div className="title">Nơi ở</div>
              <input type="text" defaultValue="Quảng Nam" />
            </div>
            <div className="session-input">
              <div className="title">Mô tả bản thân</div>
              <textarea type="text" placeholder="mô tả ..." defaultValue="" />
            </div>

            <div className="button-wrap">
              <button onClick={notifyx} className="btn btn-update">
                Cập nhật
              </button>
              <button onClick={notifyx} className="btn btn-cancle">
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
