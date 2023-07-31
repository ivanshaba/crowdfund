import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./tablegeneral.css";
import charityImg from "../../assets/img/charity.gif";
import Select from "react-select";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const COLUMNS = [
  {
    Header: "Hạng",
    Footer: "username",
    accessor: "id",
  },
  {
    Header: "avatar",
    Footer: "avatar",
    accessor: "avatar",
    Cell: (tableProps) => (
      <img src={tableProps.row.original.avatar} width={60} alt="Player" />
    ),
  },
  {
    Header: "username",
    Footer: "username",
    accessor: "username",
  },
  {
    Header: "Ngày đăng ký",
    Footer: "Ngày",
    accessor: "date",
    // Cell: (value) => {
    //   return format(new Date(value.row.original.date, "dd/MM/yyyy"));
    // },toLocaleDateString("en-US")

    Cell: (tableProps) => {
      var localDate = new Date(tableProps.row.original.date.toString());

      localDate = localDate.toLocaleDateString("en-US");
      var initial = localDate.split(/\//);
      if (initial[1] && initial[0]) {
        if (initial[1].length === 1) initial[1] = "0" + initial[1];
        if (initial[0].length === 1) initial[0] = "0" + initial[0];
      }
      return [initial[1], initial[0], initial[2]].join("-");
    },
  },
  {
    Header: "Chương trình",
    Footer: "duan",
    accessor: "duan",
  },
  {
    Header: "Số điện thoại",
    Footer: "sdt",
    accessor: "sdt",
  },
  {
    Header: "Email",
    Footer: "email",
    accessor: "email",
    // Cell: (tableProps) => (
    //   <span className={"hang " + tableProps.row.original.hang}>
    //     {tableProps.row.original.hang === "kimcuong"
    //       ? "Kim cương"
    //       : tableProps.row.original.hang === "hangvang"
    //       ? "Vàng"
    //       : tableProps.row.original.hang === "hangbac"
    //       ? "Bạc"
    //       : tableProps.row.original.hang === "hangdong"
    //       ? "Đồng"
    //       : ""}
    //   </span>
    // ),
  },
  {
    Header: "",
    Footer: "status",
    accessor: "status",
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
          toast.success("🎄 Đã đánh giá thành công", {
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

      return (
        <span>
          {tableProps.row.original.status === "notreview" ? (
            <span className="adminduyet">
              <i onClick={notify1} class="btn-see accept fas fa-vote-yea"></i>

              <i onClick={notify2} class="btn-see remove fas fa-trash-alt"></i>
            </span>
          ) : tableProps.row.original.status === "accept" ? (
            <div
              className="adminduyet-open-modal"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Đánh giá
            </div>
          ) : (
            <div
              className="adminduyet-open-modal delete"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              đã xóa
            </div>
          )}

          <div
            className={
              openModal ? "edit-modal__wrapper active" : "edit-modal__wrapper"
            }
          >
            <div className="edit-modal">
              <div
                className="btn-exit"
                onClick={() => {
                  setOpenModal(0);
                }}
              >
                <i class="fas fa-times"></i>
              </div>

              <h3 className="title">
                Đánh giá hoạt động của tình nguyện viên <span>Lâm Hồng</span>
              </h3>

              <div className="body">
                <div className="left">
                  <img src={charityImg} alt="" />
                </div>
                <div className="right">
                  <div className="session">
                    <h5 className="title">Chọn tháng</h5>
                    <Select
                      placeholder=""
                      className="honghong year"
                      options={optionMonth}
                    />
                  </div>

                  <div className="session">
                    <h5 className="title">Đánh giá</h5>
                    <Select
                      placeholder=""
                      className="honghong year"
                      options={optionScore}
                    />
                  </div>
                  <div className="session">
                    <h5 className="title">Nhận xét</h5>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                  </div>
                  <button onClick={notify}>Hoàn tất</button>
                </div>
              </div>
            </div>
          </div>
        </span>
      );
    },
  },
  // {
  //   Header: "type",
  //   Footer: "type",
  //   accessor: "type",
  //   Cell: (tableProps) => (
  //     <span
  //       className={
  //         tableProps.row.original.type === "mot lan"
  //           ? "status once"
  //           : "status monthly"
  //       }
  //     >
  //       {tableProps.row.original.type === "mot lan" ? "một lần" : "hàng tháng"}
  //     </span>
  //   ),
  //},
];
