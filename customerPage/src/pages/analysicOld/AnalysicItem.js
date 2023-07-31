import React from "react";
import { Header } from "../../components/header/Header";

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
                <div className="tab-btn active">
                  <Link to="/analysic">Tổng quan</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/user">Danh sách ủng hộ</Link>
                </div>
                <div className="tab-btn">
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

                <div class="cardBox">
                  <div class="card">
                    <div>
                      <div class="numbers">1,504</div>
                      <div class="cardName">Daily Views</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="card">
                    <div>
                      <div class="numbers">80</div>
                      <div class="cardName">Sales</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="cart-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="card">
                    <div>
                      <div class="numbers">284</div>
                      <div class="cardName">Comments</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="card">
                    <div>
                      <div class="numbers">$7,842</div>
                      <div class="cardName">Earning</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="cash-outline"></ion-icon>
                    </div>
                  </div>
                </div>

                <div class="details recentCustomers">
                  <div class="recentOrders">
                    <div class="cardHeader">
                      <h2>Recent Orders</h2>
                      <a href="#" class="btn">
                        View All
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
                          if (true) {
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
                                      item.type === "1"
                                        ? "status once"
                                        : "status monthly"
                                    }
                                  >
                                    {item.type === "1"
                                      ? "một lần"
                                      : "hàng tháng"}
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
