import React from "react";
import "./monthregister.css";

import month1Img from "../../assets/img/month1.png";
import month2Img from "../../assets/img/month2.png";
import { Link } from "react-router-dom";
/**
 * @author
 * @function MonthRegisterFullWidth1
 **/

export const MonthRegisterFullWidth1 = (props) => {
  return (
    <div>
      <div className="month-register--full-width">
        <div className="left">
          <div className="top">
            <div className="image">
              <img src={month2Img} alt="" />
            </div>
            <div className="info">
              <h4>Ủng hộ hằng tháng</h4>
              <p>Đóng góp hàng tháng vào quỹ chung của Charity Support</p>
            </div>
          </div>
          <Link to="/donate-monthly">
            <div className="btn" onClick={() => window.scrollTo(0, 0)}>
              Ủng hộ
            </div>
          </Link>
        </div>
        <div className="right">
          <div className="top">
            <div className="image">
              <img src={month1Img} alt="" />
            </div>
            <div className="info">
              <h4>Đăng kí tình nguyện viên</h4>
              <p>
                Đăng kí với chúng tôi để được trở thành tình nguyện viên của
                chương trình
              </p>
            </div>
          </div>

          <Link to="/volunteer">
            <div className="btn register">Đăng kí</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
