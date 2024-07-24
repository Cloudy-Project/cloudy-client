import React from "react";
import "../css/HeaderContainer.css";

export default function HeaderContainer({ username }) {
  return (
    <div className="header-container">
      <label className="user-text">{username}이의 편지함</label>
    </div>
  );
}
