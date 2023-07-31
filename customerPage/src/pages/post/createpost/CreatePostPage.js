import React, { useState } from "react";
import { Header } from "../../../components/header/Header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./createpostpage.css";

import Select from "react-select";
import { Link } from "react-router-dom";

/**
 * @author
 * @function CreatePostPage
 **/

export const CreatePostPage = (props) => {
  const [addDate, setVal] = useState("");
  const [addedDate, showData] = useState(0);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };
  const options = [
    { value: "", label: "Covid 19" },
    { value: "8", label: "Trẻ em" },
    { value: "9", label: "Người già" },
    { value: "89", label: "Người khuyết tật" },
    { value: "86", label: "Ghép tim" },
    { value: "834", label: "Người khó khăn" },
  ];
  return (
    <div>
      <Header type="createpost" />
      <div className="create-post-page">
        <div className="upload-form__wrapper">
          <div className="input-info">
            <h2 className="title">
              Vui lòng nhập đầy đủ các thông tin bên dưới
            </h2>
            <h3 className="h3title">Thông tin cơ bản về chương trình</h3>
            <div className="input-session name">
              <input type="text" placeholder="Nhập tên chương trình" />
            </div>
            <div className="input-number">
              <div className="input-session name">
                <input type="text" placeholder="Nhập số tiền" />
              </div>
              <span>[ Đơn vị : VNĐ ]</span>

              <div className="input-session time">
                <input type="text" placeholder="Nhập thời gian" />
              </div>
              <span>[ Đơn vị : ngày ]</span>
            </div>
            <div className="select-session">
              <Select
                placeholder="Chọn loại"
                className="honghong type"
                options={options}
              />
              <div className="input-file">
                {" "}
                <input id="fusk" type="file" name="photo"></input>{" "}
                <label for="fusk">Chọn hình</label>
              </div>
            </div>
          </div>
          <h3 className="h3title">Thông tin chi tiết về chương trình</h3>
          <div className="upload-form">
            <CKEditor
              className="ckeditor"
              editor={ClassicEditor}
              data={addDate}
              onChange={handleChange}
            />
            <Link to="/createpost-success">
              <button className="btn-show-demo">Hoàn tất</button>
            </Link>

            <div>{addedDate ? ReactHtmlParser(addDate) : ""}</div>
          </div>

          <div className="modal__wrapper">
            <div className="modal">
              <div className="modal__header">hong</div>
              <div className="modal__body">
                <div className="modal__body__container">
                  <p>hong</p>
                  <h3>lam</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
