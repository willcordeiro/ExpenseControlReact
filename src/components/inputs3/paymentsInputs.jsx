import "./paymentsInput.css";
import AddButton1 from "../AddButton/addButton";
import React, { useState, useEffect } from "react";
import paymentsNew from "./hook/newPayments";
import getPayments from "./hook/getPayments1";

function payments(payments11) {
  paymentsNew(payments11);
}

const PaymentsInput = () => {
  const [payments11, setPayments11] = useState();

  const [GetPayments11, setGetBalance11] = useState([{}]);

  async function fetchPayments() {
    await getPayments()
      .then((res) => {
        return res.data;
      })
      .then(
        (data) => {
          let PaymentsDATA = JSON.parse(data);
          setGetBalance11(PaymentsDATA);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetchPayments();
  }, [GetPayments11]);

  return (
    <div>
      <label className="label1 ">Payments</label>
      <input
        id="payments1"
        type="number"
        className="inputText1"
        placeholder="insert your Payments here"
        onChange={(e) => setPayments11(e.target.value)}
      ></input>
      <button className="button" onClick={() => payments(payments11)}>
        <AddButton1>add</AddButton1>
      </button>
      <div className="scrollBar">
        {GetPayments11.map((Payments, index) => (
          <div className="parent" key={index}>
            <h5 className="child number">{Payments.currentPayments}</h5>
            <div className="btn-wrapper child">
              <a
                href={"http://localhost:4000/api/payments/" + Payments.id}
                className="btnRemove"
              >
                X
              </a>
            </div>
            <a
              href={"http://localhost:4000/api/paymentsReceived/" + Payments.id}
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

export default PaymentsInput;
