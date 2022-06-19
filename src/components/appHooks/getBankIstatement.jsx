function BankStatement() {
  fetch("http://localhost:4000/api/bankStatement")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);

      let bankStatement = JSON.parse(json);

      bankStatement.forEach((bankStatement1) => {
        let balance = bankStatement1.currentBalance;
        let debtsPaid = bankStatement1.debtsPaid;
        let PaymentsReceived = bankStatement1.paymentReceived;
        let spended = bankStatement1.spended;
        let activeDebts = bankStatement1.activeDebts;

        document.getElementById("balance11").innerHTML = balance;
        document.getElementById("activeDebts11").innerHTML = activeDebts;
        document.getElementById("debtsPaid11").innerHTML = debtsPaid;
        document.getElementById("PaymentsReceived11").innerHTML =
          PaymentsReceived;
        document.getElementById("spended11").innerHTML = spended;
      });
    });
}

export default BankStatement;
