import React, { useEffect, useRef } from "react";
import { Header } from "../../components/header/Header";

import "./faqpage.css";
import "./nosupport.scss";
import nosupportImg from "../../assets/img/screen.jpeg";

/**
 * @author
 * @function FaqPage
 **/

export const NoSupport = (props) => {
  return (
    <React.Fragment>
      <Header link="dashboard" />

      <div className="nosupport__body">
        <div className="nosupport__img">
          <img src={nosupportImg} alt="canload" />
        </div>
        <div className="nosupport__title">Page này chỉ hỗ trợ máy tính</div>
        <div className="nosupport__desc">
          Vui lòng xem trên thiết bị laptop/pc để có thể xem được số liệu thống
          kê một cách đầy đủ. Cảm ơn bạn :3
        </div>
      </div>
    </React.Fragment>
  );
};
