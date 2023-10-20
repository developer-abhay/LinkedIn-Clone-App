import React from "react";

function InputOption({ Icon, title, color }) {
  return (
    <div className="feed-option">
      <Icon className="feed-icon" style={{ color: color }} />
      <h3>{title}</h3>
    </div>
  );
}

export default InputOption;
