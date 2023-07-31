import React from "react";
import { Header } from "../../components/header/Header";
import "./profile.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProfileTab } from "./ProfileTab";
import { Link } from "react-router-dom";
/**
 * @author
 * @function ProfileVolunteer
 **/

export const ProfileVolunteer = (props) => {
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
          <ProfileTab tab="volunteer" />
        </div>
        <div className="content">
          {" "}
          <h1 className="title">Đăng kí tình nguyện viên</h1>
          <div className="chuongtrinh">
            <img
              className="img-chuongtrinh"
              src="https://file1.dangcongsan.vn/data/0/images/2021/09/14/phammai/tinh-hinh-dich-benh.jpg?dpi=150&quality=100&w=780"
              alt=""
            />
            <div className="name-chuongtrinh">
              <p>Chương trình hỗ trợ người nghèo trong dịch Covid</p>
              <span className="desc">
                Trong điều kiện giãn cách xã hội phòng, chống Covid-19 tại Thành
                phố Hồ Chí Minh kể từ trung tuần tháng 5/2021 đến nay; trước
                những khó khăn của CBCN
              </span>
              <span className="onwer">
                {" "}
                <i class="fas fa-check-circle"></i>Hội Chống dịch Covid Nha
                Trang
              </span>
            </div>

            <div className="col3">
              <p>Đang chờ xem xét ...</p>
              <img
                src="https://www.pngarts.com/files/7/Remote-Work-PNG-Image-Transparent.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
