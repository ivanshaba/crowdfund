import React from "react";
import { Header } from "../../components/header/Header";
import Chart from "react-apexcharts";

import "./analysicitem.css";
import avatarImg from "../../assets/img/avatar.png";
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import { Link } from "react-router-dom";

// json
import { donateUser } from "../../assets/JsonData/donateUser";
/**
 * @author
 * @function AnaLysicItem
 **/

export const AnaLysicItem = (props) => {
  // chart

  const state = {
    series: [
      {
        type: "column",
        name: "Tiền quyên góp",
        data: [
          3467000, 5060000, 7880000, 5060000, 6688000, 7500000, 4400000,
          2200000, 5789000, 7100000, 5420000, 9677000, 5512000, 7898000,
          11220000, 0, 0, 0, 0, 0,
        ],
      },
      {
        name: "Lượt quyên góp",
        data: [
          11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41, 55, 0, 0, 0,
          0, 0,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      tooltip: {
        followCursor: true,
      },
      // dataLabels: {
      //   enabled: true,
      //   formatter: function (val) {
      //     return `$${val}`
      //   },
      // },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "1/12/2021",
          "2/12/2021",
          "3/12/2021",
          "4/12/2021",
          "5/12/2021",
          "6/12/2021",
          "7/12/2021",
          "8/12/2021",
          "9/12/2021",
          "10/12/2021",
          "11/12/2021",
          "12/12/2021",
          "13/12/2021",
          "14/12/2021",
          "15/12/2021",
          "16/12/2021",
          "17/12/2021",
          "18/12/2021",
          "19/12/2021",
          "20/12/2021",
        ],
      },
      yaxis: [
        {
          title: {
            text: "",
          },
        },
        {
          opposite: true,
          title: {
            text: "",
          },
        },
      ],
      title: {
        text: "",
        align: "left",
      },
    },
  };

  return (
    <div className="analysic-item-page">
      <Header type="analysic" />

      <div className="body">
        <div className="left-pannel">
          <div className="left-pannel__container__wrapper">
            <div className="left-pannel__container">
              <Link className="xxx" to="/">
                <button className="return-home">
                  {" "}
                  <i class="fas fa-arrow-left"></i>Về trang chủ
                </button>
              </Link>
              <div className="post-left">
                <div className="image">
                  <img src={post1Img} alt="" />
                </div>
              </div>

              <div className="title">
                Chương trình tặng quà cho người lao động khu vực Sài Gòn và các
                tỉnh bị giãn cách
              </div>
              {/* <div className="option" >
                <a className="detail-btn" href="#">
                  Xem chi tiết
                </a>
                <a className="save-btn" href="#">
                  Lưu lại
                </a>
              </div> */}

              <div className="option-tab">
                <div className="tab-btn active">
                  <Link to="/analysic">Tổng quan</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/user">Danh sách ủng hộ</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/statement">Sao kê</Link>
                </div>
                {/* <div className="tab-btn">
                  <Link to="/achievement">Thành quả</Link>
                </div> */}
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

                <div class="cardBox">
                  <div class="card">
                    {" "}
                    <div class="iconBx">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <div>
                      <div class="numbers">1,504</div>
                      <div class="cardName">Lượt truy cập</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="iconBx">
                      <i class="fas fa-child"></i>
                    </div>
                    <div>
                      <div class="numbers">84</div>
                      <div class="cardName">Tình nguyện viên</div>
                    </div>
                  </div>
                  <div class="card">
                    {" "}
                    <div class="iconBx">
                      <ion-icon name="cash-outline"></ion-icon>
                    </div>
                    <div>
                      <div class="numbers money">17.000.000 VNĐ</div>
                      <div class="cardName">Tiền quyên góp</div>
                    </div>
                  </div>
                  <div class="card">
                    {" "}
                    <div class="iconBx">
                      <i class="fas fa-hand-holding-heart"></i>
                    </div>
                    <div>
                      <div class="numbers">136</div>
                      <div class="cardName">Lượt quyên góp</div>
                    </div>
                  </div>
                </div>
                <div class="details recentCustomers">
                  <div class="chart1">
                    <h1 className="chart-title">Thống kê quyên góp</h1>
                    <Chart
                      options={state.options}
                      series={state.series}
                      height="100%"
                    />
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
