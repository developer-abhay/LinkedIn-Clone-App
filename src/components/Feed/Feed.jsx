import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const publishPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
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

      <FlipMove>
        {posts.map(({ id, data: { name, description, photoUrl, message } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              photoUrl={photoUrl}
              message={message}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
