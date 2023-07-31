import React, { useEffect, useMemo, useState } from "react";
import { Header } from "../../components/header/Header";
import { enGB, vi } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

import "./analysicitem.css";
import avatarImg from "../../assets/img/avatar.png";
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import { Link } from "react-router-dom";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// json
import { donateUser } from "../../assets/JsonData/donateUser";
import Select from "react-select";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useFilters,
} from "react-table";
import donateUserJson from "../../assets/JsonData/userData.json";
import { COLUMNSTATEMENT } from "../../assets/JsonData/ColumnStatement";
import { Filter } from "./Filter";

/**
 * @author
 * @function AnalysicStatement
 **/

export const AnalysicStatement = (props) => {
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
  const optionPages = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];
  const optionType = [
    { value: "", label: "Tất cả" },
    { value: "mot lan", label: "Một lần" },
    { value: "hang thang", label: "Hàng tháng" },
  ];
  const optionMethod = [
    { value: "", label: "Tất cả" },
    { value: "Momo", label: "MoMo" },
    { value: "Zalo Pay", label: "Zalo Pay" },
    { value: "Bank", label: "Ngân hàng" },
  ];

  const [valueState, setValueState] = useState("");
  const [valueYear, setValueYear] = useState("");
  const [method, setMethod] = useState("");
  const handler = (event) => {
    const value = event.value;
    setValueState(value);
    var month = valueState.length == 1 ? "0" + valueState : valueState;
    console.log(month);
    setGlobalFilter(valueYear + "-" + month);
  };
  const handleYear = (e) => {
    setValueYear(e.value);

    var month = valueState.length == 1 ? "0" + valueState : valueState;
    console.log(month);
    setGlobalFilter(e.value + "-" + month);
  };
  const handleDate = (e) => {
    setDate(e.value);
  };

  const handleMethod = (e) => {
    setMethod(e.value);
    setGlobalFilter(e.value);
  };
  const handleType = (e) => {
    setGlobalFilter(e.value);
  };
  const columns = useMemo(() => COLUMNSTATEMENT, []);
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
  const notify = () => {
    if (valueState != "" && valueYear != "") {
      toast.success("🎄 Đã tải bản sao kê về máy", {
        position: "top-right",
        autoClose: 5222,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        width: "500px",
      });
    } else {
      toast.error("Vui lòng chọn tháng và năm!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const errorDownload = () => {
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [date, setDate] = useState();
  useEffect(() => {
    var localDate = new Date(date);
    var xx = localDate.toLocaleDateString("en-US");
    if (xx === "Invalid Date") {
      xx = "";
    }
    setGlobalFilter(xx || "");
    console.log("binnnnnnnnnnnnn");
    console.log(xx);
  }, [date]);

  const handleDeleteDate = () => {
    setDate("");
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
              {/* <div className="option">
                <a className="detail-btn" href="#">
                  Xem chi tiết
                </a>
                <a className="save-btn" href="#">
                  Lưu lại
                </a>
              </div> */}

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
                {/* <div className="tab-btn">
                  <Link to="/achievement">Thành quả</Link>
                </div>{" "} */}
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
                  <div class="recentOrders user-donate">
                    <div className="statement__header">
                      <div className="option">
                        <div className="month-year active">
                          <Select
                            placeholder="Chọn năm"
                            className="honghong month"
                            options={options2}
                            onChange={handleYear}
                          />
                          <Select
                            placeholder="Chọn tháng"
                            className="honghong year"
                            options={options}
                            onChange={handler}
                          />
                        </div>
                        {/* <button onClick={notify}>Notify!</button> */}{" "}
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

                      <a href="#" onClick={notify} class="btn">
                        Tải bản sao kê
                      </a>
                    </div>
                    <table {...getTableProps()} className="statement">
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
                                var x1 = localDate.toLocaleDateString("en-US");
                                var localDate1 = new Date(cell.value);
                                var x2 = localDate1.toLocaleDateString("en-US");

                                if (true) {
                                  if (cell.column.id === "avatar") {
                                    return (
                                      <td width="60px" {...cell.getCellProps()}>
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
    </div>
  );
};
