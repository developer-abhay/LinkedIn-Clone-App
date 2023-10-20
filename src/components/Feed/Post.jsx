import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import InputOption from "./InputOption";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl} />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <MoreHorizIcon className="post-info-icon" />
      </div>
      <div className="post-body">
        <p className="message">{message}</p>
      </div>

      <div className="post-buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
