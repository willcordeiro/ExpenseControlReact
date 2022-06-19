import React from "react";
import { useHistory } from "react-router-dom";

const BankButton = ({ children }) => {
  let history = useHistory();

  function handleClick() {
    history.push("/bankInstatement");
  }

  return (
    <div>
      <button className="btnResult" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default BankButton;
