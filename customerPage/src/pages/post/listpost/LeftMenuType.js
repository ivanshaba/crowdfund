import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { listOrganizationJson, listTypeJson } from "./listItemJson";
import "./leftMenuType.scss";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";

const LinkItem = ({ type, name, onClick }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/listpost/${type}`}
      onClick={onClick}
      className={pathname.split("/")[2] === type ? "active" : ""}
    >
      {name}
    </Link>
  );
};

const LeftMenuType = () => {
  const [typeShow, setTypeShow] = useState(true);
  const [organShow, setOrganShow] = useState(true);

  const handleClose = () => {
    if (window.innerWidth < 800) {
      setTypeShow(false);
      setOrganShow(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      setTypeShow(false);
      setOrganShow(false);
    }
  }, []);
  return (
    <div className="left">
      <div
        onClick={() => setTypeShow((show) => !show)}
        className="session-title"
      >
        <i class="bx bxs-category-alt"></i>
        Loại thiện nguyện
        <i
          class={`btn-down fa-solid fa-angle-down ${typeShow && "active"}`}
        ></i>
      </div>
      <div className={`session-list ${typeShow && "active"}`}>
        {listTypeJson.map((data, ind) => {
          return (
            <LinkItem
              onClick={handleClose}
              name={data.name}
              key={`${data.name} ind`}
              type={data.type}
            />
          );
        })}
      </div>

      <div
        onClick={() => setOrganShow((show) => !show)}
        className="session-title"
      >
        <i class="far fa-building"></i>
        Tổ chức từ thiện
        <i
          class={`btn-down fa-solid fa-angle-down ${organShow && "active"}`}
        ></i>
      </div>
      <div className={`session-list ${organShow && "active"}`}>
        {listOrganizationJson.map((data, ind) => {
          return (
            <LinkItem
              onClick={handleClose}
              name={data.name}
              key={`${data.name} ind`}
              type={data.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftMenuType;
