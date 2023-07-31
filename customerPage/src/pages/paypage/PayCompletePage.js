import React from "react";
import { Link } from "react-router-dom";
import { PayHeader } from "../../components/payheader/PayHeader";
import "./paycompletepage.css";
/**
 * @author
 * @function PayCompletePage
 **/

export const PayCompletePage = (props) => {
  return (
    <div className="paycomplete">
      <PayHeader type="xacnhan" />
      <div className="paycomplete__body">
        <div className="complete-icon">
          <i class="far fa-check-circle"></i>
        </div>
        <div className="title">Đã hoàn tất việc đóng góp</div>
        <div className="desc">
          Chúng tôi chân thành cảm ơn tấm lòng của bạn. <br />{" "}
          <span>
            Hãy theo dõi sự đóng góp của bạn trên website của chúng tôi
          </span>
        </div>
        <Link to="/analysic">Theo dõi chương trình này</Link>
      </div>
    </div>
  );
};
