import React from "react";
import "../css/HeaderContainer.css";

export default function HeaderContainer({ children }) {
  return (
    <div className="header-container">
      {children}
      <label className="user-text">{}이의 편지함</label>
    </div>
  );
}
