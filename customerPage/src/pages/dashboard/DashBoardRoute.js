import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NoSupport } from "../homePage/NoSupport";
import { DashBoard } from "./DashBoard";
import { DashBoardChuongTrinh } from "./DashBoardChuongTrinh";
import { DashBoardChuongTrinhAdmin } from "./DashBoardChuongTrinhAdmin";
import { DashBoardMonthly } from "./DashBoardMonthly";
import { DashBoardUser } from "./DashBoardUser";
import { DashBoardVolunteer } from "./DashBoardVolunteer";
import { DashBoardVolunteerAdmin } from "./DashBoardVolunteerAdmin";

const DashBoardRoute = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1400) {
      setIsMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth < 1400) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isMobile ? (
    <NoSupport />
  ) : (
    <Routes>
      <Route path="" element={<DashBoard />} />
      <Route path="/donator" element={<DashBoardUser />} />
      <Route path="/chuongtrinh" element={<DashBoardChuongTrinh />} />
      <Route path="/monthly" element={<DashBoardMonthly />} />
      <Route path="/volunteer" element={<DashBoardVolunteer />} />
      <Route path="/postadmin" element={<DashBoardChuongTrinhAdmin />} />
      <Route path="/checkuser" element={<DashBoardVolunteerAdmin />} />
      <Route path="*" element={<div>hong</div>}></Route>
    </Routes>
  );
};

export default DashBoardRoute;
