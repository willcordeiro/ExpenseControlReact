import React from "react";
import "./resultButton.css";

const resultButton = ({ children }) => {
  return (
    <div>
      <a className="btnResult">{children}</a>
    </div>
  );
};

export default resultButton;
