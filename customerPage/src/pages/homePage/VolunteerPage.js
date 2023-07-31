import React from "react";
import { Header } from "../../components/header/Header";
import "./volunteerpage.css";

import video from "../../assets/img/video/video.mp4";
import maskImg from "../../assets/img/video/mask.jpg";

import interviewImg from "../../assets/img/orgnization.jpg";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Volunteer
 **/

export const Volunteer = (props) => {
  return (
    <div className="volunteer_page__wrapper">
      <Header link="volunteer" />
      <div className="voluteer_page">
        <div class="video__wrapper">
          <video src={video} autoPlay muted loop type="mp4"></video>
          <img src={maskImg} class="mask" />
          <h2>Cứu trợ Covid 19</h2>
        </div>
        <div className="volunteer__title">
          <h1>Đăng kí tham gia tình nguyện viên</h1>
        </div>

        <div className="volunteer__body">
          <div className="form">
            <div className="left-image">
              <img src={interviewImg} alt="" />
            </div>

            <div className="right-form">
              <div className="nologin hide">
                <h2 className="title">
                  Các tổ chức đang thực sự cần sự hỗ trợ của bạn
                </h2>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Justo laoreet sit amet cursus sit amet. Purus sit amet luctus
                  venenatis. Sed faucibus turpis in eu mi. Magna eget est lorem
                  ipsum dolor sit amet.
                </div>
                <div className="nologin-form hide">
                  <div className="txt-require-login">
                    Trước hết, bạn phải đăng nhập
                  </div>
                  <div className="login-require">
                    <Link to="/login">Đăng nhập</Link>
                    <span>hoặc</span>
                    <Link to="/signup" className="signup">
                      Đăng ký
                    </Link>
                  </div>
                </div>
                <div className="logined-form"></div>
              </div>

              {/* logined */}
              <div className="nologin">
                <h2 className="title">
                  Các tổ chức đang thực sự cần sự hỗ trợ của bạn
                </h2>
                <div className="desc">
                  Hoàn thành các nội dung bên dưới để tiến hành đăng kí
                </div>

                <div className="logined-form">
                  <div className="session-input">
                    <i class="fas fa-user-alt"></i>
                    <input type="text" placeholder="Họ tên" />
                  </div>
                  <div className="session-input">
                    <i class="far fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="session-input">
                    <i class="fas fa-phone"></i>
                    <input type="number" placeholder="Số điện thoại" />
                  </div>
                  <div className="session-input">
                    <textarea
                      type="text"
                      placeholder="Nhập tên chương trình muốn tham gia"
                    />
                  </div>
                  <Link className="signup" to="/volunteer/success">
                    Đăng ký
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
