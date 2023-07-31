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
 * @function ProfileDonate
 **/

export const ProfileDonate = (props) => {
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
          <ProfileTab tab="donate" />
        </div>
        <div className="content">
          {" "}
          <h1 className="title">Chương trình đã đóng góp</h1>
          <div className="chuongtrinh">
            <img
              src="http://canhbuom.edu.vn/wp-content/uploads/2013/03/tre-em-mu-cang-chai-voi-nhung-nu-cuoi-toa-nang-hon-nhien.jpg"
              alt=""
            />
            <div className="name-chuongtrinh">
              <p>Ủng hộ các em nhỏ miền Tây</p>
              <span className="desc">
                Cùng chung tay hỗ trợ xây dựng tủ sách cho hơn 20 điểm trường
                thuộc vùng núi khó khăn của tỉnh Quảng Trị,
              </span>
              <span className="onwer">
                {" "}
                <i class="fas fa-check-circle"></i>Hội Trẻ Em Việt Nam
              </span>
            </div>

            <div className="col3">
              <p className="price">Số tiền: 700.000 VNĐ</p>
              <Link to="/post">Xem chi tiết chương trình</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
