import React, { useState, useEffect } from "react";
import "./inputs.css";
import AddButton1 from "../AddButton/addButton";
import newBalance from "./hook/newBalance";
import getBalance from "./hook/getBalance";

function balanceNew(balance11) {
  newBalance(balance11);
}

const Input = () => {
  const [balance11, setBalance11] = useState();

  const [Getbalance11, setGetBalance11] = useState([{}]);

  async function fetchBalance() {
    await getBalance()
      .then((res) => {
        return res.data;
      })
      .then(
        (data) => {
          let balanceDATA = JSON.parse(data);
          setGetBalance11(balanceDATA);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetchBalance();
  }, [Getbalance11]);

  return (
    <>
      <div className="input-group">
        <label className="label1 ">Balance</label>
        <input
          id="balance11"
          type="number"
          className="inputText"
          placeholder="insert your balance here"
          onChange={(e) => setBalance11(e.target.value)}
        ></input>

        <button className="button" onClick={() => balanceNew(balance11)}>
          <AddButton1>add</AddButton1>
        </button>
        <div className="scrollBar">
          {Getbalance11.map((balance, index) => (
            <div className="parent" key={index}>
              <h5 className="child number">{balance.currentBalance}</h5>
              <div className="btn-wrapper child">
                <a
                  href={"http://localhost:4000/api/balance/" + balance.id}
                  className="btnRemove"
                >
                  X
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Input;
