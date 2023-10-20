import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import HeaderOption from "../HeaderOptions/HeaderOption";
import avatar from "../../assets/avatar.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <LinkedInIcon className="logo" style={{ fontSize: "40px" }} />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />

        <HeaderOption avatar={avatar} title="Me" />
      </div>
    </div>
  );
}

export default Header;
