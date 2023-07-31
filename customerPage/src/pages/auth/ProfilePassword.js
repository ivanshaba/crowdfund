import React from "react";
import { Header } from "../../components/header/Header";
import "./profile.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProfileTab } from "./ProfileTab";
/**
 * @author
 * @function ProfilePassword
 **/

export const ProfilePassword = (props) => {
  // toast
  // toast
  const notify = () => {
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
          <ProfileTab tab="password" />
        </div>
        <div className="content password">
          {" "}
          <h1 className="title">Đặt lại mật khẩu</h1>
          <div className="account-info">
            <div className="session-input">
              <div className="title">Mật khẩu cũ</div>
              <input type="password" />
            </div>
            <div className="session-input">
              <div className="title">Mập khẩu mới</div>
              <input type="password" />
            </div>
            <div className="session-input">
              <div className="title">Nhập lại mật khẩu mới</div>
              <input type="password" />
            </div>
            <div className="button-wrap">
              <button onClick={notify} className="btn btn-update">
                Cập nhật
              </button>
              <button onClick={notify} className="btn btn-cancle">
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
