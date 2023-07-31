import React from "react";
import { Link } from "react-router-dom";
import "./itemhomepage.css";
import { EnumData, owner } from "../../assets/JsonData/enumData";
import SkeletonLoading from "../loading/SkeletonLoading";

/**
 * @author
 * @function ItemHomePage
 **/

export const ItemHomePage = ({ isLoading, ...props }) => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!isLoading && (
        <div className="donate-item">
          <Link to="/post" onClick={handleToTop}>
            <div className="image">
              <img src={props.image} alt="" />
            </div>
          </Link>
          <div className="donate-item__body">
            <div className="pop-info time-remaining">
              {"còn " + props.time + " ngày"}
            </div>
            <div className="pop-info project">{props.type}</div>
            <div className="pop-info owner">{owner[props.owner]}</div>
            <div className="title">{props.title}</div>
            <div className="desc" style={{ display: "none" }}>
              {props.desc}
            </div>
            <div className="below-desc">
              <div className="status-bar item2">
                <span></span>
              </div>
              {/* <div className="status">{props.time}</div> */}
            </div>
            <div className="donate-info">
              <div className="target">
                <div className="target__txt">Mục tiêu</div>
                <div className="target__detail">
                  <span> {props.raised} </span>/ {props.goal}
                </div>
              </div>

              <Link to="/post" onClick={handleToTop}>
                <div className="btn-donate">
                  <button className="zoom-anim">Ủng hộ</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="donate-item">
          <Link to="/post" onClick={handleToTop}>
            <div className="image">
              <SkeletonLoading rounded="4px" height="200px" />
            </div>
          </Link>
          <div className="donate-item__body">
            <div className="tag-items">
              <SkeletonLoading width="100px" height="30px" rounded="14px" />
              <SkeletonLoading width="100px" height="30px" rounded="14px" />
              <SkeletonLoading width="100px" height="30px" rounded="14px" />
            </div>
            <div className="title">
              <SkeletonLoading width="100%" height="50px" rounded="14px" />
            </div>

            <div className="below-desc">
              {/* <div className="status">{props.time}</div> */}
            </div>
            <div className="donate-info">
              <div className="target">
                <SkeletonLoading width="160px" height="40px" rounded="14px" />
              </div>

              <Link to="/post" onClick={handleToTop}>
                <SkeletonLoading width="100px" height="50px" rounded="20px" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
