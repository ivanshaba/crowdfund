import { format } from "date-fns";
import { Link } from "react-router-dom";
import { EnumData } from "./enumData";

import charityImg from "../../assets/img/charity.gif";
import { useState } from "react";
import Select from "react-select";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const COLUMNS = [
  {
    Header: "Hình ảnh",
    Footer: "image",
    accessor: "image",
    Cell: (tableProps) => (
      <img src={tableProps.row.original.image} width={190} alt="Player" />
    ),
  },
  {
    Header: "Tiêu đề",
    Footer: "title",
    accessor: "title",
  },

  {
    Header: "Đã nhận",
    Footer: "danhan",
    accessor: "danhan",
  },
  //   {
  //     Header: "Ngày",
  //     Footer: "Ngày",
  //     accessor: "date",
  //     // Cell: (value) => {
  //     //   return format(new Date(value.row.original.date, "dd/MM/yyyy"));
  //     // },toLocaleDateString("en-US")

  //     Cell: (tableProps) => {
  //       var localDate = new Date(tableProps.row.original.date.toString());

  //       localDate = localDate.toLocaleDateString("en-US");
  //       var initial = localDate.split(/\//);
  //       if (initial[1] && initial[0]) {
  //         if (initial[1].length === 1) initial[1] = "0" + initial[1];
  //         if (initial[0].length === 1) initial[0] = "0" + initial[0];
  //       }
  //       return [initial[1], initial[0], initial[2]].join("-");
  //     },
  //   },
  {
    Header: "owner",
    Footer: "owner",
    accessor: "owner",
    // Cell: (tableProps) => (
    //   <span>{EnumData[tableProps.row.original.owner - 1]}</span>
    // ),
  },
  {
    Header: "Phân loại",
    Footer: "type",
    accessor: "type",
  },
  {
    Header: "time",
    Footer: "time",
    accessor: "time",
    Cell: (tableProps) => (
      <span
        className={
          tableProps.row.original.time === 0
            ? "status d0"
            : tableProps.row.original.time < 3
            ? "status d3"
            : tableProps.row.original.time < 10
            ? "status d10"
            : "status d100"
        }
      >
        {tableProps.row.original.time === 0
          ? "đã hoàn thành"
          : "còn " + tableProps.row.original.time + " ngày"}
      </span>
    ),
  },
  {
    Header: "",
    Footer: "necess",
    accessor: "necess",

    Cell: (tableProps) => {
      const [openModal, setOpenModal] = useState(false);
      const optionMonth = [
        { value: 1, label: "Tháng 7" },
        { value: 20, label: "Tháng 8" },
        { value: 50, label: "Tháng 9" },
        { value: 100, label: "Tháng 10" },
        { value: 1300, label: "Tháng 11" },
      ];
      const optionScore = [
        { value: 1, label: "5" },
        { value: 20, label: "6" },
        { value: 50, label: "7" },
        { value: 100, label: "8" },
        { value: 1030, label: "9" },
        { value: 1010, label: "10" },
      ];

      // toast
      const notify = () => {
        if (true) {
          toast.success("🎄 Đã chỉnh sửa thành công", {
            position: "top-right",
            autoClose: 5222,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            width: "500px",
          });
          setOpenModal(false);
        }
      };
      const notify1 = () => {
        if (true) {
          toast.success("😊 Đã chấp nhận tình nguyện viên", {
            position: "top-right",
            autoClose: 5222,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            width: "500px",
          });
          setOpenModal(false);
        }
      };
      const notify2 = () => {
        if (true) {
          toast.success("🥺 Đã xóa tình nguyện viên", {
            position: "top-right",
            autoClose: 5222,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            width: "500px",
          });
          setOpenModal(false);
        }
      };
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
        <span>
          <Link to="/post">
            <i class="btn-see far fa-eye"></i>
          </Link>
          <Link to="/analysic">
            <i class="btn-see fas fa-chart-line"></i>
          </Link>

          <i onClick={() => setOpenModal(true)} class="btn-see far fa-edit"></i>

          <div
            className={
              openModal ? "edit-modal__wrapper active" : "edit-modal__wrapper"
            }
          >
            <div className="edit-modal big">
              <div
                className="btn-exit"
                onClick={() => {
                  setOpenModal(0);
                }}
              >
                <i class="fas fa-times"></i>
              </div>
              <h2 className="title">Chỉnh sửa thông tin</h2>
              <div className="create-post-page dashboard">
                <div className="upload-form__wrapper">
                  <div className="input-info">
                    <h3 className="h3title">
                      Thông tin cơ bản về chương trình
                    </h3>
                    <div className="input-session name">
                      <input
                        type="text"
                        defaultValue="Hỗ trợ trẻ em vùng cao"
                        placeholder="Nhập tên chương trình"
                      />
                    </div>
                    <div className="input-number">
                      <div className="input-session name">
                        <input
                          type="text"
                          defaultValue="65.000.000"
                          placeholder="Nhập số tiền"
                        />
                      </div>
                      <span>[ Đơn vị : VNĐ ]</span>

                      <div className="input-session time">
                        <input
                          defaultValue="50"
                          type="text"
                          placeholder="Nhập thời gian"
                        />
                      </div>
                      <span>[ Đơn vị : ngày ]</span>
                    </div>
                    <div className="select-session">
                      <Select
                        defaultValue="Người già"
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
                  <h3 className="h3title">
                    Thông tin chi tiết về chương trình
                  </h3>
                  <div className="upload-form">
                    <CKEditor
                      className="ckeditor"
                      editor={ClassicEditor}
                      data={addDate}
                      onChange={handleChange}
                    />
                    <a href="#">
                      {" "}
                      <button onClick={notify} className="btn-show-demo">
                        Hoàn tất
                      </button>
                    </a>

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
          </div>
        </span>
      );
    },
  },
];
