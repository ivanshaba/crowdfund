import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import donateReceive1 from "../../assets/img/donateReceive.png";
import donateReceive from "../../assets/img/donategif.gif";

import "./donatepage.css";
/**
 * @author
 * @function DonateMonthlyPage
 **/

export const DonateMonthlyPage = (props) => {
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

      <div className="donate-info-option monthly">
        <div className="homepage session1"></div>
        <div className="donate-option">
          <div className="header-page-session">
            <div className="title">
              <img src={donateReceive} alt="" />
              <h2>
                Tiến hành ủng hộ cho tổ chức Charity Support
                <p>Bạn đang ủng hộ hàng tháng cho tổ chức Charity Support</p>
              </h2>
            </div>
          </div>

          <div className="donate-option__body">
            <div className="left-pannel">
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
            </div>

            {/* lời nhắn  */}
            <div className="right-pannel">
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
            </div>
            {/* submit */}
          </div>
          <Link to="/paying" className="custom-btn pay-btn">
            Thanh Toán
          </Link>
        </div>
      </div>
    </div>
  );
};
