import React from "react";
import "./footer.css";

/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
  return (
    <div>
      <footer className="main-footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social">
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="#">Trang chủ</a>
          </li>
          <li>
            <a href="#">Về chúng tôi</a>
          </li>
          <li>
            <a href="#">Đăng kí tình nguyện viên</a>
          </li>
          <li>
            <a href="#">Chương trình từ thiện</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>
        <p>©2021 Charity Support | All Rights Reserved</p>
      </footer>
    </div>
  );
};
