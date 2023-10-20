import { Avatar } from "@mui/material";
import React from "react";
import avatar from "../../assets/avatar.jpeg";
import bg from "../../assets/background.jpeg";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar-recent-item">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={bg} alt="" />
        <Avatar src={avatar} className="sidebar-avatar" />
        <h4>Abhay Sharma</h4>
        <h5>abhaysharma.developer@gmail.com</h5>

        <div className="sidebar-stats">
          <div className="sidebar-stat">
            <p>Who's viewed your profile :</p>
            <p className="sidebar-stat-number">42</p>
          </div>
          <div className="sidebar-stat">
            <p>Connections :</p>
            <p className="sidebar-stat-number">632</p>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
