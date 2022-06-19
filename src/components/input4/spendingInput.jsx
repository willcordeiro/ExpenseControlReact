import AddButton1 from "../AddButton/addButton";
import React, { useState, useEffect } from "react";
import getSpending from "./hook/getSpending1";
import newSpending from "./hook/spendingNew";

function spending(spending) {
  newSpending(spending);
}

const SpendingInput = () => {
  const [Spending11, setSpending11] = useState();

  const [GetSpending11, setGetBalance11] = useState([{}]);

  async function fetchSpending() {
    await getSpending()
      .then((res) => {
        return res.data;
      })
      .then(
        (data) => {
          let SpendingDATA = JSON.parse(data);
          setGetBalance11(SpendingDATA);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetchSpending();
  }, [GetSpending11]);

  return (
    <div>
      <label className="label1 ">Spending</label>
      <input
        type="number"
        className="inputText"
        placeholder="insert your spending here"
        id="spending1"
        onChange={(e) => setSpending11(e.target.value)}
      ></input>
      <button className="button" onClick={() => spending(Spending11)}>
        <AddButton1>add</AddButton1>
      </button>
      <div className="scrollBar">
        {GetSpending11.map((Spending, index) => (
          <div className="parent" key={index}>
            <h5 className="child number">{Spending.currentsPending}</h5>
            <div className="btn-wrapper child">
              <a
                href={"http://localhost:4000/api/Spending/" + Spending.id}
                className="btnRemove"
              >
                X
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendingInput;
