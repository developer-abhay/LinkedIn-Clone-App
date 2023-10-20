import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InputOption from "./InputOption";
import Post from "./Post";
// import firebase from "firebase";
// import { db } from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const publishPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input">
          <CreateIcon className="feed-icon" />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={(e) => publishPost(e)}>
              Send
            </button>
          </form>
        </div>
        <div className="feed-options">
          <InputOption title="Photo" Icon={PhotoIcon} color="#6e96cb" />
          <InputOption title="Video" Icon={SmartDisplayIcon} color="#d6de67" />
          <InputOption title="Event" Icon={EventIcon} color="#c8a4de" />
          <InputOption
            title="Write Article"
            Icon={NewspaperIcon}
            color="#e37f7f"
          />
        </div>
      </div>

      {posts.map(({ name, description, photoUrl, message }) => {
        return (
          <Post
            name={name}
            description={description}
            photoUrl={photoUrl}
            message={message}
          />
        );
      })}
    </div>
  );
}

export default Feed;
