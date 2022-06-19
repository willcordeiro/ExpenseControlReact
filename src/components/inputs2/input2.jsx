import AddButton1 from "../AddButton/addButton";
import "../inputs2/input2.css";
import NewDebts from "./hook/newDebts";
import React, { useState, useEffect } from "react";
import getDebts from "./hook/getDebts1";

function debtsNew(newDebts) {
  NewDebts(newDebts);
}

const InputDebts = () => {
  const [debts11, setDebts11] = useState();

  const [Getdebts11, setGetBalance11] = useState([{}]);

  async function fetchdebts() {
    await getDebts()
      .then((res) => {
        return res.data;
      })
      .then(
        (data) => {
          let debtsDATA = JSON.parse(data);
          setGetBalance11(debtsDATA);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetchdebts();
  }, [Getdebts11]);

  return (
    <div>
      <label className="label1">Debts</label>
      <input
        id="debts1"
        type="number"
        className="inputText"
        placeholder="insert your Debts here"
        onChange={(e) => setDebts11(e.target.value)}
      ></input>

      <button className="button" onClick={() => debtsNew(debts11)}>
        <AddButton1>add</AddButton1>
      </button>
      <div className="scrollBar">
        {Getdebts11.map((debts, index) => (
          <div className="parent" key={index}>
            <h5 className="child number">{debts.currentDebts}</h5>
            <div className="btn-wrapper child">
              <a
                href={"http://localhost:4000/api/debts/" + debts.id}
                className="btnRemove"
              >
                X
              </a>
            </div>

            <a
              href={"http://localhost:4000/api/debtsPaid/" + debts.id}
              className="btnPaid"
            >
              pay it
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputDebts;
