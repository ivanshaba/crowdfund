import React, { useRef, useState } from "react";
import { Header } from "../../components/header/Header";
import Select from "react-select";
import "./analysicitem.css";
import avatarImg from "../../assets/img/avatar.png";
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import { Link } from "react-router-dom";

// json
import { donateUser } from "../../assets/JsonData/donateUser";
/**
 * @author
 * @function AnalysicStatement
 **/

export const AnalysicStatement = (props) => {
  const dropdown = useRef(null);
  const text = useRef(null);
  const options = [
    { value: "", label: "Tất cả" },
    { value: "1", label: "Tháng 1" },
    { value: "2", label: "Tháng 2" },
    { value: "3", label: "Tháng 3" },
    { value: "4", label: "Tháng 4" },
    { value: "5", label: "Tháng 5" },
    { value: "6", label: "Tháng 6" },
    { value: "7", label: "Tháng 7" },
    { value: "8", label: "Tháng 8" },
    { value: "9", label: "Tháng 9" },
    { value: "10", label: "Tháng 10" },
    { value: "11", label: "Tháng 11" },
    { value: "12", label: "Tháng 12" },
  ];
  const options2 = [
    { value: "", label: "Tất cả" },
    { value: "2019", label: "Năm 2019" },
    { value: "2020", label: "Năm 2020" },
    { value: "2021", label: "Năm 2021" },
  ];

  const [valueState, setValueState] = useState("");
  const [valueYear, setValueYear] = useState("");
  const handler = (event) => {
    const value = event.value;
    setValueState(value);
  };
  const handleYear = (e) => {
    setValueYear(e.value);
  };
  return (
    <div className="analysic-item-page">
      <Header type="analysic" />

      <div className="body">
        <div className="left-pannel">
          <div className="left-pannel__container__wrapper">
            <div className="left-pannel__container">
              <div className="post-left">
                <div className="image">
                  <img src={post1Img} alt="" />
                </div>
              </div>

              <div className="title">
                Chương trình tặng quà cho người lao động khu vực Sài Gòn và các
                tỉnh bị giãn cách
              </div>
              <div className="option">
                <a className="detail-btn" href="#">
                  Xem chi tiết
                </a>
                <a className="save-btn" href="#">
                  Lưu lại
                </a>
              </div>

              <div className="option-tab">
                <div className="tab-btn ">
                  <Link to="/analysic">Tổng quan</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/user">Danh sách ủng hộ</Link>
                </div>
                <div className="tab-btn active">
                  <Link to="/statement">Sao kê</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/achievement">Thành quả</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-pannel">
          <h3>
            <div class="container">
              <div class="main">
                <div class="topbar">
                  <div class="toggle"></div>
                </div>

                <div class="details recentCustomers statement">
                  <div class="recentOrders">
                    <div className="statement__header">
                      <div className="option">
                        <Select
                          placeholder="Chọn tháng"
                          className="honghong"
                          options={options}
                          onChange={handler}
                        />
                        <Select
                          placeholder="Chọn năm"
                          className="honghong"
                          options={options2}
                          onChange={handleYear}
                        />
                      </div>
                      <a href="#" class="btn">
                        Tải bản sao kê
                      </a>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <td>Avatar</td>
                          <td>Tên</td>
                          <td>Price</td>
                          <td>Payment</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        {donateUser.map((item, ind) => {
                          if (
                            (item.month === valueState || valueState == "") &&
                            (item.year === valueYear || valueYear == "")
                          ) {
                            return (
                              <tr>
                                <td width="60px">
                                  <div class="imgBx">
                                    <img src={item.avatar} />
                                  </div>
                                </td>

                                <td>{item.username}</td>
                                <td>{item.money}</td>
                                <td>{item.method}</td>
                                <td>
                                  <span
                                    className={
                                      item.type === 1
                                        ? "status once"
                                        : "status monthly"
                                    }
                                  >
                                    {item.type === 1 ? "một lần" : "hàng tháng"}
                                  </span>
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};
