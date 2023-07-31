import { format } from "date-fns";
import { Link } from "react-router-dom";
import { EnumData } from "./enumData";

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
    Cell: (tableProps) => (
      <span>
        <Link to="/post">
          <i class="btn-see far fa-eye"></i>
        </Link>
        <Link to="/analysic">
          <i class="btn-see fas fa-chart-line"></i>
        </Link>
      </span>
    ),
  },
];
