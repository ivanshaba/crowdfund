import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { DashBoardTab } from "./DashBoardTab";
import avatarImg from "../../assets/img/avatar.png";
import { Header } from "../../components/header/Header";
import Chart from "react-apexcharts";

// img
import coinImg from "../../assets/img/coin.png";

// json
import { donateUser } from "../../assets/JsonData/donateUser";
import Select from "react-select";

// import for table
import { useEffect, useMemo } from "react";
import { enGB, vi } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

import post1Img from "../../assets/img/homePagePost/post1.jpg";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// json
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useFilters,
} from "react-table";
import donateUserJson from "../../assets/JsonData/PostAdminJson.json";
import { COLUMNS } from "../../assets/JsonData/ColumnPostAdmin";
import { Filter } from "../analysic/Filter";
import { DashBoardTopNav } from "./DashBoardTopNav";

/**
 * @author
 * @function DashBoardChuongTrinhAdmin
 **/

export const DashBoardChuongTrinhAdmin = (props) => {
  const options = [
    { value: "", label: "Tất cả" },
    { value: "8", label: "Tháng 8" },
    { value: "9", label: "Tháng 9" },
    { value: "10", label: "Tháng 10" },
    { value: "11", label: "Tháng 11" },
    { value: "12", label: "Tháng 12" },
  ];
  const options2 = [
    { value: "", label: "Tất cả" },
    { value: "2020", label: "Năm 2020" },
    { value: "2021", label: "Năm 2021" },
  ];
  const optionPages = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];
  const optionTime = [
    { value: "", label: "Tất cả" },
    { value: "đã hết hạn", label: "Đã hoàn thành" },
    { value: "rất gần hết hạn", label: "Dưới 3 ngày" },
    { value: "sắp hết hạn", label: "Dưới 10 ngày" },
    { value: "chưa hết hạn", label: "Còn lại" },
  ];
  const optionType = [
    { value: "", label: "Tất cả" },
    { value: "Covid 19", label: "Covid 19" },
    { value: "Trẻ Em", label: "Trẻ Em" },
    { value: "Người Già", label: "Người Già" },
    { value: "Người Khuyết Tật", label: "Người Khuyết Tật" },
    { value: "Ghép Tim", label: "Ghép Tim" },
    { value: "Người Khó Khăn", label: "Người Khó Khăn" },
  ];
  const optionMethod = [
    { value: "", label: "Tất cả" },
    { value: "Hội chữ thập đỏ", label: "Hội chữ thập đỏ" },
    { value: "Quỹ tình thương HCM", label: "Quỹ tình thương HCM" },
    { value: "Bông sen vàng", label: "Bông sen vàng" },
    { value: "Hội Covid Việt Nam", label: "Hội Covid Việt Nam" },
    { value: "Trẻ Em việt Nam", label: "Trẻ Em việt Nam" },
    { value: "Từ Thiện Hoài Linh", label: "Từ Thiện Hoài Linh" },
  ];

  const [valueState, setValueState] = useState("");
  const [valueYear, setValueYear] = useState("");
  const [method, setMethod] = useState("");
  const [time, setTime] = useState("");
  const handler = (event) => {
    const value = event.value;
    setValueState(value);
  };
  const handleYear = (e) => {
    setValueYear(e.value);
  };
  const handleDate = (e) => {
    setDate(e.value);
  };

  const handleTime = (e) => {
    setTime(e.value);
    setGlobalFilter(e.value);
  };
  const handleMethod = (e) => {
    setMethod(e.value);
    setGlobalFilter(e.value);
  };
  const handleType = (e) => {
    setGlobalFilter(e.value);
  };
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => donateUserJson, []);
  const tableInstance = useTable(
    {
      columns,

      data,
    },

    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    setPageSize,
    state,
    setGlobalFilter,
    setFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize, filter } = state;

  // toast
  const notify = () =>
    toast.success("Xuất thành công!", {
      position: "top-right",
      autoClose: 2222,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      width: "500px",
    });

  const [date, setDate] = useState();
  useEffect(() => {
    var localDate = new Date(date);
    var xx = localDate.toLocaleDateString("en-US");
    if (xx === "Invalid Date") {
      xx = "";
    }

    console.log("binnnnnnnnnnnnn");
    console.log(xx);
    if (xx !== "") {
      var initial = xx.split(/\//);
      if (initial[1] && initial[0]) {
        if (initial[1].length === 1) initial[1] = "0" + initial[1];
        if (initial[0].length === 1) initial[0] = "0" + initial[0];
      }

      xx = [initial[2], initial[1], initial[0]].join("-");
      console.log(xx);
      if (xx === "Invalid Date") {
        xx = "";
      }
    }

    setGlobalFilter(xx || "");
  }, [date]);

  const handleDeleteDate = () => {
    setDate("");
  };
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <DashBoardTab link="postadmin" />
        </div>
        <div className="clear"></div>
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
          <div className="analysic-item-page">
            <div className="right-pannel">
              <h3>
                <div class="container">
                  <div class="main">
                    <div class="topbar">
                      <div class="toggle"></div>
                    </div>

                    <div class="details recentCustomers dashboard-chuongtrinh">
                      <div class="recentOrders">
                        <div className="statement__header">
                          <div className="option">
                            <Filter
                              filter={globalFilter}
                              setFilter={setGlobalFilter}
                            />

                            <Select
                              placeholder="Loại từ thiện"
                              className="honghong type"
                              options={optionType}
                              onChange={handleType}
                            />
                            <Select
                              placeholder="Cấp thiết"
                              className="honghong type"
                              options={optionTime}
                              onChange={handleTime}
                            />
                            {/* <button onClick={notify}>Notify!</button> */}
                            <ToastContainer
                              position="top-center"
                              autoClose={2222}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                            />
                          </div>
                          <a href="#" onClick={notify} class="btn btn-export">
                            Xuất file
                          </a>
                        </div>
                        <table
                          {...getTableProps()}
                          className="dashboard-chuongtrinh"
                        >
                          <thead>
                            {headerGroups.map((headergroup) => (
                              <tr {...headergroup.getHeaderGroupProps()}>
                                {headergroup.headers.map((column) => (
                                  <td
                                    {...column.getHeaderProps(
                                      column.getSortByToggleProps()
                                    )}
                                  >
                                    {column.render("Header")}

                                    <span>
                                      {column.isSorted ? (
                                        column.isSortedDesc ? (
                                          <i class="desc fas fa-caret-right"></i>
                                        ) : (
                                          <i class="asc fas fa-caret-right"></i>
                                        )
                                      ) : (
                                        ""
                                      )}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </thead>
                          <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                              prepareRow(row);
                              return (
                                <tr {...row.getRowProps()}>
                                  {row.cells.map((cell) => {
                                    var localDate = new Date(date);
                                    var x1 =
                                      localDate.toLocaleDateString("en-US");
                                    var localDate1 = new Date(cell.value);
                                    var x2 =
                                      localDate1.toLocaleDateString("en-US");

                                    if (true) {
                                      if (cell.column.id === "avatar") {
                                        return (
                                          <td
                                            width="60px"
                                            {...cell.getCellProps()}
                                          >
                                            <div class="imgBx">
                                              {cell.render("Cell")}
                                            </div>
                                          </td>
                                        );
                                      } else if (cell.column.id === "type") {
                                        return (
                                          <td {...cell.getCellProps()}>
                                            <span>{cell.render("Cell")}</span>
                                          </td>
                                        );
                                      } else if (cell.column.id === "id") {
                                        return (
                                          <td
                                            className="idcol"
                                            {...cell.getCellProps()}
                                          >
                                            {cell.render("Cell")}
                                          </td>
                                        );
                                      } else {
                                        return (
                                          <td {...cell.getCellProps()}>
                                            <span>{cell.render("Cell")}</span>
                                          </td>
                                        );
                                      }
                                    } else {
                                      return "";
                                    }
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>

                        <div className="footer">
                          <span>Số dòng 1 trang</span>

                          <Select
                            placeholder="10"
                            className="select-page"
                            options={optionPages}
                            onChange={(e) => setPageSize(Number(e.value))}
                          />
                          <span className="txt-page-index">
                            {pageIndex + 1} of {pageOptions.length}
                          </span>
                          <button
                            className="btn-page prev"
                            disabled={!canPreviousPage}
                            onClick={() => previousPage()}
                          >
                            <i class="fas fa-chevron-left"></i>
                          </button>
                          <button
                            className="btn-page next"
                            disabled={!canNextPage}
                            onClick={() => nextPage()}
                          >
                            <i class="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
          </div>

          {/* end: content */}
        </div>
      </div>
    </div>
  );
};
