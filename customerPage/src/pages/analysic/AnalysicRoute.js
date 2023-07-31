import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaqPage } from "../homePage/FaqPage";
import { NoSupport } from "../homePage/NoSupport";
import { AnaLysicItem } from "./AnalysicItem";
import { AnalysicResult } from "./AnalysicResult";
import { AnalysicStatement } from "./AnalysicStatement";
import { AnalysicUser } from "./AnalysicUser";

const AnalysicRoute = () => {
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
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/analysic" element={<AnaLysicItem />} />
      <Route path="/user" element={<AnalysicUser />} />
      <Route path="/statement" element={<AnalysicStatement />} />
      <Route path="/achievement" element={<AnalysicResult />} />
    </Routes>
  );
};

export default AnalysicRoute;
