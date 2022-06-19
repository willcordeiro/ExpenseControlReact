import "./App.css";
import Header from "./components/header/header";
import Input from "./components/inputs/inputs";
import InputDebts from "./components/inputs2/input2";
import InputPayments from "./components/inputs3/paymentsInputs";
import InputSpending from "./components/input4/spendingInput";
import ResultButton from "./components/resultButton/resultButton";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect } from "react";
import BankButton from "./components/bankInstatement/buttonBank";
import GeneratePDF from "./components/appHooks/generatePDF";
import GetBankistatement from "./components/appHooks/getBankIstatement";

function PDF() {
  GeneratePDF();
}

function App() {
  useEffect(() => {
    GetBankistatement();
  }, []);

  return (
    <Router>
      <div className="background">
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <br></br>
              <div className="container">
                <Header />
                <Input />
                <InputSpending />
                <InputDebts />
                <InputPayments />
                <br></br>

                <div>
                  <a
                    className="button2 child"
                    href="http://localhost:4000/api/bankStatement1"
                  >
                    <BankButton>BANK STATEMENT</BankButton>
                  </a>
                </div>
                <br></br>
              </div>
            </div>
          )}
        />
        <Route
          path="/bankStatement"
          exact
          render={() => (
            <div className="background">
              <br></br>
              <div className="container">
                <div id="bankStatement" className="align ">
                  <h1 className="header">BANK STATEMENT</h1>
                  <br></br>
                  <div className="result">
                    <p className="child">Current Balance:</p>
                    <p id="balance11" className="child"></p>
                  </div>
                  <br></br>
                  <div className="result ">
                    <p className="child"> Active Debts:</p>
                    <p id="activeDebts11" className="child"></p>
                  </div>
                  <br></br>
                  <div className="result ">
                    <p className="child">Debts Paid:</p>
                    <p id="debtsPaid11" className="child"></p>
                  </div>
                  <br></br>
                  <div className="result">
                    <p className="child">Payment Received: </p>
                    <p id="PaymentsReceived11" className="child"></p>
                  </div>
                  <br></br>
                  <div className="result">
                    <p className="child">spent:</p>
                    <p id="spended11" className="child"></p>
                  </div>
                  <br></br>
                </div>
                <div>
                  <a className="button2 child" href="http://localhost:3000/">
                    <ResultButton>Back</ResultButton>
                  </a>
                  <a onClick={PDF} className="button2 child">
                    <ResultButton>Download PDF</ResultButton>
                  </a>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
