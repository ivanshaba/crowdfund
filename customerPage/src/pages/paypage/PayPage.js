import React, { useEffect, useRef, useState } from "react";
import "./paypage.css";
import { PayHeader } from "../../components/payheader/PayHeader";
import mastercardImg from "../../assets/img/payment/mastercard2.png";
import viettelpayImg from "../../assets/img/payment/viettelpay.png";
import momoImg from "../../assets/img/payment/momo2.png";
import qrImg from "../../assets/img/payment/qr1.png";
import qrImg2 from "../../assets/img/payment/qr2.png";
import loadingGif from "../../assets/img/component/spin-loading.gif";
import { Link } from "react-router-dom";

/**
 * @author
 * @function PayPage
 **/

export const PayPage = (props) => {
  // simple timer
  const [counter, setCounter] = useState(120);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  // simple timer
  const [method, setMethod] = useState("0");
  function HandleEventSelect(e) {
    setMethod(e.target.value);
  }
  return (
    <div className="paypage">
      <PayHeader />

      <div className="method-select__title">Chọn phương thức thanh toán</div>

      <div className="method-select">
        <label className="method-item">
          <input
            type="radio"
            value="1"
            onChange={HandleEventSelect}
            name="method"
            id="1"
          />

          <div className="radio-btn">
            <i class="fas fa-check-circle"></i>
            <div className="radio-btn-inside">
              <div className="image">
                <img src={mastercardImg} alt="" />
              </div>
              <span>CREDIT CARD</span>
            </div>
          </div>
        </label>

        <label className="method-item">
          <input
            value="2"
            onChange={HandleEventSelect}
            type="radio"
            name="method"
            id="1"
          />
          <div className="radio-btn">
            <i class="fas fa-check-circle"></i>
            <div className="radio-btn-inside">
              <div className="image">
                <img src={viettelpayImg} alt="" />
              </div>
              <span>viettel pay</span>
            </div>
          </div>
        </label>

        <label className="method-item">
          <input
            value="3"
            onChange={HandleEventSelect}
            type="radio"
            name="method"
            id="1"
          />

          <div className="radio-btn">
            <i class="fas fa-check-circle"></i>
            <div className="radio-btn-inside">
              <div className="image">
                <img src={momoImg} alt="" />
              </div>
              <span>MOMO</span>
            </div>
          </div>
        </label>
      </div>

      {/* METHOD ITEM */}
      {/* mastercard */}
      <div className="method-form">
        <div className="method-form__item mastercard">
          <div
            className={
              method === "0" ? "method-selected" : "method-selected hide"
            }
          >
            <div class="container">
              <div className="noselect">
                <div className="desc">
                  <i class="far fa-hand-pointer"></i> Vui lòng chọn một phương
                  thức thanh toán
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              method === "1" ? "method-selected" : "method-selected hide"
            }
          >
            <div class="container">
              <div class="first-row">
                <div class="owner">
                  <h3>Tên chủ thẻ</h3>
                  <div class="input-field">
                    <input type="text" />
                  </div>
                </div>
                <div class="cvv">
                  <h3>CVV</h3>
                  <div class="input-field">
                    <input type="password" />
                  </div>
                </div>
              </div>
              <div class="second-row">
                <div class="card-number">
                  <h3>Số thẻ</h3>
                  <div class="input-field">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div class="third-row">
                <h3>Hết hạn</h3>
                <div class="selection">
                  <div class="date">
                    <select name="months" id="months">
                      <option value="Jan">Tháng 1</option>
                      <option value="Feb">Tháng 2</option>
                      <option value="Mar">Tháng 3</option>
                      <option value="Apr">Tháng 4</option>
                      <option value="May">Tháng 5</option>
                      <option value="Jun">Tháng 6</option>
                      <option value="Jul">Tháng 7</option>
                      <option value="Aug">Tháng 8</option>
                      <option value="Sep">Tháng 9</option>
                      <option value="Oct">Tháng 10</option>
                      <option value="Nov">Tháng 11</option>
                      <option value="Dec">Tháng 12</option>
                    </select>
                    <select name="years" id="years">
                      <option value="2028">2028</option>
                      <option value="2027">2027</option>
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div class="cards">
                    <img src="mc.png" alt="" />
                    <img src="vi.png" alt="" />
                    <img src="pp.png" alt="" />
                  </div>
                </div>
              </div>
              <Link to="/paying-complete">Xác nhận</Link>
            </div>
          </div>

          <div
            className={
              method === "3" ? "method-selected" : "method-selected hide"
            }
          >
            <div class="container">
              <div className="momo">
                <div className="head-title">Quét mã để thanh toán </div>
                <div className="head-money">
                  <span className="txt-tongtien">Tổng tiền: </span>
                  <span className="txt-money">500.000 VNĐ</span>
                </div>
                <div className="qrcode">
                  <img src={qrImg} alt="" />
                </div>
                <div className="constructor">
                  <i class="bx bx-scan"></i>
                  Sử dụng App <span className="txt-momo">MoMo </span>
                  hoặc <br />{" "}
                  <span className="tempt">
                    ứng dụng Camera hỗ trợ QR code để quét mã
                  </span>
                </div>
                <div className="loading-wait">
                  <img src={loadingGif} alt="" />
                  <span className="txt-dangcho">
                    {" "}
                    Đang chờ bạn quét mã ... (còn {counter}s )
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              method === "2" ? "method-selected" : "method-selected hide"
            }
          >
            <div class="container">
              <div className="momo">
                <div className="head-title viettelpay">
                  Quét mã để thanh toán{" "}
                </div>
                <div className="head-money">
                  <span className="txt-tongtien">Tổng tiền: </span>
                  <span className="txt-money">500.000 VNĐ</span>
                </div>
                <div className="qrcode">
                  <img src={qrImg2} alt="" />
                </div>
                <div className="constructor">
                  <i class="bx bx-scan"></i>
                  Sử dụng App <span className="txt-momo">Viettel Pay </span>
                  hoặc <br />{" "}
                  <span className="tempt">
                    ứng dụng Camera hỗ trợ QR code để quét mã
                  </span>
                </div>
                <div className="loading-wait">
                  <img src={loadingGif} alt="" />
                  <span className="txt-dangcho">
                    Đang chờ bạn quét mã ... (còn {counter}s )
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
