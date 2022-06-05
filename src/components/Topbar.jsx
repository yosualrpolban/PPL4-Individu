import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./Topbar.css";
import logopln from "./../assets/img/logo-pln.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={logopln} alt="logo" className="logopln" />
          <span className="logo">FP PLN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
