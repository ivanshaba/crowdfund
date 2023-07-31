import React from "react";
import { Header } from "../../components/header/Header";
import "./volunteerpage.css";

import video from "../../assets/img/video/video.mp4";
import maskImg from "../../assets/img/video/mask.jpg";

import interviewImg from "../../assets/img/process.jpg";
import { Link } from "react-router-dom";
/**
 * @author
 * @function ChuongTrinhSuccessPage
 **/

export const ChuongTrinhSuccessPage = (props) => {
  return (
    <div className="volunteer_page__wrapper">
      <Header type="createpost" />
      <div className="voluteer_page">
        <div className="volunteer__title">
          <h1>Đăng kí tham gia tình nguyện viên</h1>
        </div>

        <div className="volunteer__body success">
          <div className="form">
            <div className="left-image ">
              <img src={interviewImg} alt="" />
            </div>

            <div className="right-form success">
              {/* logined */}
              <div className="nologin">
                <h2 className="title">
                  Thông tin chương trình của bạn đã được lưu thành công
                </h2>
                <div className="desc">
                  Vui lòng chờ ít ngày, chúng tôi sẽ liên hệ lại với bạn để kiểm
                  tra thông tin
                </div>

                <div className="logined-form">
                  <Link className="signup" to="/dashboard/postadmin">
                    Về trang quản lý
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
