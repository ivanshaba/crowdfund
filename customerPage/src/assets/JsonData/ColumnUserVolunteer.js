import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Hạng",
    Footer: "username",
    accessor: "id",
    Cell: (tableProps) => (
      <span className={tableProps.row.original.id < 4 ? "rank top" : "rank"}>
        {tableProps.row.original.id}{" "}
      </span>
    ),
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
    Header: "Ngày tham gia",
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
    Header: "Số tháng",
    Footer: "count",
    accessor: "count",
  },
  {
    Header: "Hạng",
    Footer: "hang",
    accessor: "hang",
    Cell: (tableProps) => (
      <span className={"hang " + tableProps.row.original.hang}>
        {tableProps.row.original.hang === "kimcuong"
          ? "Kim cương"
          : tableProps.row.original.hang === "hangvang"
          ? "Vàng"
          : tableProps.row.original.hang === "hangbac"
          ? "Bạc"
          : tableProps.row.original.hang === "hangdong"
          ? "Đồng"
          : ""}
      </span>
    ),
  },
  {
    Header: "Tổng điểm",
    Footer: "diem",
    accessor: "diem",
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
