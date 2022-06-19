import React from "react";
import "./addButton.css";

const addButton1 = ({ children }) => {
  return (
    <div className="btn-wrapper">
      <a className="btn">{children}</a>
    </div>
  );
};

export default addButton1;
