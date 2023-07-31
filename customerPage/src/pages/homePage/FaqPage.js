import React, { useEffect, useRef } from "react";
import { Header } from "../../components/header/Header";

import "./faqpage.css";

/**
 * @author
 * @function FaqPage
 **/

export const FaqPage = (props) => {
  const refTag = useRef(null);
  useEffect(() => {
    console.log(refTag.current);
    console.log(refTag.current.props);
  }, []);
  const faqTag = document.querySelectorAll(".faq");
  console.log(faqTag);
  // Hide other elements and change icon.
  const hideTag = () => {
    // faqTag.forEach((item) => {
    //   item.classList.remove("open");
    //   item.children[1].innerHTML = "&#43;";
    // });
    console.log(refTag.current.Children);
  };

  // Toggle targeted element to show with froEach Loop.
  faqTag.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.className === "btn") {
        hideTag();
        e.target.parentElement.classList.toggle("open");
        e.target.innerHTML = "&#8722;";
      }
    });
  });

  const handleOpen = (e) => {
    if (
      e.target.className === "btn" &&
      !e.target.parentElement.classList.contains("open")
    ) {
      hideTag();
      e.target.parentElement.classList.toggle("open");
      e.target.innerHTML = "&#8722;";
    } else {
      hideTag();
      e.target.parentElement.classList.toggle("open");
      e.target.innerHTML = "&#43;";
    }
  };

  return (
    <React.Fragment>
      <Header link="faq" />
      <div className="main-faq-about-us__wrapper">
        <div className="main-faqpage" ref={refTag}>
          <h1>Về chúng tôi</h1>

          <div class="faq open ">
            <div class="faq_text">
              <h2>Charity Support đã hoạt động ở Việt Nam được bao lâu?</h2>
              <p>
                Charity Support là một tổ chức từ thiện đăng ký tại Anh Quốc năm
                1992 và hoạt động tại Việt Nam kể từ đó. Chúng tôi được cấp giấy
                chứng nhận tại Việt Nam năm 1996 và có chi nhánh tại Mỹ từ năm
                1999.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#8722;
            </span>
          </div>

          <div class="faq">
            <div class="faq_text">
              <h2>Charity Support làm gì?</h2>
              <p>
                Charity Support™ hỗ trợ giáo dục cho các đối tượng trẻ em nghèo,
                khuyết tật và cơ nhỡ. Chúng tôi thực hiện những dự án như Xây
                trường học, cấp Học bổng và Đào tạo nghề nhằm tạo điều kiện cơ
                bản cho các em về giáo dục cũng như trang bị cho các em những kỹ
                năng cần thiết mong thoát khỏi sự đói nghèo.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#43;
            </span>
          </div>

          <div class="faq">
            <div class="faq_text">
              <h2>Charity Support hoạt động ở những nơi nào</h2>
              <p>
                Chúng tôi hoạt động tại TP.HCM và những vùng lân cận; chủ yếu
                những khu vực vùng sâu bao gồm các tỉnh: TP.HCM, Đồng Nai, Tây
                Ninh, Tiền Giang, Trà Vinh, Cà Mau, Kiên Giang, Hậu Giang, Quảng
                Trị, Phú Thọ, Ninh Bình và Tuyên Quang.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#43;
            </span>
          </div>

          <div class="faq">
            <div class="faq_text">
              <h2>Tôi có thể làm tình nguyện viên không?</h2>
              <p>
                Vui lòng xem tại mục Tình nguyện viên để biết thêm thông tin.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#43;
            </span>
          </div>

          <div class="faq">
            <div class="faq_text">
              <h2>
                Charity Support lựa chọn đối tượng như thế nào trong các dự án
                của mình?
              </h2>
              <p>
                Quá trình chọn lựa được thực hiện cẩn thận và khách quan để đảm
                bảo những em được chọn lựa trong các dự án của Charity Support
                là thật sự đang cần giúp đỡ và hỗ trợ. Chúng tôi đi thị sát và
                đến thăm các em tại nhà riêng để tìm hiểu hoàn cảnh khó khăn của
                gia đình. Việc đánh giá và chọn lưạ của Charity Support thường
                theo khuynh hướng chọn các em học sinh nhỏ tuổi vì hoàn cảnh
                nghèo phải bỏ học để đi làm. Nhiều em trong dự án được Charity
                Support giúp đỡ là bị khiếm thị, hiếm thính, khuyết tật bẩm sinh
                hoặc không còn đủ cha mẹ. Chúng tôi không phân biệt theo giới
                tính khi chọn lựa các em.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#43;
            </span>
          </div>

          <div class="faq">
            <div class="faq_text">
              <h2>
                Các chương trình Charity Support có mang lại hiệu quả thiết
                thực?
              </h2>
              <p>
                Chúng tôi có thể tự hào và trả lời là có. Chúng tôi kiểm soát
                các công việc của mình chặt chẽ để đảm bảo tính hiệu quả của nó
                và đạt được những mục tiêu của dự án. Các dự án cũng cho thấy
                những kết quả tích cực của các em như vượt qua các kỳ thi và
                những tác phẩm của các em cũng được giới thiệu và triển lãm.
                Chúng tôi cũng vui mừng khi thấy các em học sinh này trưởng
                thành tự tin hơn trong cuộc sống và tiếp tục lĩnh hội kiến thức
                từ ghế nhà trường và lạc quan hơn khi đối mặt với những thách
                thức trong cuộc sống. Mỗi năm chúng tôi giới thiệu được cho các
                em lớn tuổi hơn vào làm việc tại những khách sạn, văn phòng hoặc
                các tiệm kinh doanh khác nhau theo kỹ năng nghề cụ thể. Nhiều em
                trong số đó bây giờ có thể theo đuổi ước mơ học đại học – Vì
                thế, chúng tôi tin chắc rằng các chương trình này mang lại những
                kết quả thiết thực nhất định.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#43;
            </span>
          </div>

          <div class="faq">
            <div class="faq_text">
              <h2>Có bao nhiêu người tham gia làm việc cho Charity Support?</h2>
              <p>
                Có khoảng 31 nhân viên làm việc toàn thời gian tại Charity
                Support. Một vài tham gia những dự án riêng lẻ, một vài là giáo
                viên. Tất cả đều là những người có tấm lòng nhiệt thành và cống
                hiến. Ngoài ra, chúng tôi không thể nào không nhắc đến một đội
                ngủ gồm những tình nguyện viên đến từ khắp nơi trên thế giới để
                giúp đỡ nhiều công việc khác nhau tại Charity Support™ – từ việc
                giúp quảng bá về Charity Support đến hỗ trợ dạy kèm tiếng Anh.
              </p>
            </div>
            <span class="btn" onClick={handleOpen}>
              &#43;
            </span>
          </div>
        </div>
        <div className="ff">
          <div className="footer">
            <h2>Thắc mắc khác</h2>
            <p>
              Nếu có thắc mắc nào khác, các bạn có thể trực tiếp liên hệ với
              chúng tôi tại đây : <a href="#">Nhắn tin</a> hoặc gửi mail tại :
              <span className="email">charity@5ting.com</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
