import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import { DashBoardTab } from "./DashBoardTab";
import avatarImg from "../../assets/img/avatar.png";
import { Header } from "../../components/header/Header";
import Chart from "react-apexcharts";

// img
import coinImg from "../../assets/img/coin.png";
import { DashBoardTopNav } from "./DashBoardTopNav";
import { NoSupport } from "../homePage/NoSupport";

/**
 * @author
 * @function DashBoard
 **/

export const DashBoard = (props) => {
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
      dataLabels: {
        enabled: false,
      },
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

  const state2 = {
    series: [33000000, 17200000, 27650000, 44225000, 57550000, 45670000],
    options: {
      series: [33000000, 17200000, 27650000, 44225000, 57550000, 45670000],
      labels: [
        "Hội chữ thập đỏ",
        "Quỹ tình thương HCM",
        "Bông sen vàng",
        "Hội Covid Việt Nam",
        "Trẻ Em việt Nam",
        "Từ Thiện Hoài Linh",
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "50px",
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                fontSize: "24px",
                color: "#2787AB",
              },
            },
          },
        },
      },
    },
  };

  const state3 = {
    series: [
      {
        name: "Người trong độ tuổi lao động",
        data: [
          30, 45, 42, 50, 34, 44, 67, 30, 33, 27, 32, 34, 52, 50, 30, 0, 0, 0,
          0, 0,
        ],
      },
      {
        name: "Người trên tuổi lao động",
        data: [
          67, 55, 72, 61, 44, 78, 66, 87, 59, 69, 79, 54, 45, 66, 42, 0, 0, 0,
          0, 0,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        fontFamily: "Roboto, sans-serif",
      },
      dataLabels: {
        enabled: false,
      },
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
      title: {
        text: "",
        align: "left",
      },
    },
  };

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1400) {
      setIsMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth < 1400) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isMobile ? (
    <NoSupport />
  ) : (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <DashBoardTab link="dashboard" />
        </div>

        <div className="dashboard__body">
          <div className="header">
            <div className="search-input">
              <input type="text" placeholder="Tìm kiếm" />
              <i class="fas fa-search"></i>
            </div>

            <div className="header__account hide flex-align">
              <div className="header__question">
                <i class="far fa-question-circle"></i>
              </div>
              <div className="header__notify">
                <i class="fas fa-bell"></i>
                <div className="notify-badge"></div>
              </div>

              <div className="header__user flex-align">
                <div className="avatar">
                  <img src={avatarImg} alt="avatar" />
                </div>
                <div className="username">Lam Hong</div>
                <div className="toggle-down">
                  <i class="fas fa-sort-down"></i>
                </div>
              </div>
            </div>

            <DashBoardTopNav />
          </div>
          {/* end : header */}

          {/* content */}

          {/* top pannel */}
          <div className="top-pannel">
            <div className="short-info">
              <div className="title">Thống kê tổng quan</div>
              <div className="short-info__body">
                <div className="item">
                  <div className="image">
                    <i class="fas fa-user-alt"></i>
                  </div>
                  <div className="info">
                    <span className="name-item">Người ủng hộ</span>
                    <div className="detail-info">
                      <div className="txt-tongcong">Tổng cộng:</div>
                      <div className="number">1.542</div>
                      <div className="percent">( 23.5% )</div>
                      <i class="fas fa-arrow-circle-up"></i>
                    </div>
                  </div>
                </div>

                <div className="item item2">
                  <div className="image">
                    <i class="fas fa-people-carry"></i>
                  </div>
                  <div className="info">
                    <span className="name-item">Tình nguyện viên</span>
                    <div className="detail-info">
                      <div className="txt-tongcong">Tổng cộng:</div>
                      <div className="number">442</div>
                      <div className="percent">( 23.5% )</div>
                      <i class="fas fa-arrow-circle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-info">
              <h3 className="title">Tổng cộng</h3>
              <div className="total-info__detail">
                <div className="money">
                  <span className="vnd">VND</span>
                  <span className="txt-money">365.300.000</span>
                </div>

                <div className="percent">
                  (11.5%) <i class="fas fa-arrow-circle-up"></i>
                </div>
              </div>
            </div>
          </div>
          {/* end: top pannel */}

          {/* second pannel */}
          <div className="second-pannel">
            <div className="main-chart">
              {" "}
              <h1 className="chart-title">Thống kê đóng góp</h1>
              <Chart
                options={state.options}
                series={state.series}
                height="100%"
              />
            </div>
            <div className="top-donator">
              <h3 className="title">Người đóng góp nhiều nhất</h3>
              <div className="list-user">
                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://img.wattpad.com/cover/194622170-256-k581478.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Đặng Anh Tú</div>
                    <div className="type">11 x một lần</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>35.000.000 </span>
                    <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://i.pinimg.com/originals/87/96/f7/8796f7a9bb6db1f808dc77ec10b22819.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Lâm Văn Hồng</div>
                    <div className="type">15 x một lần</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>27.500.000 </span>
                    <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://i.pinimg.com/474x/3e/20/89/3e2089de20d7bdedc353b4249024cd86.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Ngô Tấn Hoài</div>
                    <div className="type">hàng tháng</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>13.500.000 </span>
                    <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://i.pinimg.com/736x/67/f2/7c/67f27c916630f38ba9b4f950009b6209.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Nguyễn Ngọc Phúc</div>
                    <div className="type">17 x một lần</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>12.600.000</span> <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://i.pinimg.com/736x/2a/71/b1/2a71b1f5a4532d43e76c74a1cb25648a.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Lê Thị Thu Hà</div>
                    <div className="type">hàng tháng</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>7.000.000</span> <div className="vnd">VNĐ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-row2">
            <div className="main-chart chart2">
              {" "}
              <h1 className="chart-title">Người dùng mới </h1>
              <Chart
                options={state3.options}
                series={state3.series}
                height="100%"
                type="area"
              />
            </div>
            <div className="main-chart chart3">
              <div className="top-donator donator2">
                <h3 className="title">Tổ chức hoạt động tốt nhất</h3>
                <div className="list-user">
                  <div className="item-user">
                    <div className="image">
                      <img
                        src="https://chuthapdophutho.org.vn/uploads/about/1361243602_hotbac.jpg"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name">Hội chữ thập đỏ</div>
                      <div className="type">Hồ Chí Minh</div>
                    </div>
                    <div className="money">
                      {" "}
                      <div className="image-coin">
                        <img src={coinImg} alt="" />
                      </div>
                      <span>125.000.000 </span>
                      <div className="vnd">VNĐ</div>
                    </div>
                  </div>

                  <div className="item-user">
                    <div className="image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfmHTVoY34hrPDDfrTHZg1MZECMsrjdYylCgFACW2o0WzPHghVcZj0YfyiY2D-1hXjwE&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name">Hiệp hội bảo trợ trẻ em</div>
                      <div className="type">Hồ Chí Minh</div>
                    </div>
                    <div className="money">
                      {" "}
                      <div className="image-coin">
                        <img src={coinImg} alt="" />
                      </div>
                      <span>97.000.000 </span>
                      <div className="vnd">VNĐ</div>
                    </div>
                  </div>

                  <div className="item-user">
                    <div className="image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnScARaSbfLtTDanuwuCm0wVdFUjrRAVQROIUMDP_R9HVIe3I1qFNn6_9aZGLszHjZu8&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name">Hội từ thiện Việt Nam</div>
                      <div className="type">Hà Nội</div>
                    </div>
                    <div className="money">
                      {" "}
                      <div className="image-coin">
                        <img src={coinImg} alt="" />
                      </div>
                      <span>80.500.000 </span>
                      <div className="vnd">VNĐ</div>
                    </div>
                  </div>

                  <div className="item-user">
                    <div className="image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcY2q2L4jvIjDxMBPLwl3_idZHLn_-51H1y-c9PAE7n1Ky8Z3IROlpLgblwOvRQoKmW4g&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name">
                        Hội thiện nguyện trái tim yêu thương
                      </div>
                      <div className="type">Cần Thơ</div>
                    </div>
                    <div className="money">
                      {" "}
                      <div className="image-coin">
                        <img src={coinImg} alt="" />
                      </div>
                      <span>18.600.000</span> <div className="vnd">VNĐ</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pannel">
                <h1 className="chart-title left">So sánh các tổ chức</h1>
                <Chart
                  options={state2.options}
                  series={state2.series}
                  height="100%"
                  type="donut"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
