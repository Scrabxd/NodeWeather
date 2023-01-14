import React, { useState, useEffect } from "react";
import "./index.scss";
import axios from "axios";
import FiltersCompanies from "./Components/FiltersCompanies";
import CompaniesDesk from "./Components/CompaniesDesk";
import { FiltersDesktop } from "./Components/FiltersDesktop";
import Box from "@mui/material/Box";

export default function index() {
  const [datas, setData] = useState([]);
  function handleAction(event) {
    setData(event);
  }
  return (
    <div className="profile-container">
      <div className="appbar">
        <div className="FilterMobile">
          <FiltersCompanies onAction={handleAction}></FiltersCompanies>
        </div>
      </div>
      <div className="components-container">
        <CompaniesDesk filt={datas} />
        <FiltersDesktop onApplyFilters={handleAction} />
      </div>
      <div className="navbar"></div>
    </div>
  );
}
