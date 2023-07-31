import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import donateReceive1 from "../../assets/img/donateReceive.png";
import donateReceive from "../../assets/img/donategif.gif";

import "./donatepage.css";
/**
 * @author
 * @function DonatePage
 **/

export const DonatePage = (props) => {
  const incognitoToggle = useRef(null);
  const handleToggleIncognito = () => {
    incognitoToggle.current.classList.toggle("active");
  };
  const btn = useRef(null);
  const [optionDonate, setOptionDonate] = useState(1);
  const leftClick = () => {
    btn.current.style.left = "0";
    setOptionDonate(1);
    btn.current.style.width = "90px";
  };
  const rightClick = () => {
    btn.current.style.left = "90px";
    btn.current.style.width = "120px";
    setOptionDonate(2);
  };
  return (
    <div>
      <Header />

      <div className="donate-info-option">
        <div className="homepage session1">
          <div className="new-update">
            <div className="post post-column">
              <div className="post-left">
                <div className="image">
                  <img src={post1Img} alt="" />
                </div>
              </div>
              <div className="post-right">
                <h3>
                  Chương trình quà cho người lao động khu vực Sài Gòn và các
                  tỉnh bị giãn cách
                </h3>
                <p className="desc">
                  Trước tình hình dịch bệnh vẫn diễn biến phức tạp, đời sống bà
                  con sẽ còn khó khăn trong thời gian dài. Chúng tôi tiếp tục mở
                  thành Chương trình 20,000 phần quà để hỗ trợ cho cả Hồ Chí
                  Minh và các tỉnh đang chịu ảnh hưởng bởi Covid-19 mà chúng tôi
                  có thể tiếp cận được.
                  <br />
                  Hi vọng sẽ nhận được tình yêu thương từ quý vị
                </p>
                <button className="btn btn-detail zoom-anim">Chi tiết</button>
              </div>
            </div>
          </div>
        </div>
        <div className="donate-option">
          <div className="header-page-session">
            <div className="title">
              <img src={donateReceive} alt="" />
              <h2>Tiến hành ủng hộ</h2>
            </div>
          </div>

          <div className="donate-option__body">
            <div className="title-session">
              Để người khác biết tấm lòng của bạn
            </div>
            <div className="desc-login">
              Có thể
              <a href="#">đăng nhập</a>
            </div>
            <div className="input-info">
              <div className="component-input name-input">
                <input type="text" placeholder="Nhập họ tên bạn" />
              </div>
              <div className="component-input number-input">
                <input type="number" placeholder="SĐT" />
              </div>
            </div>
            <div className="title-session">Bạn muốn đóng góp?</div>
            <div class="button-box option-donate">
              <div id="btn" ref={btn}></div>
              <button
                type="button"
                class={
                  optionDonate === 1
                    ? "toggle-btn toggle1 active"
                    : "toggle-btn"
                }
                onClick={leftClick}
              >
                Một lần
              </button>
              <button
                type="button"
                class={optionDonate === 2 ? "toggle-btn active" : "toggle-btn"}
                onClick={rightClick}
              >
                Hàng tháng
              </button>
            </div>

            <div className="option-money">
              <div className="selected-radio">
                {/* text */}
                <input
                  // value={new Intl.NumberFormat("vi-VN", {
                  //   style: "currency",
                  //   currency: "VND",
                  // }).format(111000)}
                  type="number"
                  id=""
                  maxLength="10"
                />
                {/* 100.000vnd */}
                <input
                  type="radio"
                  name="money"
                  id="1"
                  className="hide"
                  value="100"
                />
                <label htmlFor="1" className="lbl-radio">
                  100.000 VNĐ
                </label>

                {/* 200.000vnd */}

                <input
                  type="radio"
                  name="money"
                  id="2"
                  className="hide"
                  value="100"
                />
                <label htmlFor="2" className="lbl-radio">
                  200.000 VNĐ
                </label>

                {/* 500.000vnd */}
                <input
                  type="radio"
                  name="money"
                  id="3"
                  className="hide"
                  value="100"
                />
                <label htmlFor="3" className="lbl-radio">
                  500.000 VNĐ
                </label>
              </div>
            </div>

            {/* lời nhắn  */}
            <div className="title-session">Lời nhắn</div>
            <div className="input-message">
              <textarea
                placeholder="Nhập lời nhắn của bạn ở đây"
                name=""
                id=""
                cols="30"
                rows="5"
                maxLength="400"
              ></textarea>
            </div>
            <div className="title-session title-session--smaller incognito">
              Đóng góp ẩn danh
              <div
                className="custom-toggle toggle-incognito"
                ref={incognitoToggle}
                onClick={handleToggleIncognito}
              >
                <div className="inner-circle"></div>
              </div>
            </div>

            {/* submit */}

            {window.innerWidth > 800 ? (
              <Link to="/paying" className="custom-btn pay-btn">
                Thanh Toán
              </Link>
            ) : (
              <Link to="/paying-complete" className="custom-btn pay-btn">
                Thanh Toán
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
